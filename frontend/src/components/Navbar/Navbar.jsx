import React from 'react';
import { RiTeamFill } from "react-icons/ri";
import { GoGoal } from "react-icons/go";
import { SiElectron } from "react-icons/si";
import { GrDeliver } from "react-icons/gr";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { RiExchangeDollarFill } from "react-icons/ri";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'> 
      <div className="container">
          <div class="circle">
              <RiTeamFill className="icon-container"/>
          </div>
      </div>  
   <div class="container">
      <div class="circle">
      <GoGoal  className="icon-container"/>
      </div>
   </div>
   <div class="container">
      <div class="circle">
      <SiElectron className="icon-container"/>
      </div>
   </div>
   <div class="container">
     <div class="circle">
     <GrDeliver className="icon-container"/>
     </div>
   </div>
   <div class="container">
     <div class="circle">
     <HiOutlineSpeakerphone className="icon-container" />
     </div>
   </div>
   <div class="container">
      <div class="circle">
      <RiExchangeDollarFill className="icon-container" />
      </div>
    </div>


 </div>
  );
};

export default Navbar;