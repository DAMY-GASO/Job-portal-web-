import React from 'react';
import { 
  UserPlus, Briefcase, FileCheck, 
  Shield, TrendingUp, Smartphone 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <UserPlus size={40} />,
      title: 'Usajili Rahisi',
      description: 'Jisajili kwa dakika chache kama mwajiri au mtafuta kazi. Hakuna gharama za awali.'
    },
    {
      icon: <Briefcase size={40} />,
      title: 'Matangazo ya Ajira',
      description: 'Waajiri wanaweza kupost, kuhariri, na kusimamia matangazo yao kwa urahisi.'
    },
    {
      icon: <FileCheck size={40} />,
      title: 'Maombi ya Kazi',
      description: 'Tuma maombi yako moja kwa moja kwenye matangazo unayopenda kwa click moja.'
    },
    {
      icon: <Shield size={40} />,
      title: 'Usalama wa Data',
      description: 'Data yako ni salama na inalindwa. Hakuna mtu mwingine anayeiona isipokuwa wewe.'
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'Mfumo wa Malipo',
      description: 'Kulipa kwa M-Pesa, TigoPesa, au Airtel Money. Rahisi na salama.'
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Inafanya Kazi Kwenye Simu',
      description: 'Jukwaa linafanya kazi kwenye simu zote na kompyuta. Tafuta kazi popote ulipo.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Kwanini Uchague <span className="text-damy-accent">Job Portal</span>?
          </h2>
          <p className="section-subtitle">
            Tumeunda jukwaa ambalo linakidhi mahitaji yako yote ya ajira kwa urahisi na usalama.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card group hover:border-damy-accent">
              <div className="text-damy-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
