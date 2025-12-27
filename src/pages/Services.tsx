import { Check, Clock, Video, Users, BookOpen, Calendar, Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Services() {
  const [hoveredPackage, setHoveredPackage] = useState<number | null>(null);

  return (
    <div>
      {/* Header */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Sparkles className="mr-2" size={16} />
            <span>Transformative Coaching</span>
          </div>
          <h1 className="text-white mb-4">Our Services</h1>
          <p className="text-purple-100 max-w-3xl mx-auto text-lg">
            Flexible coaching options designed to meet you where you are and support your unique journey.
          </p>
        </div>
      </section>

      {/* Coaching Packages */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full opacity-20 -mr-48 -mt-48"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full mb-4">
              Choose Your Path
            </div>
            <h2 className="text-gray-900 mb-4">Coaching Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              All sessions are conducted via secure video call for your convenience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Discovery Package */}
            <div 
              className="group bg-white rounded-2xl shadow-lg p-8 border-2 border-blue-200 hover:border-blue-400 transition-all transform hover:-translate-y-2 hover:shadow-2xl"
              onMouseEnter={() => setHoveredPackage(1)}
              onMouseLeave={() => setHoveredPackage(null)}
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 text-white rounded-xl mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Sparkles size={28} />
                </div>
                <h3 className="text-gray-900 mb-2">Discovery</h3>
                <div className="mb-4">
                  <span className="text-5xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">$297</span>
                </div>
                <p className="text-gray-600">Perfect for getting started</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start group/item">
                  <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-500 text-white rounded-lg flex items-center justify-center text-sm mr-3 group-hover/item:scale-110 transition-transform">✓</span>
                  <span className="text-gray-700">3 one-hour sessions</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-500 text-white rounded-lg flex items-center justify-center text-sm mr-3 group-hover/item:scale-110 transition-transform">✓</span>
                  <span className="text-gray-700">Goal clarity assessment</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-500 text-white rounded-lg flex items-center justify-center text-sm mr-3 group-hover/item:scale-110 transition-transform">✓</span>
                  <span className="text-gray-700">Action plan development</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-500 text-white rounded-lg flex items-center justify-center text-sm mr-3 group-hover/item:scale-110 transition-transform">✓</span>
                  <span className="text-gray-700">Email support between sessions</span>
                </li>
              </ul>

              <Link
                to="/book"
                className="block w-full text-center px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Get Started
              </Link>
            </div>

            {/* Growth Package */}
            <div 
              className="group bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-2xl p-8 border-4 border-purple-400 relative transform hover:-translate-y-3 hover:shadow-3xl transition-all"
              onMouseEnter={() => setHoveredPackage(2)}
              onMouseLeave={() => setHoveredPackage(null)}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full shadow-lg animate-pulse">
                  Most Popular
                </span>
              </div>
              
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Heart size={28} />
                </div>
                <h3 className="text-gray-900 mb-2">Growth</h3>
                <div className="mb-4">
                  <span className="text-5xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">$547</span>
                </div>
                <p className="text-gray-600">For sustained progress</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start group/item">
                  <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg flex items-center justify-center text-sm mr-3 group-hover/item:scale-110 transition-transform">✓</span>
                  <span className="text-gray-700">6 one-hour sessions</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg flex items-center justify-center text-sm mr-3 group-hover/item:scale-110 transition-transform">✓</span>
                  <span className="text-gray-700">Comprehensive assessments</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg flex items-center justify-center text-sm mr-3 group-hover/item:scale-110 transition-transform">✓</span>
                  <span className="text-gray-700">Customized resources & worksheets</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg flex items-center justify-center text-sm mr-3 group-hover/item:scale-110 transition-transform">✓</span>
                  <span className="text-gray-700">Priority email support</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg flex items-center justify-center text-sm mr-3 group-hover/item:scale-110 transition-transform">✓</span>
                  <span className="text-gray-700">Jewish text study integration (optional)</span>
                </li>
              </ul>

              <Link
                to="/book"
                className="block w-full text-center px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-xl"
              >
                Get Started
              </Link>
            </div>

            {/* Transformation Package */}
            <div 
              className="group bg-white rounded-2xl shadow-lg p-8 border-2 border-indigo-200 hover:border-indigo-400 transition-all transform hover:-translate-y-2 hover:shadow-2xl"
              onMouseEnter={() => setHoveredPackage(3)}
              onMouseLeave={() => setHoveredPackage(null)}
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-xl mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <BookOpen size={28} />
                </div>
                <h3 className="text-gray-900 mb-2">Transformation</h3>
                <div className="mb-4">
                  <span className="text-5xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">$997</span>
                </div>
                <p className="text-gray-600">Deep, lasting change</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start group/item">
                  <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-lg flex items-center justify-center text-sm mr-3 group-hover/item:scale-110 transition-transform">✓</span>
                  <span className="text-gray-700">12 one-hour sessions</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-lg flex items-center justify-center text-sm mr-3 group-hover/item:scale-110 transition-transform">✓</span>
                  <span className="text-gray-700">In-depth assessments & tracking</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-lg flex items-center justify-center text-sm mr-3 group-hover/item:scale-110 transition-transform">✓</span>
                  <span className="text-gray-700">Personalized curriculum</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-lg flex items-center justify-center text-sm mr-3 group-hover/item:scale-110 transition-transform">✓</span>
                  <span className="text-gray-700">Unlimited email support</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-lg flex items-center justify-center text-sm mr-3 group-hover/item:scale-110 transition-transform">✓</span>
                  <span className="text-gray-700">Parent/family consultation (1 session)</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-lg flex items-center justify-center text-sm mr-3 group-hover/item:scale-110 transition-transform">✓</span>
                  <span className="text-gray-700">Progress celebration & future planning</span>
                </li>
              </ul>

              <Link
                to="/book"
                className="block w-full text-center px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg">
              All packages include a free 30-minute initial consultation. Payment plans available.
            </p>
          </div>
        </div>
      </section>

      {/* Jewish Practice Coaching */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200 rounded-full opacity-20 -ml-48 -mb-48"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-amber-200 text-amber-800 rounded-full mb-4">
              <span className="text-2xl mr-2">📖</span>
              Jewish Life Coaching
            </div>
            <h2 className="text-gray-900 mb-4">Deepen Your Jewish Practice</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Whether you're looking to strengthen your connection to Torah, improve your davening, or better 
              integrate Jewish observance into your daily life, we're here to support your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-blue-400">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📚</div>
              <h3 className="text-gray-900 mb-3">Torah Learning Goals</h3>
              <p className="text-gray-600 mb-4">
                Create sustainable learning schedules and stay motivated with:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Daf Yomi tracking and support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Parshat HaShavua study habits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Mishnah or Gemara learning schedules</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Building consistent chavruta relationships</span>
                </li>
              </ul>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-purple-400">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🙏</div>
              <h3 className="text-gray-900 mb-3">Tefillah & Connection</h3>
              <p className="text-gray-600 mb-4">
                Enhance your prayer life and spiritual connection:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Developing meaningful kavana (intention)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Understanding the structure of tefillah</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Building consistent davening habits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Overcoming distractions and challenges</span>
                </li>
              </ul>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-pink-400">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🕯️</div>
              <h3 className="text-gray-900 mb-3">Shabbat & Chagim Planning</h3>
              <p className="text-gray-600 mb-4">
                Make holy days more meaningful and less stressful:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <span>Weekly Shabbat preparation systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <span>Holiday planning and organization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <span>Creating meaningful family traditions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <span>Balancing observance with other commitments</span>
                </li>
              </ul>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-green-400">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🎯</div>
              <h3 className="text-gray-900 mb-3">Mitzvah Observance</h3>
              <p className="text-gray-600 mb-4">
                Integrate mitzvot into daily life authentically:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Tzedakah and chesed habits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Kashrut navigation and decisions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Modesty and mindful living</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Finding personal meaning in observance</span>
                </li>
              </ul>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-indigo-400">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🌟</div>
              <h3 className="text-gray-900 mb-3">Spiritual Growth</h3>
              <p className="text-gray-600 mb-4">
                Cultivate a deeper relationship with Hashem:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Hitbodedut and personal prayer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Mussar and character development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Finding your unique spiritual path</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Overcoming spiritual challenges</span>
                </li>
              </ul>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-orange-400">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">⏰</div>
              <h3 className="text-gray-900 mb-3">Time Management</h3>
              <p className="text-gray-600 mb-4">
                Balance Jewish life with modern demands:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Integrating prayer times into schedules</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Making time for learning and growth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Balancing school/work with observance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Creating sustainable routines</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 text-lg italic">
              "All Jewish practice coaching is tailored to your level of observance and personal goals. 
              We meet you where you are and support the growth that's meaningful to you."
            </p>
          </div>
        </div>
      </section>

      {/* General Focus Areas */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 -mr-48 -mt-48"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4">
              Additional Focus Areas
            </div>
            <h2 className="text-gray-900 mb-4">We Also Support You With</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Life coaching that addresses all aspects of your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Identity & Self-Discovery', desc: 'Understanding who you are, your values, and your place in the Jewish community and wider world.', emoji: '🔍' },
              { title: 'Life Transitions', desc: 'Navigating high school, gap year, college, career choices, and other major life changes.', emoji: '🚀' },
              { title: 'Relationships', desc: 'Building healthy relationships with family, friends, romantic partners, and community.', emoji: '💞' },
              { title: 'Jewish Identity', desc: 'Exploring your connection to Judaism, spirituality, tradition, and religious practice.', emoji: '✡️' },
              { title: 'Stress & Anxiety', desc: 'Developing coping strategies and resilience for managing academic, social, and personal pressures.', emoji: '🧘' },
              { title: 'Goal Setting & Achievement', desc: 'Clarifying goals, creating action plans, and building the confidence to pursue your dreams.', emoji: '🎯' },
              { title: 'Leadership Development', desc: 'Cultivating leadership skills for school, community organizations, and future career.', emoji: '👑' },
              { title: 'Decision Making', desc: 'Making thoughtful decisions about college, career, gap year, and other important choices.', emoji: '🤔' },
              { title: 'Confidence Building', desc: 'Developing self-esteem, overcoming self-doubt, and embracing your unique strengths.', emoji: '💪' },
            ].map((area, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 border-2 border-gray-100 hover:border-blue-300">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{area.emoji}</div>
                <h3 className="text-gray-900 mb-2">{area.title}</h3>
                <p className="text-gray-600">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full mb-4">
              Simple Process
            </div>
            <h2 className="text-gray-900 mb-4">How Coaching Works</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: '1. Book Consultation', desc: 'Schedule a free 30-minute call to discuss your needs and see if we\'re a good fit.', color: 'from-blue-400 to-cyan-500' },
              { icon: Users, title: '2. Choose Package', desc: 'Select the coaching package that best fits your goals and timeline.', color: 'from-purple-400 to-pink-500' },
              { icon: Video, title: '3. Start Sessions', desc: 'Meet regularly via video call at times that work for your schedule.', color: 'from-pink-400 to-rose-500' },
              { icon: Check, title: '4. Achieve Goals', desc: 'Make progress, gain clarity, and create positive change in your life.', color: 'from-green-400 to-emerald-500' },
            ].map((step, idx) => (
              <div key={idx} className="text-center group">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${step.color} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <step.icon size={36} />
                </div>
                <h3 className="text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-pink-600 to-purple-700"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="backdrop-blur-sm bg-white/10 rounded-3xl p-12 border-2 border-white/20 shadow-2xl">
            <h2 className="text-white mb-6">Ready to Get Started?</h2>
            <p className="mb-10 text-white/90 text-lg">
              Book your free consultation today and take the first step toward positive change.
            </p>
            <Link
              to="/book"
              className="inline-flex items-center px-10 py-5 bg-white text-purple-600 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
            >
              Schedule Free Consultation
              <Sparkles className="ml-2" size={24} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
