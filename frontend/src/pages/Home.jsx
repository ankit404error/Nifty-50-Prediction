import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, BarChart2, Cpu, Settings, Shield, Sparkles, Rocket, TrendingUp, Zap } from "lucide-react";
import Chatbot from "../components/Chatbot";
import { motion,useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [featureRef, featureInView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleStartTrial = () => {
    navigate("/signup");
  };

  const features = [
    {
      icon: <BarChart2 className="w-8 h-8" />,
      title: "Smart Analytics",
      description: "Real-time market insights with predictive AI algorithms"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI Engine",
      description: "Deep learning models trained on billions of data points"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Fully Customizable",
      description: "Tailor every aspect to your trading personality"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Military Encryption",
      description: "Bank-level security for your data and transactions"
    }
  ];

  const stats = [
    { value: "10K+", label: "Active Traders", icon: <TrendingUp className="w-6 h-6" /> },
    { value: "24/7", label: "Market Monitoring", icon: <Zap className="w-6 h-6" /> },
    { value: "99.9%", label: "Uptime", icon: <Sparkles className="w-6 h-6" /> },
    { value: "0.1s", label: "Execution Speed", icon: <Rocket className="w-6 h-6" /> }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-100 rounded-full opacity-10"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360]
            }}
            transition={{
              duration: Math.random() * 50 + 30,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={container}
          className="text-center"
        >
          <motion.div variants={item} className="inline-flex items-center bg-blue-600/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-600">Next-gen trading platform</span>
          </motion.div>

          <motion.h1 variants={item} className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Smarter Trading
            </span>
            <br />
            Powered by AI
          </motion.h1>

          <motion.p variants={item} className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Automate your strategies with our cutting-edge platform that learns and adapts to market conditions in real-time.
          </motion.p>

          <motion.div variants={item}>
            <button
              onClick={handleStartTrial}
              className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl group hover:shadow-2xl transition-all duration-300"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center text-lg font-semibold">
                Start Free Trial <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          ref={featureRef}
          initial="hidden"
          animate={featureInView ? "visible" : "hidden"}
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
              <div className="flex flex-col items-start">
                <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl mb-6 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="flex justify-center mb-4 text-blue-200">
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl opacity-10"></div>
        <div className="relative bg-white p-12 rounded-3xl shadow-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Trading?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of professional traders and experience the future of automated trading today.
          </p>
          <button
            onClick={handleStartTrial}
            className="relative inline-flex items-center justify-center px-10 py-5 overflow-hidden font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl group hover:shadow-2xl transition-all duration-300"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 flex items-center text-lg font-semibold">
              Get Started Now <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </section>

      {/* Chatbot positioned fixed at bottom right */}
      <div className="fixed bottom-8 right-8 z-50">
        <Chatbot />
      </div>
    </div>
  );
};

export default Home;