import { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      category: 'General',
      question: 'What is life coaching?',
      answer: 'Life coaching is a partnership between a coach and client focused on helping you clarify goals, overcome obstacles, and create positive change. Unlike therapy, which often focuses on healing past wounds, coaching is forward-focused and action-oriented. We work together to help you discover your strengths, develop strategies, and achieve the outcomes you desire.',
    },
    {
      category: 'General',
      question: 'How is this different from therapy or counseling?',
      answer: 'While therapy typically addresses mental health diagnoses and past trauma, coaching is future-focused and goal-oriented. Coaching helps you identify what you want, create action plans, and build skills to achieve your goals. If you\'re dealing with serious mental health concerns, we\'ll recommend connecting with a licensed therapist. Coaching and therapy can also work well together.',
    },
    {
      category: 'General',
      question: 'Do I need to be religious or observant to work with you?',
      answer: 'Absolutely not! We welcome Jewish teens and young adults from all backgrounds and levels of observance. Whether you\'re secular, Reform, Conservative, Orthodox, or anywhere in between, our coaching meets you where you are. We integrate Jewish wisdom and values only to the extent that feels meaningful and relevant to you.',
    },
    {
      category: 'Logistics',
      question: 'How long are coaching sessions?',
      answer: 'Standard coaching sessions are one hour. The initial consultation is 30 minutes and completely free. We find that an hour provides enough time to dive deep into topics while maintaining focus and energy.',
    },
    {
      category: 'Logistics',
      question: 'How often do we meet?',
      answer: 'Most clients meet weekly or bi-weekly, depending on their needs and goals. Consistency is important for making progress, but we\'re flexible and can adjust the frequency based on your schedule and what works best for you.',
    },
    {
      category: 'Logistics',
      question: 'Are sessions in-person or virtual?',
      answer: 'All sessions are conducted via secure video call (Zoom). This allows us to work with clients anywhere in the country and provides convenience and flexibility for scheduling. You can join from home, your dorm room, or anywhere you have privacy and a good internet connection.',
    },
    {
      category: 'Logistics',
      question: 'What if I need to cancel or reschedule?',
      answer: 'Life happens! We understand that schedules change. We ask for 24 hours notice for cancellations or rescheduling. Late cancellations or no-shows may be charged. Please see our Policies page for complete details.',
    },
    {
      category: 'Age & Eligibility',
      question: 'What ages do you work with?',
      answer: 'We specialize in working with Jewish teens (ages 13-19) and young adults (ages 20-30). Our approach is specifically designed for the unique developmental needs and challenges of these age groups.',
    },
    {
      category: 'Age & Eligibility',
      question: 'Do I need parental permission if I\'m under 18?',
      answer: 'Yes, if you\'re under 18, we require parental/guardian consent to begin coaching. However, your sessions are confidential. We may involve parents in an initial conversation or occasional check-ins with your permission, but what you share in sessions stays between us (except in rare cases involving safety concerns).',
    },
    {
      category: 'Cost & Payment',
      question: 'How much does coaching cost?',
      answer: 'We offer three coaching packages: Discovery (3 sessions) for $297, Growth (6 sessions) for $547, and Transformation (12 sessions) for $997. All packages include a free 30-minute initial consultation. Payment plans are available to make coaching accessible.',
    },
    {
      category: 'Cost & Payment',
      question: 'Do you accept insurance?',
      answer: 'Coaching services are not typically covered by insurance. However, some HSA/FSA plans may cover coaching expenses. We can provide receipts that you can submit to your insurance company or flexible spending account. We also offer payment plans to make our services more accessible.',
    },
    {
      category: 'Cost & Payment',
      question: 'Are there scholarships or sliding scale fees available?',
      answer: 'We believe everyone deserves access to coaching support. We have a limited number of reduced-fee spots available based on financial need. Please reach out to discuss options - we\'re committed to working something out.',
    },
    {
      category: 'What to Expect',
      question: 'What happens in the first session?',
      answer: 'The first session (free 30-minute consultation) is a chance for us to get to know each other. We\'ll discuss what brings you to coaching, what you hope to achieve, and answer any questions you have. There\'s no pressure to commit - it\'s all about seeing if we\'re a good fit.',
    },
    {
      category: 'What to Expect',
      question: 'How do I know if coaching is right for me?',
      answer: 'Coaching works best when you\'re ready to make positive changes and willing to take action. If you\'re dealing with major mental health crises, therapy may be more appropriate. Coaching is great if you\'re feeling stuck, facing transitions, wanting to clarify goals, build confidence, or navigate challenges in relationships, identity, or life direction.',
    },
    {
      category: 'What to Expect',
      question: 'Is coaching confidential?',
      answer: 'Yes! Everything you share in coaching is confidential. The only exceptions are if there\'s concern about imminent harm to yourself or others, or if required by law. For clients under 18, while parents provide consent, your sessions remain private.',
    },
    {
      category: 'Jewish Content',
      question: 'Will we study Jewish texts in coaching?',
      answer: 'Only if you want to! Some clients love exploring Jewish wisdom and find that Torah, Talmud, or other texts offer powerful insights. Others prefer a more secular approach. We tailor each coaching relationship to what feels meaningful and helpful to you.',
    },
    {
      category: 'Jewish Content',
      question: 'What if I\'m questioning my Jewish identity?',
      answer: 'That\'s a perfect topic for coaching! Many young people explore and question their relationship to Judaism. We provide a safe, non-judgmental space to explore your identity, values, and what being Jewish means (or doesn\'t mean) to you.',
    },
    {
      category: 'Jewish Content',
      question: 'Can you help with specific Jewish practices like davening or Torah learning?',
      answer: 'Absolutely! We can help you develop sustainable learning schedules (like Daf Yomi or Parshat HaShavua), improve your connection to tefillah, plan effectively for Shabbat and chagim, and integrate any Jewish practices into your life in meaningful ways. All Jewish practice coaching is tailored to your level of observance and personal goals.',
    },
  ];

  const categories = Array.from(new Set(faqs.map(faq => faq.category)));
  const categoryColors = [
    'from-blue-400 to-cyan-500',
    'from-purple-400 to-pink-500',
    'from-green-400 to-emerald-500',
    'from-orange-400 to-red-500',
    'from-indigo-400 to-purple-500',
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Header */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <HelpCircle className="mr-2" size={16} />
            <span>Get Answers</span>
          </div>
          <h1 className="text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-purple-100 max-w-3xl mx-auto text-lg">
            Find answers to common questions about our coaching services. Don't see your question? 
            Feel free to <a href="/contact" className="underline hover:text-white transition-colors">contact us</a>.
          </p>
        </div>
      </section>

      {/* FAQs by Category */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200 rounded-full opacity-20 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 -ml-48 -mb-48"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category, catIdx) => (
            <div key={category} className="mb-16">
              <div className="text-center mb-8">
                <div className={`inline-block px-6 py-3 bg-gradient-to-r ${categoryColors[catIdx % categoryColors.length]} text-white rounded-full shadow-lg mb-2`}>
                  <span className="text-lg">{category}</span>
                </div>
              </div>
              <div className="space-y-4">
                {faqs
                  .filter(faq => faq.category === category)
                  .map((faq, index) => {
                    const globalIndex = faqs.indexOf(faq);
                    const isOpen = openIndex === globalIndex;
                    const isHovered = hoveredIndex === globalIndex;
                    
                    return (
                      <div
                        key={globalIndex}
                        className={`backdrop-blur-sm bg-white/90 rounded-2xl shadow-lg border-2 overflow-hidden transition-all transform ${
                          isHovered ? 'border-purple-300 shadow-xl -translate-y-1' : 'border-white/50'
                        }`}
                        onMouseEnter={() => setHoveredIndex(globalIndex)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors"
                        >
                          <span className="text-gray-900 pr-8">{faq.question}</span>
                          <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                            isOpen 
                              ? `bg-gradient-to-br ${categoryColors[catIdx % categoryColors.length]} text-white` 
                              : 'bg-gray-100 text-gray-400'
                          }`}>
                            {isOpen ? (
                              <ChevronUp size={20} />
                            ) : (
                              <ChevronDown size={20} />
                            )}
                          </div>
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-5 text-gray-600 animate-[fadeIn_0.3s_ease-in-out]">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-rose-600 to-orange-600">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          </div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="backdrop-blur-sm bg-white/10 rounded-3xl p-12 border-2 border-white/20 shadow-2xl">
            <div className="text-5xl mb-6">💬</div>
            <h2 className="text-white mb-4">Still Have Questions?</h2>
            <p className="mb-10 text-white/90 text-lg">
              We're here to help! Reach out and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-pink-600 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
              >
                <Sparkles className="mr-2" size={20} />
                Contact Us
              </a>
              <a
                href="/book"
                className="inline-flex items-center justify-center px-10 py-5 bg-transparent text-white border-2 border-white rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
