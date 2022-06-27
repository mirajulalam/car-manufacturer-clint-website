import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactUs from './Pages/ContactUs/ContactUs';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import PagenotFound from './Pages/Shared/PagenotFound';
import PurchasePage from './Pages/PurchasePage/PurchasePage';
import PrivateRoute from './Pages/Shared/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddAReview from './Pages/Dashboard/AddAReview';
import Payment from './Pages/Dashboard/Payment';
import MyProfile from './Pages/Dashboard/MyProfile';
import Users from './Pages/Dashboard/Users';
import PrivateAdmin from './Pages/Shared/PrivateAdmin';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import AddAProduct from './Pages/Dashboard/AddAProduct';
import Footer from './Pages/Shared/Footer';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import ManageOrders from './Pages/Dashboard/ManageOrders';
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/product/:productId' element={
          <PrivateRoute>
            <PurchasePage />
          </PrivateRoute>
        }></Route>
        <Route path='/dashboard' element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='review' element={<AddAReview></AddAReview>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='order' element={<MyOrders></MyOrders>}></Route>
          <Route path='users' element={<PrivateAdmin><Users></Users></PrivateAdmin>}></Route>
          <Route path='addaproduct' element={<PrivateAdmin><AddAProduct /></PrivateAdmin>}></Route>
          <Route path='manageproduct' element={<PrivateAdmin><ManageProducts /></PrivateAdmin>}></Route>
          <Route path='manageorder' element={<PrivateAdmin><ManageOrders /></PrivateAdmin>}></Route>
        </Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/contactus' element={<ContactUs />}></Route>
        <Route path='/myportfolio' element={<MyPortfolio />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='*' element={<PagenotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;