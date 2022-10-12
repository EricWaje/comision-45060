//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main/Main';

const App = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
};

export default App;
