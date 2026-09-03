import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-damy-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold mb-4">
              <Briefcase className="text-damy-accent" size={32} />
              <span>Job<span className="text-damy-accent">Portal</span></span>
            </Link>
            <p className="text-gray-400 mb-4">
              Jukwaa la kidijitali la kuunganisha waajiri na watafuta kazi nchini Tanzania.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-damy-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-damy-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-damy-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-damy-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Viungo vya Haraka</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-damy-accent transition-colors">Vipengele</a></li>
              <li><a href="#how-it-works" className="hover:text-damy-accent transition-colors">Jinsi Inavyofanya Kazi</a></li>
              <li><a href="#testimonials" className="hover:text-damy-accent transition-colors">Maoni</a></li>
              <li><Link to="/login" className="hover:text-damy-accent transition-colors">Ingia</Link></li>
              <li><Link to="/register" className="hover:text-damy-accent transition-colors">Jisajili</Link></li>
            </ul>
          </div>

          {/* For Users */}
          <div>
            <h4 className="text-lg font-bold mb-4">Kwa Watumiaji</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-damy-accent transition-colors">Mwongozo wa Mwajiri</a></li>
              <li><a href="#" className="hover:text-damy-accent transition-colors">Mwongozo wa Mtafuta Kazi</a></li>
              <li><a href="#" className="hover:text-damy-accent transition-colors">Maswali Yanayoulizwa</a></li>
              <li><a href="#" className="hover:text-damy-accent transition-colors">Masharti na Sera</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Wasiliana Nasi</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-damy-accent mt-1" />
                <span>Dar es Salaam, Tanzania</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-damy-accent mt-1" />
                <span>+255 712 345 678</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-damy-accent mt-1" />
                <span>info@jobportal.co.tz</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2026 Job Portal. Haki zote zimehifadhiwa.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-damy-accent transition-colors">Sera ya Faragha</a>
            <a href="#" className="hover:text-damy-accent transition-colors">Masharti</a>
            <a href="#" className="hover:text-damy-accent transition-colors">Msaada</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
