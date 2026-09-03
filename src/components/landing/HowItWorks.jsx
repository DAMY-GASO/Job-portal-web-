import React from 'react';
import { UserPlus, Search, Send, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: <UserPlus size={32} />,
      title: 'Jisajili Bure',
      description: 'Undaa akaunti yako kama mwajiri au mtafuta kazi. Inachukua dakika chache tu.'
    },
    {
      number: '02',
      icon: <Search size={32} />,
      title: 'Tafuta au Tangaza',
      description: 'Waajiri wanatangaza nafasi, watafuta kazi wanatafuta kazi zinazowafaa.'
    },
    {
      number: '03',
      icon: <Send size={32} />,
      title: 'Tuma Ombi',
      description: 'Tuma maombi yako kwa click moja. Waajiri wanaona maombi yako mara moja.'
    },
    {
      number: '04',
      icon: <CheckCircle size={32} />,
      title: 'Pata Kazi au Mfanyakazi',
      description: 'Kamilisha mchakato wa kuajiri na kupata kazi ndoto yako.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Jinsi <span className="text-damy-accent">Inavyofanya Kazi</span>
          </h2>
          <p className="section-subtitle">
            Hatua nne rahisi kutoka kujisajili hadi kupata kazi au mfanyakazi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[70%] w-[30%] h-0.5 bg-damy-accent/30"></div>
              )}
              
              <div className="card text-center relative">
                <div className="bg-damy-accent/10 text-damy-accent w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {step.number}
                </div>
                <div className="text-damy-accent mb-4 flex justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Banner */}
        <div className="mt-16 bg-gradient-to-r from-damy-primary to-damy-secondary rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-damy-accent">2,500+</div>
              <div className="text-sm text-gray-300">Watumiaji</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-400">500+</div>
              <div className="text-sm text-gray-300">Matangazo</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-400">1,500+</div>
              <div className="text-sm text-gray-300">Maombi</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-400">95%</div>
              <div className="text-sm text-gray-300">Kuridhika</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
