const testimonios = [
    {
        nombre: "Federico Deraiopian",
        texto: "Muy recomendable, yo voy con ella por nutrición deportiva y realmente me esta ayudando a conseguir mi objetivo!! Muy buen trato y amabilidad",
        destacado: true
    },
    {
        nombre: "Micaela Meza",
        texto: "Execelente y Amable. Muy profesional en todo",
        destacado: false
    },
    {
        nombre: "Geraldine Meza",
        texto: "Excelente profesional. Muy satisfecha!",
        destacado: true
    },
    {
        nombre: "Sol Li",
        texto: "Super recomendable. Excelente profesiona!",
        destacado: false
    },
    {
        nombre: "Cabrera Luciana",
        texto: "Super recomendable, excelente trato y muy buena la atención!!",
        destacado: true
    },
    {
        nombre: "Daniela Zaccarello",
        texto: "Excelente profesional, la súper recomiendo!",
        destacado: true
    },
    {
        nombre: "Jano Catriel",
        texto: "Excelente profesional, me ayudó a mejorar mi alimentación. La recomiendo!",
        destacado: false
    },
    {
        nombre: "Federico Chinestradd",
        texto: "Muy buena atencion! Me ayudo a lograr mis objetivos esteticos y de salud!",
        destacado: false
    },
    {
        nombre: "Sofia Brenna",
        texto: "Muy buena profesional, súper recomendable",
        destacado: true
    },
    {
        nombre: "Faku Andujar",
        texto: "El trato que me ofreció es de otro nivel!!! Súper profesional, recomendadísima…",
        destacado: true
    },
    {
        nombre: "Nico Peix",
        texto: "Excelente profesional! 100% recomendable !",
        destacado: true
    },
    {
        nombre: "lorena martinez",
        texto: "Excelente atención!!",
        destacado: true
    },
    {
        nombre: "Leticia Anchieta",
        texto: "Excelente!!❤️",
        destacado: true
    },
    {
        nombre: "Francisco gutierrez",
        texto: "Excelente profesional!",
        destacado: false
    },
    {
        nombre: "Norma Orioli",
        texto: "excelente profesional",
        destacado: true
    },
];

const testimoniosDestacados = testimonios.filter(testimonio => testimonio.destacado);

function mostrarTestimonios() {
const testimoniosContainer = document.getElementById('testimonios');

testimoniosContainer.innerHTML = '';

testimoniosDestacados.forEach(testimonio => {
    const testimonioElement = document.createElement('div');
    testimonioElement.classList.add('frases');
    testimonioElement.innerHTML = `<p>${testimonio.texto}</p> <h6 class="nombre">${testimonio.nombre}</h6>`;
    testimoniosContainer.appendChild(testimonioElement);
    });
}

window.addEventListener('load', mostrarTestimonios);


document.addEventListener("DOMContentLoaded", function () {
    enter = addEventListener("click", function () {
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const area = document.getElementById("area").value;

        localStorage.setItem("nombre", nombre);
        localStorage.setItem("email", email);
        localStorage.setItem("area", area);

        function recuperarDatosLocalStorage() {
            const identidadGuardada = localStorage.getItem("nombre");
            const emailGuardado = localStorage.getItem("email");
            const comentarioGuardado = localStorage.getItem("area"); 
        
            document.getElementById("nombre").value = identidadGuardada;
            document.getElementById("email").value = emailGuardado;
            document.getElementById("area").value = comentarioGuardado;
        };
        
        recuperarDatosLocalStorage();
    })
});


let boton = document.getElementById("botonAyuda");

boton.addEventListener("click", elegir);

function elegir () {
    swal.fire({
        title: 'Desea que lo asesoremos?',
        showCancelButton: true,
        confirmButtonText: 'Si, por favor!',
        cancelButtonText: 'No, gracias!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
            swal.fire({
                title: "Cuál es el objetivo que desea alanzar?",
                input: "select",
                inputOptions:{
                    "Opcion1": "Mejorar mi salud",
                    "Opcion2": "Mejor condición",
                    "Opcion3": "Dieta acorde a patología",
                    "Opcion4": "Nutrición vegana / vegetariana",
                },
                showCancelButton: true,
                confirmButtonText: "Aceptar",
                cancelButtonText: "Cancelar",
                inputPlaceholder: "Selecciona una opcion, por favor!"
              }).then ((result) => {
                
                if(result.value){
                    
                    let mostrarTexto = "";
                    if (result.value === "Opcion1"){ swal.fire(mostrarTexto = "Te recomendamos que visites la sección de vida sana");}
                    else if (result.value === "Opcion2") {swal.fire(mostrarTexto = "Te recomendamos que visites la sección deportiva");}
                    else if (result.value === "Opcion3") {swal.fire(mostrarTexto = "Te recomendamos que visites la sección dietoterapia");}
                    else if (result.value === "Opcion4") {swal.fire(mostrarTexto = "Te recomendamos que visites la sección vegetariana / vegana");}
                }
            });
        }
    });
};

const apiKey = '1';

fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(response => response.json())
    .then(data => {
        displayCategories(data.categories);
    })
    .catch(error => {
        console.error("Error en la obtencion de las recetas: ", error);
    });

function displayCategories(categories) {
  const categoriesContainer = document.getElementById('categoriasContainer');

    categories.forEach(category => {
    const categoryElement = document.createElement('div');
    categoryElement.classList.add('category'); 


    const categoryName = document.createElement('h3');
    categoryName.textContent = category.strCategory; 
    categoryElement.appendChild(categoryName);

    const categoryImage = document.createElement('img');
    categoryImage.src = `https://www.themealdb.com/images/category/${category.strCategory}.png`;
    categoryImage.classList.add('representacion')
    categoryImage.alt = category.strCategory; 
    categoryElement.appendChild(categoryImage);

    const categoryDescription = document.createElement('p');
    categoryDescription.textContent = category.strCategoryDescription; 
    categoryElement.appendChild(categoryDescription);


    categoriesContainer.appendChild(categoryElement);
  });
}