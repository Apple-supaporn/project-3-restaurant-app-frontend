import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom"
import Menu from "../pages/Menu";
import About from "../pages/About";
import Show from "../pages/menuShow";
import Home from "../pages/Home";
import NewMenu from "../pages/newMenu";


const Main = (props) => {
    const [menu, setMenu] = useState(null)
    
    const URL = 'http://localhost:4000'  //make sure to have an ending
    const menuURL = `${URL}/menu`

    // const baseURL = 'http://localhost:4000/' //new
    // const restaurantURL = `${baseURL}/restaurant`; //new
    // const menuURL = `${baseURL}/menu`; //new

    const getMenu = async () => {
        try {
            const response = await fetch(menuURL)
            const data = await response.json()
            console.log(data)
            // setMenu(data)
            setMenu(data.data)
        } catch (error) {
        console.error('Error fetching menu data:', error);
        }
    }

    const createMenu = async (menu) => {
        await fetch(menuURL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(menu)
        })
        //update list of menus after adding new menu
        getMenu()
    }

    const updateMenu = async (menu, id) => {
        // Make a PUT request to update a menu item
        await fetch(`${menuURL}/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(menu)
        })
        //update the menu list
        getMenu()
    }

    const deleteMenu = async(id)=> {
        await fetch (`${menuURL}/${id}`, {
            method: "DELETE"
        })
        // Update the menu list after deleting a menu item
        getMenu()
    }

    useEffect(() => {
        getMenu()
    }, [])

    return (
        <main>
            <Routes>
                <Route exact path="/home" element={<Home />}/>
                <Route exact path="/about" element={<About />}/>
                <Route exact path="/menu/new" element={<NewMenu createMenu={createMenu}/>} />
                <Route exact path="/menu" element={<Menu menu={menu} />}/>
                <Route path="/menu/:id" element={<Show menu={menu} updateMenu={updateMenu} deleteMenu={deleteMenu}/>}/>
            </Routes>
        </main>
    )

}

export default Main