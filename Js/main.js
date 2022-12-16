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
    {
        nombre: "silla moderna reciclada",
        precio: 13200,
        carrito: 0
    },
    {
        nombre: "silla cabecera toledo con estirilla",
        precio: 16230,
        carrito: 0
    },
    {
        nombre: "silla vestida recta lino",
        precio: 10100,
        carrito: 0
    },
    {
        nombre: "silla vestida f",
        precio: 9800,
        carrito: 0
    },
    {
        nombre: "silla london",
        precio: 17000,
        carrito: 0
    },
    {
        nombre: "silla francesa",
        precio: 15600,
        carrito: 0
    },
    {
        nombre: "silla de descanso",
        precio: 8899,
        carrito: 0
    },
    {
        nombre: "banqueta cuadrada con respaldo",
        precio: 12200,
        carrito: 0
    },
    {
        nombre: "banqueta francesa con mariposas",
        precio: 7900,
        carrito: 0
    },
    {
        nombre: "silla cabecera esterillada",
        precio: 11200,
        carrito: 0
    },
    {
        nombre: "acapulco sur",
        precio: 6700,
        carrito: 0
    },
    {
        nombre: "silla jack",
        precio: 23200,
        carrito: 0
    },
    {
        nombre: "sofá tokyo",
        precio: 289000,
        carrito: 0
    },
    {
        nombre: "sillon esquinero italia",
        precio: 297000,
        carrito: 0
    },
    {
        nombre: "sofá ingles reciclado",
        precio: 189000,
        carrito: 0
    },
    {
        nombre: "sofá torino",
        precio: 189000,
        carrito: 0
    },
    {
        nombre: "sillon estocolmo",
        precio: 175000,
        carrito: 0
    },
    {
        nombre: "sillon esquinero phanton",
        precio: 210000,
        carrito: 0
    },
    {
        nombre: "silloncito velvet",
        precio: 99100,
        carrito: 0
    },
    {
        nombre: "sillon bkf",
        precio: 110000,
        carrito: 0
    },
    {
        nombre: "sillon de sala frances- luis xv",
        precio: 55000,
        carrito: 0
    },
    {
        nombre: "camastro galeria x3",
        precio: 230000,
        carrito: 0
    },
    {
        nombre: "butaca net",
        precio: 46000,
        carrito: 0
    },
    {
        nombre: "silloncito outdoor",
        precio: 88000,
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
    let cantidadProductos = localStorage.getItem("cartNumbers");
    if(cantidadProductos){
        document.querySelector(".cart span").textContent = cantidadProductos;
    }
}

function cartNumbers(producto){
    let cantidadProductos = localStorage.getItem("cartNumbers");

    cantidadProductos = parseInt(cantidadProductos);

    if(cantidadProductos){
        localStorage.setItem("cartNumbers", cantidadProductos + 1);
        document.querySelector(".cart span").textContent = cantidadProductos + 1;
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

function carritoDisplay(){
    let carritoItems = localStorage.getItem("productosEnCarrito");
    carritoItems = JSON.parse(carritoItems);
    let productoContainer = document.querySelector(".productos");
    let costoCarrito = localStorage.getItem("costoTotal");

    if(carritoItems && productoContainer){
        productoContainer.innerHTML = "";
        Object.values(carritoItems).map(item => {
            productoContainer.innerHTML += `
                <div class"producto">
                    <ion-icon name="close-circle-outline"></ion-icon>
                    <img src="/imagenes/${item.tag}.jpg"></img>
                    <span>${item.nombre}</span>
                </div>
                <div class"precio">$${item.precio},00</div>
                <div class"cantidad">
                    <ion-icon name="chevron-back-circle-outline"></ion-icon>
                    <span>${item.carrito}</span>
                    <ion-icon name="chevron-forward-circle-outline"></ion-icon>
                </div>
                <div class"total">
                    $${item.carrito * item.precio},00
                </div>
            `;
        });
    }
}
productosEnCarrito();
carritoDisplay();