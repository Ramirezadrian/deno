import { Application } from "./deps.ts";
import { router } from "./routers/colors.ts";

const app = new Application()

app.use(router.routes())

const PORT = 8080

console.log(`Servidor escuchando en el puerto ${PORT}`)

await app.listen({port: PORT})