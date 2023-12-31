import './App.css'
import 'bulma/css/bulma.min.css' 

//IMPORT ALL COMPONENTS
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

function App() {
  return (
    <div>
      <Header />
      <Main /> 
      <Footer/>
    </div>
  );
}

export default App;
