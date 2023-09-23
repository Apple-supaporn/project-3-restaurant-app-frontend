import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom"
import Menu from "../pages/Menu";
import Location from "../pages/Location";
import Show from "../pages/menuShow";
import Home from "../pages/Home";
import NewMenu from "../pages/newMenu";


const Main = (props) => {
    const [menu, setMenu] = useState(null)
    const [location, setLocation] = useState(null)
    
    const URL = 'http://localhost:4000'  //make sure to have an ending
    const menuURL = `${URL}/menu`
    const locationURL = `${URL}/restaurant`

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
// Location Functions below /////////////////////////////////
    const getLocation = async () => {
        try {
            const response = await fetch(locationURL)
            const data = await response.json()
            console.log(data)
            // setLocation(data)
            setLocation(data.data)
        } catch (error) {
        console.error('Error fetching location data:', error);
        }
    }

    // const createLocation = async (location) => {
    //     await fetch(locationURL, {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(location)
    //     })
    //     //update list of menus after adding new menu
    //     getLocation()
    // }

    // const updateLocation = async (location, id) => {
    //     // Make a PUT request to update a menu item
    //     await fetch(`${locationURL}/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(location)
    //     })
    //     //update the menu list
    //     getLocation()
    // }

    // const deleteLocation = async(id)=> {
    //     await fetch (`${locationURL}/${id}`, {
    //         method: "DELETE"
    //     })
    //     // Update the menu list after deleting a menu item
    //     getLocation()
    // }

    useEffect(() => {
        getLocation()
    }, [])

    return (
        <main>
            <Routes>
                <Route exact path="/home" element={<Home />}/>
                <Route exact path="/menu/new" element={<NewMenu createMenu={createMenu}/>} />
                <Route exact path="/menu" element={<Menu menu={menu} />}/>
                <Route path="/menu/:id" element={<Show menu={menu} updateMenu={updateMenu} deleteMenu={deleteMenu}/>}/>

                {/* <Route exact path="/location/new" element={<Newlocation createlocation={createlocation}/>} /> */}
                <Route exact path="/location" element={<Location location={location} />}/>
                {/* <Route path="/location/:id" element={<Show location={location} updatelocation={updatelocation} deletelocation={deletelocation}/>}/> */}
            </Routes>
        </main>
    )

}

export default Main