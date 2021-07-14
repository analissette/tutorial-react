import React from 'react';

const BodyTabla = (props) => {
    const filas = props.datosPersonas.map((fila, indice) => {
        return (
            <tr key={indice}>
                <td>{fila.nombre}</td>
                <td>{fila.apellido}</td>
                <button onClick={() => props.eliminarPersona(indice)}>Eliminar</button>
            </tr>
        );
    })

    return <tbody>{filas}</tbody>
}

export default BodyTabla;
