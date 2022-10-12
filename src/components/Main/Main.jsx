import estilos from './main.module.css';

const styles = {
    parrafo: {
        color: 'gold',
        backgroundColor: 'blue',
    },
    contenedor: {
        color: 'green',
        backgroundColor: 'yellow',
    },
};

const Main = () => {
    return (
        <main className={estilos.main}>
            <p style={{ color: 'blue' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis ducimus illo dolor blanditiis excepturi natus nam
                aliquam sed error delectus, similique ipsum provident molestiae
                doloribus commodi, eligendi officia labore omnis.
            </p>
            <p style={styles.parrafo}>Bienvenidos a la clase 3</p>
            <div style={styles.contenedor}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                tenetur deserunt atque in quidem distinctio odio vero ratione,
                accusamus veritatis, necessitatibus officiis. Corrupti impedit
                saepe maxime temporibus. Sed, nulla eius!
            </div>
        </main>
    );
};

export default Main;
