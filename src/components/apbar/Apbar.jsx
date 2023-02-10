import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { MdExplore } from 'react-icons/md'
import { BsCameraReelsFill } from 'react-icons/bs'
import { SiGooglemessages } from 'react-icons/si'
import { BiLike } from 'react-icons/bi'
import { AiOutlinePlusSquare } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'
import {BsPersonCircle} from 'react-icons/bs'
import './apbar.css'


export default function Apbar() {
  return (
    <div>
      <div className="row g-0">
        <div className="text-start">
          <ul>
            <li>Instagram</li>
            <li> <span>< AiFillHome /></span>  Home</li>
            <li> <span>< FiSearch /></span> Search</li>
            <li> <span>< MdExplore /></span> Explore</li>
            <li> <span><BsCameraReelsFill /></span> Reels</li>
            <li> <span><SiGooglemessages /></span> Messages</li>
            <li> <span><BiLike /></span> Notifications</li>
            <li> <span><AiOutlinePlusSquare /></span> Create</li>
            <li> <span><BsPersonCircle/></span> Profile</li>
            <li> <span><RxHamburgerMenu /></span> More</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
