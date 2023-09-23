// import {useState} from 'react'
// import {Card, Box, Form, Button} from 'react-bulma-components'
import LocationForm from "../components/LocationForm"


const NewLocation = (props) => {
    return (
        <>
            {/* <Button color="red" >
                Createnjknkjnkjkjnhkj
            </Button> */}
            <section>
            <LocationForm createLocation={props.createLocation}/>
            </section>
        </>
    )
}


export default NewLocation