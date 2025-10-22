export default function Intro() {
  return (
    <div className="container md:mt-[8px] space-y-16">
      <div className="flex flex-col  items-center">
        <h1 className="text-[48px] md:text-[64px] pr-16 md:pr-48 lg:text-[96px] font-normal font-fira-mono 
        leading-1.0">
          Full-Stack
        </h1>
        <div className="md:flex flex-row-reverse justify-between space-y-8 md:space-y-0">
          <h1 className="text-[48px] md:text-[64px] pl-16 md:pl-48 lg:text-[96px] font-normal font-fira-mono 
          leading-1.0 text-white text-right">
            Developer
          </h1>
        </div>
      </div>
    </div>
  );
}
