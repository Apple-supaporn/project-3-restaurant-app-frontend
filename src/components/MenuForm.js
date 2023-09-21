import {useParams, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {Card, Box, Form, Button} from 'react-bulma-components'


const MenuForm = (props) => {
    const navigate = useNavigate()
    const params = useParams() //can use /:id now
    const menu = props.menu

    const newForm = {
        name: "",
        description: "",
        price: "",
        category: "",
        image: "",
      }
    
    const [form, setForm] = useState(menu)
    const { Input, Field, Label } = Form;


    //handleChange function for the form - each keypress is an event we need to update state with
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    //handle form for updating
    const handleSubmit = (e) => {
        e.preventDefault()
        props.createMenu(form)
        setForm(newForm)
        navigate("/menu") // optional direct where you want
    }

    return (
        <div>
            <Box className="form-box">
                <h2 className="is-size-3 has-font-weight-bold">Create New Menu </h2>
                    <form onSubmit={handleSubmit}>
                        <Field>
                            <Label>Name</Label>
                            <Input 
                                name="name"
                                value={form?.name}
                                placeholder='Name'
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Description</Label>
                            <Input 
                                name="description"
                                value={form?.description}
                                placeholder='Description'
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Price</Label>
                            <Input 
                                name="price"
                                value={form?.price}
                                placeholder=" $25 "
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Category</Label>
                            <Input 
                                name="category"
                                value={form?.category}
                                placeholder='Dessert'
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Image</Label>
                            <Input 
                                name="image"
                                value={form?.image}
                                placeholder='Image'
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        
                        <Button color="primary">
                            Submit
                        </Button>
                    </form>
            </Box>
        </div>
    )
}

export default MenuForm