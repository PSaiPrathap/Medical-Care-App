import {Link} from 'react-router-dom'

import HealthcareLogo from "./MedicalHealthLogo.jpg"
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="nav-content1">
        <Link to={"/"} className="link" >
          <img
            className="logo"
            src={HealthcareLogo}
            alt="logo"
          />
          
        </Link>
        <h1 className='title'>Medical Care</h1>
      </div>
      <div className="nav-content2">
        <ul className="consultListItems">
          <Link to={"/"} className="link">
            <li className="consultList">Home</li>
          </Link>
          <Link to={"/BookedAppointment"} className="link" >
            <li className="consultList">Booked Appointments</li>
          </Link>
          <li className="consultList">Others</li>
        </ul>
        <div>
          <button className="loginButton" type="button">
            Login/Signup
          </button>
        </div>
      </div>
    </div>
  </nav>
)

export default Header
