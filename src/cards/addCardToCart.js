import { calcularPrecioTotal, saveToStorage } from "../cart/localStorageCart.js";
import { renderProductsSideBar } from "../cart/renderSideBarCart.js";
import { deleteLocalStorage } from "../cart/localStorageCart.js";

export function addCard (e) {
   
    
    if(e.target.id !== 'addToCart') return
    
    const htmlCard = e.target.parentNode.parentNode;
    const id = htmlCard.getAttribute('data-id');
    const imgProduct = htmlCard.querySelector('img').getAttribute('src');
    const nombreProducto = htmlCard.querySelector('.modal-title').textContent;
    const precioProducto = htmlCard.querySelector('.modal-body p').textContent.split(':')[1].slice(0,-1);
    
   
   
    const product ={
        id,
        cantidad: 1,
        src: imgProduct,
        name: nombreProducto,
        price: precioProducto
    }

    saveToStorage(product)

    let sideBard = document.querySelector('#contenedorCarrito');
    const renderCardCart = renderProductsSideBar();
    sideBard.innerHTML=renderCardCart

    const btnFinalizarComprar = document.createElement('button');
    btnFinalizarComprar.textContent = 'Finalizar compra';
    btnFinalizarComprar.classList.add('btn','btn-success','ms-5') 
    btnFinalizarComprar.addEventListener('click',() => {
        sideBard.innerHTML='<p class="text-success">Compra finalizada con exito</p>'
        setTimeout(() => {
            sideBard.innerHTML='<p>No hay productos en el carrito</p>'
            deleteLocalStorage()
        },1500)
        
    })
    const btnEliminarCompra = document.createElement('button');
    btnEliminarCompra.textContent = 'Vaciar carrito';
    btnEliminarCompra.classList.add('btn','btn-danger') 

    btnEliminarCompra.addEventListener('click',() => {
        sideBard.innerHTML='<p>No hay productos en el carrito</p>'
        deleteLocalStorage()
    })

    const precioTotal = document.createElement('p');
    const precio = calcularPrecioTotal();
    precioTotal.textContent = `Precio total: ${precio}`
    sideBard.append(precioTotal,btnEliminarCompra,btnFinalizarComprar);
    
    return product;

    
}