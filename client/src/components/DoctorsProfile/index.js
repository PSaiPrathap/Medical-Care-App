import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { TailSpin } from 'react-loader-spinner';


import Header from "../Header"

import './index.css'


const DoctorsProfile = (props) => {
  const [doctorData, setDoctorData] = useState(null)
  const [error, setError] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    datetime: ''
  })

  const stateDoctor = props.location.state?.doctor
  const doctorId = props.match.params.id

  useEffect(() => {
    if (stateDoctor) {
      setDoctorData(stateDoctor)
    } else {
      const fetchDoctor = async () => {
        try {
          const res = await fetch(`http://localhost:5000/doctor/${doctorId}`)
          if (!res.ok) throw new Error('Doctor not found')
          const data = await res.json()
          setDoctorData(data)
        } catch (err) {
          setError(err.message)
        }
      }
      fetchDoctor()
    }
  }, [stateDoctor, doctorId])

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const { name, email, datetime } = formData
    if (!name || !email || !datetime) {
      alert("Please fill all fields.")
      return
    }

    const newAppointment = {
      patientName: name,
      email,
      datetime,
      doctorName: doctorData.name,
      specialization: doctorData.specialization,
      doctorId: doctorData.id,
      id: Date.now() // unique id for deletion
    }

    const existing = JSON.parse(localStorage.getItem("appointments")) || []
    localStorage.setItem("appointments", JSON.stringify([...existing, newAppointment]))

    props.history.push('/BookedAppointment', {
      latest: newAppointment
    })
  }

  if (error) return <div className="error-container"><h1>{error}</h1></div>
  if (!doctorData) return (
                  <div className="loading"><TailSpin
                      height="40"
                      width="40"
                      color="#4fa94d"
                      ariaLabel="tail-spin-loading"
                      radius="1"
                      visible={true}
                    /></div>
                  )


  const { name, specialization, profileImage, availabilityStatus, details,availabilitySchedule } = doctorData
  const {mondaySaturday}= availabilitySchedule

  return (
    <div className="doctorprofilecontainer">
      <Header/>
      <div className='profilecontainer'>
        <div className="profilecontent">
          <h1 className="profileheading"><strong>Name:- {name}</strong></h1>
          <img src={profileImage} alt={name} className="profileimage" />
        </div>
        
        <div className="profiledetails">
          <p><strong>Specialization: </strong> {specialization}</p>
          <p><strong>Availability Status: </strong> {availabilityStatus}</p>
          <p><strong>Availability Schedule: </strong>{mondaySaturday}</p>
          <p><strong>About:</strong> {details}</p>
          <div className='buttoncon'>
            <button className="bookappointmentbtn" onClick={() => setShowForm(true)}>  
              Book Appointment
            </button>

          </div>
          
        </div>
      </div>
      

      {showForm && (
        <div className="modaloverlay">
          <div className="modal">
            <h2>Book Your Appointment</h2>
            <form onSubmit={handleSubmit} className="appointmentform">
              <label>
                Patient Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
              </label>
              <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
              </label>
              <label>
                Appointment Date & Time:
                <input type="datetime-local" name="datetime" value={formData.datetime} onChange={handleChange} />
              </label>
              <div className="formbuttons">
                <button type="submit" className="confirmation" >Confirm</button>
                <button type="button" className='cancel' onClick={() => setShowForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default withRouter(DoctorsProfile)
