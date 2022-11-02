import React, { useState } from 'react';
import { useEffect } from 'react';

const Form = () => {
    //const [name, setName] = useState('');
    //const [lastName, setLastName] = useState('');

    const [data, setData] = useState({ nombre: '', apellido: '' });

    const enviarDatos = (e) => {
        e.preventDefault();
        //console.log(e);
        //console.log(e.target);
        //console.dir(e.target);
        //uncontrolled inputs
        //console.log(e.target.elements.nombre.value);
        //console.log(e.target.elements.apellido.value);
        //enviar a mi base de datos los campos name y lastName
        // const obj = {
        //     comprador: {
        //         nombre: name,
        //         apellido: lastName,
        //     },
        // };
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        //e.target.value tengo el valor
        //e.target.name diferencio los campos
        setData({ ...data, [name]: value });
    };

    console.log(data);

    //const handleName = (e) => setName(e.target.value);

    //const handleLastName = (e) => setLastName(e.target.value);

    //console.log(name);

    // const handleMove = (e) => {
    //     console.log(e.clientX);
    //     //setCoordX(e.clientX)
    // }

    useEffect(() => {
        //window.addEventListener('mousemove', handleMove)
        console.log('Código del useEffect');
        //llamado a una api
        //setInterval
        return () => {
            //clearInterval
            //abortar el llamado a la api
            //window.removeEventListener('mousemove', handleMove)
            console.log('Limpieza');
        };
    });

    return (
        <div
            style={{
                minHeight: '70vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <form action="" onSubmit={enviarDatos}>
                <input
                    type="text"
                    placeholder="Nombre"
                    name="nombre"
                    onChange={handleChange}
                    value={data.nombre}
                />
                <input
                    type="text"
                    placeholder="Apellido"
                    name="apellido"
                    onChange={handleChange}
                    value={data.apellido}
                />
                <button>Enviar</button>
            </form>
        </div>
    );
};

export default Form;

//const eventos = () => {}

//onClick = {eventos};
