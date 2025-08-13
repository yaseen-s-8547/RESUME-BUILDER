
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import LandingPage from './pages/LandingPage';
import Userform from './pages/Userform';
import ResumeGenerator from './pages/ResumeGenerator';
import PageNotFound from './pages/PageNotFound';
import History from './pages/History';


function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/resume' element={<ResumeGenerator/>}/>
      <Route path='/history' element={<History/>}/>
      <Route path='/userform' element={<Userform/>}/>
      <Route path='/pagenotfound' element={<PageNotFound/>}/>
    </Routes>
     
     <Footer/>
     
 </>
  )
}

export default App
