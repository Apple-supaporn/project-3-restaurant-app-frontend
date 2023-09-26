import MenuForm from '../components/MenuForm'


const NewMenu = (props) => {
    return (
        <div>
            <section>
                <MenuForm createMenu={props.createMenu}/>
            </section>
        </div>
    )
}


export default NewMenu