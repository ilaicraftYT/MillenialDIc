import express from "express"
import { engine } from "express-handlebars"
import palabras from "./assets/palabras.json" assert { type: "json" }
const app = express()


app.engine("hbs", engine({
    extname: "hbs",
    defaultLayout: "main"
}))

app.set("view engine", "hbs")
app.use(express.static("./public"))

// Entrada de problemas de seguridad? Quien sabe
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/buscar", (req, res) => {
    if(!req.body.busqueda) return res.status(400).send("La busqueda falló. Efe en el chat.")
    const palabra = req.body.busqueda.toLowerCase()
    const filtro = palabras.filter(obj => obj.palabra.toLowerCase().indexOf(palabra) !== -1)
    res.render("busqueda", { busqueda: filtro })
})

app.get("/", (_req, res) => {
    res.render("index", { palabras: palabras })
})

app.get("/abreviaturas", (_req, res) => {
    res.render("abreviaturas")
})

app.all("*", (_req, res) => {
    res.status(400).render("404")
})

app.listen(8080, () => {
    console.log("Servidor iniciado en el puerto 8000")
})