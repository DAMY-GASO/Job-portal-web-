import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Users, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-damy-primary via-damy-secondary to-damy-primary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-damy-accent font-semibold">🔥</span>
              <span className="text-sm">Jukwaa #1 la Ajira Tanzania</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Tafuta au Tangaza Ajira <br />
              <span className="text-damy-accent">Kwa Urahisi na Usalama</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Jukwaa la kidijitali la kuunganisha waajiri na watafuta kazi nchini Tanzania. 
              Pata kazi bora au pata wafanyakazi wanaohitajika.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register" className="btn-primary flex items-center justify-center gap-2">
                Anza Sasa - Bure
                <ArrowRight size={20} />
              </Link>
              <Link to="/login" className="btn-outline border-white text-white hover:bg-white hover:text-damy-primary">
                Waajiri Ingia Hapa
              </Link>
            </div>
            
            <div className="flex items-center gap-8 mt-8 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Users size={20} className="text-damy-accent" />
                <span>Watumiaji 2,500+</span>
              </div>
              <div className="flex items-center gap-2">
                <Search size={20} className="text-damy-accent" />
                <span>Kazi 500+ Zilizotangazwa</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={20} className="text-damy-accent" />
                <span>Waajiri 100+</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-damy-accent mb-2">1,500+</div>
              <div className="text-sm text-gray-300">Maombi Yaliyotumwa</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-sm text-gray-300">Kuridhika kwa Watumiaji</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">Msaada kwa Watumiaji</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-sm text-gray-300">Usalama wa Data</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
