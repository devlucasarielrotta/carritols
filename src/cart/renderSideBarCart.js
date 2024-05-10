import { readLocalStorage } from "./localStorageCart.js";

export const renderProductsSideBar  = ( ) => {

    let products =  readLocalStorage();

    let cardsHorizontal = "";

    if(products.length>0){
        products.forEach(({id,name,price,src,cantidad}) => {
    
            cardsHorizontal +=`
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="${src}" class="img-fluid rounded-start" style="width:150px; padding:10px;" alt="${name}">    
                    </div>
                    <div class="col-md-8">
                    <div class="card-body" data-id=${id}>
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">Cantidad:<button id="minus"> - </button> ${cantidad} <button id="plus"> + </button> <button id="delete">delete</button></p>
                        <p class="card-title">Precio: <small class="text-body-secondary">${price}</small></p>
                    </div>
                    </div>
                </div>    
            </div>
            `
        })
    }else{
        cardsHorizontal ='<p>No hay productos en el carrito</p>'
    }
  
    
    return cardsHorizontal;
}

