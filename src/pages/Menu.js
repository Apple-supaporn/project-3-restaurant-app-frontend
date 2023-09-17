// import { Content, Button } from "react-bulma-components"
// import { Link } from "react-router-dom"

// const Menu = (props) => {
//     console.log(props, "OUTSIDE PROPS")
//     //loaded function
//     const loaded = () => {
//         console.log("IN LOADED", props)
//         return props.menus.map((menu))
//     }
//     return <h1>Menu Page</h1>
// }
// export default Menu

import { Content, Button } from "react-bulma-components"
import { Link } from "react-router-dom"

const Menu = (props) => {
    console.log(props, "OUTSIDE PROPS")
    //loaded function
    const loaded = () => {
        console.log("IN LOADED", props)
        return props.menu.map((menu) => {
            return(<Content
                display="flex"
                flexDirection="row"
                justifyContent="space-evenly"
                alignItems="baseline"
                // this className is from bulma
                className="has-background-grey-lighter person-content"
            > 

                <h3>{menu.name} {menu.description}</h3>


                <Link to={`/menu/${menu._id}`}>
                    <Button color='text'>
                        See More
                    </Button>
                </Link>

            </Content>
        )})
    }
    //loading function
    const loading = () => {
        console.log("IN LOADING", props)
        return(<h1>Loading...</h1>)
    }
    return (props.menu ? loaded() : loading())
}


export default Menu