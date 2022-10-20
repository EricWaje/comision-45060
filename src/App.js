import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
//import Contador from './components/Main/Contador';
import ItemListContainer from './components/Main/ItemListContainer';

const App = () => {
    return (
        <>
            <Header />
            <ItemListContainer />
            {/* <Contador stock={10} /> */}
            <Footer />
        </>
    );
};

export default App;
