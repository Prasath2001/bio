import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'News Recommendation System At Scale',
      description: 'A news recommendation system built using Microsoft News Dataset (MIND) containing 750K users and 17.5M click events. It uses Collaborative Filtering, KNN and Graph Projections which helps to recommend similar news articles based on user preferences and enable rank-ordered recommendation queries personalized to each user.',
      image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=400',
      tech: ['ML', 'Collaborative Filtering', 'Graph Neural Networks'],
    },
    {
      title: 'Music Meta Brain',
      description: 'A contextual information retrieval system which leverages knowledge graph built in an unsupervised setting which helps to extract relevant information for music search queries. It is helpful in extracting relevant and similar documents to the queries generated.',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
      tech: ['Knowledge Graphs', 'Information Retrieval', 'Graph DB'],
    },
    {
      title: 'Sentiment Detection Web App',
      description: 'It is an end-to-end interactive web app used to predict and visualize probability distribution of emotions using Multinomial Logistic Regression Pipeline.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=400',
      tech: ['Machine Learning', 'Web Development', 'Sentiment Analysis', 'Flask'],
    },
    {
      title: 'Balancing The Imbalanced',
      description: 'Resolved the imbalance in credit card fraud detection dataset which is highly skewed by generating synthetic transactions. Built a Random Forest model to construct a comparison flow chart for 8 resampling techniques. It helps to reduce the number of False Positives and leads to better precision and recall measures.',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400',
      tech: ['Machine Learning', 'Data Science', 'Imbalanced Learning'],
    },
    {
      title: 'Time Series Analysis On Beverage Drink Consumption',
      description: 'Analyzed the trend in beer consumption of Australians during 2000 - 2018 using R. Trialed to find patterns and modeled exponential smoothing and trend methods. The beer sales were increasing annually with a seasonal decrease in mid-quarters every year.',
      image: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=400',
      tech: ['Time Series Analysis', 'Data Visualization', 'Statistical Modeling'],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-gray-800/30 backdrop-blur-lg rounded-2xl overflow-hidden border border-purple-500/20 shadow-xl hover:shadow-2xl hover:bg-gray-800/40 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
            </div>
            
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105">
                  <span className="text-sm font-medium">View Project</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;