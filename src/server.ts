import express from "express";

const PORT = 3333;
const app = express();

app.get("/products/:id/:user", (req, res) => {
    const { id, user } = req.params;
    res.send(`Product ID: ${id}, User: ${user}`);
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));