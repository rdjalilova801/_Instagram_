import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import './header.css'

export default function Header() {
  const [mass, setMass] = useState([])

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
    <div className='d-flex justify-content-center main'>
      {
        (mass) && mass.map((item, index) => {
          return (
            <div key={index}>
              <img className='rasm' src={item.logo} alt={item.first_name} />
            </div>
          )
        })
      }
    </div>
  )
}
