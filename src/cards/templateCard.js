import {  modalCard } from "./modalCard.js";
import { fullDate } from "../utils/getTime.js";

export const templateCard = ({id,title,price,description,category,image}) => {
    
    const article = document.createElement('article');
    
    article.innerHTML =`
        <div class="col text-center shadow mb-10 bg-white rounded ">
          <div class="card .h-100 flex-grow-1" style=" height: 700px;"  >
            <img src="${image}" style="width: 220px; cursor:pointer; height: 220px;" class="card-img-top mx-auto mt-2"  data-bs-toggle="modal" data-bs-target="#exampleModal${id}" alt="${title}">
            <h3 class="card-title card-body bg-light text-center mt-2" ><span class="fw-bold"Nombre: </span>${title}.</h3>
            <div class="card-body " style="overflow:auto;"   >
              <h4 class="card-title mt-2"><span class="fw-bold">Precio:</span> ${price}$ .</h4>
              <h4 class="card-title"><span class="fw-bold">Categoria:</span> ${category}</h4>
              <h4 class="card-text"><span class="fw-bold">Descripción:</span> ${description}.</h4>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary">Última vez actualizado el ${fullDate}</small>
            </div>
          </div>
        </div>`;
   article.innerHTML+= modalCard(id,title,price,description,category,image)
    
   return article;
}