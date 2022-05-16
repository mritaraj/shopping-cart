import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './HeaderNav/homeNav';
import 'bootstrap/dist/css/bootstrap.css';
 import Header from './components/Header';
import ProductNav from './HeaderNav/productNav';
import './styles/comm.css'
import RegisterSign from './components/registerSign'
import LoginForm from './components/loginForm';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='product' element={<ProductNav />} />
        <Route path='register' element={<RegisterSign />} />
        <Route path='login' element={<LoginForm />} />
      </Routes>
      <div className="text-center p-3 footer" role="footer" >
            Copyright © Sabka Bazaar Grocery Supplies Pvt. Ltd.
            
            </div>
    </>
  );
}

export default App;
