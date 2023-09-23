// import { Content, Button } from "react-bulma-components"
// import { Link } from "react-router-dom"
import LocationCard from '../components/LocationCard'


const Location = (props) => {
    console.log(props, "OUTSIDE PROPS")
    //loaded function
    const loaded = () => {
        console.log("IN LOADED", props)
        return props.location.map((location) => (<LocationCard location={location}/>))
        // {
        //     return(<Content
        //         display="flex"
        //         flexDirection="row"
        //         justifyContent="space-evenly"
        //         alignItems="baseline"
        //         // this className is from bulma
        //         className="has-background-grey-lighter person-content"
        //     > 

        //         <h3>{menu.name} {menu.description}</h3>
        //         <img src={menu.image} width="5%" height="auto"/>
        //         {/* <p> {menu.image}</p> */}


        //         <Link to={`/menu/${menu._id}`}>
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