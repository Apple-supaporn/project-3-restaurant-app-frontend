import {Card, Button} from 'react-bulma-components'
import { Link } from 'react-router-dom'
import ImageCard from './Image'


const LocationCard = (props) => {
    const locationItem = props.location

    return (    
        <Card textAlign='center' style={{width: '800px', margin: '0 auto'}}>
            <Card.Content>
                <Card.Header.Title className='is-size-4'>
                    {locationItem?.name} 
                </Card.Header.Title>
                <Card.Content>
                    {locationItem?.description}<p>- {locationItem?.address} -</p> 
                    <strong>{locationItem?.phone} </strong>
                    <strong>{locationItem?.hours} </strong>
                    <ImageCard src={locationItem?.image} /><br />
                    <br />
                    <Link to={`/location/${locationItem._id}`}>
                        <Button color='text'>
                            Edit
                        </Button>
                    </Link>
                </Card.Content>
            </Card.Content>
        </Card>
    )
}

export default LocationCard