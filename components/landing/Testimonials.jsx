import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Juma A.',
      role: 'Mwajiri · Dar es Salaam',
      content: 'Nimepata wafanyakazi bora kupitia Job Portal. Mfumo ni rahisi kutumia na waombaji wengi wana sifa nzuri.',
      rating: 5,
      avatar: 'JA'
    },
    {
      name: 'Sarah M.',
      role: 'Mtafuta Kazi · Arusha',
      content: 'Nilipata kazi ndoto yangu ndani ya wiki moja tu! Job Portal ilinisaidia kuungana na waajiri wazuri.',
      rating: 5,
      avatar: 'SM'
    },
    {
      name: 'Peter K.',
      role: 'Mwajiri · Mwanza',
      content: 'Tumepata wafanyakazi 5 kwa mwezi mmoja kupitia Job Portal. Gharama ni nafuu na mchakato ni wa haraka.',
      rating: 4,
      avatar: 'PK'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Watu Wanasema <span className="text-damy-accent">Nini</span>?
          </h2>
          <p className="section-subtitle">
            Maoni kutoka kwa waajiri na watafuta kazi wanaotumia jukwaa letu.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card relative">
              <Quote className="absolute top-4 right-4 text-damy-accent/20" size={48} />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-damy-accent text-white flex items-center justify-center font-bold text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                  />
                ))}
              </div>
              
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
