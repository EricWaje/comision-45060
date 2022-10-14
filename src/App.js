import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
    return (
        <>
            <Header />

            <Main
                saludo="Bienvenidos a la clase de React"
                edad={27}
                datos={{ nombre: 'Eric', comision: 45060 }}
            />
            <Footer />
        </>
    );
};

export default App;
