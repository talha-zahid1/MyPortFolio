import {ArrowDownToLine,MessageCircleMore,BriefcaseBusiness,CodeXml,X,Menu} from 'lucide-react'

import { useState } from 'react'

const Navbar = () => {
  const [flag, setflag] = useState(false)
  return (
    <div className='relative bg-[#14061f]  h-[55px] md:h-[75px] border border-b-slate-700   w-full flex justify-between'
    >
      <div className='flex justify-center items-center p-2'>
        <p className='text-2xl md:text-4xl tracking-wider md:font-normal font-semibold text-white'>MT<span className='text-purple-600'>.</span></p>
      </div>
      <div className='md:flex hidden md:gap-10 justify-center md:text-xl text-xs'>
      <div className='flex justify-center items-center p-2 '>
        <a href="#Home" className='text-white font-semibold'>Home</a>
      </div>
      <div className='h-5 w-px bg-slate-700 self-center'></div>
      <div className='flex justify-center  items-center p-2'>
        <a href="#skills" className='text-white font-semibold'>Skills</a>
      </div>
      <div className='h-5 w-px bg-slate-700 self-center'></div>
      <div className='flex justify-center items-center p-2 '>
        <a href="#Experience" className='text-white font-semibold'>Experience</a>
        
      </div>
      <div className='h-5 w-px bg-slate-700 self-center'></div>
      <div className='flex justify-center items-center p-2 '>
        <a href="#Contact" className='text-white font-semibold'>Contact</a>
      </div>
      </div>
      <a
      
      href='/Muhammad_Talha_CV.pdf' 
      download={"Muhammad_Talha_CV.pdf"}
      className='md:flex hidden justify-center items-center border hover:bg-purple-800/30  border-slate-700 rounded-lg m-3 w-[79px] h-[28px] md:w-[140px] md:h-[50px] cursor-pointer md:p-1 p-[3px]'>
        <p className='text-white font-semibold md:tracking-wide tracking-tight md:text-lg text-xs '>Download CV</p>
      </a>
      <div
      className='md:hidden m-2 flex justify-center rounded-lg items-center border border-purple-600 bg-purple-400/20 shadow-[inset_0_0_6px_rgba(168,85,247,0.3),0_0_8px_rgba(168,85,247,0.2)] cursor-pointer '
      onClick={()=>{setflag(
        !flag
      )}}
      >
        {flag ?(<X className='h-[20px] w-[40px] font-hero text-white'  />):(<Menu className='h-[20px] w-[40px] font-hero text-white' />)}
        
      </div>
      {flag && < div className='absolute top-full p-5 z-50 right-2 w-38 bg-[#14061f] border border-purple-600 rounded-lg m-2 font-hero flex flex-col gap-1 text-sm text-purple-200 '>
      <a href="#skills" className='inline-flex gap-1'
      onClick={() => setflag(false)}
      >
        <CodeXml className='h-[19px] w-[20px]' />
        Skills</a>
        <div className='h-px w-18  bg-slate-700 self-center'></div>
      <a href="#Experience" className='inline-flex gap-1'
      onClick={() => setflag(false)}
      >
        <BriefcaseBusiness className='h-[19px] w-[20px]' />
        Experience</a>
        <div className='h-px w-18  bg-slate-700 self-center'></div>
      <a href="#Contact" className='
       inline-flex gap-1'
      onClick={() => setflag(false)}
      >
        <MessageCircleMore className='h-[19px] w-[20px]' />
        Contact</a>
        <div className='h-px w-18  bg-slate-700 self-center'></div>
      <a href='/Muhammad_Talha_CV.pdf' download={"Muhammad_Talha_CV.pdf"}
      className='inline-flex gap-1'
      
      >
      <ArrowDownToLine className='h-[19px] w-[20px]' />
      Download CV</a>
      </div>}
    </div>
  )
}

export default Navbar