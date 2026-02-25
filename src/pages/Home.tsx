import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, CheckCircle2, Users, Briefcase, Award, Star, 
  TrendingUp, Shield, Zap, MessageSquare, Mail, Play,
  BarChart3, Globe, Cpu, Lightbulb
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const SectionHeading = ({ title, subtitle, centered = false }: { title: string, subtitle?: string, centered?: boolean }) => (
  <div className={cn("mb-16", centered && "text-center")}>
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-3xl md:text-4xl lg:text-5xl text-navy-900"
    >
      {title}
    </motion.h2>
  </div>
);

export const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-navy-300/5 rounded-bl-[200px]" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-300/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 text-navy-300">
              Grow Your Business <br />
              <span className="text-blue-600">With Confidence</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              We provide innovative strategies and digital solutions to help your business scale faster, smarter, and more efficiently in today's competitive market.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-navy-900 text-white px-8 py-4 rounded-full font-medium hover:bg-navy-800 transition-all flex items-center group shadow-xl shadow-navy-900/20">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
              <Link to="/about" className="bg-white text-navy-900 border border-slate-200 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition-all">
                Learn More
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/business/800/600" 
                alt="Business Growth" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <TrendingUp size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Growth Rate</p>
                <p className="text-xl font-bold text-navy-900">+145%</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Trusted By Section */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-center text-slate-400 text-sm font-medium uppercase tracking-widest mb-10">Trusted by 500+ companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
            {['Microsoft', 'Google', 'Amazon', 'Adobe', 'Slack'].map((company) => (
              <span key={company} className="text-2xl font-display font-bold text-slate-400">{company}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Preview Section */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://picsum.photos/seed/team/800/800" 
              alt="Our Team" 
              className="rounded-3xl shadow-lg"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading 
              subtitle="About Our Company"
              title="We Are Dedicated To Your Success"
            />
            <p className="text-slate-600 mb-6 leading-relaxed">
              Founded in 2010, Nexus has been at the forefront of business innovation. We combine deep industry knowledge with cutting-edge technology to deliver results that matter.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Expert team with 15+ years experience',
                'Customized solutions for every client',
                'Data-driven decision making process'
              ].map((item) => (
                <li key={item} className="flex items-center text-slate-700">
                  <CheckCircle2 className="text-blue-600 mr-3" size={20} />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/about" className="inline-flex items-center text-blue-600 font-semibold hover:underline group">
              Read Our Full Story
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 4. Our Services Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            centered
            subtitle="Our Expertise"
            title="Comprehensive Solutions For Your Business"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: BarChart3, title: 'Business Strategy', desc: 'Develop long-term roadmaps for sustainable growth and market dominance.' },
              { icon: Globe, title: 'Digital Marketing', desc: 'Reach your target audience through data-driven campaigns and SEO.' },
              { icon: Cpu, title: 'Cloud Solutions', desc: 'Modernize your infrastructure with secure and scalable cloud technology.' },
              { icon: Shield, title: 'Cyber Security', desc: 'Protect your valuable assets with enterprise-grade security protocols.' },
              { icon: Users, title: 'HR Consulting', desc: 'Build and manage high-performing teams that drive your vision forward.' },
              { icon: Lightbulb, title: 'Innovation Lab', desc: 'Stay ahead of the curve with our R&D and product development services.' },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all group"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl mb-3 text-navy-900">{service.title}</h3>
                <p className="text-slate-500 mb-6 leading-relaxed">{service.desc}</p>
                <Link to="/services" className="text-sm font-semibold text-blue-600 flex items-center group-hover:underline">
                  Learn More <ArrowRight className="ml-1" size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us Section */}
      <section className="section-padding bg-navy-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading 
                subtitle="Why Choose Us"
                title="We Deliver Excellence In Every Project"
              />
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: Award, title: 'Quality First', desc: 'We never compromise on the quality of our deliverables.' },
                  { icon: MessageSquare, title: '24/7 Support', desc: 'Our team is always available to assist you with any issues.' },
                  { icon: Zap, title: 'Innovation', desc: 'We use the latest tools and methodologies to solve problems.' },
                  { icon: TrendingUp, title: 'Proven Results', desc: 'Our track record speaks for itself with 98% client satisfaction.' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-blue-400 mb-4">
                      <item.icon size={24} />
                    </div>
                    <h4 className="text-lg mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://picsum.photos/seed/excellence/800/1000" 
                alt="Excellence" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-navy-900/20 rounded-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. How We Work Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            centered
            subtitle="Our Process"
            title="How We Bring Your Vision To Life"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10" />
            {[
              { step: '01', title: 'Planning', desc: 'We define goals and create a detailed roadmap for success.' },
              { step: '02', title: 'Development', desc: 'Our experts build your solution using best practices.' },
              { step: '03', title: 'Launch', desc: 'We deploy your project and ensure everything runs smoothly.' },
              { step: '04', title: 'Support', desc: 'Continuous monitoring and optimization for long-term growth.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 text-center relative"
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-6 shadow-lg shadow-blue-600/20">
                  {item.step}
                </div>
                <h3 className="text-xl mb-3 text-navy-900">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Statistics Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { label: 'Projects Completed', value: '1,200+' },
            { label: 'Happy Clients', value: '950+' },
            { label: 'Years Experience', value: '15+' },
            { label: 'Awards Won', value: '45+' },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-4xl md:text-5xl font-display font-bold mb-2">{stat.value}</p>
              <p className="text-blue-100 text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Portfolio Showcase */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeading 
              subtitle="Our Portfolio"
              title="Recent Success Stories"
            />
            <Link to="/services" className="mb-16 bg-white text-navy-900 px-6 py-3 rounded-full font-medium border border-slate-200 hover:bg-slate-50 transition-all">
              View All Projects
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { category: 'Strategy', title: 'Global Market Expansion', img: 'https://picsum.photos/seed/p1/600/400' },
              { category: 'Digital', title: 'E-commerce Optimization', img: 'https://picsum.photos/seed/p2/600/400' },
              { category: 'Cloud', title: 'Infrastructure Migration', img: 'https://picsum.photos/seed/p3/600/400' },
            ].map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-navy-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-navy-900 px-6 py-2.5 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      View Details
                    </button>
                  </div>
                </div>
                <p className="text-blue-600 text-sm font-semibold mb-1">{project.category}</p>
                <h3 className="text-xl text-navy-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            centered
            subtitle="Testimonials"
            title="What Our Clients Say"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'CEO, TechFlow', text: 'Nexus transformed our business operations. Their strategic approach helped us increase revenue by 40% in just six months.', rating: 5 },
              { name: 'Michael Chen', role: 'Director, Global Logistics', text: 'The cloud migration was seamless. Their technical expertise and support are unmatched in the industry.', rating: 5 },
              { name: 'Emma Williams', role: 'Founder, Creative Agency', text: 'Working with Nexus was the best decision for our growth. They truly understand what it takes to scale a business.', rating: 5 },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full mr-4" />
                  <div>
                    <h4 className="font-bold text-navy-900">{testimonial.name}</h4>
                    <p className="text-xs text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Pricing Preview Section */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            centered
            subtitle="Pricing Plans"
            title="Choose The Right Plan For You"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Basic', price: '99', features: ['Business Audit', 'Monthly Report', 'Email Support', 'Basic SEO'] },
              { name: 'Standard', price: '299', popular: true, features: ['Full Strategy', 'Weekly Meetings', 'Priority Support', 'Advanced SEO', 'Social Media'] },
              { name: 'Premium', price: '599', features: ['Custom Solutions', 'Dedicated Manager', '24/7 Support', 'Full Digital Suite', 'PR Management'] },
            ].map((plan, i) => (
              <div 
                key={i}
                className={cn(
                  "p-10 rounded-3xl border transition-all",
                  plan.popular ? "bg-navy-900 text-white border-navy-900 shadow-2xl scale-105" : "bg-white text-navy-900 border-slate-100"
                )}
              >
                {plan.popular && <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">MOST POPULAR</span>}
                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className={cn("text-sm ml-2", plan.popular ? "text-slate-400" : "text-slate-500")}>/month</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <CheckCircle2 className={cn("mr-3", plan.popular ? "text-blue-400" : "text-blue-600")} size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={cn(
                  "w-full py-4 rounded-xl font-bold transition-all",
                  plan.popular ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-slate-100 hover:bg-slate-200 text-navy-900"
                )}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FAQ Section */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeading 
            centered
            subtitle="FAQ"
            title="Frequently Asked Questions"
          />
          <div className="space-y-4">
            {[
              { q: 'How long does a typical project take?', a: 'Project timelines vary depending on complexity, but most initial strategies are delivered within 4-6 weeks.' },
              { q: 'Do you offer custom pricing?', a: 'Yes, we can tailor our services and pricing to meet your specific business needs and budget.' },
              { q: 'What industries do you specialize in?', a: 'We have extensive experience in Tech, Finance, Healthcare, and E-commerce sectors.' },
              { q: 'Can I switch plans later?', a: 'Absolutely! You can upgrade or downgrade your plan at any time as your business evolves.' },
            ].map((faq, i) => (
              <details key={i} className="group border border-slate-100 rounded-2xl overflow-hidden">
                <summary className="flex justify-between items-center p-6 cursor-pointer bg-white hover:bg-slate-50 transition-colors list-none">
                  <span className="font-semibold text-navy-900">{faq.q}</span>
                  <div className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center group-open:rotate-180 transition-transform">
                    <ArrowRight size={14} className="rotate-90" />
                  </div>
                </summary>
                <div className="p-6 pt-0 text-slate-500 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Call To Action Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="bg-blue-600 rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-32 -mt-32" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-navy-900/20 rounded-full blur-3xl -mr-32 -mb-32" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl mb-6">Ready To Scale Your Business To New Heights?</h2>
              <p className="text-blue-100 mb-10 text-lg">Join hundreds of successful companies that have transformed their future with Nexus.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-slate-100 transition-all shadow-xl">
                  Start Your Project Today
                </Link>
                <Link to="/contact" className="bg-navy-900 text-white px-10 py-4 rounded-full font-bold hover:bg-navy-800 transition-all">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup (Optional but recommended) */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-xl text-navy-900 mb-1">Subscribe to our newsletter</h3>
            <p className="text-slate-500 text-sm">Get the latest business insights and news delivered to your inbox.</p>
          </div>
          <div className="flex w-full md:w-auto max-w-md">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow bg-white border border-slate-200 rounded-l-xl px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-r-xl font-semibold hover:bg-blue-700 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
