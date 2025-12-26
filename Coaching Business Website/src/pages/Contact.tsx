import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles, MessageCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Header */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-700">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <MessageCircle className="mr-2" size={16} />
            <span>We're Here to Help</span>
          </div>
          <h1 className="text-white mb-4">Get in Touch</h1>
          <p className="text-cyan-100 max-w-3xl mx-auto text-lg">
            Have questions? We're here to help. Reach out and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full opacity-20 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 -ml-48 -mb-48"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-6">
                Contact Details
              </div>
              <h2 className="text-gray-900 mb-8">Let's Connect</h2>
              
              <div className="space-y-6 mb-10">
                <div className="group flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border-2 border-transparent hover:border-blue-300">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-500 text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Mail size={28} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-700 mb-1">info@guidinglightcoaching.com</p>
                    <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border-2 border-transparent hover:border-purple-300">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Phone size={28} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-700 mb-1">(555) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Thu 9am-7pm, Fri 9am-3pm EST</p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border-2 border-transparent hover:border-green-300">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <MapPin size={28} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Location</h3>
                    <p className="text-gray-700 mb-1">Serving clients nationwide</p>
                    <p className="text-sm text-gray-500">All sessions conducted via video call</p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-sm bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border-2 border-indigo-100 shadow-lg">
                <h3 className="text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🕐</span>
                  Office Hours
                </h3>
                <div className="space-y-3">
                  {[
                    { day: 'Sunday', hours: '9:00 AM - 5:00 PM', color: 'from-red-400 to-orange-400' },
                    { day: 'Monday - Thursday', hours: '9:00 AM - 7:00 PM', color: 'from-blue-400 to-cyan-400' },
                    { day: 'Friday', hours: '9:00 AM - 3:00 PM', color: 'from-purple-400 to-pink-400' },
                    { day: 'Saturday', hours: 'Closed', color: 'from-gray-400 to-gray-500' },
                  ].map((schedule, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                      <span className="text-gray-700">{schedule.day}</span>
                      <span className={`px-3 py-1 rounded-lg text-white text-sm bg-gradient-to-r ${schedule.color}`}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-4 italic">
                  *Hours are flexible for evening and weekend sessions
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {submitted ? (
                <div className="backdrop-blur-sm bg-white/95 rounded-3xl shadow-2xl p-10 text-center border-2 border-white/50 transform animate-[fadeIn_0.5s_ease-in-out]">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 text-white rounded-full mb-6 animate-bounce">
                    <CheckCircle size={40} />
                  </div>
                  <h2 className="text-gray-900 mb-4">Message Sent! 🎉</h2>
                  <p className="text-gray-600 mb-8 text-lg">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="backdrop-blur-sm bg-white/95 rounded-3xl shadow-2xl p-10 border-2 border-white/50">
                  <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full mb-6">
                    <Send className="inline mr-2" size={16} />
                    Send Message
                  </div>
                  <h2 className="text-gray-900 mb-2">Drop Us a Line</h2>
                  <p className="text-gray-600 mb-8">We'd love to hear from you!</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all ${
                          focusedField === 'name' ? 'border-purple-400 shadow-lg' : 'border-gray-300'
                        }`}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all ${
                          focusedField === 'email' ? 'border-purple-400 shadow-lg' : 'border-gray-300'
                        }`}
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="services">Questions About Services</option>
                        <option value="pricing">Pricing & Packages</option>
                        <option value="scheduling">Scheduling</option>
                        <option value="parent">Parent/Guardian Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Tell us how we can help you..."
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all ${
                          focusedField === 'message' ? 'border-purple-400 shadow-lg' : 'border-gray-300'
                        }`}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white rounded-xl hover:from-purple-700 hover:via-pink-700 hover:to-rose-700 transition-all transform hover:scale-105 shadow-xl"
                    >
                      <Send size={20} className="mr-2" />
                      Send Message
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          </div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="backdrop-blur-sm bg-white/10 rounded-3xl p-12 border-2 border-white/20 shadow-2xl">
            <div className="text-5xl mb-6">❓</div>
            <h2 className="text-white mb-4">Looking for Quick Answers?</h2>
            <p className="text-white/90 mb-8 text-lg">
              Check out our Frequently Asked Questions page for immediate answers to common questions.
            </p>
            <a
              href="/faqs"
              className="inline-flex items-center px-10 py-5 bg-white text-purple-600 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
            >
              <Sparkles className="mr-2" size={20} />
              Visit FAQ Page
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
