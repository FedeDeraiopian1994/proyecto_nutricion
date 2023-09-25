let info = prompt ("Por favor, ingese su nombre")

function saludar() {
        alert ("Bienvenido/a " + info + ", gracias por visitarnos!");
    do{
        let opcion = prompt("Cúal es el objetivo que desea alcanzar: \n1 - Mejorar mi salud. \n2 - Estar en mejor condición. \n3 - Dieta acorde a una patología. \n4 - Nutrición vegetariana / vegana")
        if(opcion == "1"){
            alert(info + " te recomendamos que visites la sección de vida sana");
        }
        else if (opcion == "2"){
            alert(info + " te recomendamos que visites la sección deportiva");
        }
        else if( opcion == "3"){
            alert(info + " te recomendamos que visites la sección dietoterapia");
        }
        else if( opcion == "4"){
            alert(info + " te recomendamos que visites la sección vegetariana / vegana");
        }
    }
    while (opcion != undefined)
}
saludar()
