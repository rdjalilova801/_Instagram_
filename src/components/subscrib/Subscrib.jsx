import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import './subscrib.css'

const Subscrib = () => {
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
        <div className='text-light ps-4'>
             <div className='d-flex align-items-center ps-5'>
                    <img className='rasm' src="https://avatars.mds.yandex.net/i?id=e710e68bc5c1c9823d268b991bb70a7692a81df9-7455824-images-thumbs&n=13" alt="rasm" />
                    <div>
                        <h5>_programmer_</h5>
                        <h6>🎓🤍</h6>
                    </div>
                </div>
           {
        (mass) && mass.map((item, index) => {
          return (
            <div key={index}>
                <div className='d-flex align-items-center'>
                    <img className='rasm1' src={item.logo} alt={item.first_name} />
                    <div>
                        <p>{item.first_name}: <span className='text-secondary'>follow me:...</span></p>
                    </div>
                    <button className=' ms-4 btn btn-dark px-4 fs-5 fw-bold text-primary'>Follow</button>
                </div>
            </div>
          )
        })
      }
        </div>
    );
}

export default Subscrib;