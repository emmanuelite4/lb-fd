import express from 'express'

const PORT = process.env.PORT || 8000
const app = express();
const router = express.Router()


router.get("/workflow", (req, res) => {
    res.send("Hello world")
})


app.use(router)


app.listen(PORT, () => {
    console.log(`App listening to ${PORT}`)
})