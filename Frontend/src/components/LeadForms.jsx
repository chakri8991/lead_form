import "./LeadForms.css"
import { useState, useEffect } from "react"

const LeadForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    })

    const OnchangeName = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = "http://localhost:5000/";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(formData)
        }
        const response = await fetch(url, options)

        setFormData({
            name: '',
            email: '',
            company: '',
            message: ''
        })


    }


    return (
        <div className="mainDiv">
            <div className="form-bg">
                <h1>generation form</h1>
                <form className="formDiv" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter Your Name" name="name" onChange={OnchangeName} value={formData.name}required />
                    <input type="email" placeholder="Enter your Email" name="email" onChange={OnchangeName} value={formData.email}required />
                    <input type="text" placeholder="Company Name" name="company" onChange={OnchangeName} value={formData.company} required />
                    <textarea placeholder="Enter your message" name="message" onChange={OnchangeName} value={formData.message}required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default LeadForm