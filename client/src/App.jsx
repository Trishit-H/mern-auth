import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home.jsx';
import Signin from './pages/signin/Signin.jsx';
import Signup from './pages/signup/Signup.jsx';
import Profile from './pages/profile/Profile.jsx';
import About from './pages/about/About.jsx';
import Header from './components/header/Header.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='sign-in' element={<Signin />} />
        <Route path='sign-up' element={<Signup />} />
        <Route path='profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;