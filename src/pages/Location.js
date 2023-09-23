import { Content, Button } from "react-bulma-components"
import { Link } from "react-router-dom"
import LocationCard from "../components/LocationCard"


const Location = (props) => {
    console.log(props, "OUTSIDE PROPS")
    //loaded function
    const loaded = () => {
        console.log("IN LOADED", props)
        return (<Content
                    // display="flex"
                    className="columns is-multiline"
                    // flexDirection="row"
                    // justifyContent="space-evenly"
                    // alignItems="baseline"
                    >
                    {props.location.map((location) => (<LocationCard location={location}/>))}
                </Content>)
        
        
        
        // {
        //     return(<Content
        //         display="flex"
        //         flexDirection="row"
        //         justifyContent="space-evenly"
        //         alignItems="baseline"
        //         // this className is from bulma
        //         className="has-background-grey-lighter person-content"
        //     > 

        //         <h3>{location.name} {location.description}</h3>
        //         <img src={location.image} width="5%" height="auto"/>
        //         {/* <p> {location.image}</p> */}


        //         <Link to={`/location/${location._id}`}>
        //             <Button color='text'>
        //                 See More
        //             </Button>
        //         </Link>

        //     </Content>
        // )})
    }
    //loading function
    const loading = () => {
        console.log("IN LOADING", props)
        return(<h1>Loading...</h1>)
    }
    return (props.location ? loaded() : loading())
}


export default Location