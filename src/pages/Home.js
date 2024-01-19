import React from 'react'
import { SlArrowDown } from "react-icons/sl";
import { BsHouseDoor } from "react-icons/bs";
import { SlArrowRight } from "react-icons/sl";
import startlogo from '../assets/startlogo.png';
import hyggex from "../assets/hyggex.png";
import plus from "../assets/plus.svg"
import index from "../index.css"
import { MdFullscreen } from "react-icons/md";
import { VscDebugRestart } from "react-icons/vsc";
import { SlArrowLeft } from "react-icons/sl";
import vector from "../assets/Vector.svg";
import vectorr from "../assets/Vectorr.svg";
import fullScreen from "../assets/fullScreen.svg"
import restart from  "../assets/restart.svg"



const Home = ({isLoggedIn}) => {
  return (

     <div className='h' >
          <div className="flex flex-row items-center justify-start m-4 p-4 mb-2 pb-2">
           <BsHouseDoor />
           <SlArrowRight />
            <div className="content1">Flashcard</div>
            <SlArrowRight />
            <div className="content1">Mathematics</div>
            <SlArrowRight />
            <div id='content' className=" font-semibold">
                Relation and Function
             </div>
             <br></br>
          </div>
           <div>
         <h2 id='ram' className=" text-center text-[2rem] not-italic font-bold leading-[normal]  font-inherit text-transparent inline-block max-w-full text-2xl m-4 p-4 ">
            Relations and Functions ( Mathematics )
        </h2>
        </div>

         
              <div className='flex flex-col justify-center items-center '>
              <div className=' flex flex-row m-2 text-2xl justify-around cursor-pointer p-2 gap-10'>
               <div className='underline p-2 m-2 '>Start</div>
               <div className='p-2 m-2 '>Qize</div>
               <div className='p-2 m-2 '>Test</div>
               <div className='p-2 m-2 '>Game</div>
               <div className='p-2 m-2 '>Other</div>

              </div>
             
             <div id='box' className='h-[22rem] w-[44rem] shrink-0 bg-slate-500 rounded-3xl flex justify-center items-center'>
                  <div className='text'>9 + 6 + 7x - 2x - 3</div>
             </div>

             <div className='layout flex flex-row '>
            
             <img src={restart} className='img' alt="Logo"  loading="lazy"/>
             
             <img src={vectorr} className='img1' alt="Logo"  loading="lazy"/>
               1/10
              <img src={vector} className='img1' alt="Logo"  loading="lazy"/>
          
              <img src={fullScreen} className='img' alt="Logo"  loading="lazy"/>
             </div>
              </div>

            <div className='flex justify-between  items-center'>
              <div className='flex flex-row '>
              <img src={startlogo} alt="Logo" id="startlogo1" loading="lazy"/>
              <img src={hyggex} alt="Logo"  id='hyggex' loading="lazy"/>
              </div>

             <div className='flex flex-row mt-7 ml-20 p-11'>
             <img src={plus} alt="Logo" className='img3'/>
             <p id='createflashcard'>Create Flashcard</p> 
             </div>

            </div>
          
        

     <div className='m-4 p-4'>
    <div>
    <h1 id='faq' >FAQ</h1>
    <div >
    

    <div className='input flex flex-row justify-between mt-4 p-5'>
         Can education flashcards be used for all age groups
        <SlArrowDown />
     </div>

    <div >
      <div className='input flex flex-row justify-between mt-4 p-5'>
        How do education flashcards work?
        <SlArrowDown />
     </div>
     
    </div>
    <div >
      <div className="flex flex-row input leading-[26px] justify-between mt-4 p-5">
        Can education flashcards be used for test preparation?
        <SlArrowDown />
      </div>
    </div>
    </div>
  </div>
  </div>
  </div>
  );
}

export default Home
