import { Shield, Clock, Lock, FileText, Sparkles, Scale } from 'lucide-react';

export function Policies() {
  const sections = [
    { id: 'confidentiality', icon: Lock, title: 'Confidentiality & Privacy', color: 'from-blue-400 to-cyan-500' },
    { id: 'scheduling', icon: Clock, title: 'Scheduling & Cancellation Policy', color: 'from-purple-400 to-pink-500' },
    { id: 'payment', icon: FileText, title: 'Payment Terms', color: 'from-green-400 to-emerald-500' },
    { id: 'ethics', icon: Shield, title: 'Professional Code of Ethics', color: 'from-orange-400 to-red-500' },
    { id: 'minors', icon: Shield, title: 'Working with Minors (Under 18)', color: 'from-indigo-400 to-purple-500' },
  ];

  return (
    <div>
      {/* Header */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Scale className="mr-2" size={16} />
            <span>Professional Standards</span>
          </div>
          <h1 className="text-white mb-4">Policies & Terms</h1>
          <p className="text-blue-100 max-w-3xl mx-auto text-lg">
            Our commitment to providing professional, ethical, and supportive coaching services.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-gradient-to-r from-purple-50 to-blue-50 border-y-2 border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {sections.map((section, idx) => (
              <a 
                key={section.id}
                href={`#${section.id}`} 
                className={`group px-5 py-3 bg-gradient-to-r ${section.color} text-white rounded-xl hover:shadow-lg transition-all transform hover:scale-105`}
              >
                <section.icon className="inline mr-2 group-hover:scale-110 transition-transform" size={16} />
                <span className="hidden sm:inline">{section.title}</span>
                <span className="sm:hidden">{section.title.split(' ')[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full opacity-20 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 -ml-48 -mb-48"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Confidentiality */}
          <div id="confidentiality" className="scroll-mt-8">
            <div className="backdrop-blur-sm bg-white/90 rounded-3xl shadow-xl p-10 border-2 border-blue-100 transform hover:scale-[1.02] transition-all">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 text-white rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <Lock size={28} />
                </div>
                <h2 className="text-gray-900">Confidentiality & Privacy</h2>
              </div>
              <div className="prose max-w-none text-gray-600 space-y-4">
                <p>
                  Your privacy is of utmost importance. All information shared during coaching sessions, 
                  including the fact that you are a client, is kept strictly confidential.
                </p>
                <h3 className="text-gray-900 mt-6 mb-3">Exceptions to Confidentiality:</h3>
                <ul className="space-y-2">
                  {[
                    'Imminent risk of harm to yourself or others',
                    'Suspected abuse or neglect of a minor or vulnerable adult',
                    'Court-ordered disclosure',
                    'With your written permission to share information with specified individuals',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 bg-blue-50 p-4 rounded-xl border-l-4 border-blue-400">
                  For clients under 18, while parents/guardians provide consent for coaching, session 
                  content remains confidential unless there are safety concerns or you provide permission 
                  to share information.
                </p>
              </div>
            </div>
          </div>

          {/* Scheduling & Cancellation */}
          <div id="scheduling" className="scroll-mt-8">
            <div className="backdrop-blur-sm bg-white/90 rounded-3xl shadow-xl p-10 border-2 border-purple-100 transform hover:scale-[1.02] transition-all">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 text-white rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <Clock size={28} />
                </div>
                <h2 className="text-gray-900">Scheduling & Cancellation Policy</h2>
              </div>
              <div className="prose max-w-none text-gray-600 space-y-6">
                <div>
                  <h3 className="text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-2">📅</span>
                    Scheduling:
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Sessions are typically scheduled on a regular, recurring basis (weekly or bi-weekly)',
                      'You will receive a calendar invitation and video call link before each session',
                      'Sessions begin and end on time, even if you join late',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-2">🔄</span>
                    Cancellation & Rescheduling:
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Please provide at least 24 hours notice to cancel or reschedule a session',
                      'Cancellations with proper notice can be rescheduled without penalty',
                      'Late cancellations (less than 24 hours) or no-shows will be charged the full session fee',
                      'Exceptions may be made for emergencies or illness at the coach\'s discretion',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <p className="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-400">
                  <strong>Coach Cancellations:</strong> If I need to cancel or reschedule, I will provide as much notice as possible and work 
                  with you to find an alternative time. You will not be charged for coach-initiated cancellations.
                </p>
              </div>
            </div>
          </div>

          {/* Payment Terms */}
          <div id="payment" className="scroll-mt-8">
            <div className="backdrop-blur-sm bg-white/90 rounded-3xl shadow-xl p-10 border-2 border-green-100 transform hover:scale-[1.02] transition-all">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 text-white rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <FileText size={28} />
                </div>
                <h2 className="text-gray-900">Payment Terms</h2>
              </div>
              <div className="prose max-w-none text-gray-600 space-y-6">
                <div>
                  <h3 className="text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-2">💳</span>
                    Package Payments:
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Payment for coaching packages is due before or at the first session',
                      'Payment plans are available - please inquire during consultation',
                      'Accepted payment methods: credit/debit card, Venmo, Zelle, check',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-2">↩️</span>
                    Refund Policy:
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'The initial consultation is free with no obligation',
                      'After your first paid session, unused sessions may be refunded within 30 days',
                      'After 30 days, no refunds are available, but unused sessions can be gifted or transferred',
                      'Sessions used as part of a package are non-refundable',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <p className="bg-green-50 p-4 rounded-xl border-l-4 border-green-400">
                  <strong>Financial Hardship:</strong> We believe everyone deserves access to coaching. If cost is a barrier, please reach out 
                  to discuss scholarship opportunities or reduced-fee options.
                </p>
              </div>
            </div>
          </div>

          {/* Code of Ethics */}
          <div id="ethics" className="scroll-mt-8">
            <div className="backdrop-blur-sm bg-white/90 rounded-3xl shadow-xl p-10 border-2 border-orange-100 transform hover:scale-[1.02] transition-all">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 text-white rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <Shield size={28} />
                </div>
                <h2 className="text-gray-900">Professional Code of Ethics</h2>
              </div>
              <div className="prose max-w-none text-gray-600 space-y-4">
                <p>
                  As a Professional Certified Coach (PCC) through the International Coaching Federation (ICF), 
                  I adhere to the ICF Code of Ethics and Core Competencies.
                </p>
                
                <h3 className="text-gray-900 mt-6 mb-3">Key Commitments:</h3>
                <ul className="space-y-2">
                  {[
                    'Maintaining the highest standards of integrity and professionalism',
                    'Respecting your autonomy and right to make your own choices',
                    'Creating a safe, supportive, and non-judgmental environment',
                    'Maintaining appropriate boundaries in the coaching relationship',
                    'Engaging in ongoing professional development and supervision',
                    'Recognizing when issues are beyond my scope and making appropriate referrals',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-orange-400 to-red-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <p className="bg-orange-50 p-4 rounded-xl border-l-4 border-orange-400 mt-4">
                  <strong>Scope of Practice:</strong> Coaching is not therapy, counseling, or medical advice. If you are experiencing serious 
                  mental health concerns, substance abuse issues, or crisis situations, I will help you 
                  connect with appropriate mental health professionals. Coaching and therapy can work well 
                  together, and I'm happy to coordinate with your therapist with your permission.
                </p>
              </div>
            </div>
          </div>

          {/* Working with Minors */}
          <div id="minors" className="scroll-mt-8">
            <div className="backdrop-blur-sm bg-white/90 rounded-3xl shadow-xl p-10 border-2 border-indigo-100 transform hover:scale-[1.02] transition-all">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 text-white rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <Shield size={28} />
                </div>
                <h2 className="text-gray-900">Working with Minors (Under 18)</h2>
              </div>
              <div className="prose max-w-none text-gray-600 space-y-6">
                <div>
                  <h3 className="text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-2">👨‍👩‍👧</span>
                    Parental Consent:
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Parent or legal guardian consent is required before beginning coaching',
                      'Parents will be asked to sign a consent form acknowledging the coaching agreement and confidentiality policy',
                      'One parent consultation may be included to discuss goals and answer questions',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-indigo-400 to-purple-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-2">🔒</span>
                    Confidentiality with Minors:
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Session content remains confidential between coach and client',
                      'General progress updates may be shared with parents with client permission',
                      'Safety concerns (risk of harm) will be shared with parents immediately',
                      'The teen/client has input into what information is shared with parents',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-indigo-400 to-purple-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <p className="bg-indigo-50 p-4 rounded-xl border-l-4 border-indigo-400">
                  <strong>Safety & Mandated Reporting:</strong> As someone working with minors, I am a mandated reporter. This means I am legally 
                  required to report suspected abuse, neglect, or imminent risk of harm to appropriate 
                  authorities and parents/guardians.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Policies */}
          <div className="backdrop-blur-sm bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl shadow-xl p-10 border-2 border-slate-200">
            <h2 className="text-gray-900 mb-6 flex items-center">
              <span className="text-3xl mr-3">📋</span>
              Additional Policies
            </h2>
            <div className="space-y-6 text-gray-600">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-gray-900 mb-3">Technology & Communication:</h3>
                <p>
                  All video sessions use secure, HIPAA-compliant platforms. Email communication is for 
                  scheduling and brief check-ins only. Urgent matters should be addressed in scheduled 
                  sessions or by phone.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-gray-900 mb-3">Termination of Coaching:</h3>
                <p>
                  Either party may terminate the coaching relationship at any time. If terminating mid-package, 
                  unused sessions will be handled according to the refund policy. I will provide referrals 
                  to other resources as appropriate.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-gray-900 mb-3">Agreement to Policies:</h3>
                <p>
                  By scheduling and attending coaching sessions, you acknowledge that you have read, 
                  understood, and agree to these policies and terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Questions CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          </div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="backdrop-blur-sm bg-white/10 rounded-3xl p-12 border-2 border-white/20 shadow-2xl">
            <div className="text-5xl mb-6">💭</div>
            <h2 className="text-white mb-4">Questions About Our Policies?</h2>
            <p className="mb-10 text-white/90 text-lg">
              We're happy to clarify any of our policies. Don't hesitate to reach out.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-10 py-5 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
            >
              <Sparkles className="mr-2" size={20} />
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
