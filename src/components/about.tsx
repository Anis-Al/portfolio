import Image from 'next/image';
import data from '@/app/data.json';

export default function About() {
  const { skills } = data;

  return (
    <div>
      <div className="flex justify-center space-x-16 mt-16">
        <span className="md:text-[56px] text-[15px] font-bold leading-1.0 whitespace-nowrap uppercase">
          Seeking for a mission to accomplish
        </span>
        <Image
          className="w-[64px] h-[64px] mt-4"
          src="/images/burst-star.svg"
          alt="Star"
          width={64}
          height={64}
          priority
        />
        <span className="md:text-[56px] text-[15px] font-bold leading-1.0 whitespace-nowrap uppercase">
          Seeking for a mission to accomplish
        </span>
      </div>
      <section
        id="about"
        className="relative py-16 md:py-24 font-fira-mono text-white  w-full mt-12"
      >
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute inset-0 w-full bg-[url('/images/topographic.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-fira-mono">
              About
            </h2>
            <div className="w-20 h-1 bg-white mx-auto"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-2/3 space-y-8">
              <div className="prose prose-invert max-w-none font-open-sans">
                <p className="text-lg leading-relaxed">
                  My name is{' '}
                  <span className="text-blue-400 font-medium">Anis</span>. I am
                  a Software Developer from Algeria with a Master's in Data
                  Analytics, leveraging data insights to build smarter software.
                </p>

                <div className="space-y-4 mt-6">
                  <p>
                    My{' '}
                    <span className="text-blue-400">
                      fascination with computers
                    </span>{' '}
                    started at five when I used to play on my grandpa's old PC.
                  </p>
                  <p>
                    This curiosity about the workings of technology has stayed
                    with me, shaping my approach to problem-solving and
                    constantly pushing me to learn more about how computers and
                    software work.
                  </p>

                  <p>
                    This marked the start of my{' '}
                    <span className="text-blue-400">
                      journey into the tech world
                    </span>
                    , where I continually strive to learn something new every
                    day.
                  </p>
                </div>
              </div>

              <div className="mt-12 font-open-sans">
                <h3 className="text-xl font-semibold mb-6 ">
                  Skills & Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-800 rounded-full  text-md font-medium hover:bg-blue-400 hover:text-black transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="relative border-2 border-gray-700">
                <Image
                  src="/images/me.jpg"
                  alt="Profile"
                  width={200}
                  height={100}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
