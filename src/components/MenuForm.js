import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Box, Form, Button } from 'react-bulma-components'
import { Link } from "react-router-dom";
import "../App.css"


const MenuForm = (props) => {
    const navigate = useNavigate()
    const params = useParams()
    const menu = props.menu

    const newForm = {
        name: "",
        description: "",
        price: "",
        category: "",
        image: "",
      }
    
    const [form, setForm] = useState(menu)
    const { Input, Field, Label } = Form

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.createMenu(form)
        setForm(newForm)
        navigate("/menu")
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
                                placeholder='Stromboli'
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Description</Label>
                            <Input 
                                name="description"
                                value={form?.description}
                                placeholder='Fresh mozzarella with choice of apple, strawberry or pineapple, baked in our sweetened dough & garnished with sauce'
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Price</Label>
                            <Input 
                                name="price"
                                value={form?.price}
                                placeholder='15'
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
                                placeholder='image.jpg'
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        
                        <div className="buttons is-left">
                            <Button className="is-primary">Submit</Button> 
                            <Link to="/menu"> <Button className="is-light">Cancel</Button> </Link>
                        </div>

                    </form>
            </Box>
        </div>
    )
}

export default MenuForm