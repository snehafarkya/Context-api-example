import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import UseCon from './components/ContextProvider';
import GetCon from './components/ContextConsumer';
import Wishlist from './components/Wishlist';

function App() {
  return (
    <div className="flex bg-yellow-50 justify-center items-center h-screen">
      <UseCon>
     <Routes>
     <Route path='/' element={<GetCon/>}/> 
      <Route path='/cart' element={<Cart/>}/> 
      <Route path='/wishlist' element={<Wishlist/>}/> 
     </Routes>
     </UseCon>
    </div>
  );
}

export default App;
