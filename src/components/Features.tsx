import React from 'react';
import { Brain, Zap, Globe, Shield, Users, BookOpen, Rocket, Star, Award, Target, Lightbulb, TrendingUp } from 'lucide-react';

const Features: React.FC = () => {
  const benefits = [
    {
      icon: Brain,
      title: 'AI-Powered Personalization',
      description: 'Advanced algorithms adapt to your learning style, pace, and preferences for maximum efficiency.',
      gradient: 'from-pink-500 to-rose-500',
      bgPattern: 'bg-gradient-to-br from-pink-500/10 to-rose-500/10'
    },
    {
      icon: Rocket,
      title: 'Accelerated Learning',
      description: 'Learn 3x faster with our proven methodology and interactive content delivery system.',
      gradient: 'from-blue-500 to-cyan-500',
      bgPattern: 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10'
    },
    {
      icon: Target,
      title: 'Goal-Oriented Paths',
      description: 'Structured learning journeys designed to achieve your specific career and skill objectives.',
      gradient: 'from-green-500 to-emerald-500',
      bgPattern: 'bg-gradient-to-br from-green-500/10 to-emerald-500/10'
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Direct access to industry professionals and personalized guidance throughout your journey.',
      gradient: 'from-purple-500 to-violet-500',
      bgPattern: 'bg-gradient-to-br from-purple-500/10 to-violet-500/10'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Earn certificates and credentials recognized by top companies and industry leaders.',
      gradient: 'from-yellow-500 to-orange-500',
      bgPattern: 'bg-gradient-to-br from-yellow-500/10 to-orange-500/10'
    },
    {
      icon: TrendingUp,
      title: 'Career Advancement',
      description: 'Track record of 150% average salary increase for our graduates within 12 months.',
      gradient: 'from-indigo-500 to-purple-500',
      bgPattern: 'bg-gradient-to-br from-indigo-500/10 to-purple-500/10'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Active Learners', icon: Users },
    { number: '98%', label: 'Success Rate', icon: Star },
    { number: '1000+', label: 'Expert Courses', icon: BookOpen },
    { number: '150%', label: 'Avg. Salary Boost', icon: TrendingUp }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/20 to-transparent"></div>
        {/* Floating particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
            <Lightbulb className="h-5 w-5 text-yellow-400" />
            <span className="text-white font-medium">Revolutionary Platform</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Why Choose
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> 
              EduSphere?
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Experience the future of education with our cutting-edge platform designed to maximize your learning potential and accelerate your career growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Benefits Grid */}
          <div className="space-y-8">
            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass-morphism rounded-2xl p-6 border border-white/10 text-center hover:border-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-center mb-3">
                    <stat.icon className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div className="text-3xl font-black text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Benefits List */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`group relative ${benefit.bgPattern} backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-xl`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-r ${benefit.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors duration-200">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-200">
                        {benefit.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <button className="group bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:from-indigo-600 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-2xl shadow-indigo-500/25 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Rocket className="h-6 w-6 relative z-10" />
                <span className="relative z-10">Start Your Journey</span>
                <Star className="h-6 w-6 relative z-10" />
              </button>
            </div>
          </div>

          {/* 3D Model Section */}
          <div className="relative">
            <div className="glass-morphism rounded-3xl p-8 border border-white/10 shadow-2xl relative z-20">
              <div className="flex justify-center items-center relative">
                <div style={{ width: '100%', height: '500px' }} className="rounded-2xl overflow-hidden relative z-30">
                  <spline-viewer 
                    url="https://prod.spline.design/Znd61lFcSyJ8XkXx/scene.splinecode"
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              </div>
            </div>

            {/* Floating elements around the 3D model */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full animate-bounce opacity-80"></div>
            <div className="absolute -top-2 -right-6 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-bounce opacity-80" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute -bottom-4 -left-6 w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-bounce opacity-80" style={{ animationDelay: '1s' }}></div>
            <div className="absolute -bottom-2 -right-4 w-7 h-7 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full animate-bounce opacity-80" style={{ animationDelay: '1.5s' }}></div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl blur-3xl opacity-50 animate-pulse -z-10"></div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="glass-morphism rounded-3xl p-10 border border-white/10 max-w-4xl mx-auto shadow-2xl">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Globe className="h-8 w-8 text-indigo-400" />
              <h3 className="text-3xl font-black text-white">Join the Learning Revolution</h3>
              <Rocket className="h-8 w-8 text-purple-400" />
            </div>
            <p className="text-gray-200 mb-8 text-xl leading-relaxed">
              Transform your career with our proven learning methodology trusted by 50,000+ professionals worldwide.
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

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(1deg); }
          50% { transform: translateY(-5px) rotate(-1deg); }
          75% { transform: translateY(-15px) rotate(0.5deg); }
        }
      `}</style>
    </section>
  );
};

export default Features;