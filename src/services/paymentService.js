import api from './api';

// Mock data
const MOCK_PAYMENTS = [
  {
    id: 1,
    user_id: 2,
    user_name: 'TechCo HR',
    amount: 50000,
    package: 'Featured Job',
    phone: '+255 712 345 678',
    reference: 'PAY-2026-001',
    status: 'completed',
    created_at: '2026-09-01',
    completed_at: '2026-09-01'
  },
  {
    id: 2,
    user_id: 3,
    user_name: 'Finance Plus Ltd',
    amount: 25000,
    package: 'Job Posting',
    phone: '+255 765 432 100',
    reference: 'PAY-2026-002',
    status: 'pending',
    created_at: '2026-09-03',
    completed_at: null
  }
];

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

class PaymentService {
  // Packages
  getPackages() {
    return {
      data: [
        {
          id: 1,
          name: 'Job Posting',
          description: 'Tangaza nafasi moja ya kazi',
          price: 25000,
          features: ['Tangazo moja la kazi', 'Inaonekana kwa siku 30', 'Waombaji 50+']
        },
        {
          id: 2,
          name: 'Featured Job',
          description: 'Tangaza nafasi yenye mwonekano wa juu',
          price: 50000,
          features: ['Tangazo lililonakshiwa', 'Inaonekana juu ya orodha', 'Waombaji 100+', 'Muda wa siku 30']
        },
        {
          id: 3,
          name: 'Premium Package',
          description: 'Matangazo 5 ya kazi na vipengele vyote',
          price: 200000,
          features: ['Matangazo 5', 'Yote yanawakilishwa', 'Waombaji 200+', 'Msaada wa haraka']
        },
        {
          id: 4,
          name: 'Application Pack',
          description: 'Maombi 10 ya kazi kwa mtafuta kazi',
          price: 15000,
          features: ['Maombi 10 ya kazi', 'Inatumika kwa muda wa mwezi 1']
        }
      ]
    };
  }

  // Initialize payment
  async initializePayment(packageId, phone) {
    await delay(800);
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (!user) {
      throw new Error('Tafadhali ingia kwanza');
    }
    
    const packages = this.getPackages();
    const pkg = packages.data.find(p => p.id === parseInt(packageId));
    if (!pkg) {
      throw new Error('Package haijapatikana');
    }
    
    const reference = `PAY-${Date.now()}`;
    
    const payment = {
      id: MOCK_PAYMENTS.length + 1,
      user_id: user.id,
      user_name: user.name,
      amount: pkg.price,
      package: pkg.name,
      phone: phone,
      reference: reference,
      status: 'pending',
      created_at: new Date().toISOString().split('T')[0],
      completed_at: null
    };
    
    MOCK_PAYMENTS.push(payment);
    
    return {
      success: true,
      message: 'Ombi la malipo limepelekwa kwa simu yako',
      data: {
        payment_id: payment.id,
        reference: reference,
        amount: pkg.price,
        phone: phone,
        status: 'pending'
      }
    };
  }

  // Verify payment (MOCK - hii itaunganishwa na M-Pesa API baadae)
  async verifyPayment(reference) {
    await delay(600);
    const payment = MOCK_PAYMENTS.find(p => p.reference === reference);
    if (!payment) {
      throw new Error('Payment not found');
    }
    
    // Simulate payment verification - kwa mock, 90% inafanikiwa
    const random = Math.random();
    if (random < 0.9) {
      payment.status = 'completed';
      payment.completed_at = new Date().toISOString().split('T')[0];
      return {
        success: true,
        message: 'Malipo yamekamilika kwa mafanikio',
        data: payment
      };
    } else {
      payment.status = 'failed';
      return {
        success: false,
        message: 'Malipo yameshindikana. Tafadhali jaribu tena.',
        data: payment
      };
    }
  }

  // Get payment history
  async getPaymentHistory() {
    await delay(500);
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (!user) {
      throw new Error('Tafadhali ingia kwanza');
    }
    
    const payments = MOCK_PAYMENTS.filter(p => p.user_id === user.id);
    
    return {
      success: true,
      data: payments
    };
  }

  // Get all payments (Admin)
  async getAllPayments() {
    await delay(600);
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (!user || user.role !== 'admin') {
      throw new Error('Huna ruhusa ya kuona malipo yote');
    }
    
    return {
      success: true,
      data: MOCK_PAYMENTS,
      meta: {
        total: MOCK_PAYMENTS.length,
        total_amount: MOCK_PAYMENTS.reduce((sum, p) => sum + (p.status === 'completed' ? p.amount : 0), 0)
      }
    };
  }
}

export default new PaymentService();
