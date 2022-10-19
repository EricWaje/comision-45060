import './App.css';
import EjemploState from './components/EjemploState';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Contador from './components/Main/Contador';
import ItemListContainer from './components/Main/ItemListContainer';
//import Main from './components/Main/Main';

const App = () => {
    // const saludar = (argumento) => {
    //     console.log(argumento);
    // };

    return (
        <>
            <Header />
            {/*             <Main
                saludo="Bienvenidos a la clase de React"
                edad={27}
                datos={{ nombre: 'Eric', comision: 45060 }}
                saludar={saludar}
            /> */}
            <EjemploState />
            <ItemListContainer />
            <Contador stock={10} />
            <Footer />
        </>
    );
};

export default App;

// const App = () => {

//     return (
//         <>
//             <Navbar/>
//             <ItemListContainer saludo='Bienvenidos a mi e-commerce'/>
//             <Contador stock={10} />;
//         </>
//     );
// };

// export default App;
