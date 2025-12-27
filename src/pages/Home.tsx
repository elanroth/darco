import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, Target, Sparkles, BookOpen } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <Sparkles className="mr-2" size={16} />
                <span className="text-sm">Transform Your Future</span>
              </div>
              <h1 className="text-white mb-6">
                Guiding Jewish Teens & Young Adults Toward Their Best Selves
              </h1>
              <p className="text-blue-50 text-lg mb-8">
                Navigate life's challenges with confidence, purpose, and Jewish wisdom. 
                Our coaching helps you discover your strengths, overcome obstacles, and create a meaningful path forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/book"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
                >
                  Book a Free Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-lg opacity-30 blur-2xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758525861568-ddaf9c5f7ee6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50b3IlMjBjb2FjaGluZyUyMHlvdW5nJTIwYWR1bHR8ZW58MXx8fHwxNzY0MDAxNjI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Coaching session"
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Torah Verse Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border-y-4 border-amber-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="mx-auto text-amber-600 mb-6" size={48} />
          <div className="mb-4">
            <p className="text-2xl text-gray-800 italic mb-3">
              "Your word is a lamp to my feet, a light for my path."
            </p>
            <p className="text-xl text-gray-700 mb-2" dir="rtl">
              נֵר־לְרַגְלִי דְבָרֶךָ וְאוֹר לִנְתִיבָתִי
            </p>
            <p className="text-amber-700">— Tehillim (Psalms) 119:105</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full opacity-20 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 -ml-48 -mb-48"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full mb-4">
              Our Approach
            </div>
            <h2 className="text-gray-900 mb-4">How We Guide Your Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Combining modern coaching techniques with timeless Jewish values to help you thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-transparent hover:border-blue-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-xl mb-6 shadow-lg">
                  <Star size={32} />
                </div>
                <h3 className="text-gray-900 mb-4">Identity & Purpose</h3>
                <p className="text-gray-600">
                  Discover your unique gifts and how they connect to your Jewish heritage and personal mission.
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-transparent hover:border-pink-300">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-600 text-white rounded-xl mb-6 shadow-lg">
                  <Heart size={32} />
                </div>
                <h3 className="text-gray-900 mb-4">Relationships & Community</h3>
                <p className="text-gray-600">
                  Build meaningful connections with family, friends, and your Jewish community.
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-transparent hover:border-purple-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-600 text-white rounded-xl mb-6 shadow-lg">
                  <Target size={32} />
                </div>
                <h3 className="text-gray-900 mb-4">Goals & Growth</h3>
                <p className="text-gray-600">
                  Set clear goals and develop the skills and mindset to achieve them with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Quote */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4">
            <p className="text-2xl md:text-3xl italic mb-4">
              "Be strong and courageous. Do not be afraid or discouraged, for the LORD your God will be with you wherever you go."
            </p>
            <p className="text-xl mb-3" dir="rtl">
              חֲזַק וֶאֱמָץ אַל־תַּעֲרֹץ וְאַל־תֵּחָת כִּי עִמְּךָ יְהוָה אֱלֹהֶיךָ בְּכֹל אֲשֶׁר תֵּלֵךְ
            </p>
            <p className="text-indigo-200">— Yehoshua (Joshua) 1:9</p>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-30 blur-xl"></div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1746645856204-a9a2dc5d32c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdpc2glMjBjb21tdW5pdHklMjB5b3V0aHxlbnwxfHx8fDE3NjQwMDE2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Young adults in community"
                  className="relative rounded-2xl shadow-2xl w-full h-96 object-cover border-4 border-white"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4">
                Who We Serve
              </div>
              <h2 className="text-gray-900 mb-6">Empowering Young Jewish Lives</h2>
              <p className="text-gray-600 text-lg mb-6">
                We specialize in supporting Jewish teens (ages 13-19) and young adults (ages 20-30) who are:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 text-white rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">✓</span>
                  <span className="text-gray-700 text-lg">Navigating transitions (college, career, relationships)</span>
                </li>
                <li className="flex items-start group">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 text-white rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">✓</span>
                  <span className="text-gray-700 text-lg">Exploring their Jewish identity and spiritual path</span>
                </li>
                <li className="flex items-start group">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-500 text-white rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">✓</span>
                  <span className="text-gray-700 text-lg">Facing anxiety, stress, or life challenges</span>
                </li>
                <li className="flex items-start group">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-rose-400 to-red-500 text-white rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">✓</span>
                  <span className="text-gray-700 text-lg">Seeking clarity on their values and goals</span>
                </li>
                <li className="flex items-start group">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-indigo-400 to-blue-500 text-white rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">✓</span>
                  <span className="text-gray-700 text-lg">Looking to build confidence and leadership skills</span>
                </li>
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 mt-8 group"
              >
                Learn more about our approach
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Impact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="text-5xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">10+</div>
              <p className="text-gray-600 text-lg">Years of Experience</p>
            </div>
            <div className="p-8">
              <div className="text-5xl mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">100+</div>
              <p className="text-gray-600 text-lg">Teens & Young Adults Served</p>
            </div>
            <div className="p-8">
              <div className="text-5xl mb-4 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">95%</div>
              <p className="text-gray-600 text-lg">Client Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-rose-500 to-purple-600"></div>
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1763713715406-35dbfbae6dd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHN1bnNldCUyMGluc3BpcmF0aW9ufGVufDF8fHx8MTc2NDAwMjM2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Inspiring sunset"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="backdrop-blur-sm bg-white/10 rounded-3xl p-12 border-2 border-white/20 shadow-2xl">
            <h2 className="text-white mb-6">Ready to Start Your Journey?</h2>
            <p className="mb-10 text-white/90 text-lg">
              Schedule a free 30-minute consultation to see if coaching is right for you. 
              No pressure, just an opportunity to connect and explore possibilities.
            </p>
            <Link
              to="/book"
              className="inline-flex items-center px-10 py-5 bg-white text-purple-600 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
            >
              Book Your Free Consultation
              <ArrowRight className="ml-2" size={24} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
