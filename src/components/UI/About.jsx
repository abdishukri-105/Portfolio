import { useState } from 'react';
import shukri from '../../assets/images/shukri.jpg';
import { FaPhone, FaEnvelope, FaCalendarAlt, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

import { AiOutlineUser } from 'react-icons/ai';
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
    text: 'Bachelor of Science in Information Technology ',
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
    title: 'experience',
    data: [
      {
        company: 'ABC Inc.',
        role: 'Software Engineer',
        years: '2018 - 2020',
      },
      {
        company: 'XYZ Corporation',
        role: 'Senior Developer',
        years: '2020 - 2022',
      },
      {
        company: 'Tech Innovators',
        role: 'Lead Developer',
        years: '2022 - Present',
      },
    ],
  },
];

const skillsData = [
  {
    title: 'skills',
    data: [
      {
        name: 'HTML, CSS',
      },
      {
        name: 'Front-end Development',
      },
      {
        name: 'JavaScript, PHP',
      },
      {
        name: 'Back-end Development',
      },
    ],
  },
  {
    title: 'tools',
    data: [
      {
        name: 'Tool 1',
      },
      {
        name: 'Tool 2',
      },
      {
        name: 'Tool 3',
      },
      {
        name: 'Tool 4',
      },
    ],
  },
];


const About = () => {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <section className='xl:h-[860px]  pb-12 xl:py-6'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          About me
        </h2>
        <div className='flex flex-col gap-16 xl:flex-row'>
          {/* Image on the right */}
          <div className='flex-1'>
            <img src={shukri} alt="shukri's photo" className='mx-auto xl:mx-0' />
          </div>

          <div className='flex-1'>
            <div className='w-full text-center grid grid-cols-3 max-w-[520px] border-2 border-black py-3 rounded-full'>
              <div
                className={`col-span-1 cursor-pointer ${
                  activeTab === 'personal' ? 'text-teal-500 font-bold' : 'text-black font-bold'
                }`}
                onClick={() => setActiveTab('personal')}
              >
                Personal Info
              </div>
              <div
                className={`col-span-1 cursor-pointer ${
                  activeTab === 'qualifications' ? 'text-teal-500 font-bold' : 'text-black font-bold'
                }`}
                onClick={() => setActiveTab('qualifications')}
              >
                Qualifications
              </div>
              <div
                className={`col-span-1 cursor-pointer ${
                  activeTab === 'skills' ? 'text-teal-500 font-bold' : 'text-black font-bold'
                }`}
                onClick={() => setActiveTab('skills')}
              >
                Skills
              </div>
            </div>
            <div className='text-lg pl-10  mt-12 xl:mt-8'>
              {/* tabs content */}
              <div>
              {activeTab === 'personal' && (
                <div className='text-center xl:text-left'>
                  <h3 className='text-2xl font-bold mb-2'>Unmatched Service Quality for Over 4 Years</h3>
                  <p className='p-2 mb-4 max-w-xl mx-auto xl:mx-0'>
                    I specialize in crafting intuitive websites with
                    cutting-edge technology, delivering dynamic and engaging
                    user experiences.
                  </p>
                  {/* Icons and Text */}
                  <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                    {infoData.map((item, index) => (
                      <div key={index} className='flex items-center gap-x-4 mx-auto xl:mx-0'>
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



                {activeTab === 'qualifications' && (
                  <div>
                    <h3 className='text-xl font-semibold mb-4'>Qualifications</h3>
                    {/* Experience */}
                    <div>
                      <h4 className='font-semibold mb-2'>Experience</h4>
                      <ul>
                        {qualificationData[0].data.map((item, index) => (
                          <li key={index} className='mb-2'>
                            {item.company} - {item.role} ({item.years})
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
               {activeTab === 'skills' && (
                  <div>
                    <h3 className='text-xl font-semibold mb-4'>Skills</h3>
                    <ul>
                      {skillsData.find((item) => item.title === 'skills').data.map((skill, index) => (
                        <li key={index}>{skill.name}</li>
                      ))}
                    </ul>
                    <h3 className='text-xl font-semibold mt-8 mb-4'>Tools</h3>
                    <ul>
                      {skillsData.find((item) => item.title === 'tools').data.map((tool, index) => (
                        <li key={index}>{tool.name}</li>
                      ))}
                    </ul>
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
