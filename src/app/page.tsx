import Header from '@/components/header';
import Intro from '@/components/intro';
import About from '@/components/about';
import Projects from '@/components/projects';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Intro />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
