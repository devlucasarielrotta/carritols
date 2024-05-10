export const readLocalStorage = () => {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    return products
}
export const calcularPrecioTotal = () => {
    const products = readLocalStorage();
    let precio=0;
     products.forEach(p=> precio += Number(p.price));
    return precio.toFixed(2);
}
export const saveToStorage = (product) => {
    let products = readLocalStorage();
    if (products.length > 0) {
       products =  updateOrAddProduct(products, product); 
    } else {
        products = [];
        products.push(product);
    }
    localStorage.setItem('products', JSON.stringify(products));
}


export const deleteLocalStorage = () => {
    
    localStorage.removeItem('products');
    
}

export const deleteProduct = (id) => {
    let productsLS = readLocalStorage();
    console.log(id);
    const updatedProducts = productsLS.filter(p => p.id != id);
    console.log(updatedProducts)
    localStorage.setItem('products', JSON.stringify(updatedProducts));
}



export const updateOrAddProduct = (products, producto) => {
    const exists = products.some(p => p.id == producto.id);

    if (exists) {
        return products.map(p => {
            if (p.id === producto.id) {
                return {
                    ...p,
                    cantidad: ++p.cantidad, 
                    price: producto.price * p.cantidad
                };
            } else {
                return p;
            }
        });
    } else {
        return [...products, producto];
    }
}
