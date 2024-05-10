


export const modalCard = (id, title, price, description, category, image) => {
    
    return `
    <div class="modal fade lead" id="exampleModal${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog text-center">
            <div class="modal-content " data-id=${id}>
            <div class="modal-header">
                <h3 class="modal-title fs-5" id="exampleModalLabel"><span class="fw-bold">Nombre:</span> ${title}</h3>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body ">
                <img src="${image}" style="width: 300px; height:300px; --bs-border-opacity: .5;" class="card-img-top border border-dark-subtle p-2 mb-2 shadow-sm p-3 mb-5 bg-body-tertiary rounded" alt="${title}">
                <p> <span class="fw-bold"> Precio:</span> ${price}$</p>
                <p> <span class="fw-bold">Categoria:</span> ${category}</p>
                <p> <span class="fw-bold">Descripcion:</span> ${description}.</p>
            </div>
            <div class="modal-footer d-flex justify-content-center border border-dark-subtle .bg-light.bg-gradient">
                <button type="button" class="btn btn-outline-secondary me-2" data-bs-dismiss="modal" id="closeModal">Cerrar</button>
                <button type="button" class="btn btn-outline-primary ms-5" data-bs-dismiss="modal" id="addToCart">Agregar al carrito</button>
            </div>   
        </div>
    </div>
    `;
}
