import React, { useEffect, useRef, useState } from 'react';
import { Github } from 'lucide-react';

// Kaggle icon component
const KaggleIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.336"/>
  </svg>
);

const Projects: React.FC = () => {
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

  const projects = [
    {
      title: 'News Recommendation System at Scale',
      description: 'A news recommendation system built using Microsoft News Dataset (MIND) containing 750K users and 17.5M click events. Uses Collaborative Filtering, KNN and Graph Projections for personalized recommendations.',
      image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Machine Learning', 'Python', 'Collaborative Filtering', 'Graph Neural Networks'],
      codeUrl: 'https://github.com/Prasath2001/News-Recommendation-at-scale-using-Neo4j',
      codeType: 'github'
    },
    {
      title: 'Music Meta Brain',
      description: 'A contextual information retrieval system leveraging knowledge graphs built in an unsupervised setting for music search queries and document similarity.',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Knowledge Graphs', 'Information Retrieval', 'NLP', 'Graph Databases'],
      codeUrl: 'https://github.com/Prasath2001/Music-Meta-Brain',
      codeType: 'github'
    },
    {
      title: 'Sentiment Detection Web App',
      description: 'End-to-end interactive web application for emotion prediction and visualization using Multinomial Logistic Regression Pipeline with real-time analysis.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Machine Learning', 'Flask', 'Sentiment Analysis', 'Data Visualization'],
      codeUrl: 'https://github.com/Prasath2001/Sentiment-Prediction-App-using-Streamlit',
      codeType: 'github'
    },
    {
      title: 'Balancing The Imbalanced',
      description: 'Resolved imbalance in credit card fraud detection using synthetic transaction generation and Random Forest modeling with 8 resampling techniques comparison.',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Machine Learning', 'Fraud Detection', 'Imbalanced Learning', 'Random Forest'],
      codeUrl: 'https://www.kaggle.com/code/prasathm2001/resampling-techniques-to-handle-imbalanced-dataset',
      codeType: 'kaggle'
    },
    {
      title: 'Time Series Analysis On Beverage Consumption',
      description: 'Analyzed Australian beer consumption trends (2000-2018) using R, implementing exponential smoothing and trend methods with seasonal pattern recognition.',
      image: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Time Series Analysis', 'R', 'Statistical Modeling', 'Data Visualization'],
      codeUrl: 'https://www.kaggle.com/code/prasathm2001/time-series-analysis-part-1/notebook',
      codeType: 'kaggle'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            A showcase of my work in AI/ML, Data Science, and Software Development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-white/70 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-200/50 hover:border-purple-300/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-100/30">
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack - Show all tech tags without +more indicator */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full border border-purple-300/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Code Button */}
                  <div className="flex justify-center">
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 text-sm font-medium shadow-lg hover:shadow-purple-200/50"
                    >
                      {project.codeType === 'github' ? (
                        <Github size={16} />
                      ) : (
                        <KaggleIcon size={16} />
                      )}
                      <span>
                        {project.codeType === 'github' ? 'GitHub' : 'Kaggle'}
                      </span>
                    </a>
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

export default Projects;