// iife - inmidiatly invoke function expresion
(function() {
    'use strict';

    const personList = document.getElementById('person-list');
    const API_URL = 'datos.json';

    fetch(API_URL)
        .then(response => response.json())
        .then(response => printResponse(response.data))
        .catch(err => console.log(`Fallaste en la petición ${err}`))

    function printResponse(datos) {
        for (let position in datos) {
            let value = datos[position].name;
            /**
             * Object.keys devuelve un array cuyos elementos
             * son strings correspondientes a las propiedades
             * enumerables que seencuentran directamente en el object.
             */
            personList.innerHTML += `
                <tr>
                    <td>${Object.keys(datos[position])} : ${value}</td>
                </tr>
            `;
        }
    }

})();
