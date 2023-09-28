import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom"
import Menu from "../pages/Menu";
import Location from "../pages/Location";
import Show from "../pages/menuShow";
import ShowLocation from "../pages/locationShow";
import Home from "../pages/Home";
import NewMenu from "../pages/newMenu";
import NewLocation from "../pages/newLocation";


const Main = (props) => {
    const [menu, setMenu] = useState(null)
    const [location, setLocation] = useState(null)

    //It won't show data from backend if add slash '/' at the end
    const URL = 'https://project-3-restaurant-app-23d4c9faecd5.herokuapp.com' 
    const menuURL = `${URL}/menu`
    const locationURL = `${URL}/restaurant`


    //Menu Functions below
    const getMenu = async () => {
        try {
            const response = await fetch(menuURL)
            const data = await response.json()
            console.log(data)
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


    //Location Functions below
    const getLocation = async () => {
        try {
            const response = await fetch(locationURL)
            const data = await response.json()
            console.log(data)
            setLocation(data.data)
        } catch (error) {
        console.error('Error fetching location data:', error);
        }
    }

    const createLocation = async (location) => {
        await fetch(locationURL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(location)
        })
        getLocation()
    }

    const updateLocation = async (location, id) => {
        await fetch(`${locationURL}/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(location)
        })
        getLocation()
    }

    const deleteLocation = async(id)=> {
        await fetch (`${locationURL}/${id}`, {
            method: "DELETE"
        })
        getLocation()
    }

    useEffect(() => {
        getLocation()
    }, [])

    return (
        <main>
            <Routes>
                <Route path="/" element={< Home />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/menu/new" element={<NewMenu createMenu={createMenu}/>} />
                <Route path="/menu" element={<Menu menu={menu} />}/>
                <Route path="/menu/:id" element={<Show menu={menu} updateMenu={updateMenu} deleteMenu={deleteMenu}/>}/>
                <Route path="/location/new" element={<NewLocation createLocation={createLocation}/>} />
                <Route path="/location" element={<Location location={location} />}/>
                <Route path="/location/:id" element={<ShowLocation location={location} updateLocation={updateLocation} deleteLocation={deleteLocation}/>}/>
            </Routes>
        </main>
    )
}

export default Main