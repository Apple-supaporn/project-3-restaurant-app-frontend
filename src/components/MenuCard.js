import {Card, Button} from 'react-bulma-components'
import { Link } from 'react-router-dom'
import ImageCard from './Image'


const MenuCard = (props) => {
    const menuItem = props.menu

    // const cardStyle = {
    //     width: 'calc(25% - 20px)',
    //     margin: '10px', 
    //   };
    
    return (    
        <Card className="column is-3" textAlign='center'>
            <Card.Content>
                <Card.Header.Title class='is-size-4' style={{ fontWeight: 'bold' }}>
                    
                    <ImageCard src={menuItem?.image} /><br /><br />
                    {menuItem?.name} 
                </Card.Header.Title>
            <Card.Content>
                {menuItem?.description}
                <p>- {menuItem?.category} -</p> 
                <strong>${menuItem?.price} </strong><br /><br />
                
                <Link to={`/menu/${menuItem._id}`}>
                    <Button color='text'> Edit </Button>
                </Link>
            </Card.Content>
            </Card.Content>
        </Card>
    )
}

export default MenuCard