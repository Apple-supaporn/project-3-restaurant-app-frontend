import { Content } from "react-bulma-components"
import LocationCard from "../components/LocationCard"
import "../App.css"


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