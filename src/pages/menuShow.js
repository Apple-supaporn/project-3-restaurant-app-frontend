import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Box, Form, Button } from 'react-bulma-components'
import MenuCard from '../components/MenuCard'


const Show = (props) => {
    const navigate = useNavigate()
    const params = useParams()
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
    
    //State form data and edit mode
    const [form, setForm] = useState(newForm)
    const [editing, setEditing] = useState(false);
    const {Input, Field, Label} = Form;

    //Effect to update the form data when menuItem changes
    useEffect(() => {
        if (menuItem) {
          setForm(menuItem);
        }
      }, [menuItem]);

    //handleChange function - Update the form state on each input change
    const handleChange = (e) => { 
        setForm({...form, [e.target.name]: e.target.value })
    }

    const handleEdit = () => {
        setEditing(true);  
    //toggles the edit state when user click edit
      };

    //handle form for updating
    const handleSubmit = async (e) => {
        e.preventDefault()
        await props.updateMenu(form, id)
        setForm(newForm)
        setEditing(false);
        navigate(`/menu/${id}`) 
        //optional direct where you want
    }

    const removeMenu = (e) => {
        e.preventDefault()
        props.deleteMenu(id)
        navigate("/menu")
    }

    return (
        <div>
            <div className="show-centered-container">
            <MenuCard menu={menuItem}/>
            </div>
            <section>
            <Box className="form-box">
                    <h2 className="is-size-3 has-font-weight-bold">Edit menu </h2>
                    <form onSubmit={handleSubmit}>
                        <Field>
                            <Label>Name</Label>
                            <Input 
                                name="name"
                                value={form?.name}
                                placeholder={menuItem?.name || 'Name'}
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Description</Label>
                            <Input 
                                name="description"
                                value={form?.description}
                                placeholder={menuItem?.description || 'Description'}
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Price</Label>
                            <Input 
                                name="price"
                                value={form?.price}
                                placeholder={menuItem?.price || 'Price'}
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Category</Label>
                            <Input 
                                name="category"
                                value={form?.category}
                                placeholder={menuItem?.category || 'Category'}
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Image</Label>
                            <Input 
                                name="image"
                                value={form?.image}
                                placeholder={menuItem?.image || 'Image'}
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        
                        <Button color="primary">
                            Submit
                        </Button>
                        {" "}
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