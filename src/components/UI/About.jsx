import { useState } from 'react';
import shukri from '../../assets/images/aboutme.jpeg';
import { FaPhone, FaEnvelope, FaCalendarAlt, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
// import { SiVisualstudiocode, SiFigma, SiNotion, SiWordpress } from 'react-icons/si';
import { AiOutlineUser } from 'react-icons/ai';
// import { SiAmazonaws } from 'react-icons/si';
import { 
  SiVisualstudiocode,
  SiFigma,
  SiNotion,
  SiWordpress,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiAmazonaws,
  SiReact,
  SiRedux,
  SiBootstrap,
  SiSass,
  SiWebpack,
  SiBabel,
  SiTailwindcss,
  
} from 'react-icons/si';

const infoData = [
  {
    icon: <AiOutlineUser size={20} />,
    text: 'Abdishukri Mohamed',
  },
  {
    icon: <FaPhone size={20} />,
    text: '+254 722 521 314',
  },
 
  // {
  //   icon: <FaCalendarAlt size={20} />,
  //   text: 'Born on 10 Mar, 1998',
  // },
  
  {
    icon: <FaGraduationCap size={20} />,
    text: 'Bsc. in Information Technology',
  },
  {
    icon: <FaBriefcase size={20} />,
    text: 'Nairobi, Kenya',
  },
  {
    icon: <FaEnvelope size={20} />,
    text: 'abdishukrimohamed105@gmail.com',
  },
];



const qualificationData = [
  {
    title: 'education',
    data: [
      {
        university: 'ALX',
        qualification: 'AWS Cloud Computing',
        years: '2023 - 2024',
      },
      {
        university: 'MORINGA SCHOOL',
        qualification: 'Software Engineering ',
        years: '2012 - 2023',
      },
      {
        university: 'JKUAT',
        qualification: 'Bsc. in Information Technology',
        years: '2018 - 2022',
      },
    ],
  },
  {
    title: 'experience',
    data: [
      {
        company: 'freelance',
        role: 'Software Engineer',
        years: '2023 - Present',
      },
      {
        company: 'Safeline Security Solution',
        role: 'IT Officer',
        years: '2020 - 2022',
      },
      {
        company: 'Mandera County Assembly',
        role: 'ICT Intern',
        years: '2020 - 2020',
      },
    ],
  },
];



const skillData = [
  {
    title: 'skills',
    data: [
      {
        category: "Frontend",
        frontend: 'HTML, CSS, Javascript, React, Next, TailwindCSS, SASS',
      },
      {
        category: "Backtend",
        backend: 'Python, Javascript, Django, Ruby, Ruby on Rails, Next',
      },
      {
        category: "Cloud",
        cloud: 'AWS - AWS CCP  and SAA certified',
      },
      {
        category: "Other",
        others: 'SEO, IT support, UI/UX, DEVOPS',
      },
    ],
  },
  {
    title: 'tools',
    data: [
      {
        icon: <SiVisualstudiocode />,
        name: 'Visual Studio Code',
      },
      {
        icon: <SiFigma />,
        name: 'Figma',
      },
      {
        icon: <SiNotion />,
        name: 'Notion',
      },
      
      {
        icon: <SiGit />,
        name: 'Git',
      },
      {
        icon: <SiDocker />,
        name: 'Docker',
      },
      {
        icon: <SiKubernetes />,
        name: 'Kubernetes',
      },
      {
        icon: <SiAmazonaws />,
        name: 'Amazon Web Services (AWS)',
      },
      {
        icon: <SiReact />,
        name: 'React',
      },
      {
        icon: <SiRedux />,
        name: 'Redux',
      },
      {
        icon: <SiBootstrap />,
        name: 'Bootstrap',
      },
      {
        icon: <SiSass />,
        name: 'Sass',
      },
      {
        icon: <SiWebpack />,
        name: 'Webpack',
      },
      {
        icon: <SiBabel />,
        name: 'Babel',
      },
      {
        icon: <SiTailwindcss />,
        name: 'Tailwind CSS',
      },
      // {
      //   icon: <SiNextDotJs />,
      //   name: 'Next.js',
      // },
    ],
  },
];


const About = () => {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <section id="about" className='xl:h-[860px]  pb-12 xl:py-6'>
      <div className='container mx-auto'>
          <h2 className="text-headingColor text-center mb-20 font-[800] text-[2.4rem] ">
                About Me
           </h2>
        <div className='flex flex-col  gap-1 xl:flex-row'>
          {/* Image on the right */}

          <div className='flex-1  order-2 md:order-1   md:mr-20 md:mb-0 mb-8 rounded-full'>
            
            <img src={shukri} alt="shukri's photo" className='mx-auto xl:mx-0' />
          </div>

         
            
          <div className='flex-1 order- mb-10 sm:mb-0 md:order-2 '>
          <div className='w-full   text-center grid grid-cols-3 max-w-[520px] border border-gray-200  shadow-sm rounded-full'>
            <div
              className={`col-span-1 rounded-full py-3 cursor-pointer ${
                activeTab === 'personal' ? 'font-bold bg-teal-500 transition duration-3000 ease-in-out' : 'text-black font-bold'
              }`}
              onClick={() => setActiveTab('personal')}
            >
              Personal info
            </div>
            <div
              className={`col-span-1 rounded-full py-3 cursor-pointer ${
                activeTab === 'qualifications' ? ' font-bold bg-teal-500 transition duration-3000 ease-in-out' : 'text-black font-bold'
              }`}
              onClick={() => setActiveTab('qualifications')}
            >
              Qualifications
            </div>
            <div
              className={`col-span-1 rounded-full py-3 cursor-pointer ${
                activeTab === 'skills' ? ' font-bold bg-teal-500 transition duration-3000 ease-in-out' : 'text-black font-bold'
              }`}
              onClick={() => setActiveTab('skills')}
            >
              Skills
            </div>
          </div>



            <div className='text-lg  md:pl-10 pl-0  mt-12 xl:mt-8'>
              {/* tabs content */}
              <div>
              {activeTab === 'personal' && (
                <div className='text-center xl:text-left'>
                  <h3 className='text-2xl font-bold md:mb-2 mb-6'>Unmatched Service Quality for Over 4 Years</h3>
                  <p className='md:p-2 md:mb-4 mb-8 max-w-xl mx-auto xl:mx-0'>
                    I specialize in crafting intuitive websites with
                    cutting-edge technology, delivering dynamic and engaging
                    user experiences.
                  </p>
                  {/* Icons and Text */}
                  <div className='grid   xl:grid-cols-2  gap-4 mb-6'>
                    {infoData.map((item, index) => (
                      <div key={index} className='flex gap-x-4  mx-aut xl:mx-0'>
                        {/* Render the icon */}
                        <div className='text-teal-500'>{item.icon}</div>
                        {/* Render the text */}
                        <div>{item.text}</div>
                      </div>
                    ))}
                  </div>
                  {/* Language Skills */}
                  <div className='flex flex-col gap-y-2'>
                    <div className='text-teal-500'>Language Skill</div>
                    <div className='border-b border-black '></div>
                    <div>English, Swahili, Oromo, Somali</div>
                  </div>
                </div>
              )}
             
             {/* qualifications */}


                {activeTab === 'qualifications' && (
                    <div>
                      <h3 className='text-2xl font-bold mb-6 text-headingColor  text-center xl:text-left'>My Awesome Journey</h3>
                      {/* experience & education wrapper */}
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        {/* experience */}
                        <div className='flex flex-col gap-6'>
                          <div className='flex items-center gap-4 text-primary'>
                            <FaBriefcase size={28} />
                            <h4 className='capitalize text-3xl underline text-headingColor font-medium'>Experience</h4>
                          </div>
                          {/* experience list */}
                          <div className='flex flex-col gap-8'>
                            {qualificationData.find(item => item.title === 'experience').data.map((item, index) => (
                              <div className='flex items-center gap-4' key={index}>
                                <div className='h-1 w-1 bg-teal-300'></div>
                                <div>
                                  <div className='font-semibold mb-2 text-xl text-smallTextColor leading-none'>
                                    {item.company}
                                  </div>
                                  <div className='text-lg mb-2 leading-none text-gray-900'>
                                    {item.role}
                                  </div>
                                  <div className='text-base font-medium'>{item.years}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* education */}
                        <div className='flex flex-col gap-6'>
                          <div className='flex items-center gap-4 text-primary'>
                            <FaGraduationCap size={28} /> 
                            <h4 className='capitalize text-3xl underline text-headingColor font-medium'>Education</h4>
                          </div>
                          {/* education list */}
                          <div className='flex flex-col gap-8'>
                            {qualificationData.find(item => item.title === 'education').data.map((item, index) => (
                              <div className='flex items-center gap-4' key={index}>
                                
                                
                                  <div className='h-1 w-1 bg-teal-300'></div>
                              
                                <div>
                                  <div className='font-bold mb-2 text-smallTextColor text-xl leading-none'>
                                    {item.university}
                                  </div>
                                  <div className='text-lg mb-2 leading-none '>
                                    {item.qualification}
                                  </div>
                                  <div className='text-base  font-medium'>{item.years}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}


                {/* skills */}


                {activeTab === 'skills' && (
                  <div className='text-center xl:text-left'>
                    <h3 className='text-2xl text-headingColor font-bold mb-8'>What I Use Everyday</h3>
                    {/* Skills */}
                    <div className='mb-4'>
                      <h4 className='text-3xl text-left font-semibold mb-2'>Skills</h4>
                      <div className='border-b border-black mb-4'></div>
                      {/* Skill list */}
                      <div>
                        {skillData.find(item => item.title === 'skills').data.map((item, index) => (
                          <div className='flex p-1 gap-5 '>
                            <div className='font-bold text-teal-600 '> {item.category}:</div> 
                            <div className='w- text-center mb-3 md:mb-1  xl:text-left mx-auto xl:mx-0' key={index}>
                                <div className='font-medium '> {item.frontend}</div>
                              
                              <div className='font-medium '> {item.backend}</div>
                              <div className='font-medium '> {item.cloud}</div>
                              <div className='font-medium '> {item.others}</div>
                            </div>
                            
                           </div>
                        ))}
                      </div>
                    </div>
                    {/* Tools */}
                    <div>
                      <h4 className='text-3xl  font-semibold mb-2 text-left'>Tools</h4>
                      <div className='border-b border-black mb-4'></div>
                      {/* Tool list */}
                      <div className='flex flex-wrap justify-center xl:justify-start'>
                        {skillData.find(item => item.title === 'tools').data.map((item, index) => (
                          <div className='w-1/7 mb-10 px-4' key={index}>
                            <div className='text-4xl '>{item.icon}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
