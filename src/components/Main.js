import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom"
import Menu from "../pages/Menu";
import About from "../pages/About";
import Show from "../pages/menuShow";


const Main = (props) => {
    const [menu, setMenu] = useState(null)

    //This part of frontend code (line 13-21) communicates with the backend on port 4000 to get data
    //if production/deployment put this SENSITIVE URL in your .env file
    
   const URL = 'http://localhost:4000/restaurant/'  //make sure to have an ending




    // const baseURL = 'http://localhost:4000' //new
    // const restaurantURL = `${baseURL}/restaurant`; //new
    // const menuURL = `${baseURL}/menu`; //new

    const getMenu = async () => {

        try{
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
        // setMenu(data)
        setMenu(data.data)
        } catch (error) {
        console.error('Error fetching menu data:', error);
        }
    }

    const createMenu = async (menu) => {
        await fetch(URL, {
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
        const response = await fetch(URL + id, {
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
        await fetch (URL + id, {
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
                <Route path="/" element={<About menu={menu} createMenu={createMenu}/>}/>
                <Route path="/Menu" element={<Menu menu={menu} />}/>
                <Route path="/Menu/:id" element={<Show menu={menu} updateMenu={updateMenu} deleteMenu={deleteMenu}/>}/>
            </Routes>
        </main>
    )

}

export default Main