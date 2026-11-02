import Navbar from "./Components/Navbar"
import HeroSection from "./Components/HeroSection"
import ExperienceSection from "./Components/ExperienceSection"
import SkillsSection from "./Components/SkillsSection"
import ContactSection from "./Components/ContactSection"


const App = () => {
  return (
    <div className='bg-[#11051f] min-h-screen flex flex-col justify-center overflow-x-clip items-center'>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Hero Section */}
      <HeroSection></HeroSection>
      {/* Skills */}
      <SkillsSection></SkillsSection>
      {/*  Work Experience Section(Personel Projects)*/}
      <ExperienceSection></ExperienceSection>
      {/*Footer Section(Contact)  */}
      <ContactSection></ContactSection>


    </div>
  )
}

export default App