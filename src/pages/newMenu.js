import {useParams, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {Card, Box, Form, Button} from 'react-bulma-components'
import MenuForm from '../components/MenuForm'


const NewMenu = (props) => {
    return (
        <>
            {/* <Button color="red" >
                Createnjknkjnkjkjnhkj
            </Button> */}
            <section>
            <MenuForm createMenu={props.createMenu}/>
            </section>
        </>
    )
}



export default NewMenu