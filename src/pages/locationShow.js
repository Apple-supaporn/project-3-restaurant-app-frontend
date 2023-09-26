import {useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {Card, Box, Form, Button} from 'react-bulma-components'
import LocationCard from '../components/LocationCard'


const ShowLocation = (props) => {
    const navigate = useNavigate()
    const params = useParams() //can use /:id now
    const id = params.id
    const location = props.location
    const locationItem = location?.find((p) => p._id === id) 

    const newForm = {
        name: "",
        description: "",
        address: "",
        phone: "",
        hours: "",
        image:""
      }
    
    //State form data and edit mode
    const [form, setForm] = useState(newForm)
    const [editing, setEditing] = useState(false);
    const {Input, Field, Label} = Form;

    //Effect to update the form data when locationItem changes
    useEffect(() => {
        if (locationItem) {
          setForm(locationItem);
        }
      }, [locationItem]);

    //handleChange function - Update the form state on each input change
    const handleChange = (e) => { 
        setForm({...form, [e.target.name]: e.target.value })
    }



    const handleEdit = () => {
        setEditing(true);  //toggles the edit state when user click edit
      };

    //handle form for updating
    const handleSubmit = async (e) => {
        e.preventDefault()
        await props.updateLocation(form, id)
        setForm(newForm)
        setEditing(false);
        navigate(`/location/${id}`) 
        //optional direct where you want
    }

    const removeLocation = (e) => {
        e.preventDefault()
        props.deleteLocation(id)
        navigate("/location")
    }

    return (
        <div>
            <div className="show-centered-container">
            <LocationCard location={locationItem}/>
            </div>
            <section>
            <Box className="form-box">
                    <h2 className="is-size-3 has-font-weight-bold">Edit location </h2>
                    <form onSubmit={handleSubmit}>
                        <Field>
                            <Label>Name</Label>
                            <Input 
                                name="name"
                                value={form?.name}
                                placeholder={locationItem?.name || 'Name'}
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Description</Label>
                            <Input 
                                name="description"
                                value={form?.description}
                                placeholder={locationItem?.description || 'Description'}
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Address</Label>
                            <Input 
                                name="address"
                                value={form?.address}
                                placeholder={locationItem?.address || 'Address'}
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>phone</Label>
                            <Input 
                                name="phone"
                                value={form?.phone}
                                placeholder={locationItem?.phone || 'Phone'}
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Hours</Label>
                            <Input 
                                name="hours"
                                value={form?.hours}
                                placeholder={locationItem?.hours || 'Hours'}
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Image</Label>
                            <Input 
                                name="image"
                                value={form?.image}
                                placeholder={locationItem?.image || 'Image'}
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        
                        <Button color="primary">
                            Submit
                        </Button>

                        <Button color="danger" onClick={removeLocation}>
                            Delete
                        </Button>
                    </form>
                </Box>
            </section>
        </div>
    )
}

export default ShowLocation