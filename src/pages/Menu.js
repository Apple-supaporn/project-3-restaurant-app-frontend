import { Content } from "react-bulma-components"
import MenuCard from '../components/MenuCard'
import { useState } from "react"
import "../App.css"


const Menu = (props) => {
  //state to keep track of selected category
  const [selectedCategory, setSelectedCategory] = useState('All')

  //get unique categories from menuData
  const uniqueCategories = (menuData) => {
    const categories = ['All']
    menuData.forEach((menu) => {
      if(!categories.includes(menu.category)) {
        categories.push(menu.category)
      }
    })
    return categories
  }

  //filter menu items by category
  const filterMenuByCategory = () => {
    if (selectedCategory === "All") {
    //if "all" is selected then return all menu items
    return props.menu
    } else {
      return props.menu.filter((menu) => menu.category === selectedCategory)
    }
  }

  //render filter buttons based on unique categories
  const filterButtons = () => {
    const categories = uniqueCategories(props.menu)
    return (
    <div className="menu-filters">
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "active" : ""}
          onClick={() => setSelectedCategory(category)}
        >
        {category}
        </button>
      ))}
    </div>
    )
  }
      
  //loaded function to render the filtered menu
  const loaded = () => {
    const filteredMenu = filterMenuByCategory()
      return (
        <div>
          {filterButtons()}
          <Content className="columns is-multiline">
            {/* map over the filtered menu item and render MenuCard*/}
            {filteredMenu.map((menu) => (
              <MenuCard key={menu._id} menu={menu} />
            ))}
          </Content>
        </div>
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
