import * as React from "react";
import {
  Upload,
  Sparkles,
  Brain,
  Briefcase,
  ArrowRight,
  Target,
  BookOpen,
  Github,
  Linkedin,
  Mail,
  DollarSign,
  Lock,
  Check,
  ScanLine,
  Link,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

// SECTION 1: THE PROBLEM - Cinematic Opening
function TheProblem() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Deep Background */}
      <div className="absolute inset-0 bg-[#070B14]" />

      {/* Atmospheric Glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#00D9FF] rounded-full blur-[200px] opacity-10" />
      <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-[#8B5CF6] rounded-full blur-[200px] opacity-10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div>
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl mb-8 leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="block text-[#F8FAFC]">
              THOUSANDS OF STUDENTS APPLY.
            </span>
          </motion.h1>

          <motion.h2
            className="text-5xl md:text-7xl lg:text-8xl text-[#94A3B8] mb-16 leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            FEW FIND THE RIGHT OPPORTUNITY.
          </motion.h2>

          <div className="space-y-6 text-3xl md:text-4xl text-[#94A3B8]">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              SKILLS HIDDEN.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              POTENTIAL OVERLOOKED.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              OPPORTUNITIES MISSED.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070B14] to-transparent" />
    </section>
  );
}

// SECTION 2: THE REALITY - Floating Resume Metaphor
function TheReality() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[#070B14]" />

      {/* Floating Resume Cards */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-48 h-64 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
            style={{
              left: `${(i % 4) * 25 + 5}%`,
              top: `${Math.floor(i / 4) * 30 + 10}%`,
            }}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 0.3,
              y: [-20, 0, -20],
              rotateZ: [i % 2 === 0 ? -2 : 2, 0, i % 2 === 0 ? -2 : 2],
            }}
            transition={{
              opacity: { duration: 1.5, delay: i * 0.1 },
              y: {
                duration: 3,
                delay: i * 0.1 + 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              },
              rotateZ: {
                duration: 3,
                delay: i * 0.1 + 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              },
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl text-[#F8FAFC] mb-8 leading-tight">
            EVERY RESUME TELLS A STORY.
          </h2>
          <p className="text-3xl md:text-5xl text-[#94A3B8] leading-tight">
            Most platforms never read it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// SECTION 3: DISCOVERY - Building Anticipation
function Discovery() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070B14] via-[#101827] to-[#070B14]" />

      {/* Glowing Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#00D9FF] to-[#8B5CF6] rounded-full blur-[250px] opacity-20" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl text-[#F8FAFC] mb-12 leading-[1.1]">
            WHAT IF A PLATFORM COULD
            <span className="block mt-4 bg-gradient-to-r from-[#00D9FF] to-[#8B5CF6] bg-clip-text text-transparent">
              UNDERSTAND YOUR SKILLS?
            </span>
          </h2>

          {/* Animated Connection Visual */}
          <motion.div
            className="mt-20 flex justify-center items-center gap-8 flex-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {["Resume", "Skills", "Opportunities"].map((item, i) => (
              <motion.div
                key={item}
                className="relative"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + i * 0.3, type: "spring" }}
              >
                <div className="px-8 py-6 rounded-2xl bg-white/5 backdrop-blur-md border border-[#00D9FF]/30 text-2xl text-[#F8FAFC]">
                  {item}
                </div>
                {i < 2 && (
                  <motion.div
                    className="absolute -right-12 top-1/2 -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-[#00D9FF] to-transparent origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 + i * 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// SECTION 4: PRODUCT REVEAL - The Cinematic Highlight
function ProductReveal() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[#070B14]" />

      {/* Dramatic Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-[#00D9FF] to-transparent rounded-full blur-[200px] opacity-20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.p
            className="text-2xl text-[#00D9FF] mb-6 tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            INTRODUCING
          </motion.p>

          <motion.h1
            className="text-7xl md:text-9xl bg-gradient-to-r from-[#F8FAFC] via-[#00D9FF] to-[#8B5CF6] bg-clip-text text-transparent mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            INTERNHUNT
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-[#94A3B8] max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            The intelligent platform that matches your unique skills
            with opportunities that matter.
          </motion.p>
        </motion.div>

        {/* Product Mockup */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1.2 }}
        >
          {/* Glass Mockup */}
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 shadow-2xl">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#101827] to-[#070B14] overflow-hidden border border-white/10 flex items-center justify-center">
              <div className="text-center p-12">
                <Sparkles className="w-20 h-20 text-[#00D9FF] mx-auto mb-6" />
                <p className="text-3xl text-[#F8FAFC] mb-4">Smart Matching Engine</p>
                <p className="text-xl text-[#94A3B8]">Powered by Advanced ML Algorithms</p>
              </div>
            </div>
          </div>

          {/* Floating Accent Elements */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#00D9FF] rounded-full blur-[80px] opacity-30" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#8B5CF6] rounded-full blur-[80px] opacity-30" />
        </motion.div>
      </div>
    </section>
  );
}

// SECTION 5: HOW INTERNHUNT THINKS - The System
function HowItThinks() {
  const pipeline = [
    { icon: Upload, label: "Resume Upload", description: "Secure file processing" },
    { icon: ScanLine, label: "Resume Analysis", description: "AI-powered extraction" },
    { icon: Brain, label: "Skill Extraction", description: "Pattern recognition" },
    { icon: Link, label: "Matching Engine", description: "Intelligent algorithms" },
    { icon: Briefcase, label: "Recommendations", description: "Personalized results" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070B14] via-[#101827] to-[#070B14]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl text-[#F8FAFC] mb-6">
            HOW INTERNHUNT
            <span className="block mt-2 bg-gradient-to-r from-[#00D9FF] to-[#8B5CF6] bg-clip-text text-transparent">
              THINKS
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-[#94A3B8]">
            A visual journey through intelligent matching
          </p>
        </motion.div>

        {/* Animated Pipeline */}
        <div className="space-y-12">
          {pipeline.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative"
            >
              <div className="flex items-center gap-8">
                {/* Icon */}
                <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-[#00D9FF]/20 to-[#8B5CF6]/20 backdrop-blur-sm border border-[#00D9FF]/30 flex items-center justify-center">
                  <step.icon className="w-12 h-12 text-[#00D9FF]" />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-3xl text-[#F8FAFC] mb-2">{step.label}</h3>
                  <p className="text-xl text-[#94A3B8]">{step.description}</p>
                </div>

                {/* Step Number */}
                <div className="hidden md:block text-8xl text-white/5">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Connection Arrow */}
              {index < pipeline.length - 1 && (
                <motion.div
                  className="ml-12 mt-6 mb-6 w-0.5 h-12 bg-gradient-to-b from-[#00D9FF] to-transparent origin-top"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// SECTION 7: WHY IT MATTERS - Emotional Connection
function WhyItMatters() {
  const values = [
    {
      icon: DollarSign,
      title: "100% Free Forever",
      description: "No hidden costs, no premium tiers. Every feature, completely free.",
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "Your data is encrypted and secure. We never sell your information.",
    },
    {
      icon: Users,
      title: "Built for Students",
      description: "Created by a student who understands the internship hunt struggle.",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070B14] via-[#101827] to-[#070B14]" />

      {/* Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#FF5EA8] to-[#8B5CF6] rounded-full blur-[250px] opacity-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl text-[#F8FAFC] mb-8 leading-[1.1]">
            BUILT FOR STUDENTS.
            <span className="block mt-4 bg-gradient-to-r from-[#FF5EA8] to-[#8B5CF6] bg-clip-text text-transparent">
              BY A STUDENT.
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-[#94A3B8] max-w-4xl mx-auto mb-6 leading-relaxed">
            Every student deserves to be seen for their true potential, not just keywords on a resume.
          </p>

          <p className="text-xl md:text-2xl text-[#94A3B8] max-w-4xl mx-auto leading-relaxed">
            InternHunt was created from the frustration of seeing talented peers overlooked by traditional platforms.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#FF5EA8]/30 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF5EA8]/20 to-[#8B5CF6]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-[#FF5EA8]" />
                </div>

                <h3 className="text-2xl text-[#F8FAFC] mb-4">{value.title}</h3>
                <p className="text-lg text-[#94A3B8] leading-relaxed">
                  {value.description}
                </p>

                {/* Check Badge */}
                <div className="absolute top-8 right-8 w-8 h-8 rounded-full bg-gradient-to-br from-[#FF5EA8] to-[#8B5CF6] flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "Unlimited", label: "Resume Scans" },
            { value: "Free", label: "Forever" },
            { value: "24/7", label: "AI Assistant" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="text-5xl bg-gradient-to-r from-[#FF5EA8] to-[#8B5CF6] bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[#94A3B8]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// SECTION 8: VISION - Future Focused
function Vision() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[#070B14]" />

      {/* Dramatic Top Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-[#00D9FF]/20 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl text-[#F8FAFC] mb-12 leading-[1.1]">
            TODAY'S RESUME.
            <span className="block mt-4 bg-gradient-to-r from-[#00D9FF] via-[#8B5CF6] to-[#FF5EA8] bg-clip-text text-transparent">
              TOMORROW'S CAREER.
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-[#94A3B8] max-w-4xl mx-auto mb-16 leading-relaxed">
            We're building the future of career discovery—where every student's unique journey is understood, valued, and matched with opportunities that propel them forward.
          </p>

          {/* Future Roadmap Visual */}
          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-8 mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {["Skill Analysis", "Career Matching", "Growth Tracking", "Success"].map((stage, i) => (
              <motion.div
                key={stage}
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + i * 0.2 }}
              >
                <div className="px-8 py-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-[#00D9FF]/30 text-xl text-[#F8FAFC]">
                  {stage}
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute -right-10 top-1/2 -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-[#00D9FF]" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Aspirational Icons */}
          <motion.div
            className="mt-20 flex justify-center gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
          >
            <TrendingUp className="w-16 h-16 text-[#00D9FF]" />
            <Sparkles className="w-16 h-16 text-[#8B5CF6]" />
            <Target className="w-16 h-16 text-[#FF5EA8]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// SECTION 9: HERO CTA - Main Call to Action
// This is the primary conversion point with premium glassmorphism design
function FinalCTA() {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-[#070B14]" />

      {/* Layered Atmospheric Glows */}
      <div className="absolute top-1/3 left-1/4 w-[800px] h-[800px] bg-[#00D9FF] rounded-full blur-[250px] opacity-15 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/3 right-1/4 w-[800px] h-[800px] bg-[#8B5CF6] rounded-full blur-[250px] opacity-15 animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-[#00D9FF] via-[#8B5CF6] to-[#FF5EA8] rounded-full blur-[300px] opacity-10" />

      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

      {/* Floating Resume Card Visual */}
      <motion.div
        className="absolute left-[10%] top-1/4 hidden lg:block"
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 0.4,
          y: 0,
          rotateY: [0, 5, 0],
          rotateX: [0, -3, 0],
        }}
        transition={{
          opacity: { duration: 1.5 },
          y: { duration: 1.5 },
          rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="relative w-64 h-80 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl p-6">
          <div className="space-y-3">
            <div className="h-3 w-3/4 bg-white/30 rounded" />
            <div className="h-2 w-1/2 bg-white/20 rounded" />
            <div className="mt-6 space-y-2">
              <div className="h-2 w-full bg-white/20 rounded" />
              <div className="h-2 w-5/6 bg-white/20 rounded" />
              <div className="h-2 w-4/6 bg-white/20 rounded" />
            </div>
            <div className="mt-6 flex gap-2 flex-wrap">
              <div className="px-3 py-1 rounded-full bg-[#00D9FF]/20 border border-[#00D9FF]/30 text-xs">React</div>
              <div className="px-3 py-1 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 text-xs">Python</div>
            </div>
          </div>
          {/* Glow accent */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00D9FF] to-[#8B5CF6] rounded-2xl blur-xl opacity-20 -z-10" />
        </div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          {/* Enhanced Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-[#F8FAFC] mb-8 leading-[1.1]">
            DISCOVER OPPORTUNITIES
            <span className="block mt-4">THAT MATCH</span>
            <span className="block mt-4 bg-gradient-to-r from-[#00D9FF] via-[#8B5CF6] to-[#FF5EA8] bg-clip-text text-transparent relative">
              YOUR POTENTIAL.
              {/* Subtle glow effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#00D9FF] via-[#8B5CF6] to-[#FF5EA8] blur-2xl opacity-30" aria-hidden="true">YOUR POTENTIAL.</span>
            </span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-[#94A3B8] max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Start your journey today. Upload your resume and let intelligent
            matching connect you with opportunities designed for your unique skills.
          </motion.p>

          {/* Premium CTA Section */}
          <div className="flex flex-col items-center gap-8">
            {/* Primary Glassmorphism Button */}
            <motion.div
              className="relative"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="https://internhunt.streamlit.app/"
                className="group relative inline-flex items-center justify-center gap-3 px-12 py-6 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00D9FF] to-[#8B5CF6] opacity-80 transition-opacity group-hover:opacity-100" />

                {/* Hover Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00D9FF] via-[#8B5CF6] to-[#FF5EA8] rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

                {/* Content */}
                <Upload className="relative w-6 h-6 text-white transition-transform group-hover:-translate-y-1" />
                <span className="relative text-xl text-white">Upload Resume</span>
              </a>

              {/* Micro-interaction text */}
              <motion.div
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap"
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : -10
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                  <span>Analyze</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>Match</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>Discover</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Secondary Text Link */}
            <motion.a
              href="https://github.com/ShubhamSnSharma/internhunt2.0.git"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-lg text-[#94A3B8] hover:text-[#00D9FF] transition-colors duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Learn how InternHunt works
              <ArrowRight className="inline-block w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />

              {/* Animated underline */}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#00D9FF] to-[#8B5CF6] group-hover:w-full transition-all duration-500" />
            </motion.a>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-32 flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6, y: [0, 8, 0] }}
            transition={{
              opacity: { delay: 1, duration: 1 },
              y: { delay: 1.5, duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <span className="text-sm text-[#94A3B8]">Scroll to discover how InternHunt works</span>
            <div className="w-6 h-10 rounded-full border-2 border-[#00D9FF]/30 flex items-start justify-center p-2">
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-[#00D9FF]"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade to Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070B14] to-transparent" />
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-white/10">
      <div className="absolute inset-0 bg-[#070B14]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl mb-4 bg-gradient-to-r from-[#00D9FF] to-[#8B5CF6] bg-clip-text text-transparent">
              InternHunt
            </h3>
            <p className="text-[#94A3B8] mb-6 max-w-sm text-lg leading-relaxed">
              Intelligent platform helping students find their perfect
              internship match using AI and ML.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/ShubhamSnSharma"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-[#00D9FF]/50 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-[#94A3B8]" />
              </a>
              <a
                href="https://www.linkedin.com/in/shubhamsnsharma/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-[#00D9FF]/50 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-[#94A3B8]" />
              </a>
              <a
                href="mailto:shubhamsharma99918@gmail.com"
                className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-[#00D9FF]/50 transition-all"
                aria-label="Email"
              >
                <Mail className="w-6 h-6 text-[#94A3B8]" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[#F8FAFC] mb-5 text-lg">Product</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-[#94A3B8] hover:text-[#00D9FF] transition-colors text-base"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="https://internhunt.streamlit.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#94A3B8] hover:text-[#00D9FF] transition-colors text-base"
                >
                  Live Demo
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ShubhamSnSharma/internhunt2.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#94A3B8] hover:text-[#00D9FF] transition-colors text-base"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#F8FAFC] mb-5 text-lg">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/ShubhamSnSharma/internhunt2.0#readme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#94A3B8] hover:text-[#00D9FF] transition-colors text-base"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ShubhamSnSharma/internhunt2/blob/main/PRIVACY.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#94A3B8] hover:text-[#00D9FF] transition-colors text-base"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ShubhamSnSharma/internhunt2/issues/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#94A3B8] hover:text-[#00D9FF] transition-colors text-base"
                >
                  Report Issue
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#94A3B8]">
            © 2024 InternHunt. Open Source Project.
          </p>
          <p className="text-sm text-[#94A3B8]">
            Powered by Streamlit, React & Neon
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-[#070B14] overflow-x-hidden">
      <TheProblem />
      <TheReality />
      <Discovery />
      <ProductReveal />
      <HowItThinks />
      <WhyItMatters />
      <Vision />
      <FinalCTA />
      <Footer />
    </div>
  );
}