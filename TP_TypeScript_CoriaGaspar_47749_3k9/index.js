"use strict";
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then((products) => {
    // Preparamos la tabla HTML
    let tableHTML = '<thead><tr><th>ID</th><th>Title</th><th>Description</th><th>Price</th></tr></thead><tbody>';
    // Recorre entre todo los productos para crear las filas
    products.forEach((p) => {
        tableHTML += `<tr><td>${p.id}</td><td>${p.title}</td><td>${p.description}</td><td>${p.price}</td></tr>`;
    });
    // Cierra la tabla
    tableHTML += '</tbody>';
    // Toma el elemento de la tabla para configurar el HTML 
    const tableElement = document.querySelector('#tableElement');
    if (tableElement) {
        tableElement.innerHTML = tableHTML;
    }
    // Esconde spinner
    const spinnerElement = document.querySelector('#spinnerContainer');
    if (spinnerElement) {
        spinnerElement.style.display = 'none';
    }
});
