import {Link} from 'react-router-dom'

import "./index.css"
const DoctorsList=(props)=>{
    const {eachItem}=props
    const {id,name,profileImage,specialization,availabilityStatus}=eachItem

    return(
        <li className="listItem">
            <Link 
                to={{
                    pathname: `/doctorsProfile/${id}`,
                    state: { doctor: eachItem }
                }} 
                className="link"
                >

                <div className="ProfileImgContainer">
                    <div className="nameContainer">
                        <h1 className="name">{name}</h1>
                        <p className="specialization">{specialization}</p>
                        <p className="availabilityStatus">Availability Status: {availabilityStatus}</p>
                    </div>
                    <img className="ProfileImg" src={profileImage} alt="profileIMG" />
                </div>
            </Link>
        </li>
    )
}

export default DoctorsList

//details,
 // const {match} = this.props
    // console.log(match)
    // const {params} = match
    // console.log(params)
    // const {id} = params
    // console.log(id)