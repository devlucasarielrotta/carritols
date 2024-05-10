import { templateCard } from "./templateCard.js";
import { addCard } from "./addCardToCart.js";


export const renderCard = (nodo,products) => {
   
    const fragment = document.createDocumentFragment();

    products.forEach(product => {

        const cardProduct = templateCard(product)
       
        fragment.appendChild(cardProduct)
        
    })
    
    nodo.appendChild(fragment)
}