import {useParams, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {Card, Box, Form, Button} from 'react-bulma-components'
import MenuCard from '../components/MenuCard'


const Show = (props) => {
    const navigate = useNavigate()
    const params = useParams() // can use /:id now
    const id = params.id
    const menu = props.menu
    const menuItem = menu?.find((p) => p._id === id) 

    const newForm = {
        name: "",
        description: "",
        price: "",
        category: "",
        image: ""
      }
    
    const [form, setForm] = useState(menu)
    const {Input, Field, Label} = Form;


    //handleChange function for the form - each keypress is an event we need to update state with
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value })
    }

    //handle form for updating
    const handleSubmit = (e) => {
        e.preventDefault()
        props.updateMenu(form, id)
        setForm(newForm)
        // navigate("/menu") optional direct where you want
    }

    const removeMenu = (e) => {
        e.preventDefault()
        props.deleteMenu(id)
        navigate("/menu")
    }

    return (
        <div>
            <MenuCard menu={menuItem}/>
            <section>
            <Box className="form-box">
                    <h2 className="is-size-3 has-font-weight-bold">Edit menu </h2>
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

                        <Button color="danger" onClick={removeMenu}>
                            Delete
                        </Button>
                    </form>
                </Box>
            </section>
        </div>
    )
}



export default Show