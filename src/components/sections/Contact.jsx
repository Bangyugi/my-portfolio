import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
      } else {
        const text = await response.text();
        try {
          const data = JSON.parse(text);
          throw new Error(data.message || 'Failed to send message');
        } catch (e) {
          console.error("Server Error Response:", text);
          throw new Error('Server error: ' + (text.substring(0, 100) + '...'));
        }
      }
    } catch (error) {
      setStatus({ loading: false, success: false, error: error.message });
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 text-center">
            Get In Touch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-slate-200 mb-6">Let's Talk</h3>
              <p className="text-slate-400 mb-8">
                I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center text-slate-300">
                  <Mail className="w-6 h-6 text-cyan-400 mr-4" />
                  <span>bangtranvan08@gmail.com</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <Phone className="w-6 h-6 text-cyan-400 mr-4" />
                  <span>0334236824</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <MapPin className="w-6 h-6 text-cyan-400 mr-4" />
                  <span>Kim Chung, Hoai Duc, Ha Noi</span>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-slate-400 mb-2 text-sm">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-slate-200 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-slate-400 mb-2 text-sm">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-slate-200 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-slate-400 mb-2 text-sm">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-slate-200 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="Your message..."
                ></textarea>
              </div>

              {status.error && (
                <div className="p-3 bg-red-500/10 border border-red-500/50 text-red-500 rounded text-sm">
                  {status.error}
                </div>
              )}

              {status.success && (
                <div className="p-3 bg-green-500/10 border border-green-500/50 text-green-500 rounded text-sm">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              <button
                type="submit"
                disabled={status.loading}
                className="w-full bg-cyan-500 text-slate-900 font-bold py-3 rounded hover:bg-cyan-400 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.loading ? (
                  <>Sending... <Loader2 size={18} className="ml-2 animate-spin" /></>
                ) : (
                  <>Send Message <Send size={18} className="ml-2" /></>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
