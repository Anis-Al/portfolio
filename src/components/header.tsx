'use client';

export default function Header() {
  return (
    <header className="w-screen h-[96px] md:h-[128px] flex justify-center">
      <nav className="container md:hidden h-[96px] flex justify-start items-center">
        <span className="text-xl leading-1.0">Anis' Portfolio</span>
      </nav>
      <nav className="hidden md:flex md:justify-center w-[100px] h-[128px]">
        <ul className="hidden md:flex space-x-32 mt-8">
          {['about', 'projects', 'contact'].map((item) => (
            <a
              key={item}
              className="text-[18px] font-fira-mono hover:underline cursor-pointer"
              onClick={() => {
                const element = document.getElementById(item);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </ul>
      </nav>
    </header>
  );
}
