import Image from "next/image";
import Skills from "@/views/skills";
import AboutSection from "@/views/about"
import Education from "@/views/education";
import Experience from "@/views/experience";
import Projects from "@/views/projects";
import Eduction from "@/views/education"
export default function Home() {
  return (
    <div className="container">
      <AboutSection/>
      <Skills />
    
      <Experience/>  
      <Projects/>
      <Eduction/>
    </div>
  );
}
