import { ThemeProvider } from './context/ThemeContext';
import { AnimatedBackground } from './components/ui/AnimatedBackground';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { TechStack } from './components/sections/TechStack';
import { Experience } from './components/sections/Experience';
import Projects from './components/sections/Projects';
import { Footer } from './components/sections/Footer';
import { FloatingTime } from './components/ui/FloatingTime';

function App() {
  return (  
    <ThemeProvider>
      <div className="relative min-h-screen bg-retro-cream dark:bg-retro-black transition-colors duration-300">
        <AnimatedBackground />

        {/* Global UI */}
        <Navbar />
        <FloatingTime />

        <main
          className="
            max-w-4xl mx-auto
            px-5 sm:px-4 md:px-6
            pb-28 sm:pb-32
          "
        >

          <Hero />

          <div className="section-divider my-12" />
          <TechStack />

          <div className="section-divider my-12" />
          <Experience />

          <div className="section-divider my-12" />
          <Projects />

          {/* <Profiles /> */}
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
