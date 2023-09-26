import { Content, Button } from "react-bulma-components"
import { Link } from "react-router-dom"
import LocationCard from "../components/LocationCard"


const Location = (props) => {
    console.log(props, "OUTSIDE PROPS")

    const loaded = () => {
        console.log("IN LOADED", props)
        return (
            <Content className="columns is-multiline">
                {props.location.map((location) => (<LocationCard location={location}/>))}
            </Content>)
    }

    const loading = () => {
        console.log("IN LOADING", props)
        return(<h1>Loading...</h1>)
    }
    return (props.location ? loaded() : loading())
}

export default Location