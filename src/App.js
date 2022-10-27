import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/Main/ItemListContainer';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route
                    path="/categoria/:categoryName"
                    element={<ItemListContainer />}
                />
                <Route
                    path="/detail/:idProd"
                    element={<ItemDetailContainer />}
                />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
