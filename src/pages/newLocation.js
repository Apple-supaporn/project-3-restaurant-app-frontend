import LocationForm from "../components/LocationForm"


const NewLocation = (props) => {
    return (
        <div>
            <section>
                <LocationForm createLocation={props.createLocation}/>
            </section>
        </div>
    )
}


export default NewLocation