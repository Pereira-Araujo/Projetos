const express = require("express");
const app = express();
const router = express.Router();
const morgan = require("morgan");
const bodyParser = require("body-parser");

const productsRoutes = require("../routes/products"); //import


app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false })); // dados simples
app.use(bodyParser.json()); //tipo json

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); //caminho do servidor
  res.header(
    "Access-Control-Allow-Header",
    "Origin,X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.mehtod === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST,PATCH,DELETE,GET");
    return res.status(200).send({});
  }
  next();
});

app.use("/products", productsRoutes); //rotas

// Erro para rotas não encontradas
app.use((res, req, next) => {
  const error = new Error("Rota não encontrada");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
