const catalogo = [
        {
            title: "Remera  - Ovni1",
            price: 5000.93,
            description: "perfecta para el verano",
            image : "https://i.pinimg.com/564x/db/a1/5c/dba15cebfc5edde8b00837570fe1b063.jpg ",
        },
       
        {
            title: "Remera  - Ovni3",
            price: 5000.93,
            description: "perfecta para el verano",
            image : " https://i.pinimg.com/564x/15/9e/21/159e210423d249e927239d20b87e6040.jpg",
        },
        {
            title: "buzo  - Ovni4",
            price: 4500.95,
            description: "perfecta para el verano",
            image: "https://i.pinimg.com/736x/ad/0e/5a/ad0e5a339d34771427b982b86f8d2339.jpg",
        },
        {
            title: "Remera  - Ovni5",
            price: 5000.93,
            description: "perfecta para el verano",
            image : " https://i.pinimg.com/736x/65/f8/e3/65f8e3ae78272f428845c5ab87be8922.jpg",
        },
        {
            title: "buzo - Ovni6",
            price: 4500.95,
            description: "perfecta para el verano",
            image: "https://i.pinimg.com/564x/7c/ac/04/7cac04b658561d9be79c053e717d99ec.jpg",
        },

        {
            title: "Remera  - Ovni3",
            price: 5000.93,
            description: "perfecta para el verano",
            image : " https://i.pinimg.com/564x/21/8f/94/218f9425e9915711ba7039c6875e2411.jpg",
        },

        {
            title: "Mochila  - Ovni3",
            price: 5000.93,
            description: "perfecta para el verano",
            image : " https://i.pinimg.com/736x/9c/c8/82/9cc8827f710a7d7e0bd85c245239ece9.jpg",
        },
        {
            title: "Remera  - Ovni3",
            price: 5000.93,
            description: "perfecta para el verano",
            image : " https://i.pinimg.com/736x/10/7e/bf/107ebf58b7381b2d5b8c220f195b8166.jpg",
        },
        {
            title: "Mochila  - Ovni3",
            price: 5000.93,
            description: "perfecta para el verano",
            image : "https://i.pinimg.com/564x/e6/78/39/e678395225bb0d52fe2727b3875f91e6.jpg",
        },
        {
            title: "Mochila - Ovni3",
            price: 5000.93,
            description: "perfecta para el verano",
            image : " https://i.pinimg.com/564x/a1/50/d6/a150d6d687fa04b2bb43879e63a2e00a.jpg",
        },
    ];
   



// tarjeta almacena el div de nuestro html 
let tarjeta = document.getElementById("card-ejemplo");

catalogo.map((producto) => {

    // a nuestra variable tarjeta lo que vamos a hacer es insertarle a travez del innerHTML el codigo que se encuentra entre los backsticks
    tarjeta.innerHTML += `
    <div class="col-md-5 mb-5">
        <div class="card h-100 text-center p-4" key= ${producto.id} >
            <img src= ${producto.image} className="card-img-top" alt= ${producto.title} height="250px" />
            <div class="card-body">
                <h5 class="card-title mb-0"> ${producto.title.substring(0,40)}...</h5>
                <p class="card-title mb-0"> ${producto.description.substring(0,50)}...</p>
                <p class="card-text lead fw-bold">$ ${producto.price} </p>
            </div>
            <a href="https://www.mercadolibre.com.ar/" class="btn btn-outline-dark"> Añadir al Carrito<span class="material-symbols-outlined">
            rocket_launch
            </span>   </a>
        </div>
    </div> 
    `
});


