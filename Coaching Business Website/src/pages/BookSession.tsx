import { useState } from 'react';
import { Calendar, Clock, Video, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';

export function BookSession() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    sessionType: 'consultation',
    preferredDays: [] as string[],
    preferredTimes: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDayToggle = (day: string) => {
    setFormData({
      ...formData,
      preferredDays: formData.preferredDays.includes(day)
        ? formData.preferredDays.filter(d => d !== day)
        : [...formData.preferredDays, day],
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
        
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="backdrop-blur-sm bg-white/95 rounded-3xl shadow-2xl p-12 text-center border-2 border-white/50 transform animate-[fadeIn_0.5s_ease-in-out]">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 text-white rounded-full mb-6 animate-bounce">
              <CheckCircle size={40} />
            </div>
            <h1 className="text-gray-900 mb-4">Thank You! 🎉</h1>
            <p className="text-gray-600 mb-6 text-lg">
              Your booking request has been received. We'll reach out within 24 hours to confirm your 
              session time and send you the video call link.
            </p>
            <p className="text-gray-600 mb-8">
              Please check your email (including spam folder) for a confirmation message.
            </p>
            <a
              href="/"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Return to Home
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </div>
    );
  }

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayColors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500', 'bg-blue-500', 'bg-indigo-500', 'bg-purple-500'];

  return (
    <div>
      {/* Header */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Sparkles className="mr-2" size={16} />
            <span>Begin Your Journey</span>
          </div>
          <h1 className="text-white mb-4">Book a Session</h1>
          <p className="text-blue-100 max-w-3xl mx-auto text-lg">
            Start your journey with a free 30-minute consultation. No pressure, just an opportunity 
            to connect and explore how coaching can support you.
          </p>
        </div>
      </section>

      {/* Session Info */}
      <section className="py-12 bg-gradient-to-r from-purple-50 to-pink-50 border-y-4 border-purple-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Clock size={36} />
              </div>
              <h3 className="text-gray-900 mb-1">Duration</h3>
              <p className="text-gray-600">30-60 minutes</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Video size={36} />
              </div>
              <h3 className="text-gray-900 mb-1">Format</h3>
              <p className="text-gray-600">Secure video call</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Calendar size={36} />
              </div>
              <h3 className="text-gray-900 mb-1">Flexible Scheduling</h3>
              <p className="text-gray-600">Evenings & weekends available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full opacity-20 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 -ml-48 -mb-48"></div>
        
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-sm bg-white/90 rounded-3xl shadow-2xl p-10 border-2 border-white/50">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Calendar className="inline mr-2" size={16} />
                Request Appointment
              </div>
              <h2 className="text-gray-900 mb-2">Let's Connect!</h2>
              <p className="text-gray-600">Fill out the form below and we'll be in touch soon.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name *
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
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all ${
                      focusedField === 'name' ? 'border-blue-400 shadow-lg' : 'border-gray-300'
                    }`}
                  />
                </div>

                <div>
                  <label htmlFor="age" className="block text-gray-700 mb-2">
                    Age *
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    required
                    min="13"
                    max="30"
                    value={formData.age}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('age')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all ${
                      focusedField === 'age' ? 'border-blue-400 shadow-lg' : 'border-gray-300'
                    }`}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
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
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all ${
                      focusedField === 'email' ? 'border-blue-400 shadow-lg' : 'border-gray-300'
                    }`}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all ${
                      focusedField === 'phone' ? 'border-blue-400 shadow-lg' : 'border-gray-300'
                    }`}
                  />
                </div>
              </div>

              {/* Session Type */}
              <div>
                <label htmlFor="sessionType" className="block text-gray-700 mb-2">
                  Session Type *
                </label>
                <select
                  id="sessionType"
                  name="sessionType"
                  required
                  value={formData.sessionType}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('sessionType')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all ${
                    focusedField === 'sessionType' ? 'border-blue-400 shadow-lg' : 'border-gray-300'
                  }`}
                >
                  <option value="consultation">Free 30-Minute Consultation</option>
                  <option value="discovery">Discovery Package (3 sessions)</option>
                  <option value="growth">Growth Package (6 sessions)</option>
                  <option value="transformation">Transformation Package (12 sessions)</option>
                </select>
              </div>

              {/* Preferred Days */}
              <div>
                <label className="block text-gray-700 mb-3">
                  Preferred Days (select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {days.map((day, idx) => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => handleDayToggle(day)}
                      className={`px-4 py-3 rounded-xl transition-all transform hover:scale-105 ${
                        formData.preferredDays.includes(day)
                          ? `${dayColors[idx]} text-white shadow-lg`
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {day.slice(0, 3)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preferred Times */}
              <div>
                <label htmlFor="preferredTimes" className="block text-gray-700 mb-2">
                  Preferred Time of Day
                </label>
                <select
                  id="preferredTimes"
                  name="preferredTimes"
                  value={formData.preferredTimes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                >
                  <option value="">Select a time preference</option>
                  <option value="morning">Morning (9am-12pm)</option>
                  <option value="afternoon">Afternoon (12pm-5pm)</option>
                  <option value="evening">Evening (5pm-8pm)</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  What would you like to work on? (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Share a bit about what brings you to coaching and what you hope to achieve..."
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all ${
                    focusedField === 'message' ? 'border-blue-400 shadow-lg' : 'border-gray-300'
                  }`}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-xl"
                >
                  <span>Request Appointment</span>
                  <ArrowRight className="ml-2" size={20} />
                </button>
                <p className="text-sm text-gray-600 mt-4 text-center">
                  We'll contact you within 24 hours to confirm your appointment time.
                </p>
              </div>
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-12 backdrop-blur-sm bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-100 shadow-lg">
            <h3 className="text-gray-900 mb-4 flex items-center">
              <span className="text-2xl mr-2">✨</span>
              What to Expect
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">1</span>
                <span>You'll receive a confirmation email within 24 hours with your scheduled time</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">2</span>
                <span>A video call link will be sent before your session</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">3</span>
                <span>The consultation is completely free with no obligation</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-rose-400 to-red-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">4</span>
                <span>All conversations are confidential and judgment-free</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
