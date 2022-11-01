let usuario = prompt("Bienvenido a DecoTodoVuele, ingrese su usuario:");

function saludar (usuario) {
  alert("Hola" + " "+ usuario);
}


saludar(usuario);


function pago(cuota) {
  alert("Tu producto sale" + " " + "$" + cuota);
}
let producto = prompt(
  "Ingresa una opción \n 1-Mesa de galeria \n 2-Mesa titan \n 3-Mesa cuadrada pinotea \n 4-Mesa baja Laurel \n 5-Mesa cuadrada con pata \n 6-Mesa rustica de galeria \n 7-Mesa comedor diario reciclado \n 8-Mesa laurel patas en X \n 9-Mesa baja con ruedas y tres cajones \n 10-Mesa de luz woodie vale \n 11-Mesa de apoyo pinotea \n 12-Mesita de apoyo"
);
if (producto == 1) {
  precio = 32000;
  console.log(precio);
} else if (producto == 2) {
  precio = 18000;
  console.log(precio);
} else if (producto == 3) {
  precio = 18000;
  console.log(precio);
} else if (producto == 4) {
  precio = 14500;
  console.log(precio);
} else if (producto == 5) {
  precio = 12800;
  console.log(precio);
} else if (producto == 6) {
  precio = 25000;
  console.log(precio);
} else if (producto == 7) {
  precio = 30000;
  console.log(precio);
} else if (producto == 8) {
  precio = 10000;
  console.log(precio);
} else if (producto == 9) {
  precio = 23000;
  console.log(precio);
} else if (producto == 10) {
  precio = 8800;
  console.log(precio);
} else if (producto == 11) {
  precio = 9900;
  console.log(precio);
} else {
  alert("No seleccionaste un producto existente");
}

let formadepago = prompt(
  "Ingresa una opción \n 1-efectivo \n 2-transferencia bancaria \n 3-mercado pago "
);
if (formadepago == 1) {
  cuota = precio;
  console.log(cuota);
} else if (formadepago == 2) {
  cuota = precio * 1.1;
  console.log(cuota);
} else if (formadepago == 3) {
  cuota = precio * 1.3;
  console.log(cuota);
} else {
  alert("No elegiste ningun metodo de pago");
  let formadepago = prompt(
    "Ingresa una opción \n 1-efectivo \n 2-transferencia bancaria \n 3-mercado pago"
  );
  if (formadepago == 1) {
    cuota = precio;
    console.log(cuota);
  } else if (formadepago == 2) {
    cuota = precio * 1.1;
    console.log(cuota);
  } else if (formadepago == 3) {
    cuota = precio * 1.3;
    console.log(cuota);
  }
}
pago(cuota);