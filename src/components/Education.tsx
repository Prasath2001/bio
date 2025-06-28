import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
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

  const education = [
    {
      period: '2023-2024',
      institution: 'The Pennsylvania State University',
      location: 'Pennsylvania, USA',
      degree: 'Master\'s in Data Analytics',
      specialization: 'Big Data Systems',
      description: 'I call this chapter பெரிய அடி (Big Step/Big Blow) - polysemous. Recipient of Chancellor\'s Scholarship & Warren V. Musser Scholarship.',
      achievements: ['Chancellor\'s Scholarship', 'Warren V. Musser Scholarship'],
      gpa: '3.8/4.0'
    },
    {
      period: '2018-2023',
      institution: 'PSG College Of Technology',
      location: 'Coimbatore, India',
      degree: 'Master\'s in Data Science',
      specialization: 'M.Sc Integrated',
      description: 'During this time, I was fortunate to meet mentors who shaped my perspectives on what a fruitful career is. I am grateful to Dr. R. Nadarajan and Shamshu Dharwez anna for guiding me since then.',
      achievements: ['Research Publications', 'Academic Excellence'],
      gpa: '8.78/10'
    },
    {
      period: '2012-2018',
      institution: 'Jawahar Higher Secondary School',
      location: 'Neyveli, India',
      degree: 'Higher Secondary Education',
      specialization: 'CBSE',
      description: 'I am grateful for the friendships that still continue to this day. To my parents, Sridhar, Sudarsan & Aswin.',
      achievements: ['Academic Excellence'],
      gpa: '92%'
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
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Education Cards */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 hover:border-purple-300/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-100/30">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left Column - Basic Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-2 text-purple-600 mb-3">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{edu.period}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-gray-600 text-sm mb-4">
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <BookOpen size={16} className="text-pink-600" />
                        <span className="text-pink-600 font-medium text-sm">GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  </div>

                  {/* Middle Column - Institution & Degree */}
                  <div className="lg:col-span-1">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors mb-2">
                      {edu.institution}
                    </h3>
                    
                    <div className="space-y-1 mb-4">
                      <p className="text-lg text-pink-600 font-medium">{edu.degree}</p>
                      <p className="text-gray-600 italic">{edu.specialization}</p>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                        <Award size={14} className="text-purple-600" />
                        <span className="font-medium">Achievements:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <span
                            key={achIndex}
                            className="px-2 py-1 text-xs bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full border border-purple-300/50"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Description */}
                  <div className="lg:col-span-1">
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;