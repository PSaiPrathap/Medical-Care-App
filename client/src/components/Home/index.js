import { useEffect, useState } from 'react'
import Header from '../Header'
import "./index.css"
import DoctorsList from '../DoctorsList'

import { FaUserDoctor} from "react-icons/fa6";

const Home = () => {

  const [items,setItems]= useState([])
  const [searchDoctorName, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(items);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const res = await fetch("http://localhost:5000")
        const data = await res.json()
        setItems(data)
      } catch (err) {
        console.error("Fetch failed:", err)
      }
    }
    fetchedData()
  }, [])


  // useEffect(()=>{
  //   const fetchedData=async()=>{
  //     const res=await fetch("http://localhost:5000")
  //     const data=await res.json()
  //     console.log(data)
  //     setItems(data)
  //   }
  //   fetchedData()
  // })


  useEffect(()=>{
    const filtered = items.filter(item =>
      item.name.toLowerCase().includes(searchDoctorName.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchDoctorName, items]);

 return(
    <div>
      <div className="HomeMainBg">
        <Header />
        <div className='descriptionConatiner'>
          <h1 className='mainHeading'>Book Your Doctor Appointment<br/> Online!</h1>
          <p className='description'>A Healthier Tomorrow Starts Today; Schedule Your Appointment!<br/> Your Wellness, Our Expertise: Set Up Your Appointment Today.</p>
          <button className='bookingButton'>Book An Appointment</button>
        </div>
      </div>
      <div className='bottonContainer' >
          <h2 className='bookyourApp'>Book Your Appointment !</h2>
          <div className='searchContainer'>
            <div className='docsearchcontainer'>
              <FaUserDoctor />
              <input placeholder='Enter Doctor Name' className='searchInput' value={searchDoctorName} type="text" onChange={(event) => setSearchTerm(event.target.value)} />
            </div>
            <button  type="submit" className='searchbutton'>Search</button>
          </div>
          
          <ul className='listContainer'>
            {
              filteredData.map(eachItem=>(
                <DoctorsList key={eachItem.id} eachItem={eachItem}  />
              ))
            }
          </ul>
      </div>
    </div>
  )
}

export default Home
