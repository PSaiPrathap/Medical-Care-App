import { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import Header from "../Header"
import './index.css'


const BookedAppointment = (props) => {
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("appointments")) || []
    setAppointments(data)
  }, [])

  const handleDelete = (id) => {
    const filtered = appointments.filter(appt => appt.id !== id)
    setAppointments(filtered)
    localStorage.setItem("appointments", JSON.stringify(filtered))
  }

  if (appointments.length === 0) {
    return (
      <div className="confirmationcontainer">
        <h2>📭 No Appointments Found</h2>
        <p>Book an appointment from the home page to see it listed here.</p>
      </div>
    )
  }

  return (
    <div className="confirmationcontainer">
      <Header/>
      <div className="appointmentscon">
        <h1>All Booked Appointments</h1>
        <ul className="appointmentslist">
          {appointments.map((appt) => (
            <li key={appt.id} className="appointmentcard">
              <div>
                <p><strong>Patient Name:</strong> {appt.patientName}</p>
                <p><strong>Email:</strong> {appt.email}</p>
                <p><strong>Date & Time:</strong> {new Date(appt.datetime).toLocaleString()}</p>
                <p><strong>Doctor:</strong> Dr. {appt.doctorName}</p>
                <p><strong>Specialization:</strong> {appt.specialization}</p>
              </div>
              
              <button
                className="deletebtn"
                onClick={() => handleDelete(appt.id)}
                aria-label={`Delete appointment for ${appt.patientName}`}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default withRouter(BookedAppointment)
