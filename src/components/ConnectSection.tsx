import React from 'react';
import { Linkedin, Mail, Github, ExternalLink } from 'lucide-react';

const ConnectSection: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="relative inline-block">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 p-1 mx-auto">
            <img
              src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
        
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Prasath Murugesan</h1>
          <p className="text-xl text-gray-300 mb-4">AI/ML Consultant & Passionate Engineer</p>
          <p className="text-gray-400">Based out of New York City, from India.</p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4">
          {[
            { icon: Linkedin, href: 'https://www.linkedin.com/in/prasath-m/', color: 'from-blue-500 to-blue-600' },
            { icon: Mail, href: 'mailto:prasath.murugesan2001@gmail.com', color: 'from-red-500 to-red-600' },
            { icon: Github, href: 'https://github.com/Prasath2001/', color: 'from-gray-600 to-gray-700' },
          ].map(({ icon: Icon, href, color }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full bg-gradient-to-r ${color} hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
            >
              <Icon size={20} className="text-white" />
            </a>
          ))}
        </div>
      </div>

      {/* About Content */}
      <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 shadow-2xl">
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Hello 👋, I'm Prasath Murugesan. I was born and grew up in India. I have two master's degrees, one in Data Science (integrated 
            master's) from PSG College of Technology, Coimbatore and another in Data Analytics (Big Data Systems) from Pennsylvania State 
            University.
          </p>
          
          <p>
            I am a consultant for product teams that seek to build and integrate AI solutions into their roadmap and enable stakeholders - 
            helping to move from prototype to production. I have gathered experience in solving problems from various domains ranging 
            from FinTech, AdTech, Job market, Media & Social Content, Software Development, Elections and looking to expand further.
          </p>
          
          <p>
            My areas of interest - Applied ML, Data Engineering & Analytics, Deep Learning, Natural Language Processing, Computer Vision, 
            LLMs, Generative AI, Graph models & Knowledge graphs, Learning with limited data.
          </p>
          
          <p>
            Apart from tech and consulting, my hobbies span Tamil Sangam literature, Ethics in Tech, Open-Source community, Math, 
            Economics, Politics, Cinema and Cricket. I am a big fan of the works of AR Rahman and Mari Selvaraj.
          </p>
          
          <p>
            I am currently teaching myself to design cloud solutions and full-stack web development. Trying to be a generalist in a specialized 
            world 😊
          </p>
        </div>
        
        {/* Tamil Quote */}
        <div className="mt-8 pt-6 border-t border-purple-500/20">
          <div className="text-center space-y-2 text-gray-400 italic">
            <p>உண்பது நாழி, உடுப்பது இரண்டு</p>
            <p>பிறவும் எல்லாம் குறிஞ்சி, குறிஞ்சி</p>
            <p>செல்வதற்கு பயன் சுகம்</p>
            <p>தும்புபுலும் என்னே தப்பிடும் பலவே</p>
            <p>-நக்கீரனார் (குறிஞ்ச நூற்றுது)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectSection;