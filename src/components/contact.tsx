
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Link from 'next/link';
import data from '@/app/data.json';

export default function Contact() {
  const { socials } = data;

  const getHref = (social: { name: string; href: string }) =>
    social.name === 'Email' ? `mailto:${social.href}` : social.href;

  const buttonClasses = `
    w-full flex items-center justify-center gap-4 p-6 
    hover:bg-gray-200/50 transition-colors border-gray-700 
    cursor-pointer
  `;

  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 font-fira-mono text-white w-full mt-12"
    >
      <div className="absolute inset-0 -z-10 opacity-20">
        <div
          className="absolute inset-0 w-full bg-[url('/images/spiral.svg')] bg-center 
          [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
        />
      </div>

      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-fira-mono">
            Contact
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-12" />
        </header>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-700 overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-white">
                Let's Connect
              </h3>

              <p className="text-gray-300 mb-8 text-center">
                I'm always open to discussing new projects or creative ideas.
              </p>

              <div className="space-y-4">
                {socials.map((social, index) => (
                  <Link
                    key={index}
                    href={getHref(social)}
                    target={social.name === 'Email' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className={buttonClasses}>
                      <span className="text-black">{social.name}</span>
                    </Button>
                  </Link>
                ))}

                <div className="pt-4 border-t border-gray-700">
                  <Link
                    href="/files/cv.pdf"
                    download="Anis_Alim_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className={buttonClasses}>
                      <Download className="w-5 h-5" />
                      <span>My CV</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
