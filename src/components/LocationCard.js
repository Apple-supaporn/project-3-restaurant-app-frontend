import { Card, Button } from 'react-bulma-components'
import { Link } from 'react-router-dom'
import ImageCard from './Image'
import "../App.css"


const LocationCard = (props) => {
    const locationItem = props.location
    return (    
        <Card className="column is-3" textAlign='center' style={{marginBottom: '12px'}} >
            <Card.Content>
                <Card.Header.Title class='is-size-4' style={{ fontWeight: 'bold' }}>
                    <ImageCard src={locationItem?.image} />
                    <br /><br />
                    {locationItem?.name} 
                </Card.Header.Title>
                <Card.Content>
                    {locationItem?.address} 
                    <br /><br />
                    <p> {locationItem?.phone} </p>
                    {locationItem?.hours} 
                    <br /><br />
                    {locationItem?.description} 
                    <strong>{locationItem?.price} </strong>
                    <br /><br />
                    <Link to={`/location/${locationItem._id}`}>
                        <Button color='text'> Edit </Button>
                    </Link>
                </Card.Content>
            </Card.Content>
        </Card>
    )
}

export default LocationCard