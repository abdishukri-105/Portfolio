import heroimg from '../../assets/images/hero.svg'
import shukri from '../../assets/images/shukri.webp'
import shukri2 from '../../assets/images/shukri2.jpg'
import CountUp from 'react-countup'


const Hero = () => {
    return ( 
      <section className='md:pt-16 pt-4   bg-yelow-900 min-h-screen' id='home'>
        <div className='container md:pt-4 pt-0'>
            <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                {/* ======= hero left content ======== */}
                <div className='w-full md:basis-2/3'>
                    <p
                       data-aos="fade-right"
                       data-aos-duration="1500"
                       className='text-headingColor font-[600] md:text-[26px] text-[20px]'
                    >
                      Hello welcome,
                    </p>
                    <h1 
                    //    data-aos="fade-up"
                    //    data-aos-duration="1500"
                       className='text-headingColor font-[800] text-[1.5rem] sm:text-[38px] leading-[35px] sm:leading-[46px] mt-3'
                       > I'm Abdishukri Mohamed <br />
                       Software Engineer $ Cloud Architect
                    </h1>

                  
                    <p 
                      data-aos="fade-left"
                      data-aos-duration="1500"
                      className='flex gap-2 text-headingColor mt-6 font-[500] text-[15px] sm:text-[18px] leading-7 sm:pl-0 sm:pr-10'
                    >
                    <span>
                        <i class="ri-apps-2-line"></i>
                    </span>    
                      I'm a seasoned, certified cloud and software engineer, wielding the power of the cloud to craft high-performance web applications. My code is clean, secure, and optimized to dominate search engines.
                    </p>

                    <div 
                        // data-aos="fade-up"
                        // data-aos-duration="1000"
                        // data-aos-delay='200'
                        className='flex items-center gap-6 mt-7'
                    >
                    <a
                       href="#contact">
                       <button className='bg-primaryColor text-white font-[500]  flex items-center gap-2
                       hover:bg-smallTextColor ease-in duration-300 py-3 px-6 rounded-[8px]'>
                        <i class='ri-mail-line'></i>Hire me
                        </button> 
                    </a>   
                    <a href='/path/to/your/resume.pdf' download className='text-smallTextColor font-[600] text-[19px] border-b border-solid border-smallTextColor'>
                        see portfolio
                        </a>

                    </div>
                    <div className='flex items-center gap-9 mt-6'>
                        <span className='text-smallTextColor text-[19px] font-[600]'>Connect with me:</span>
                        <span>
                            <a href='https://github.com/abdishukri-105' target='_blank' rel='noopener noreferrer' aria-label='GitHub' className='text-smallTextColor text-[30px] font-[600]'>
                                <i class="ri-github-fill"></i>
                                <span className='sr-only'>GitHub</span>
                            </a>
                        </span>
                        <span>
                            <a href='https://www.linkedin.com/in/abdishukri-mohamed/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn' className='text-smallTextColor text-[30px] font-[600]'>
                                <i class="ri-linkedin-line"></i>
                                <span className='sr-only'>LinkedIn</span>
                            </a>
                        </span>
                        <span>
                            <a href='https://twitter.com/AbdishukriMoh18' target='_blank' rel='noopener noreferrer' aria-label='Twitter' className='text-smallTextColor text-[30px] font-[600]'>
                                <i class="ri-twitter-line"></i>
                                <span className='sr-only'>Twitter</span>
                            </a>
                        </span>
                        <span>
                            <a href='https://www.instagram.com/__abdishukri_/' target='_blank' rel='noopener noreferrer' aria-label='Instagram' className='text-smallTextColor text-[30px] font-[600]'>
                                <i class="ri-instagram-line"></i>
                                <span className='sr-only'>Instagram</span>
                            </a>
                        </span> 
                    </div>

                </div>
                 {/* ======= hero left end ======== */}
                 {/* ======= hero img ======== */}
                 <div className='basis-1/3 mt-10 sm:mt-0'>
                     <figure className='flex  items-center justify-center'>
                        <img className='rounded-full '  alt='image of Abdishukri Mohamed' src={shukri}></img>
                     </figure>
                 </div>
                {/* ======= hero img end ======== */}
                {/* ======= hero content right ======== */}
                {/* <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end'>
                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={3} suffix='+'/>
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[18px]'>years of experience</h4>
                    </div>
                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={100} duration={2} suffix='%'/>
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[18px]'>success Rate</h4>
                    </div>
                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={50} duration={2} suffix='+'/>
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[18px]'>Happy Clients</h4>
                    </div>
                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={50} duration={2} suffix='+'/>
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[18px]'>projects Completed</h4>
                    </div>
                </div> */}
            </div>
        </div>
      </section>
     );
}
 
export default Hero;