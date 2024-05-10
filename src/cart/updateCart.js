import { deleteProduct, saveToStorage } from "./localStorageCart.js";
import { renderProductsSideBar } from "./renderSideBarCart.js";
import { updateOrAddProduct } from "./localStorageCart.js";
import { readLocalStorage } from "./localStorageCart.js";

export const updateCart =(e) => {
    if(e.target.id ==='minus'){
        console.log('menos')
        return;
    }
    if(e.target.id ==='plus'){
        const id = Number(e.target.parentElement.parentElement.getAttribute('data-id'));
        let products = readLocalStorage();
        
        console.log(products);

        return;
    }
    if(e.target.id ==='delete'){
        deleteProduct(e.target.parentElement.parentElement.getAttribute('data-id'));
        let sideBard = document.querySelector('#contenedorCarrito');
        const renderCardCart = renderProductsSideBar();
        sideBard.innerHTML=renderCardCart
        return;
    }
}