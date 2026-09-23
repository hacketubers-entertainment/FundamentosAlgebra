    const bd = document.getElementById('body');
    const titulo = document.getElementById('titulo');
    const tabla = document.getElementsByClassName('celda')
    console.log(tabla)
    bd.addEventListener("click", () => {
        console.log("si dio click")
        const randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        const nuevoColor = '#' + randomColor;
        bd.style.backgroundColor = nuevoColor
        console.log(randomColor)
        if (randomColor < '888888'){
            console.log("si")
            bd.style.color = "#FFFFFF"
        } else {
            bd.style.color = "#000000"
        }
    })

    titulo.addEventListener("click", () => {
        let randomColor2 = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        let nuevoColor2 = '#' + randomColor2;
        titulo.style.backgroundColor = nuevoColor2
        console.log(randomColor2)
        if (randomColor2 < '888888'){
            titulo.style.color = "#FFFFFF"
        } else {
            titulo.style.color = "#000000"
        }
    })

    for (const celda of tabla) {
        celda.addEventListener("click", (evento) => {
            evento.stopPropagation()
            const randomColor1 = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
            const nuevoColor1 = '#' + randomColor1;
            celda.style.backgroundColor = nuevoColor1
            celda.style.color = parseInt(randomColor1, 16) < 0x888888 ? "#FFFFFF" : "#000000"
        })
    }