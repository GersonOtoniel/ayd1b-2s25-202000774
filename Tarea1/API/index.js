const express = require('express')

const app = express();
const PORT = process.env.PORT || 3000
app.use(express.json());

app.get("/", (req, res) => {
    res.send(" Gerson González, canción: Black -- Album: 'Ten'")
})

app.listen(PORT, () => {
    console.log(`Servidor escuchado en http://localhost:${PORT}`)
})