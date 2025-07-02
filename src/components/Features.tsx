import React from 'react';
import { Brain, Zap, Globe, Shield, Users, BookOpen, Rocket, Star, Award, Target, Lightbulb, TrendingUp, ArrowRight } from 'lucide-react';

const Features: React.FC = () => {
  const keyBenefits = [
    {
      icon: Rocket,
      title: 'Learn 3x Faster',
      description: 'AI-powered personalization accelerates your learning journey'
    },
    {
      icon: TrendingUp,
      title: '150% Salary Boost',
      description: 'Our graduates see average salary increases within 12 months'
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Direct access to industry professionals and career guidance'
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Clean background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Clean Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
            <Lightbulb className="h-5 w-5 text-yellow-400" />
            <span className="text-white font-medium">Revolutionary Platform</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Revolutionary Learning
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> 
              Experience
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Experience the future of education with our cutting-edge platform designed to maximize your learning potential.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Benefits */}
          <div className="space-y-12">
            {/* Why Choose EduSphere */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center space-x-3">
                <Star className="h-8 w-8 text-yellow-400" />
                <span>Why Choose EduSphere?</span>
              </h3>
              
              <div className="space-y-6">
                {keyBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="group glass-morphism rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-2"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <benefit.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-200">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-200">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-morphism rounded-2xl p-6 border border-white/10 text-center hover:border-white/20 transition-all duration-300">
                <div className="text-4xl font-black text-indigo-400 mb-2">50K+</div>
                <div className="text-gray-300 font-medium">Active Learners</div>
              </div>
              <div className="glass-morphism rounded-2xl p-6 border border-white/10 text-center hover:border-white/20 transition-all duration-300">
                <div className="text-4xl font-black text-green-400 mb-2">98%</div>
                <div className="text-gray-300 font-medium">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Side - 3D Laptop Model (No Box) */}
          <div className="relative">
            {/* Direct 3D model without container box */}
            <div className="flex justify-center items-center relative z-30">
              <div style={{ width: '100%', height: '600px', maxWidth: '731px' }} className="rounded-2xl overflow-hidden">
                <spline-viewer 
                  url="https://prod.spline.design/Znd61lFcSyJ8XkXx/scene.splinecode"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>

            {/* Floating elements around the 3D model */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full animate-bounce opacity-80"></div>
            <div className="absolute -top-2 -right-6 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-bounce opacity-80" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute -bottom-4 -left-6 w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-bounce opacity-80" style={{ animationDelay: '1s' }}></div>
            <div className="absolute -bottom-2 -right-4 w-7 h-7 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full animate-bounce opacity-80" style={{ animationDelay: '1.5s' }}></div>

            {/* Subtle glow effect behind the model */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/10 via-purple-400/10 to-pink-400/10 rounded-3xl blur-3xl opacity-50 animate-pulse -z-10"></div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="glass-morphism rounded-3xl p-10 border border-white/10 max-w-4xl mx-auto shadow-2xl">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Globe className="h-8 w-8 text-indigo-400" />
              <h3 className="text-3xl font-black text-white">Join the Learning Revolution</h3>
              <Rocket className="h-8 w-8 text-purple-400" />
            </div>
            <p className="text-gray-200 mb-8 text-xl leading-relaxed">
              Transform your career with our proven learning methodology trusted by professionals worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 hover:scale-105 shadow-lg">
                Start Free Trial
              </button>
              <button className="glass-morphism text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-200 border border-white/20 hover:scale-105">
                View Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;