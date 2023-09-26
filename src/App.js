import './App.css'
import 'bulma/css/bulma.min.css' 

//IMPORT ALL COMPONENTS
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'


//IMPORT ALL PAGES
// import About from './pages/About'
// import Home from './pages/Home'
// import Menu from './pages/Menu'
// import Show from './pages/menuShow'

function App() {

  //Create a variable called URL
  // const URL = 'http://localhost:4000/'

  return (
    <div>
      <Header />
      <Main /> 
      <Footer/>
    </div>
  );
}

export default App;
