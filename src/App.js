import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Customer from './Component/Customer';
import Product from './Component/Edit-product';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <BrowserRouter>
      <Header />
       <Routes>
        <Route path='/Customer'   element={< Customer />} />
        <Route path='/Edit-product' element={<Product />} />
       </Routes>
       </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;
