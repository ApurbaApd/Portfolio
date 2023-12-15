import { styles } from "../styles";

const Hero1 = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div>
        <h3 className={`${styles.heroHeadText} text-white`}>
        Hi, <br/>
         I'm Apurba Debnath
        
        </h3>
        <p className="text-[#d3e021] lg:text-[40px]"> {/* Increased size using 'text-lg' class */}
  Fascinated by technology, fueled by the desire to build creative applications.
</p>

        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="relative">
            <div className="w-28 h-14 bg-secondary rounded-md flex justify-center items-center border-4 border-secondary">
              <div className="absolute w-0 h-0 border-4 border-transparent border-solid border-l-[14px] border-t-[7px]"></div>
              <div className="text-white text-[20px] font-bold">Dive in</div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero1;
