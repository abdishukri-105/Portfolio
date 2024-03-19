import { useEffect } from "react";
import Aos from "aos";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/UI/Hero";
import "./App.css";
import Services from "./components/UI/Services";
import Portfolio from "./components/UI/portfolio";
import Contact from "./components/UI/Contact";
import About from "./components/UI/About";

import { Analytics } from '@vercel/analytics/react'; 
import Projects from "./components/UI/Projects";
import FloatingIcons from "./components/UI/FloatingIcons";

import Myservices from "./components/UI/Myservices"


import { Helmet } from 'react-helmet-async';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return<>
   <Analytics /> 
   <Header/>
  <main>
   
   <Hero />
   <FloatingIcons />
   <About />
   {/* <Services /> */}
   <Myservices />
   <Projects />
   {/* <Portfolio /> */}
   <Contact />
   
  </main>
  <Footer/>
  </>
}

export default App;
