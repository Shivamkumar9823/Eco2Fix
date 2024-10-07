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


   <div class="hexagon">
      <div class="circle">
          <RiTeamFill className="icon-container"/>
      </div>
      
   </div>
   <div class="hexagon">
      <div class="circle">
      <GoGoal  className="icon-container"/>
      </div>
   </div>
   <div class="hexagon">
      <div class="circle">
      <SiElectron className="icon-container"/>
      </div>
   </div>


   <div class="hexagon">
     <div class="circle">
     <GrDeliver className="icon-container"/>
     </div>
   </div>
   <div class="hexagon">
     <div class="circle">
     <HiOutlineSpeakerphone className="icon-container" />
     </div>
   </div>
   <div class="hexagon">
      <div class="circle">
      <RiExchangeDollarFill className="icon-container" />
      </div>
    </div>


 </div>
  );
};

export default Navbar;