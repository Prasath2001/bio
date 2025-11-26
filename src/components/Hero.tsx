import React, { useEffect, useState } from 'react';
import { Linkedin, Mail, Github } from 'lucide-react';
import profilePic from '../assets/Profilepic.jpg';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Profile Image */}
        <div className={`relative mb-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative inline-block">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 p-1 shadow-2xl">
              <img
                src={profilePic}
                alt="Prasath Murugesan"
                className="w-full h-full rounded-full object-cover contrast-110 brightness-105 saturate-110"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse-slow"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className={`space-y-6 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Tamil Greeting */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-2xl md:text-3xl font-bold tracking-wider">
            வணக்கம்!
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 bg-clip-text text-transparent leading-normal py-2">
            Prasath Murugesan
          </h1>

          {/* Title */}
          <div className="text-xl md:text-2xl font-light">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-medium">
              AI/ML Consultant
            </span>
            {' '}&{' '}
            <span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent font-medium">
              Passionate Engineer
            </span>
          </div>

          {/* Location */}
          <p className="text-gray-600 text-lg">
            Based in New York City, from India
          </p>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
            Helping product teams build and integrate AI solutions from prototype to production. 
            Passionate about Applied ML, Data Engineering, and creating impactful technology solutions.
          </p>

          {/* Social Links with Gradient Borders */}
          <div className="flex items-center justify-center space-x-6 pt-8">
            {[
              { icon: Linkedin, href: 'https://www.linkedin.com/in/prasath-m/', color: 'hover:text-blue-600', gradientBorder: 'from-blue-400 to-blue-600' },
              { icon: Mail, href: 'mailto:prasath.murugesan2001@gmail.com', color: 'hover:text-purple-600', gradientBorder: 'from-purple-400 to-pink-500' },
              { icon: Github, href: 'https://github.com/Prasath2001/', color: 'hover:text-gray-800', gradientBorder: 'from-gray-400 to-gray-600' },
            ].map(({ icon: Icon, href, color, gradientBorder }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative p-4 rounded-xl bg-white/80 text-gray-500 ${color} transition-all duration-300 hover:scale-110 hover:bg-white/95 shadow-lg hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm group`}
              >
                {/* Gradient Border */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${gradientBorder} p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <div className="w-full h-full bg-white/95 rounded-xl"></div>
                </div>
                
                {/* Icon */}
                <div className="relative z-10">
                  <Icon size={24} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;