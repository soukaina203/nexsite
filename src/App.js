import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission'
import Quote from './components/Quote'
import Steps from './components/Steps'
import Method from './components/Method'
function App() {
  return (
    <div className="App">
     <Header/>
     <Hero />
     <Mission />
     <Quote />
     <Steps />
     <Method />
    </div>
  );
}

export default App;
