import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Box, Form, Button } from 'react-bulma-components'
import { Link } from "react-router-dom"
import "../App.css"


const LocationForm = (props) => {
    const navigate = useNavigate()
    const params = useParams()
    const location = props.location

    const newForm = {
        name: "",
        description: "",
        address: "",
        phone: "",
        hours: "",
        image:""
      }
    
    const [form, setForm] = useState(location)
    const { Input, Field, Label } = Form


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    //handle form for updating
    const handleSubmit = (e) => {
        e.preventDefault()
        props.createLocation(form)
        setForm(newForm)
    // optional direct where you want
        navigate("/location")
    }

    return (
        <div>
            <Box className="form-box">
                <h2 className="is-size-3 has-font-weight-bold">Create New Location </h2>
                    <form onSubmit={handleSubmit}>
                        <Field>
                            <Label>Name</Label>
                            <Input 
                                name="name"
                                value={form?.name}
                                placeholder="PATXI'S CAMPBELL"
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Description</Label>
                            <Input 
                                name="description"
                                value={form?.description}
                                placeholder="We opened our first restaurant in the summer of 2004 in Palo Alto, California!"
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Address:</Label>
                            <Input 
                                name="address"
                                value={form?.address}
                                placeholder="1875 S. Bascom Ave. Campbell, CA 95008"
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Phone:</Label>
                            <Input 
                                name="phone"
                                value={form?.phone}
                                placeholder="999-999-9999"
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Hours:</Label>
                            <Input 
                                name="hours"
                                value={form?.hours}
                                placeholder="Sunday-Thursday: 11 am to 9 pm Friday-Saturday: 11 am to 9 pm"
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Image:</Label>
                            <Input 
                                name="image"
                                value={form?.image}
                                placeholder="image.jpg"
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>

                        <div className="buttons is-left">
                            <Button className="is-primary">Submit</Button> 
                            <Link to="/location">
                                <Button className="is-light">Cancel</Button>
                            </Link>
                        </div>
                    </form>
            </Box>
        </div>
    )
}

export default LocationForm