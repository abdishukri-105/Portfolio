import React from "react";

const About = () => {
    return (
        <>
        <h2 className="text-headingColor font-[800] text-[2.4rem]  text-center">
          Elevator pitch
       </h2>
        <div className="flex justify-center items-center h-screen "  data-aos="fade-right"
         data-aos-duration="1500"> 
        <div className="w-3/4 p-6 bg-primaryColor rounded-lg shadow-sm">
               

            <div className="prose text-white text-[15px] font-[500]">
    <p className="mb-4">
        Hello, my name is Abdishukri Mohamed. I am a Cloud Developer/Architect and a student at ALX pursuing AWS Cloud. Holding a Bachelor's degree in IT and Software Engineering from Moringa School, I have a strong foundation in technology and software development. I thrive on solving complex problems and paying meticulous attention to detail.
    </p>
    <p className="mb-4">
        My passion for continuous learning and staying at the forefront of emerging technologies drives me to contribute to meaningful projects. By leveraging my IT and software engineering skills, I offer efficient solutions that optimize technology and drive positive change. Employers and clients can count on my commitment to excellence, and my contributions will make their jobs and lives easier by optimizing technology and driving positive change.
    </p>
    <p className="mb-4">
        I am enthusiastic about exploring new opportunities and collaborating on impactful projects. If you're seeking a dedicated and driven IT professional to add value to your team, I'd be excited to connect and discuss potential partnerships. Thank you for considering my expertise. Let's make a difference together!
    </p>

    <p>see my pitch   <a className="underline text-black" target="_blank" href="https://www.loom.com/share/52a438f35cea4870bf2d3c8df5bd9d9b?sid=9a3904dc-3ce4-4e11-9e07-01e0729f23f5">  video</a></p>
</div>

            </div>
        </div>
        </>
    );
};

export default About;
