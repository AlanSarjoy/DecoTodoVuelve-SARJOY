let carts = document.querySelectorAll(".btn");

let products = [
    {
        nombre: "mesa de galeria",
        precio: 249600,
        carrito: 0
    },
    {
        nombre: "mesa titan",
        precio: 450000,
        carrito: 0
    },
    {
        nombre: "mesa cuadrada pinotea",
        precio: 179750,
        carrito: 0
    },
    {
        nombre: "mesa cuadrada con pata bocha",
        precio: 79850,
        carrito: 0
    },
    {
        nombre: "mesa rustica de galeria",
        precio: 159750,
        carrito: 0
    },
    {
        nombre: "mesa comedor diario reciclado",
        precio: 219750,
        carrito: 0
    },
    {
        nombre:"mesa laurel patas en x",
        precio: 59000,
        carrito:0
    },
    {
        nombre: "mesa baja con ruedas y tres cajones",
        precio: 84250,
        carrito: 0
    },
    {
        nombre: "mesa de luz woodie vale",
        precio: 68900,
        carrito: 0
    },
    {
        nombre: "mesa de apoyo pinotea",
        precio: 33650,
        carrito: 0
    },
    {
        nombre: "mesita de apoyo",
        precio: 19700,
        carrito: 0
    },
    {
        nombre: "mesa baja laurel",
        precio: 22750,
        carrito: 0
    },
];

for(let i=0; i < carts.length; i++) {
    carts[i].addEventListener("click", () =>{
        cartNumbers(products[i]);
        costoTotal(products[i]);
    })
}

function productosEnCarrito(){
    let productNumbers = localStorage.getItem("cartNumbers");
    if(productNumbers){
        document.querySelector(".cart span").textContent = productNumbers;
    }
}

function cartNumbers(producto){
    let productNumbers = localStorage.getItem("cartNumbers");

    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector(".cart span").textContent = productNumbers + 1;
    }else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector(".cart span").textContent = 1;
    }
    setItem(producto);
}

function setItem(producto) {
    let carritoItems = localStorage.getItem("productosEnCarrito");
    carritoItems = JSON.parse(carritoItems);

    if(carritoItems != null){
        if(carritoItems[producto.nombre] == undefined){
            carritoItems = {
                ...carritoItems,
                [producto.nombre]: producto
            }
        }
        carritoItems[producto.nombre].carrito += 1;
    }else {
        producto.carrito = 1;
        carritoItems = {
            [producto.nombre]: producto
        }
    }
    localStorage.setItem("productosEnCarrito", JSON.stringify(carritoItems));
}

function costoTotal(producto){
    let costoCarrito = localStorage.getItem("costoTotal");

    if(costoCarrito != null){
        costoCarrito = parseInt(costoCarrito);
        localStorage.setItem("costoTotal", costoCarrito + producto.precio);
    }else{
        localStorage.setItem("costoTotal", producto.precio);
    }
    
}

productosEnCarrito();