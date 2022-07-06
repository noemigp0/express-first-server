const express = require("express");
const app = express();
const fsPromises = require("fs").promises
app.use(express.json())

app.listen(8080, () => {
  console.log("Ya estamos escuchando desde nuestro servidor express");
});

/**
 * Endpoints que sea /react y me regresen los alumnos que estan en el modulo
 * de React.
 */

//   app.get("/koders/:nombre", async (request, response) => {
//    // Destructuracion
//    const { nombre } = request.params
//    const koders = await fsPromises.readFile("koders.json", "utf8")
//    const kodersJson = JSON.parse(koders)
//    const koderEncontrado = kodersJson.alumnos.filter((koder) => {
//      return koder.name.toLowerCase() === nombre.toLowerCase()
//    })
//    response.json(koderEncontrado)
//  })

/**
 * Ejercicio
 * Endpoints de GET
 * ruta -> koders/:id
 * Que me van a regresar, todo el objeto del koder encontrado con ese identificador
 * Que si ese ID no existe, me regresen -> Ese koder no fue encontrado.
 */

// app.get("/koders/:id", async (request, response) => {
//   // Destructuracion
//   const { id } = request.params;

//   const koders = await fsPromises.readFile("koders.json", "utf8");
//   const kodersJson = JSON.parse(koders);
//   const koderEncontrado = kodersJson.alumnos.filter((koder) => {
//     return koder.id === parseInt(id);
//   });

//    if (!koderEncontrado.length){
//     response.json(`El koder con id: ${id} no fue encontrado`)
//     return
//    } 
  

//   response.json(koderEncontrado);
// });


// QueryParams
// app.get("/koders", async (request, response) => {
//   // Destructuracion

//   const { mod, gen } = request.query // Del objeto query sacamos los queryparams

//   console.log("mod", mod)
//   console.log("gen", gen)

//   const koders = await fsPromises.readFile("koders.json", "utf-8")
//   const kodersJson = JSON.parse(koders) // que este parseado a json.
//   response.json(kodersJson.alumnos) // -> Content/Type = application/json
// });

/**
 * -- Ejercicio --
 * Endpoints de GET. 
 * Ruta /koders/:name
 * queryparam -> modulo
 * pathparam -> name
 * 
 * que quiero que me regresen: El koder, o los koders.
 */

// app.get("/koders/:name", async (request, response) => {
//   // Destructuracion
//   const { name } = request.params
//   const { modulo } = request.query
// console.log(name)
// console.log(modulo)

//   const koders = await fsPromises.readFile("koders.json", "utf8")
//   const kodersJson = JSON.parse(koders)
//   const koderEncontrado = kodersJson.alumnos.filter((koder) => {
//     return koder.name.toLowerCase() === name.toLowerCase() && koder.modulo.toLowerCase() === modulo.toLocaleLowerCase()
//   })

//   if (!koderEncontrado.length){
//     response.json(`El koder con nombre: ${name} y module: ${modulo} no fue encontrado`)
//     return
//    } 
//   response.json(koderEncontrado)
  
// })



// Post
app.post("/koders", async (request, response) => {
  // Destructuracio

  // bd -> base de datos, data base

  const { name, modulo , gen, edad } = request.body // Recibimos datos
  const koders = await fsPromises.readFile("koders.json", "utf-8")
  const bd = JSON.parse(koders)
  const alumnos = bd.alumnos // Guarde arreglo alumnos

  const newAlumnos = [...alumnos] // Le hice un copy

  // Al arreglo alumno le hice el push con los datos que recibi del body
  newAlumnos.push({
    name: name,
    modulo: modulo,
    gen : gen,
    edad: edad
  })

  // Reemplaza en mi base de datos(koders.json) mi arreglo alumnos, por el nuevo
  bd.alumnos = newAlumnos

  // Escribi en koders.json mi base de datos nueva, con un salto de linea y 4 de indentacion
  await fsPromises.writeFile("koders.json", JSON.stringify(bd, "\n", 4))

  // Le regrese al usuario mis resultado
  response.json({
    name: name,
    modulo: modulo,
    gen : gen,
    edad: edad
  })
})


//PATCH

app.patch("/koders/:id", async (request, response) => {
  console.log(request.body)
  const { id } = request.params
  const { name, modulo , gen, edad } = request.body
  // console.log("id",id);
  // console.log("name", name)
  // console.log("modulo", modulo)
  // console.log("gen", gen)
  // console.log("edad", gen)
  //const koders = await fsPromises.readFile("koders.json", "utf8")
  //Acceder a los datos del archivo
  const koders = await fsPromises.readFile("koders.json", "utf8")
  //Parsearlo a JSON
  const kodersJson = JSON.parse(koders)
  console.log(kodersJson)
  

  koderById = kodersJson.alumnos.filter((element) => {
   return element.id === parseInt(id)
  })

  koderById


  response.json("Hola desdee patch") 
  
})
