
import React, { Component } from 'react'
import "./Hire.css"



class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            court: "",
            jurisdiction: "",
            pincode: "",
            gender: "",


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    courthandler = (event) => {
        this.setState({
            court: event.target.value
        })
    }
    jurisdictionhandler = (event) => {
        this.setState({
            jurisdiction: event.target.value
        })
    }
    pincodehandler = (event) => {
        this.setState({
            pincode: event.target.value
        })
    }

    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.court} ${this.state.jurisdiction}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            court: "",
            jurisdiction: "",
            pincode: '',
            gender: "",
        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1 className='heading'>Hire a New Advocate.</h1>
                    <label>Is your case alreadyy filed in court :</label> <input type="text" value={this.state.court} onChange={this.courthandler} placeholder="Yes/No" /><br />
                    <label>State of Jurisdiction :</label> <input type="text" value={this.state.jurisdiction} onChange={this.jurisdictionhandler} placeholder="State Name" /><br />
                    <label>Pincode :</label> <input type="number" value={this.state.pincode} onChange={this.pincodehandler} placeholder="Pincode" /><br />
                    <label>Preference :</label><select onChange={this.genderhandler} defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                    <input type="submit" value="Submit" />
                </form>

            </div>
            
        )
    }
}

export default Form