import { Heart, BookOpen, Users, Award, Sparkles, Star } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  return (
    <div>
      {/* Header */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Sparkles className="mr-2" size={16} />
            <span>Our Story</span>
          </div>
          <h1 className="text-white mb-6">About Guiding Light Coaching</h1>
          <p className="text-blue-100 max-w-3xl mx-auto text-lg">
            Empowering the next generation of Jewish leaders to live with purpose, confidence, and authenticity.
          </p>
        </div>
      </section>

      {/* Torah Verse */}
      <section className="py-16 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border-y-4 border-amber-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Star className="mx-auto text-amber-600 mb-6" size={48} />
          <div className="mb-4">
            <p className="text-2xl text-gray-800 italic mb-3">
              "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future."
            </p>
            <p className="text-xl text-gray-700 mb-2" dir="rtl">
              כִּי אָנֹכִי יָדַעְתִּי אֶת־הַמַּחֲשָׁבֹת אֲשֶׁר אָנֹכִי חֹשֵׁב עֲלֵיכֶם נְאֻם־יְהוָה מַחְשְׁבוֹת שָׁלוֹם וְלֹא לְרָעָה לָתֵת לָכֶם אַחֲרִית וְתִקְוָה
            </p>
            <p className="text-amber-700">— Yirmiyahu (Jeremiah) 29:11</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full opacity-20 -mr-48 -mt-48"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full mb-4">
                Our Journey
              </div>
              <h2 className="text-gray-900 mb-6">Rooted in Tradition, Focused on Your Future</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Guiding Light Coaching was founded on the belief that every young person deserves support 
                  as they navigate the unique challenges of adolescence and young adulthood—especially within 
                  the context of Jewish life and values.
                </p>
                <p>
                  We understand the pressures facing Jewish teens and young adults today: balancing tradition 
                  with modernity, finding your place in the community, making important life decisions, and 
                  discovering who you are meant to become.
                </p>
                <p>
                  Our approach combines professional coaching methodologies with Jewish wisdom, creating a 
                  supportive space where you can explore, grow, and thrive. Whether you're deeply connected 
                  to your heritage or still discovering what Judaism means to you, we meet you exactly where you are.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl opacity-30 blur-xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1659277318898-9562d00c3b49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMGNvbnN1bHRhdGlvbiUyMHJvb218ZW58MXx8fHwxNzY0MDAxNjI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Coaching environment"
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full mb-4">
              What Guides Us
            </div>
            <h2 className="text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              These principles guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-pink-400">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-600 text-white rounded-xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Heart size={28} />
              </div>
              <h3 className="text-gray-900 mb-3">Compassion</h3>
              <p className="text-gray-600">
                We approach every person with empathy, understanding, and genuine care.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-amber-400">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-600 text-white rounded-xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <BookOpen size={28} />
              </div>
              <h3 className="text-gray-900 mb-3">Wisdom</h3>
              <p className="text-gray-600">
                Drawing from Jewish teachings and modern insights to guide growth.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-blue-400">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 text-white rounded-xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Users size={28} />
              </div>
              <h3 className="text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">
                Fostering connection to Jewish heritage and supportive relationships.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-purple-400">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-600 text-white rounded-xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Award size={28} />
              </div>
              <h3 className="text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                Committed to the highest standards of coaching and ethical practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Coach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4">
                Leadership
              </div>
              <h2 className="text-gray-900 mb-4">Meet Your Coach</h2>
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl overflow-hidden border-2 border-blue-100">
              <div className="md:flex">
                <div className="md:w-2/5 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20"></div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1761253464415-f0aa3564a1bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMGdyb3d0aCUyMGpvdXJuYWx8ZW58MXx8fHwxNzY0MDAxNjI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Coach"
                    className="relative w-full h-full object-cover min-h-96"
                  />
                </div>
                <div className="p-10 md:w-3/5">
                  <h3 className="text-gray-900 mb-2">Sarah Cohen, PCC</h3>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
                    Professional Certified Coach
                  </p>
                  
                  <p className="text-gray-600 mb-6 text-lg">
                    With over 10 years of experience working with Jewish youth, Sarah brings a unique blend 
                    of professional expertise and deep understanding of the Jewish experience.
                  </p>

                  <div className="mb-6">
                    <p className="text-gray-900 mb-3">Credentials & Training:</p>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">✓</span>
                        <span className="text-gray-600">Professional Certified Coach (PCC) - International Coaching Federation</span>
                      </div>
                      <div className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">✓</span>
                        <span className="text-gray-600">M.A. in Counseling Psychology</span>
                      </div>
                      <div className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-pink-400 to-rose-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">✓</span>
                        <span className="text-gray-600">Certificate in Jewish Educational Leadership</span>
                      </div>
                      <div className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-rose-400 to-red-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">✓</span>
                        <span className="text-gray-600">Youth Mental Health First Aid Certified</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg">
                    Sarah is passionate about helping young people discover their potential and create 
                    lives filled with meaning, purpose, and joy. She works with clients across the spectrum 
                    of Jewish observance and background.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Torah Wisdom Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="mx-auto mb-6" size={48} />
          <div className="mb-4">
            <p className="text-2xl md:text-3xl italic mb-4">
              "Who is wise? One who learns from every person."
            </p>
            <p className="text-xl mb-3" dir="rtl">
              אֵיזֶהוּ חָכָם? הַלּוֹמֵד מִכָּל אָדָם
            </p>
            <p className="text-cyan-200">— Pirkei Avot (Ethics of the Fathers) 4:1</p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1549825987-0b01889f671f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMGhvbGRpbmclMjBsaWdodHxlbnwxfHx8fDE3NjQwMDIzNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Hands holding light"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Sparkles className="inline mr-2" size={16} />
              <span>What Sets Us Apart</span>
            </div>
            <h2 className="text-white mb-4">What Makes Us Different</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="backdrop-blur-sm bg-white/10 p-8 rounded-2xl border-2 border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="text-6xl mb-6 text-center">🕎</div>
              <h3 className="mb-4 text-center">Jewish-Centered Approach</h3>
              <p className="text-blue-100 text-center">
                We integrate Jewish values, texts, and wisdom traditions into our coaching practice.
              </p>
            </div>

            <div className="backdrop-blur-sm bg-white/10 p-8 rounded-2xl border-2 border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="text-6xl mb-6 text-center">🎯</div>
              <h3 className="mb-4 text-center">Age-Specific Expertise</h3>
              <p className="text-purple-100 text-center">
                Specialized in the unique developmental needs of teens and young adults.
              </p>
            </div>

            <div className="backdrop-blur-sm bg-white/10 p-8 rounded-2xl border-2 border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="text-6xl mb-6 text-center">💡</div>
              <h3 className="mb-4 text-center">Holistic Support</h3>
              <p className="text-pink-100 text-center">
                Addressing identity, relationships, goals, spirituality, and well-being together.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
