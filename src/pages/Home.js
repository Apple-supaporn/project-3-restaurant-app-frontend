import { Link } from "react-router-dom";
import "../App.css"


const Home = () => {
    return (
        <div className="home-grid">
            <section className="home-hero">
                <div style={{ position: 'relative' }}>
                    <img src="../assets/images/home-pizza1.avif" alt="pizza1"/>
                    <div className="is-flex"
                        style={{
                            flexDirection:"column",
                            position: 'absolute',
                            top: '30%',
                            left: "0px",
                            right: "0px",
                            height: "40%",
                            backgroundColor: 'rgba(0, 0, 0, 0.4)',
                            color: 'white',
                            paddingTop: "5%",
                            textAlign: 'center',
                        }}>
                        <div className="homepage-eat-enjoy-repeat"> 
                            EAT  ENJOY  REPEAT 
                        </div>
                        <div className="see-menu-button"> 
                            <Link to="/menu" className="button is-light"> SEE MENU </Link>
                        </div>    
                    </div>
                </div>

                <div className="home-info1"
                    style={{
                        backgroundColor: 'rgb(241, 241, 241)',
                        color: '#004832',
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%',
                    }}>
                    <div className="container-fluid text-center" 
                        style={{ 
                            paddingTop: 'calc(100vmax / 10)', 
                            paddingBottom: 'calc(100vmax / 10)'
                        }}>
                        <p>
                            Specializing in organic wood-fired cuisine, we serve straightforward 
                            food created with seasonal ingredients sourced from local farms and 
                            suppliers.
                        </p>
                    </div>
                </div>

                <div className="home-info">
                    <div>
                        <img src="../assets/images/home-pizza3.avif" alt="pizza3" />
                    </div>
                </div>

                <div className="home-info2" 
                    style={{
                        backgroundColor: '#004832',
                        color: 'goldenrod',
                    }}>
                    
                    <div className="container-fluid text-center" 
                        style={{
                            paddingTop: 'calc(80vmax / 10)', 
                            paddingBottom: 'calc(80vmax / 10)'
                        }}>
                        <strong style={{ color: 'goldenrod' }}> - OUR STORY - </strong> <br/>
                        <p>
                            The best stories in life have yummy endings<br/><br/>
                            We opened our first restaurant in the summer of 2004 in Palo Alto,
                            California! Over a decade and multiple locations later, we have turned 
                            our passion for fresh, high-quality deep dish & thin crust pizza and 
                            genuine hospitality into a signature experience that can only be summed 
                            up as “Patxi’s.”<br/><br/>
                            Patxi’s embodies what your favorite neighborhood restaurant should 
                            be—a warm, welcoming place where you can share a delicious meal with 
                            friends and family and feel right at home. As we continue to grow and 
                            bring the Patxi’s experience to more communities across the country, 
                            we’ll stay true to our roots and never forget what makes each bite of 
                            our pizza so special. When you walk through our doors, you’re in for a treat.<br/><br/>

                            When you sit down at our table, you’re family!<br /><br />
                        
                            <div className="see-menu-button">
                                <Link to="/location" className="button is-light">SEE OUR LOCATIONS</Link>
                            </div>
                        </p>
                    </div>
                </div>
            </section>
        </div>   
    )
}

export default Home


