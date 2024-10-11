import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Nav from "./components/Nav"
import Main from "./components/Main"
import Menu from './components/Menu';
import Footer from './components/Footer';;


function App() {
  return (
    <>
    <Nav />
    <BrowserRouter>
    <Main/>
    </BrowserRouter>
    <Menu />
    <Footer />
    </>
  );
}

export default App;
