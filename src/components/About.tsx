import React, { useEffect, useRef, useState } from 'react';
import { Code, Brain, Globe, Heart } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const interests = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Applied ML, Deep Learning, NLP, Computer Vision, LLMs, Generative AI',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      title: 'Data Engineering',
      description: 'Data Analytics, Databricks, Graph models, Knowledge graphs, Learning with limited data',
      color: 'from-pink-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Full-Stack Development',
      description: 'Cloud solutions - Deployment and Monitoring',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Heart,
      title: 'Personal Interests',
      description: 'Tamil literature, Ethics in Tech, Open-Source, Math, Economics, Cinema',
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-br from-purple-50/50 to-pink-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-purple-200/50 shadow-xl shadow-purple-100/20">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-base">
                  Hello 👋, I'm Prasath Murugesan. Born and raised in India, I hold two master's degrees - 
                  one in Data Science from PSG College of Technology, Coimbatore, and another in Data Analytics 
                  from Pennsylvania State University.
                </p>
                
                <p className="text-base">
                  I'm a consultant helping product teams build and integrate AI solutions into their roadmap, 
                  moving from prototype to production. My experience spans FinTech, AdTech, Job market, 
                  Media & Social Content, Software Development, and Elections.
                </p>
                
                <p className="text-base">
                  Currently teaching myself cloud solutions and full-stack web development. 
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-medium"> Trying to be a generalist in a specialized world!</span>
                </p>
              </div>
            </div>

            {/* Tamil Quote */}
            <div className="bg-gradient-to-r from-purple-100/70 to-pink-100/70 backdrop-blur-xl rounded-2xl p-6 border border-purple-200/50">
              <div className="text-center space-y-2 text-gray-700 italic">
                <p className="text-base">உண்பது நாழி, உடுப்பது இரண்டு</p>
                <p className="text-base">பிறவும் எல்லாம் ஓரோக் கும்மே,</p>
                <p className="text-base">செல்வத்துப் பயனே ஈதல்</p>
                <p className="text-base">துய்ப்பேம் எனினே தப்புந பலவே</p>
                <p className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-base font-medium">-நக்கீரனார் (புறநானூறு)</p>
              </div>
            </div>
          </div>

          {/* Interests Grid */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {interests.map((interest, index) => {
                const Icon = interest.icon;
                return (
                  <div
                    key={index}
                    className={`group bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 hover:border-purple-300/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-100/30 ${
                      isVisible ? 'animate-fade-in-up' : ''
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${interest.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-base font-semibold text-gray-800 mb-2 group-hover:text-purple-700 transition-colors">
                      {interest.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;