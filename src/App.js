import './App.css';
//import Footer from './components/Footer/Footer';
//import Header from './components/Header/Header';
import Navbar from './components/Header/Navbar';
import Contador from './components/Main/Contador';
import ItemListContainer from './components/Main/ItemListContainer';

const App = () => {
    const onAdd = (qty) => console.log(qty);

    return (
        <>
            <Navbar isInHeader={true} />
            <ItemListContainer saludo="Bienvenidos al mejor sitio para comprar 😎" />
            <Contador stock={10} onAdd={onAdd} />
            {/* <Footer /> */}
        </>
    );
};

export default App;
