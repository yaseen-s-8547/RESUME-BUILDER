
import './App.css'

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
      <Routes path='/' element={<LandingPage/>}/>
      <Routes path='/resume' element={<ResumeGenerator/>}/>
      <Routes path='/form' element={<History/>}/>
      <Routes path='/history' element={<Userform/>}/>
      <Routes path='/pagenotfound' element={<PageNotFound/>}/>
    </Routes>
     
     <Footer/>
     
 </>
  )
}

export default App
