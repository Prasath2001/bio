import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      period: 'Feb 2025',
      title: 'Associate Solutions Engineer',
      company: 'MiQ Digital USA Inc.',
      location: 'New York City, USA',
      description: 'Building custom solutions, scoping product alphas and driving product innovation leveraging AI/ML and Data Engineering.',
      skills: ['AI/ML', 'Data Engineering', 'Product Innovation', 'Custom Solutions'],
      current: true
    },
    {
      period: 'Jun 2024 - July 2024',
      title: 'Product Intern',
      company: 'MiQ Digital USA Inc.',
      location: 'New York City, USA',
      description: 'Worked with AdTech product owners to define Gaming GTM strategy. Automated Programmatic + Social DSP data integration pipelines to support data-backed pitching and continuous channel evaluation.',
      skills: ['AdTech', 'Data Integration', 'Analytics', 'GTM Strategy']
    },
    {
      period: 'Sept 2023 - Apr 2024',
      title: 'Research Assistant',
      company: 'The Pennsylvania State University',
      location: 'Pennsylvania, USA',
      description: 'Developed a RAG based teaching assistant chatbot in assisting faculties in providing timely and relevant information for the courses.',
      skills: ['RAG', 'Chatbot Development', 'NLP', 'Educational Technology']
    },
    {
      period: 'Dec 2022 - Jun 2023',
      title: 'Machine Learning Engineer Intern',
      company: 'Growfin.ai',
      location: 'Chennai, India',
      description: 'Designed and deployed an ML system for capturing remittance information that helps to expedite the bulk invoice to cash flow process and increase the productivity of collection agents by 50%.',
      skills: ['Computer Vision', 'Transfer Learning', 'QA Models', 'DONUT', 'Prompt Engineering']
    },
    {
      period: 'May 2021 - Nov 2021',
      title: 'AI Research Intern',
      company: 'AI Institute at University Of South Carolina',
      location: 'South Carolina, USA',
      description: 'Conducted research to generalize language agent actions in TextWorld CommonSense upgrading the existing AI\'s abilities to be robust to new environments and resources by 7%.',
      skills: ['NLP', 'Language Agents', 'Research', 'TextWorld', 'AI Robustness']
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-pink-400 to-orange-400 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg hidden md:block z-10"></div>

                <div className="md:ml-20">
                  <div className="group bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 hover:border-purple-300/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-100/30">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-2 text-purple-600 mb-2">
                          <Calendar size={16} />
                          <span className="text-sm font-medium">{exp.period}</span>
                          {exp.current && (
                            <span className="px-2 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 text-xs rounded-full border border-green-300/50">
                              Current
                            </span>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-pink-600 mb-2">
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600 text-sm">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 text-xs bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full border border-purple-300/50 hover:scale-105 transition-transform duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;