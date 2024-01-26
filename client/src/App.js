import './App.css';
import {Route,Routes,Navigate} from "react-router-dom";

// import pages
import Home from './pages/Home.page';
import Checkout from './pages/Checkout.page';
import GoogleAuth from './pages/GoogleAuth.page';
import Restaurant from './pages/Restaurant.page';

// import components
import Menu from './components/Restaurant/Menu';
import OrderOnline from './components/Restaurant/OrderOnline';
import Overview from './components/Restaurant/Overview';
import Photos from './components/Restaurant/Photos';
import Reviews from './components/Restaurant/Reviews';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element= {<Navigate to={'/delivery'}/>} />
      <Route path='/:type' element ={<Home/>}/>
      {/* <Route path='/restaurant/:id' element={<RedirectRestaurant/>}/> */}
      <Route path='/google/:token' element={<GoogleAuth/>}/>
      <Route path='/restaurant/:id' element={<Restaurant/>}>
        <Route path='overview' element= {<Overview/>}/>
        <Route path='reviews' element= {<Reviews/>}/>
        <Route path='order-online' element= {<OrderOnline/>}/>
        <Route path='menu' element= {<Menu/>}/>
        <Route path='photos' element= {<Photos/>}/>
      </Route>
      <Route path='/checkout/orders' element= {<Checkout/>}/>
    </Routes>
      
    </>
  );
}

export default App;
