'use client';

import { motion } from 'framer-motion';
import { 
  Palette, 
  Zap, 
  Microscope, 
  Theater, 
  Tornado, 
  Sparkles, 
  TestTube, 
  Target, 
  MessageCircle, 
  Rocket, 
  Trophy, 
  Mail, 
  Users, 
  BookOpen, 
  FileText, 
  BarChart3,
  Beaker,
  Lightbulb,
  Heart,
  GraduationCap
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="text-xl font-bold text-lime-400"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              IBDPDT
            </motion.div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <motion.a
                href="#squad"
                className="text-gray-300 hover:text-lime-400 transition-colors duration-300 font-medium"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                whileHover={{ scale: 1.05 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('squad')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Squad
              </motion.a>
              <motion.a
                href="#chat"
                className="text-gray-300 hover:text-lime-400 transition-colors duration-300 font-medium"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('chat')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Chat Group
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-gray-300 hover:text-lime-400 transition-colors duration-300"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="min-h-screen flex items-center px-8 relative overflow-hidden pt-20">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-lime-400/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-left">
              {/* Main Title */}
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 bg-gradient-to-br from-white to-lime-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              >
                Don't Panic!
              </motion.h1>

              {/* Subline */}
              <motion.p 
                className="text-lg md:text-xl lg:text-2xl font-light text-lime-400 mb-8 tracking-wide"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
              >
                Fail early. Fail often. Fail beautifully.
              </motion.p>

              {/* Description */}
              <motion.p 
                className="text-base md:text-lg lg:text-xl font-normal leading-relaxed text-gray-300 mb-10"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
              >
                In the chaos of creation, panic becomes our most honest collaborator. 
                We embrace the beautiful mess of design thinking—where every failed 
                prototype is data, every creative breakdown is a breakthrough waiting 
                to happen. This is where design meets delirium, and chaos becomes 
                our most reliable research method.
              </motion.p>

              {/* CTA Button */}
              <motion.a
                href="#"
                className="group inline-block bg-transparent text-lime-400 border-2 border-lime-400 px-8 py-3 text-base font-semibold uppercase tracking-wider transition-all duration-300 hover:text-black hover:shadow-lg hover:shadow-lime-400/30 hover:-translate-y-1 relative overflow-hidden"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Join the IBDPDT Lab</span>
                <div className="absolute inset-0 bg-lime-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              </motion.a>
            </div>

            {/* Right Column - Image */}
            <motion.div 
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            >
              <div className="relative w-full max-w-md lg:max-w-lg">
                <div className="aspect-square rounded-2xl border border-gray-700 overflow-hidden">
                  <img 
                    src="/hero-image.jpg" 
                    alt="IBDPDT Lab" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
      </main>

      {/* Squad Section */}
      <section id="squad" className="py-16 px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              The <span className="text-lime-400">Squad</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-xl mx-auto">
              Meet the chaos creators who make this beautiful mess possible.
            </p>
          </motion.div>

          {/* Student Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-8">
            {/* Student 1 */}
            <motion.div 
              className="bg-gray-800/50 rounded-lg p-3 border border-gray-700 hover:border-lime-400/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-lime-400/20 to-lime-400/5 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Palette className="w-5 h-5 text-lime-400" />
              </div>
              <h3 className="text-sm font-semibold text-white text-center mb-1">LA</h3>
              <p className="text-xs text-gray-400 text-center italic">
                The Creative Perfectionist
              </p>
            </motion.div>

            {/* Student 2 */}
            <motion.div 
              className="bg-gray-800/50 rounded-lg p-3 border border-gray-700 hover:border-lime-400/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-lime-400/20 to-lime-400/5 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Zap className="w-5 h-5 text-lime-400" />
              </div>
              <h3 className="text-sm font-semibold text-white text-center mb-1">FZ</h3>
              <p className="text-xs text-gray-400 text-center italic">
                The CEO
              </p>
            </motion.div>

            {/* Student 3 */}
            <motion.div 
              className="bg-gray-800/50 rounded-lg p-3 border border-gray-700 hover:border-lime-400/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-lime-400/20 to-lime-400/5 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Microscope className="w-5 h-5 text-lime-400" />
              </div>
              <h3 className="text-sm font-semibold text-white text-center mb-1">BK</h3>
              <p className="text-xs text-gray-400 text-center italic">
                The Master
              </p>
            </motion.div>

            {/* Student 4 */}
            <motion.div 
              className="bg-gray-800/50 rounded-lg p-3 border border-gray-700 hover:border-lime-400/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-lime-400/20 to-lime-400/5 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Theater className="w-5 h-5 text-lime-400" />
              </div>
              <h3 className="text-sm font-semibold text-white text-center mb-1">SB</h3>
              <p className="text-xs text-gray-400 text-center italic">
                The President
              </p>
            </motion.div>

            {/* Student 5 */}
            <motion.div 
              className="bg-gray-800/50 rounded-lg p-3 border border-gray-700 hover:border-lime-400/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-lime-400/20 to-lime-400/5 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Tornado className="w-5 h-5 text-lime-400" />
              </div>
              <h3 className="text-sm font-semibold text-white text-center mb-1">LM</h3>
              <p className="text-xs text-gray-400 text-center italic">
                The Life Saver
              </p>
            </motion.div>

            {/* Student 6 */}
            <motion.div 
              className="bg-gray-800/50 rounded-lg p-3 border border-gray-700 hover:border-lime-400/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-lime-400/20 to-lime-400/5 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-lime-400" />
              </div>
              <h3 className="text-sm font-semibold text-white text-center mb-1">AA</h3>
              <p className="text-xs text-gray-400 text-center italic">
                The Visionary
              </p>
            </motion.div>

            {/* Student 7 */}
            <motion.div 
              className="bg-gray-800/50 rounded-lg p-3 border border-gray-700 hover:border-lime-400/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-lime-400/20 to-lime-400/5 rounded-full mx-auto mb-2 flex items-center justify-center">
                <TestTube className="w-5 h-5 text-lime-400" />
              </div>
              <h3 className="text-sm font-semibold text-white text-center mb-1">RBS</h3>
              <p className="text-xs text-gray-400 text-center italic">
                Tinkerer
              </p>
            </motion.div>

            {/* Student 8 */}
            <motion.div 
              className="bg-gray-800/50 rounded-lg p-3 border border-gray-700 hover:border-lime-400/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-lime-400/20 to-lime-400/5 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Target className="w-5 h-5 text-lime-400" />
              </div>
              <h3 className="text-sm font-semibold text-white text-center mb-1">RA</h3>
              <p className="text-xs text-gray-400 text-center italic">
                Quiet Genius
              </p>
            </motion.div>

            {/* Student 9 */}
            <motion.div 
              className="bg-gray-800/50 rounded-lg p-3 border border-gray-700 hover:border-lime-400/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-lime-400/20 to-lime-400/5 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Target className="w-5 h-5 text-lime-400" />
              </div>
              <h3 className="text-sm font-semibold text-white text-center mb-1">AB</h3>
              <p className="text-xs text-gray-400 text-center italic">
                The Socializer
              </p>
            </motion.div>

            {/* Student 10 */}
            <motion.div 
              className="bg-gray-800/50 rounded-lg p-3 border border-gray-700 hover:border-lime-400/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-lime-400/20 to-lime-400/5 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-lime-400" />
              </div>
              <h3 className="text-sm font-semibold text-white text-center mb-1">YS</h3>
              <p className="text-xs text-gray-400 text-center italic">
                The Tinkerer
              </p>
            </motion.div>

            {/* Student 11 */}
            <motion.div 
              className="bg-gray-800/50 rounded-lg p-3 border border-gray-700 hover:border-lime-400/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.55 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-lime-400/20 to-lime-400/5 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Zap className="w-5 h-5 text-lime-400" />
              </div>
              <h3 className="text-sm font-semibold text-white text-center mb-1">HS</h3>
              <p className="text-xs text-gray-400 text-center italic">
                Creative Visionary
              </p>
            </motion.div>

            {/* Teacher Card */}
            <motion.div 
              className="bg-gray-800/50 rounded-lg p-3 border border-gray-700 hover:border-lime-400/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-lime-400/20 to-lime-400/5 rounded-full mx-auto mb-2 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-lime-400" />
              </div>
              <h3 className="text-sm font-semibold text-white text-center mb-1">YA</h3>
              <p className="text-xs text-gray-400 text-center italic">
                Chief Panic Officer
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chat Group Section */}
      <section id="chat" className="py-20 px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Join the <span className="text-lime-400">Chaos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Where panic becomes productivity, confusion becomes clarity, and every design crisis is just data waiting to be analyzed.
            </p>
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-lime-400/20 rounded-full flex items-center justify-center mr-4">
                  <MessageCircle className="w-8 h-8 text-lime-400" />
                </div>
                <h3 className="text-2xl font-bold text-lime-400">Discord Server</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Real-time panic sharing, design crisis support, and collaborative chaos creation. 
                Where every "I don't know what I'm doing" becomes "We don't know what we're doing together."
              </p>
              <motion.button
                className="bg-lime-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-lime-300 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Coming Soon
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>




      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-lime-400 mb-4">IBDPDT Lab</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Where design meets delirium, panic becomes productivity, and every crisis is just data waiting to be analyzed.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-lime-400 hover:bg-gray-700 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-lime-400 hover:bg-gray-700 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <MessageCircle className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-lime-400 hover:bg-gray-700 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Palette className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#squad" 
                    className="text-gray-400 hover:text-lime-400 transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('squad')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Meet the Squad
                  </a>
                </li>
                <li>
                  <a 
                    href="#chat" 
                    className="text-gray-400 hover:text-lime-400 transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('chat')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Chat Group
                  </a>
                </li>
                <li>
                  <a 
                    href="#involved" 
                    className="text-gray-400 hover:text-lime-400 transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('involved')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Get Involved
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors duration-300">
                    Design Manifesto
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors duration-300">
                    IB Design Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors duration-300">
                    Panic Management
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors duration-300">
                    Design Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors duration-300">
                    Case Studies
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div 
            className="border-t border-gray-800 pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  © 2024 IBDPDT Lab. All rights reserved.
                </p>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-lime-400 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-lime-400 transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-lime-400 transition-colors duration-300">
                  Contact
                </a>
              </div>
            </div>
            
          </motion.div>
        </div>
      </footer>
    </div>
  );
}