import { useEffect, useRef, useState } from 'react';
import { 
  Target, 
  BarChart3, 
  Bot, 
  MapPin, 
  Video, 
  Megaphone, 
  MessageSquare,
  Check,
  ArrowRight,
  Phone,
  Mail,
  MapPinned,
  Send,
  Calendar,
  Globe,
  Smartphone,
  TrendingUp,
  Sparkles,
  Users,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Hook for intersection observer animations
function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

// Navigation Component
function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark/90 backdrop-blur-md border-b border-white/10' : ''}`}>
      <div className="w-full px-6 lg:px-12 py-4 flex items-center justify-between">
        <a href="#" className="font-mono text-lg font-semibold tracking-wider text-white">
          SREPRA
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-gray-secondary hover:text-white transition-colors">Services</a>
          <a href="#pricing" className="text-sm text-gray-secondary hover:text-white transition-colors">Pricing</a>
          <a href="#contact" className="text-sm text-gray-secondary hover:text-white transition-colors">Contact</a>
        </div>
        <a 
          href="https://wa.me/919347069294" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button className="bg-lime text-dark hover:bg-lime-dark font-semibold text-sm">
            Book a Strategy Call
          </Button>
        </a>
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section 
      ref={ref}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 62% 45%, rgba(20,24,31,0.85), rgba(11,13,16,1))'
      }}
    >
      <div className="absolute inset-0 bg-dark/50" />
      
      {/* Hero Content */}
      <div className="relative z-10 w-full px-6 lg:px-12 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="font-mono-label text-lime mb-4">
              AI Automation Agency
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Grow faster with{' '}
              <span className="text-gradient">AI-powered</span> marketing.
            </h1>
            <div className="w-18 h-0.5 bg-lime" />
            <p className="text-lg text-gray-secondary max-w-lg">
              We build systems that attract leads, rank your business, and automate follow-ups—24/7.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="https://wa.me/919347069294" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-lime text-dark hover:bg-lime-dark font-semibold">
                  Book a Free Strategy Call
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <a href="#services">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  See Our Services
                </Button>
              </a>
            </div>
          </div>

          {/* Right Content - Dashboard Image */}
          <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="card-dark overflow-hidden">
              <img 
                src="/hero_dashboard.jpg" 
                alt="AI Dashboard Analytics" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating Icons */}
            <div className="absolute -right-4 top-1/4 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full bg-lime flex items-center justify-center shadow-lg animate-bounce" style={{ animationDuration: '2s' }}>
                <Target className="w-6 h-6 text-dark" />
              </div>
              <div className="w-12 h-12 rounded-full bg-lime flex items-center justify-center shadow-lg animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.2s' }}>
                <BarChart3 className="w-6 h-6 text-dark" />
              </div>
              <div className="w-12 h-12 rounded-full bg-lime flex items-center justify-center shadow-lg animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.4s' }}>
                <Bot className="w-6 h-6 text-dark" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Overview Section
function ServicesOverview() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const services = [
    {
      icon: MapPin,
      title: 'GMB & Local SEO',
      description: 'Rank higher in your city. More calls, more visits.',
    },
    {
      icon: Video,
      title: 'Content Engine',
      description: 'Short-form video, long-form posts, and AI-assisted scripting.',
    },
    {
      icon: Megaphone,
      title: 'Paid Ads & Creative',
      description: 'Meta + Google campaigns with creatives that convert.',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp + Automation',
      description: 'Instant replies, booking bots, and follow-up sequences.',
    },
  ];

  return (
    <section id="services" ref={ref} className="relative py-24 w-full bg-dark">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                One team. Every channel.
              </h2>
              <p className="text-lg text-gray-secondary max-w-md">
                From SEO to paid ads to AI workflows—built to work together.
              </p>
              <div className="w-24 h-0.5 bg-lime" />
            </div>

            {/* Right Content - Service Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <Card 
                  key={service.title}
                  className={`bg-dark-panel border-white/10 hover:border-lime/50 transition-all duration-500 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <CardHeader className="pb-3">
                    <div className="w-10 h-10 rounded-full bg-lime/20 flex items-center justify-center mb-3">
                      <service.icon className="w-5 h-5 text-lime" />
                    </div>
                    <CardTitle className="text-white text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-secondary">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Bottom Line */}
          <div className={`mt-16 h-0.5 bg-lime transition-all duration-1000 origin-left ${isVisible ? 'scale-x-100' : 'scale-x-0'}`} style={{ transitionDelay: '600ms' }} />
        </div>
      </div>
    </section>
  );
}

// GMB Section
function GMBSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="relative py-24 w-full bg-dark">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="card-dark overflow-hidden">
                <img 
                  src="/gmb_map_scene.jpg" 
                  alt="Google My Business Optimization" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="w-12 h-12 rounded-full bg-lime flex items-center justify-center">
                <MapPin className="w-6 h-6 text-dark" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
                Be the first result in your city.
              </h2>
              <p className="text-lg text-gray-secondary max-w-md">
                We optimize your Google Business Profile, build local citations, and generate reviews—so you show up when customers are ready to buy.
              </p>
              <a 
                href="https://wa.me/919347069294" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-lime text-dark hover:bg-lime-dark font-semibold mt-4">
                  Get a Free Local Audit
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <div className={`w-24 h-0.5 bg-lime mt-6 transition-all duration-700 origin-left ${isVisible ? 'scale-x-100' : 'scale-x-0'}`} style={{ transitionDelay: '500ms' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Content Engine Section
function ContentSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="relative py-24 w-full bg-dark">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`space-y-6 order-2 lg:order-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="w-12 h-12 rounded-full bg-lime flex items-center justify-center">
                <Video className="w-6 h-6 text-dark" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
                Post consistently. Stay on brand.
              </h2>
              <p className="text-lg text-gray-secondary max-w-md">
                We plan, script, and publish short-form videos and long-form content—optimized for search and engagement.
              </p>
              <a 
                href="https://wa.me/919347069294" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-lime text-dark hover:bg-lime-dark font-semibold mt-4">
                  See the Content System
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <div className={`w-24 h-0.5 bg-lime mt-6 transition-all duration-700 origin-left ${isVisible ? 'scale-x-100' : 'scale-x-0'}`} style={{ transitionDelay: '500ms' }} />
            </div>

            {/* Right Image */}
            <div className={`relative order-1 lg:order-2 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="card-dark overflow-hidden">
                <img 
                  src="/content_creator_scene.jpg" 
                  alt="Content Creation Studio" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Ads Section
function AdsSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="relative py-24 w-full bg-dark">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="card-dark overflow-hidden">
                <img 
                  src="/ads_team_scene.jpg" 
                  alt="Paid Ads Campaign Management" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="w-12 h-12 rounded-full bg-lime flex items-center justify-center">
                <Megaphone className="w-6 h-6 text-dark" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
                Ads that look organic. Creatives that convert.
              </h2>
              <p className="text-lg text-gray-secondary max-w-md">
                We run Meta + Google campaigns and produce scroll-stopping creatives—hooks, captions, and landing pages included.
              </p>
              <a 
                href="https://wa.me/919347069294" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-lime text-dark hover:bg-lime-dark font-semibold mt-4">
                  Request a Campaign Plan
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <div className={`w-24 h-0.5 bg-lime mt-6 transition-all duration-700 origin-left ${isVisible ? 'scale-x-100' : 'scale-x-0'}`} style={{ transitionDelay: '500ms' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// WhatsApp Automation Section
function AutomationSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="relative py-24 w-full bg-dark">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`space-y-6 order-2 lg:order-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="w-12 h-12 rounded-full bg-lime flex items-center justify-center">
                <Bot className="w-6 h-6 text-dark" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
                Reply in seconds. Nurture while you sleep.
              </h2>
              <p className="text-lg text-gray-secondary max-w-md">
                We build WhatsApp flows, booking bots, and AI follow-ups—so leads never go cold.
              </p>
              <a 
                href="https://wa.me/919347069294" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-lime text-dark hover:bg-lime-dark font-semibold mt-4">
                  See Automation Examples
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <div className={`w-24 h-0.5 bg-lime mt-6 transition-all duration-700 origin-left ${isVisible ? 'scale-x-100' : 'scale-x-0'}`} style={{ transitionDelay: '500ms' }} />
            </div>

            {/* Right Image */}
            <div className={`relative order-1 lg:order-2 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="card-dark overflow-hidden">
                <img 
                  src="/whatsapp_phone_scene.jpg" 
                  alt="WhatsApp AI Automation" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// All Services Section (Detailed)
function AllServicesSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const allServices = [
    { icon: Globe, title: 'Catalogue & ID Card Creation', description: 'Professional digital catalogues and business ID cards for your brand identity.' },
    { icon: Users, title: 'Lead Generation', description: 'Form-based lead capture and searching apps to find your ideal customers.' },
    { icon: MapPinned, title: 'Google Maps Optimization & SEO', description: 'Complete GMB setup, optimization, and review growth strategies.' },
    { icon: MessageSquare, title: 'WhatsApp Automation Setup', description: 'Automated replies, booking systems, and customer support workflows.' },
    { icon: Globe, title: 'Website Development', description: 'Professional websites with hosting included (GoDaddy, 3312/48M, 1799/36M plans).' },
    { icon: Smartphone, title: 'Mobile App Development', description: 'Custom mobile applications for iOS and Android platforms.' },
    { icon: TrendingUp, title: 'Social Media Management', description: 'Complete SEO and optimization for all social media platforms.' },
    { icon: Video, title: 'AI Content Creation', description: '4 long videos and 18 short videos created with AI assistance.' },
    { icon: Sparkles, title: 'Paid Ads Creation with AI', description: 'AI-powered ad creative generation for maximum conversion.' },
    { icon: Megaphone, title: 'Google Ads & Facebook Ads', description: 'Complete campaign management and optimization.' },
    { icon: Zap, title: 'AI Automation', description: 'End-to-end business process automation using cutting-edge AI.' },
  ];

  return (
    <section ref={ref} className="relative py-24 w-full bg-dark">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              All Services Included
            </h2>
            <p className="text-lg text-gray-secondary max-w-2xl mx-auto">
              Everything you need to grow your business online, powered by AI and automation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {allServices.map((service, index) => (
              <Card 
                key={service.title}
                className={`bg-dark-panel border-white/10 hover:border-lime/50 transition-all duration-500 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 50 + 200}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 rounded-full bg-lime/20 flex items-center justify-center mb-3">
                    <service.icon className="w-5 h-5 text-lime" />
                  </div>
                  <CardTitle className="text-white text-base">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-secondary">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function PricingSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const plans = [
    {
      name: 'Starter',
      price: '₹9,999',
      period: '/mo',
      description: 'GMB + SEO basics + 8 reels',
      features: [
        'Google My Business Setup',
        'Basic SEO Optimization',
        '8 Social Media Reels',
        'WhatsApp Business Setup',
        'Monthly Report',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Growth',
      price: '₹24,999',
      period: '/mo',
      description: 'Full content + ads + automation',
      features: [
        'Everything in Starter',
        '15 Social Media Reels',
        'Google & Meta Ads Management',
        'AI Content Creation',
        'WhatsApp Automation',
        'Weekly Strategy Calls',
        'Priority Support',
      ],
      cta: 'Get Started',
      highlighted: true,
    },
    {
      name: 'Scale',
      price: 'Custom',
      period: '',
      description: 'Dedicated strategist + volume creative + API workflows',
      features: [
        'Everything in Growth',
        'Dedicated Account Manager',
        'Unlimited Content Creation',
        'Custom API Integrations',
        'Advanced AI Automation',
        'White-label Options',
      ],
      cta: 'Contact Us',
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" ref={ref} className="relative py-24 w-full bg-dark">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Pricing that scales with your growth.
            </h2>
            <p className="text-lg text-gray-secondary max-w-2xl mx-auto">
              Start small. Upgrade as results come in. No hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name}
                className={`relative transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${plan.highlighted ? 'bg-lime border-lime' : 'bg-dark-panel border-white/10'}`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-dark text-lime text-xs font-mono px-3 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <CardHeader className="pb-4">
                  <h3 className={`font-heading text-xl font-bold ${plan.highlighted ? 'text-dark' : 'text-white'}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className={`font-heading text-4xl font-bold ${plan.highlighted ? 'text-dark' : 'text-white'}`}>
                      {plan.price}
                    </span>
                    <span className={plan.highlighted ? 'text-dark/70' : 'text-gray-secondary'}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`text-sm mt-2 ${plan.highlighted ? 'text-dark/80' : 'text-gray-secondary'}`}>
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? 'text-dark' : 'text-lime'}`} />
                        <span className={`text-sm ${plan.highlighted ? 'text-dark/80' : 'text-gray-secondary'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="https://wa.me/919347069294" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block mt-6"
                  >
                    <Button 
                      className={`w-full font-semibold ${plan.highlighted ? 'bg-dark text-lime hover:bg-dark/90' : 'bg-lime text-dark hover:bg-lime-dark'}`}
                    >
                      {plan.cta}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className={`text-center text-gray-secondary mt-8 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
            Need something specific? Let's build a custom plan.
          </p>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [formData, setFormData] = useState({ name: '', email: '', business: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    const mailtoLink = `mailto:srepra24@gmail.com?subject=New Inquiry from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ABusiness: ${formData.business}%0D%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" ref={ref} className="relative py-24 w-full bg-dark">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content - Contact Form */}
            <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="card-dark p-8">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                  Let's build your growth system.
                </h2>
                <p className="text-gray-secondary mb-8">
                  Tell us what you're trying to achieve. We'll reply with a clear plan and pricing.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Name" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-dark border-white/10 text-white placeholder:text-gray-secondary"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email"
                      placeholder="Email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-dark border-white/10 text-white placeholder:text-gray-secondary"
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Business Name" 
                      value={formData.business}
                      onChange={(e) => setFormData({...formData, business: e.target.value})}
                      className="bg-dark border-white/10 text-white placeholder:text-gray-secondary"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Message" 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-dark border-white/10 text-white placeholder:text-gray-secondary min-h-[120px]"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-lime text-dark hover:bg-lime-dark font-semibold">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <a 
                    href="https://wa.me/919347069294" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-lime hover:underline"
                  >
                    <Calendar className="w-4 h-4" />
                    Prefer a call? Book a 15-min slot
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Contact Info */}
            <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="card-dark overflow-hidden">
                <img 
                  src="/contact_office_scene.jpg" 
                  alt="Srepra Office" 
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="card-dark p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-lime/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-lime" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-secondary">Email</p>
                    <a href="mailto:srepra24@gmail.com" className="text-white hover:text-lime transition-colors">
                      srepra24@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-lime/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-lime" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-secondary">Phone</p>
                    <a href="tel:+919347069294" className="text-white hover:text-lime transition-colors">
                      +91 93470 69294
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-lime/20 flex items-center justify-center">
                    <MapPinned className="w-5 h-5 text-lime" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-secondary">Location</p>
                    <p className="text-white">Prajay City, Hafeezpet, Telangana, 500049</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className={`mt-16 h-0.5 bg-lime transition-all duration-1000 origin-left ${isVisible ? 'scale-x-100' : 'scale-x-0'}`} style={{ transitionDelay: '600ms' }} />
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="relative py-12 w-full bg-dark-panel border-t border-white/10">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="font-mono text-lg font-semibold tracking-wider text-white">
                SREPRA
              </span>
              <p className="text-sm text-gray-secondary mt-2">
                AI-Powered Growth for Local Businesses
              </p>
            </div>

            <div className="flex items-center gap-6">
              <a href="https://www.youtube.com/@srepra25" target="_blank" rel="noopener noreferrer" className="text-gray-secondary hover:text-lime transition-colors">
                YouTube
              </a>
              <a href="https://www.instagram.com/srepra2024" target="_blank" rel="noopener noreferrer" className="text-gray-secondary hover:text-lime transition-colors">
                Instagram
              </a>
              <a href="https://www.facebook.com/profile.php?id=61570004904809" target="_blank" rel="noopener noreferrer" className="text-gray-secondary hover:text-lime transition-colors">
                Facebook
              </a>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm text-gray-secondary">
                Work Hours: 8 AM - 9 PM, Mon - Sat
              </p>
              <p className="text-sm text-gray-secondary mt-1">
                © 2024 Srepra. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Noise Overlay */}
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Sections */}
      <main>
        <HeroSection />
        <ServicesOverview />
        <GMBSection />
        <ContentSection />
        <AdsSection />
        <AutomationSection />
        <AllServicesSection />
        <PricingSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
