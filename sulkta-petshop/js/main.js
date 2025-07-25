
function mostrarProductos(filtro) {
    const contenedor = document.getElementById(filtro);
    contenedor.innerHTML = '';
    productos.filter(p => filtro === 'catalogo' ? p.estado === 'disponible' : p.estado === 'agotado')
        .forEach(p => {
            contenedor.innerHTML += `
            <div class="card">
                <img src="${p.imagen}" alt="${p.nombre}">
                <h3>${p.nombre}</h3>
                <p>${p.descripcion}</p>
                <p><strong>${p.precio}</strong></p>
                <p><em>${p.estado === 'agotado' ? 'Agotado' : 'Disponible'}</em></p>
            </div>
            `;
        });
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('catalogo')) mostrarProductos('catalogo');
    if (document.getElementById('agotados')) mostrarProductos('agotados');
});
