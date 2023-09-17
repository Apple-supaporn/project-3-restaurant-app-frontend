import './App.css'
// import 'bulma/css/bulma.min.css' 
//from this https://couds.github.io/react-bulma-components/?path=/story/welcome--page

//IMPORT ALL COMPONENTS
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

//IMPORT ALL PAGES
import About from './pages/About'
import Home from './pages/Home'
import Menu from './pages/Menu'

function App() {

  //Create a variable called URL
  const URL = 'http://localhost:4000/'

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Menu' element={<Menu URL={URL}/>}/>
        <Route exact path='/About' element={<About URL={URL}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
