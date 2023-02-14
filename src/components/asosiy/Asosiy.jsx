import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import './asosiy.css'
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { RiChat1Line } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { FiMoreHorizontal } from "react-icons/fi";
import { CiBookmark } from "react-icons/ci";




const Asosiy = () => {
  const [mass, setMass] = useState([])


  function like(index) {
    let Curmass = [...mass]
    console.log(Curmass[index].status);
    let like = "false"
    if(Curmass[index].status == "true"){
      like = "false"
      Curmass[index].status = like
    }else{
      like = "true"
      Curmass[index].status = like
    }
    setMass(Curmass)
  }

  useEffect(() => {
    Axios.get("https://api.npoint.io/b5fbd10a045dcfffe702")
      .then(ress => {
        setMass(ress.data)
        console.log(ress.data);
      })
      .catch(err => {
        console.log(err);
      })

  }, [])

  return (
    <div className='text-light ms-5'>
      {
        (mass) && mass.map((item, index) => {
          return (
            <div key={index}>
              <div className=' pt-2 main1'>
                <div className='d-flex align-items-center'>
                  <img className='rasmcha me-3' src={item.logo} alt={item.first_name} />
                  <div>
                    <h4>{item.first_name}</h4>
                    <h6>{item.Small_name}</h6>
                  </div>
                </div>
                <button className='btn btn fs-5 fw-bold text-light p-3'><FiMoreHorizontal /></button>
              </div>
              <img className='img' src={item.avatar} alt={item.first_name} />
              <div className='section'>
                <div className='d-flex'>
                  <h3 className='text-dager' onClick={() =>  like(index)}>{item.status == "true" ? <FcLikePlaceholder/> : <FcLike/>}</h3>
                  <h3><RiChat1Line /></h3>
                  <h3><FiSend /></h3>
                </div>
                <h3><CiBookmark /></h3>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default Asosiy;
