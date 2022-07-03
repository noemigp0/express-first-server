const express = require("express");
const app = express();
const fsPromises = require("fs").promises;

app.listen(8080, () => {
  console.log("Ya estamos escuchando desde nuestro servidor express");
});

/**
 * Endpoints que sea /react y me regresen los alumnos que estan en el modulo
 * de React.
 */

const getReactStudents = async () => {
  const koders = await fsPromises.readFile("koders.json", "utf-8");
  const kodersJson = JSON.parse(koders); // que este parseado a json.
  const reactModule = kodersJson.alumnos.filter((cv) => {
    return cv.modulo === "React";
  });
  //
  //console.log(reactModule)
 return reactModule
};




app.get("/react-koders", (request, response) => {
    getReactStudents().then(result => {
        console.log(result)
        response.send(result)
    }).catch(err => response.send(err))
})
