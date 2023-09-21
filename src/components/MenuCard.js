import {Card, Button} from 'react-bulma-components'
import { Link } from 'react-router-dom'
import ImageCard from './Image'


const MenuCard = (props) => {
    const menuItem = props.menu

    return (    
        <Card textAlign='center' style={{width: '800px', margin: '0 auto'}}>
            <Card.Content>
                <Card.Header.Title className='is-size-4'>
                    {menuItem?.name} 
                </Card.Header.Title>
                <Card.Content>
                    {menuItem?.description}<p>- {menuItem?.category} -</p> 
                    <strong>{menuItem?.price} </strong>
                    <ImageCard src={menuItem?.image} /><br />
                    <br />
                    <Link to={`/menu/${menuItem._id}`}>
                        <Button color='text'>
                            Edit
                        </Button>
                    </Link>
                </Card.Content>
            </Card.Content>
        </Card>
    )
}

export default MenuCard