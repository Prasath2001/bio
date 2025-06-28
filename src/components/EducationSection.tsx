import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const EducationSection: React.FC = () => {
  const education = [
    {
      period: '2023-2024',
      institution: 'The Pennsylvania State University, PA, USA',
      degree: 'Master\'s in Data Analytics, Big Data Systems',
      description: 'I call this chapter பெரிய அடி (Big Step/Big Blow) - polysemous. Recipient of Chancellor\'s Scholarship & Warren V. Musser Scholarship.',
    },
    {
      period: '2018-2023',
      institution: 'PSG College Of Technology, Coimbatore, India.',
      degree: 'Master\'s in Data Science (M.Sc Integrated)',
      description: 'During this time, I was fortunate to meet mentors who shaped my perspectives on what a fruitful career is. I am grateful to Dr. R. Nadarajan and Shamshu Dharwez anna for guiding me since then.',
    },
    {
      period: '2012-2018',
      institution: 'Jawahar Higher Secondary School (CBSE), Neyveli, India.',
      degree: 'Higher Secondary Education.',
      description: 'I am grateful for the friendships that still continue to this day. To my parents, Sridhar, Sudarsan & Aswin.',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Education
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </div>

      <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 shadow-2xl">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-12">
                {/* Timeline dot */}
                <div className="absolute left-2 top-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-gray-900 shadow-lg"></div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-purple-300">
                    <Calendar size={16} />
                    <span className="text-sm font-medium">{edu.period}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white">{edu.institution}</h3>
                  
                  <p className="text-lg text-gray-300 italic">{edu.degree}</p>
                  
                  <p className="text-gray-400 leading-relaxed">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;