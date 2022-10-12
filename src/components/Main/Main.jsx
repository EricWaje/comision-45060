import estilos from './main.module.css';

const Main = () => {
    return (
        <main
            className={estilos.main}
            style={{ display: 'flex', justifyContent: 'center' }}
        >
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos placeat perferendis quidem reprehenderit maiores
                nostrum neque illo voluptatum voluptate, odit animi consequatur
                quo pariatur perspiciatis quis fuga recusandae voluptas rem!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                laboriosam impedit, dolore placeat, iste deserunt quaerat enim
                dignissimos reprehenderit asperiores ipsum, hic quam beatae
                excepturi tempora repellendus vitae rem vero!
            </p>
        </main>
    );
};

export default Main;

//Botstrap de la manera vieja
/* <div className="card" style={{ width: '12rem' }}>
    <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ykev_1vBYJZO79NxTpWfMC3HQTJchCFWNA&usqp=CAU"
        className="card-img-top"
        alt="..."
    />
    <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
        </p>
        <a href="https://google.com" className="btn btn-primary">
            Go somewhere
        </a>
    </div>
</div>; */

//React Bootstrap

/* <Container>
    <Row>
        <Col md={4}>
            <Card style={{ width: '18rem' }}>
                <Card.Img
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ykev_1vBYJZO79NxTpWfMC3HQTJchCFWNA&usqp=CAU"
                />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col md={4}>
            <Card style={{ width: '18rem' }}>
                <Card.Img
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ykev_1vBYJZO79NxTpWfMC3HQTJchCFWNA&usqp=CAU"
                />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    </Row>
</Container>; */
