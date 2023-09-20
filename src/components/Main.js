import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom"
import About from "../pages/About";
import Home from "../pages/Home";
import Menu from "../pages/Menu";

const Main = (props) => {
    const [menu, setMenu] = useState(null)

    //This part of frontend code (line 13-21) communicates with the backend on port 4000 to get data
    //if production/deployment put this SENSITIVE URL in your .env file
    
    const URL = 'http://localhost:4000/restaurant/'  //make sure to have an ending




    //const baseURL = 'http://localhost:4000' //new
    //const restaurantURL = `${baseURL}/restaurant`; //new
    //const menuURL = `${baseURL}/menu`; //new

    const getMenu = async () => {
        const response = await fetch(menuURL)
        const data = await response.json()
        console.log(data)
        // setMenu(data)
        setMenu(data.data)
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
        const response = await fetch(menuURL + id, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(menu)
        })
        // update the menu list
        getMenu()
    }
    const deleteMenu = async(id)=> {
        await fetch (menuURL + id, {
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
                <Route path="/" element={<Home menu={menu} createMenu={createMenu}/>}/>
                <Route path="/Menu" element={<Index menu={menu} />}/>
                <Route path="/Menu/:id" element={<Show menu={menu} updateMenu={updateMenu} deleteMenu={deleteMenu}/>}/>
            </Routes>
        </main>
    )

}

export default Main