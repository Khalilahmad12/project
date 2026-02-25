import React from 'react';
import { motion } from 'motion/react';
import { 
  BarChart3, Globe, Cpu, Shield, Users, Lightbulb, 
  CheckCircle2, ArrowRight, PlayCircle, Zap, Target
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

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

export const Services = () => {
  return (
    <div>
      <PageHeader 
        title="Our Services" 
        subtitle="We offer a wide range of professional services designed to help your business thrive in the digital age."
      />

      {/* Detailed Services */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto space-y-24">
          {[
            { 
              icon: BarChart3, 
              title: 'Business Strategy', 
              desc: 'Our strategic consulting services help you navigate complex market dynamics and identify new growth opportunities. We work closely with your leadership team to develop actionable plans that drive results.',
              features: ['Market Analysis', 'Growth Roadmaps', 'Operational Efficiency', 'Financial Planning'],
              img: 'https://picsum.photos/seed/s1/800/600',
              reverse: false
            },
            { 
              icon: Globe, 
              title: 'Digital Marketing', 
              desc: 'In a digital-first world, your online presence is everything. We help you reach your target audience through sophisticated digital marketing campaigns that combine creativity with data analytics.',
              features: ['SEO & SEM', 'Content Strategy', 'Social Media Management', 'Email Marketing'],
              img: 'https://picsum.photos/seed/s2/800/600',
              reverse: true
            },
            { 
              icon: Cpu, 
              title: 'Cloud Solutions', 
              desc: 'Modernize your business infrastructure with our comprehensive cloud services. We help you migrate, manage, and optimize your cloud environment for maximum performance and cost-efficiency.',
              features: ['Cloud Migration', 'Infrastructure Management', 'Serverless Architecture', 'Cloud Security'],
              img: 'https://picsum.photos/seed/s3/800/600',
              reverse: false
            }
          ].map((service, i) => (
            <div key={i} className={cn("grid lg:grid-cols-2 gap-16 items-center", service.reverse && "lg:flex-row-reverse")}>
              <motion.div
                initial={{ opacity: 0, x: service.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={cn(service.reverse && "lg:order-2")}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-8">
                  <service.icon size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl text-navy-900 mb-6">{service.title}</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">{service.desc}</p>
                <div className="grid grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center text-slate-700">
                      <CheckCircle2 className="text-blue-600 mr-3 shrink-0" size={18} />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: service.reverse ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={cn(service.reverse && "lg:order-1")}
              >
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="rounded-[40px] shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Explanation */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Our Methodology</span>
            <h2 className="text-3xl md:text-4xl text-navy-900">How We Deliver Results</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Zap, title: 'Discovery', desc: 'We start by understanding your business, goals, and challenges through deep-dive sessions.' },
              { icon: Target, title: 'Strategy', desc: 'We develop a customized plan with clear milestones and measurable KPIs.' },
              { icon: PlayCircle, title: 'Execution', desc: 'Our team implements the strategy with precision, monitoring progress every step of the way.' },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 mx-auto mb-8">
                  <step.icon size={40} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-navy-900">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Pricing</span>
            <h2 className="text-3xl md:text-4xl text-navy-900">Transparent Pricing For Every Business</h2>
          </div>
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

      {/* CTA */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-5xl mx-auto bg-blue-600 rounded-[40px] p-12 md:p-20 text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-6">Need A Custom Solution?</h2>
          <p className="text-blue-100 mb-10 text-lg">We can create a tailored package that fits your unique business requirements perfectly.</p>
          <Link to="/contact" className="bg-navy-900 text-white px-10 py-4 rounded-full font-bold hover:bg-navy-800 transition-all inline-flex items-center">
            Talk To An Expert <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};
