const express = require("express");

const app = express()
const  fsPromises  = require("fs").promises

let path = "text.txt";

app.get("/leer-archivo", (request, response) => {    
    leerArchivo(path)
    .then(
        result => {        
        response.send(result)
        }
    ).catch(
        err => 
        response.send(err))   
})

//--> async/await --> try catch
const leerArchivo = async ( ruta) => {

    const readFile = await fsPromises.readFile(ruta, "utf-8")    
    return readFile
}

// leerArchivo(path).then(
//     result => console.log(result)
// ).catch(err => console.log(err))




// app.get("/hola", (request, response) => {
//     response.write("Holaaa desde mi endpoint /hola")
//     response.end()
// })

// app.post("/hola", (request, response) => {
//     response.send("Estamos haciendo un post desde aqui")
    
// })

 app.listen(8080, () => {
     console.log("Ya estamos escuchando desde nuestro servidor express")
 })

//Ejercicio 
//Hacer un endpoint, donde lea un archivo de texto

