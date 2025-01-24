import './App.css';
import { Route, Routes } from 'react-router-dom';

import About from './components/Pages/About';
import Home from './components/Pages/Home';
import Layout from './components/Layout/Layout';
import Projects from './components/Pages/Projects';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/*' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects />}/>
        </Routes>
      </Layout>
    </>
  )
}

export default App