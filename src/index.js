import { getApiProducts } from "./api/apiProducts.js";
import { addCard } from "./cards/addCardToCart.js";
import { renderCard } from "./cards/renderCard.js";
import { deleteLocalStorage, readLocalStorage } from "./cart/localStorageCart.js";
import { renderProductsSideBar } from "./cart/renderSideBarCart.js";
import { updateCart } from "./cart/updateCart.js";
import { toggleSpinner } from "./utils/spinner.js";
import { calcularPrecioTotal } from "./cart/localStorageCart.js";

const btnEliminarCompra = document.createElement('button');
const btnFinalizarComprar = document.createElement('button');
const btnAdd = document.querySelector('#plus');
const precioTotal = document.createElement('p');
const cardList = document.querySelector('#cards-list');
const errorMessage = document.querySelector('#error-message');
const lsProducts = readLocalStorage()
let sideBard = document.querySelector('#contenedorCarrito');

(async () => {
    await main();
})();


async function main() {
    toggleSpinner();
    try {
        const products = await getApiProducts();
        if (!products) throw new Error('No se pudo obtener la lista de productos');
        
        toggleSpinner();
        renderCard(cardList, products);
        document.querySelector("#cards-list").addEventListener("click", addCard);
        console.log(lsProducts)
        if(lsProducts.length>0) {
            const precio = calcularPrecioTotal();
            sideBard.innerHTML += renderProductsSideBar();
            precioTotal.textContent = `Precio total: ${precio}`
            btnFinalizarComprar.textContent = 'Finalizar compra';
            btnFinalizarComprar.classList.add('btn','btn-success','ms-5') 
            
            btnEliminarCompra.textContent = 'Vaciar carrito';
            btnEliminarCompra.classList.add('btn','btn-danger') 


            sideBard.append(precioTotal,btnEliminarCompra,btnFinalizarComprar);
        }else {
            
            sideBard.innerHTML='<p>No hay productos en el carrito</p>'
        };

        sideBard.addEventListener('click',updateCart);
        
        btnEliminarCompra.addEventListener('click',() => {
            sideBard.innerHTML='<p>No hay productos en el carrito</p>'
            deleteLocalStorage()
        })
        btnFinalizarComprar.addEventListener('click',() => {
            sideBard.innerHTML='<p class="text-success">Compra finalizada con exito</p>'
            setTimeout(() => {
                sideBard.innerHTML='<p>No hay productos en el carrito</p>'
                deleteLocalStorage()
            },1500)
            
        })
    
    } catch (error) {
        const footer = document.querySelector('footer')
        footer.style.position='absolute';
        setTimeout(() => {
          toggleSpinner();
          errorMessage.style.display = 'block'; 
          errorMessage.classList.add('error-message');
          
        },1000)
        
    }
}

