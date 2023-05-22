const grande =document.querySelector(".grande")
const punto =document.querySelectorAll(".punto")

/* Asignar un click a todos los puntos*/
punto.forEach ( (cadaPunto, i )=>{
    punto[i].addEventListener("click",()=>{

        let posicion = i
        let operacion = posicion * -20

        grande.style.transform = `translateX(${ operacion }%)`

        punto.forEach( (cadaPunto, i )=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')


    })

})