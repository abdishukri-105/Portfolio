// import herImage from "../images/hero.jpg"
import herImage2 from "../images/hero2.jpg"
import shukri from "../images/shukri.jpg"
import shukri2 from "../images/shukri2.jpg"
import shukri3 from "../images/mf-avatar.svg"

const Hero = () => {
    return (
        <div className="bg-gray-100 h-screen  grid place-items-center  p-3 md:p-0 ">
         
         <div className="flex flex-col">
            <div className="text-white w-full p-5 mb-7">
              <p className="text-black font-sans">
                <h1 className="font-sans font-black text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6">
                  HEY, I'M Abdishukri Mohamed 
                </h1>
                <p className="text-base text-center prose sm:text-xl">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                src={shukri3}
                alt=""
                className="h-40 w-40 md:h-48 md:w-48 rounded-full"
              />
            </div>
          </div>


        </div>
      );
}
 
export default Hero;

  {/* <div className="flex w-1/2 sm:w-1/4 justify-around  rounded-lg bg-gray-800 border border-gray-700 shadow-lg p-2 cursor-pointer ">
            <a href="https://github.com/abdishukri-105  " target="_blank" className="text-white text-3xl  pt-2">
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <a href="https://twitter.com/AbdishukriMoh18" target="_blank" className="text-white text-3xl pt-2  ">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="https://www.linkedin.com/in/abdishukri-mohamed/" target="_blank" className="text-white text-3xl pt-2">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <div className="text-white text-3xl pt-2 ">
             <ion-icon name="logo-whatsapp"></ion-icon>
            </div>
            
         </div> */}