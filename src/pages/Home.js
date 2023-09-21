import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import "../Home.css"



const Home = () => {
    return (
        <div className="home-grid">
            <section className="hero">
                <img src="https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80" 
                alt="Restaurant Name" />
                <h1>Welcome to Restaurant Name</h1>
                <p>Discover the finest cuisine in town</p>
                <div class="container-fluid p-6 text-center custom-container">
            <p>Specializing in organic wood-fired cuisine, we serve straightforward food created with seasonal ingredients sourced from local farms and purveyors.</p>
            </div>
            </section>
            <section className="about">
                <h2>About Us</h2>
                <p>Learn more about our story and commitment to great food.</p>
                <Link to="/about">Read More</Link>
            </section>

        </div>
    );
}

export default Home;
