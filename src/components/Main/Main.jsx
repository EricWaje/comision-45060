import Button from '../Button';

const Main = ({ saludo, edad, datos }) => {
    //console.log(props); props -> {}
    //const saludo = props.saludo;
    //const { saludo } = props;
    const { nombre, comision } = datos;

    return (
        <main>
            <p>Hola! {saludo}</p>
            <p>Mi edad es {edad} años</p>
            <p>
                {nombre} - {comision}
            </p>

            <Button text="Bienvenidos" />
        </main>
    );
};

export default Main;
