import React from 'react';
import { Calendar, ExternalLink } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      period: 'Feb 2025 - present',
      title: 'Associate Solutions Engineer, MiQ Digital USA Inc.',
      description: 'Building custom solutions, scoping product alphas and driving product innovation leveraging AI/ML and Data Engineering.',
    },
    {
      period: 'Jun 2024 - July 2024',
      title: 'Product Intern, MiQ Digital USA Inc.',
      description: 'Worked with AdTech product owners to define Gaming GTM strategy. Automated Programmatic + Social DSP data integration pipelines to support data-backed pitching and continuous channel evaluation. Performed analytics on salesforce reports and presented the insights to the commerce sales strategy team with an interactive and actionable customer segmentation dashboard.',
    },
    {
      period: 'Sept 2023 - Apr 2024',
      title: 'Research Assistant, The Pennsylvania State University',
      description: 'Developed a RAG based teaching assistant chatbot in assisting faculties in providing timely and relevant information exp the courses.',
    },
    {
      period: 'Dec 2022 - Jun 2023',
      title: 'Machine Learning Engineer Intern, Growfin.Ai',
      description: 'Designed and deployed an ML system for capturing remittance information that helps to expedite the bulk invoice to cash flow process and increase the productivity of collection agents by 50%. Extracted and integrated table contents using computer vision models, transfer learning and fine-tuning QA language models, visual question answering transformer model (DONUT) and prompt engineering for QA models.',
    },
    {
      period: 'May 2021 - Nov 2021',
      title: 'AI Research Intern, AI Institute At University Of South Carolina',
      description: 'Conducted research to generalize language agent actions in TextWorld CommonSense upgrading the existing AI\'s abilities to be robust to new environments and resources by 7% using Natural Language Processing and Understanding Framework.',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12">
              {/* Timeline dot */}
              <div className="absolute left-2 top-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-gray-900 shadow-lg"></div>

              <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 shadow-xl hover:shadow-2xl hover:bg-gray-800/40 transition-all duration-300">
                <div className="flex items-center space-x-2 text-purple-300 mb-2">
                  <Calendar size={16} />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{exp.title}</h3>
                
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;