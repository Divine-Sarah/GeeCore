
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Oto1/Layout';
import Layout2 from './Oto2/Layout2';
import Layout3 from './Oto3/Layout3';
import Layout4 from './Oto4/Layout4';
import Home from './Oto1/Pages/Home';
import Home2 from './Oto2/Pages/Home2/Home2';
import Home3 from './Oto3/Pages/Home3/Home3';
import Home4 from './Oto4/Pages/Home4/Home4';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
     </Route>
      <Route path='/oto2' element={<Layout2/>}>
        <Route index element={<Home2/>}/>
     </Route>
      <Route path='/oto3' element={<Layout3/>}>
        <Route index element={<Home3/>}/>
     </Route>
      <Route path='/oto4' element={<Layout4/>}>
        <Route index element={<Home4/>}/>
     </Route>
   </Routes>
  );
}

export default App;
