import './App.css';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';

import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Home from './components/Pages/Home';


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/*' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Layout>
    </>
  )
}

export default App