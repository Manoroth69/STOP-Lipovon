import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SiTiktok } from 'react-icons/si';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import AnimatedSection from '@/components/AnimatedSection';
import SparkleEffect from '@/components/SparkleEffect';
import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom'

const About = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 relative overflow-hidden">
      {/* SEO Metadata */}
      <Helmet>
        <title>Stop Lipovon – Adevărul despre pastila de slăbit</title>
        <meta name="description" content="Află adevărul despre Lipovon – o inițiativă publică ce demască suplimentele periculoase și marketingul înșelător." />
        <meta name="keywords" content="Lipovon, pastile de slăbit, efecte secundare, adevărul, sănătate, informare, StopLipovon" />
        <meta name="author" content="StopLipovon" />
        <link rel="canonical" href="https://stoplipovon.ro/" />

        {/* Open Graph (for social media previews) */}
        <meta property="og:title" content="Stop Lipovon – Adevărul despre pastila de slăbit" />
        <meta property="og:description" content="Suntem o inițiativă publică ce documentează efectele reale ale pastilei Lipovon și riscurile consumului fără informare." />
        <meta property="og:url" content="https://stoplipovon.ro/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://stoplipovon.ro/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Stop Lipovon – Adevărul despre pastila de slăbit" />
        <meta name="twitter:description" content="Demascăm suplimentele periculoase. Citește și informează-te despre efectele reale ale Lipovon." />
        <meta name="twitter:image" content="https://stoplipovon.ro/og-image.jpg" />
      </Helmet>

      {/* Floating Background */}
      

      {/* Parallax Layer */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ y: backgroundY }}
      >
        {/* Animated floating shapes */}
        <div className="absolute  top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-float-slow" />
        <div className="absolute  top-40 right-20 w-24 h-24 bg-purple-400/15 rounded-full blur-lg animate-float-medium" />
        <div className="absolute   bottom-32 left-1/3 w-40 h-40 bg-indigo-400/8 rounded-full blur-2xl animate-float-fast" />
      </motion.div>

     

      {/* Main Content */}
      <div className="relative z-0">
        {/* Hero */}
        <section className="container mx-auto px-4 py-30 flex items-center">
         
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedSection delay={0.2}>
                <motion.h1 
                  className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Stop Lipovon –{' '}
                  <motion.span 
                    className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent"
                    animate={{ 
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Adevărul din spatele promisiunilor
                  </motion.span>
                </motion.h1>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <motion.p 
                  className="text-lg text-white/90 mb-8 leading-relaxed"
                  whileInView={{ opacity: [0, 1], y: [30, 0] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Suntem o inițiativă de informare publică, fără scop comercial, 
                  care documentează efectele reale ale pastilei Lipovon și pericolele 
                  marketingului înșelător.
                </motion.p>
              </AnimatedSection>

              <AnimatedSection delay={0.6}>
                <motion.div 
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <SparkleEffect>
                    <Link to="/ajutor">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-2xl animate-pulse-glow"
                    >
                      Raportează Efecte
                    </Button>
                    </Link>
                  </SparkleEffect>
                  
                  <SparkleEffect>
                     <Link to="/donatii">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                    >
                      Susține
                    </Button>
                    </Link>
                  </SparkleEffect>
                </motion.div>
              </AnimatedSection>
{/* Links */}
         <AnimatedSection delay={0.8}>
  <motion.div 
    className="flex space-x-6 mt-12 z-20"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 1 }}
  >
    {[
      { Icon: FaFacebookF, delay: 0, url: 'https://facebook.com/yourpage' },
      { Icon: FaInstagram, delay: 0.1, url: 'https://instagram.com/yourpage' },
      { Icon: FaTwitter, delay: 0.3, url: 'https://twitter.com/yourpage' },
      { Icon: SiTiktok, delay: 0.3, url: 'https://tiktok.com/@yourpage' }
    ].map(({ Icon, delay, url }, index) => (
      <motion.div
        key={index}
        whileHover={{ 
          scale: 1.3, 
          rotate: 15,
          boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
        }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 + delay, duration: 0.5 }}
      >
        <SparkleEffect>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20 z-20"
          >
            <Icon className="w-6 h-6 text-white" />
          </a>
        </SparkleEffect>
      </motion.div>
    ))}
  </motion.div>
</AnimatedSection>
            </div>

            {/* FAQ */}
            <div className="relative">
              <AnimatedSection delay={0.5} direction="left">
                <motion.div
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
                    scale: 1.02
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: 'linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.1), transparent)',
                    }}
                    animate={{
                      background: [
                        'linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.1), transparent)',
                        'linear-gradient(135deg, transparent, rgba(168, 85, 247, 0.1), transparent)',
                        'linear-gradient(225deg, transparent, rgba(59, 130, 246, 0.1), transparent)',
                        'linear-gradient(315deg, transparent, rgba(168, 85, 247, 0.1), transparent)',
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <div className="relative z-10">
                    <FAQ />
                  </div>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        
      </div>
    </div>
  );
};

export default About;
