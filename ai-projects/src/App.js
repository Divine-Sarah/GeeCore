
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Oto1/Layout';
import Layout2 from './Oto2/Layout2';
import Layout3 from './Oto3/Layout3';
import Layout4 from './Oto4/Layout4';
import Layout5 from './Oto5/Layout5';
import Layout6 from './Oto6/Layout6';
import Layout7 from './Oto7/Layout7';
import Layout8 from './Oto8/Layout8';
import Home from './Oto1/Pages/Home';
import Home2 from './Oto2/Pages/Home2/Home2';
import Home3 from './Oto3/Pages/Home3/Home3';
import Home4 from './Oto4/Pages/Home4/Home4';
import Home5 from './Oto5/Pages/Home5/Home5';
import Home6 from './Oto6/Pages/Home6/Home6';
import Home7 from './Oto7/Pages/Home7/Home7';
import Home8 from './Oto8/Pages/Home4/Home8';

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
      <Route path='/oto5' element={<Layout5/>}>
        <Route index element={<Home5/>}/>
     </Route>
      <Route path='/oto6' element={<Layout6/>}>
        <Route index element={<Home6/>}/>
     </Route>
      <Route path='/oto7' element={<Layout7/>}>
        <Route index element={<Home7/>}/>
     </Route>
      <Route path='/oto8' element={<Layout8/>}>
        <Route index element={<Home8/>}/>
     </Route>
   </Routes>
  );
}

export default App;
