import { Link } from "react-router-dom";
import "../Home.css"


const Home = () => {
    return (
        <div className="home-grid">
            {/* first pic */}
            <section className="hero">
                <div class="hero-image" style={{ position: 'relative' }}>
                    <img src="https://images.unsplash.com/photo-1634629377376-6c6bae2d8bcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2831&q=80" alt="pizza1"/>
                        <div
                        style={{
                            position: 'absolute',
                            top: '50px',
                            left: '0',
                            right: '0',
                            backgroundColor: 'rgba(0, 0, 0, 0.4)',
                            color: 'white',
                            padding: '10px',
                            textAlign: 'center',}}>
                            
                            EAT  ENJOY  REPEAT<br />
                            
                                <div className="see-menu-button">
                                    <Link to="/menu" className="button is-light">SEE MENU</Link>
                                </div>
                            
                        </div>
                </div>


            
                {/* picture and story */}
                <div class="home-info1">
                    <div class="container-fluid text-center" style={{paddingTop: 'calc(100vmax / 10)', paddingBottom: 'calc(100vmax / 10)'}}>
                        <p>Specializing in organic wood-fired cuisine, we serve straightforward food created with seasonal ingredients sourced from local farms and purveyors.</p>
                    </div>
                </div>
                <div class="home-info">
                    <div>
                        <img src="https://images.unsplash.com/photo-1646656352194-7db15ee021bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="pizza2" />
                    </div>
                </div>


                {/* Wording after first pic */}
                <div class="home-info2">
                    <div class="container-fluid text-center" style={{paddingTop: 'calc(80vmax / 10)', paddingBottom: 'calc(80vmax / 10)'}}>
                        <p>- OUR STORY -<br/><br/>
                                The best stories in life have yummy endings<br/><br/>

                                We opened our first restaurant in the summer of 2004 in Palo Alto,
                                 California! Over a decade and multiple locations later, we have turned 
                                 our passion for fresh, high-quality deep dish & thin crust pizza and 
                                 genuine hospitality into a signature experience that can only be summed 
                                 up as “Patxi’s.”<br/><br/>

                                 Patxi’s embodies what your favorite neighborhood restaurant should 
                                 be a warm, welcoming place where you can share a delicious meal with 
                                 friends and family and feel right at home. As we continue to grow and 
                                 bring the Patxi’s experience to more communities across the country, 
                                 we’ll stay true to our roots and never forget what makes each bite of 
                                 our pizza so special. When you walk through our doors, you’re in for a treat.<br/><br/>

                                When you sit down at our table, you’re family!<br /><br />
                            
                                <Link to="/about">SEE OUR LOCATIONS</Link>
                        </p>
                    </div>
                </div>
            </section>
        </div>   
    )
}

export default Home;


