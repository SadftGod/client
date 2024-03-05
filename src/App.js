import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Authorization from './pages/authorization/authorization';

function App() {
   return (
      <div className="App">
         <Router basename="/">
            <Header/>
            <Routes>
               <Route exact  path='/authorization' element={ <Authorization /> } />
               <Route exact  path='/' />
            </Routes>
            <Footer />
         </Router>
      </div>
   );
}

export default App;
