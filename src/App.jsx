import styles from "./App.module.css";
import { About } from "./components/About/About";


import  ContactUsComponent from "./components/Contact/Contact";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";

import Mission from "./components/Mission/Mission";
import DirectorsComponent from "./components/Directors/Directors";

import ServiceCard from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import { Experience } from "./components/Experience/Experience";
import Products from "./components/Product/Product";

import { PieChart } from "recharts";

import CareerDesign from "./components/Careers/Careers";
import ImageSlider from "./components/Careers/Careers";
import SliderComponent from "./components/Careers/Careers";
import SlideShow from "./components/Careers/Careers";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <PieRechartComponent/>
      <About />
      <DirectorsComponent/>
      <Mission/>
      <Products/>
      <SlideShow/>
      
     
      <Experience/>
      
     
      <ContactUsComponent/>
      <Footer/>
    
    </div>
  );
}

export default App;
