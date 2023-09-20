import {useParams, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {Card, Box, Form, Button} from 'react-bulma-components'


const Show = (props) => {
    const navigate = useNavigate()
    const params = useParams() // can use /:id now
    const id = params.id
    const menu = props.menu
    menu = menu?.find((p) => p._id === id) 
    
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
        props.updatemenu(form, id)
        setForm(newForm)
        // navigate("/menu") optional direct where you want
    }

    const removeMenu = (e) => {
        e.preventDefault()
        props.deletemenu(id)
        navigate("/menu")
    }

    return (
        <>
            <Card textAlign='center' style={{width: '400px', margin: '0 auto'}}>
                <Card.Content>
                    <Card.Header.Title className='is-size-3'>
                        {menu?.name} 
                    </Card.Header.Title>
                    <Card.Content>
                    <strong>Name: </strong>
                        <p>{menu?.price}</p>
                        {menu?.description ? <p>{menu?.image}</p>: ""}
                        <p>{menu?.category}, {menu?.category} {menu?.category}</p>
                        <p>{menu?.category}</p>
                        <strong>Email: </strong><p>{menu?.category}</p>
                    </Card.Content>
                </Card.Content>
            </Card>
            <Button color="danger" onClick={removeMenu}>
                Delete
            </Button>
            <section>
            <Box className="form-box">
                    <h2 className="is-size-3 has-font-weight-bold">Edit menu </h2>
                    <form onSubmit={handleSubmit}>
                        <Field>
                            <Label>Name</Label>
                            <Input 
                                name="resName"
                                value={form?.name}
                                placeholder='resName'
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Description</Label>description
                            <Input 
                                name="description"
                                value={form?.description}
                                placeholder='description'
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Price</Label>
                            <Input 
                                name="Price"
                                value={form?.price}
                                placeholder=" $25 "
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Category</Label>
                            <Input 
                                name="Category"
                                value={form?.category}
                                placeholder='Dessert'
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        <Field>
                            <Label>Image</Label>
                            <Input 
                                name="Image"
                                value={form?.image}
                                placeholder='Image'
                                onChange={(e)=>{handleChange(e)}}/>
                        </Field>
                        
                        <Button color="primary">
                            Submit
                        </Button>
                    </form>
                </Box>
            </section>
        </>
    )
}



export default Show