import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Users, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <section className="pt-40 pb-20 bg-navy-900 text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 rounded-bl-[200px]" />
    <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl md:text-6xl mb-6">{title}</h1>
        <p className="text-blue-100 text-lg max-w-2xl">{subtitle}</p>
      </motion.div>
    </div>
  </section>
);

export const About = () => {
  return (
    <div>
      <PageHeader 
        title="Our Story & Mission" 
        subtitle="We are a team of passionate experts dedicated to helping businesses navigate the complexities of the modern market."
      />

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Our Journey</span>
            <h2 className="text-3xl md:text-4xl text-navy-900 mb-6">Over A Decade Of Innovation</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Founded in 2010, Nexus began with a simple vision: to bridge the gap between traditional business wisdom and the rapidly evolving digital landscape. What started as a small consultancy has grown into a global firm serving clients across four continents.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our growth has been fueled by a relentless commitment to our clients' success. We don't just provide advice; we partner with you to implement real changes that drive measurable results.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-bold text-blue-600 mb-1">2010</p>
                <p className="text-sm text-slate-500">Year Founded</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600 mb-1">50+</p>
                <p className="text-sm text-slate-500">Expert Consultants</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/office/800/600" 
              alt="Our Office" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600 rounded-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white p-12 rounded-[40px] shadow-sm border border-slate-100"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-8">
              <Target size={32} />
            </div>
            <h3 className="text-2xl mb-4 text-navy-900">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To empower businesses with the tools, strategies, and insights they need to achieve sustainable growth and create lasting value for their stakeholders in an ever-changing world.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white p-12 rounded-[40px] shadow-sm border border-slate-100"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-8">
              <Eye size={32} />
            </div>
            <h3 className="text-2xl mb-4 text-navy-900">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To be the world's most trusted partner for business transformation, recognized for our integrity, innovation, and the exceptional results we deliver for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Our Values</span>
            <h2 className="text-3xl md:text-4xl text-navy-900">The Principles That Guide Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Integrity', desc: 'We act with honesty and transparency in everything we do.' },
              { title: 'Innovation', desc: 'We constantly seek new ways to solve complex problems.' },
              { title: 'Collaboration', desc: 'We believe the best results come from working together.' },
              { title: 'Excellence', desc: 'We strive for the highest standards in all our work.' },
            ].map((value, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="text-lg font-bold mb-3 text-navy-900">{value.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Meet The Experts</span>
            <h2 className="text-3xl md:text-4xl text-navy-900">Our Leadership Team</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'David Miller', role: 'CEO & Founder', img: 'https://picsum.photos/seed/t1/400/500' },
              { name: 'Sarah Jenkins', role: 'Chief Strategy Officer', img: 'https://picsum.photos/seed/t2/400/500' },
              { name: 'Robert Chen', role: 'Head of Technology', img: 'https://picsum.photos/seed/t3/400/500' },
              { name: 'Amanda Ross', role: 'Director of Marketing', img: 'https://picsum.photos/seed/t4/400/500' },
            ].map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-lg font-bold text-navy-900">{member.name}</h4>
                  <p className="text-sm text-blue-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto bg-navy-900 rounded-[40px] p-12 md:p-20 text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-6">Want To Join Our Team?</h2>
          <p className="text-slate-400 mb-10 text-lg">We're always looking for talented individuals to join our mission.</p>
          <Link to="/contact" className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all inline-flex items-center">
            View Careers <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};
