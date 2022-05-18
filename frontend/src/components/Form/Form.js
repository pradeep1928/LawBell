import React from 'react'
import "./Form.css";

const Form = () => {
  return (
    <div>

        <div className="head">
            <h1 className="heading">Hire a new Advocate.</h1>
        </div>
        <div className="form">

            {/* Case in court */}
            Is your case already in court?
            {/* Using Bootstrap for Yes No Button */}
            <button type="button" class="btn btn-outline-primary">Yes</button>
            <button type="button" class="btn btn-outline-secondary">No</button><br />

            {/* State of jurtisdiction */}
            State of jurisdiction?
            {/* Using bootstrap for dropdown menue */}
            <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                States
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="/">Maharashtra</a></li>
                <li><a class="dropdown-item" href="/">Gujarat</a></li>
                <li><a class="dropdown-item" href="/">Delhi</a></li>
            </ul>
            </div><br />

            {/* Pincode */}
            <label htmlFor="pinCode">Pincode: </label>
            <input type="text" className="pin" /><br />

            {/* preference */}
            <label htmlFor="Pref">Preference:</label>
            <button type="button" class="btn btn-outline-primary">Male</button>
            <button type="button" class="btn btn-outline-secondary">Female</button><br />

            {/* Years of experience */}
            <label htmlFor="experience">Number of Year of Experience :</label>

            <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Years
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="/">1-5</a></li>
                <li><a class="dropdown-item" href="/">6-10</a></li>
                <li><a class="dropdown-item" href="/">11-15</a></li>
            </ul>
            </div>
        
        </div>
    </div>
  )
}

export default Form