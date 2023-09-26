import { Content, Button } from "react-bulma-components"
import { Link } from "react-router-dom"
import MenuCard from '../components/MenuCard'


const Menu = (props) => {
    console.log(props, "OUTSIDE PROPS")

    //loaded function
    const loaded = () => {
        console.log("IN LOADED", props)
        return (
            <Content className="columns is-multiline">
                {props.menu.map((menu) => (<MenuCard menu={menu}/>))}
            </Content>
        )
    }

    //loading function
    const loading = () => {
        console.log("IN LOADING", props)
        return(
            <h1>Loading...</h1>
        )
    }
    return (props.menu ? loaded() : loading())
}


export default Menu