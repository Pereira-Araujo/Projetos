const express = require("express");
const router = express.Router();
const mysql = require("../mysql").pool;

router.get("/", (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({ error: error });
    }
    conn.query("SELECT * FROM products;", (error, data, fields) => {
      if (error) {return res.status(500).send({ error: error })}
      const response = {
        amount: data.length,
        books: data.map((prod)=>{
          return{
            id_product:prod.id_product,
            name:prod.name,
            amount:prod.amount,
            author:prod.author,
            image:prod.image,
            genre:prod.genre,
            request:{
              type:'GET',
              description:'Retorna um produto',
              url:"http://localhost:3000/products/" +prod.id_product
            }

          }
        })
      }
      return res.status(200).send(response);
    });
  });
});

router.post("/", (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({ error: error });
    }
    conn.query(
      "INSERT INTO products(name,amount,image,author,genre) VALUES(?,?,?,?,?)",
      [req.body.name, req.body.amount, req.body.image, req.body.author,req.body.genre],
      (error, data, field) => {
        conn.release();

        if (error) {
          return res.status(500).send({
            error: error,
            data: null,
          });
        }

        res.status(201).send({
          message: "Produto inserido com sucesso",
          id_product: data.insertId,
        });
      }
    );
  });
});

router.get("/:id_product", (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({ error: error });
    }
    conn.query(
      "SELECT * FROM products WHERE id_product = ?;",
      [req.params.id_product],

      (error, data, fields) => {
        if (error) {
          return res.status(500).send({ error: error });
        }
        return res.status(200).send({ data: data });
      }
    );
  });
});

router.patch("/:id_product", (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({ error: error });
    }
    conn.query(
      "UPDATE products SET name = ?, amount = ?,image = ?, author = ?  WHERE id_product = ?",
      [
        req.body.name,
        req.body.amount,
        req.body.image,
        req.body.author,
        req.body.id_product,
      ],

      (error, data, field) => {
        conn.release();

        if (error) {
          return res.status(500).send({
            error: error,
            data: null,
          });
        }

        res.status(202).send({
          message: "Produto editado com sucesso",
        });
      }
    );
  });
});

router.delete("/:id_product", (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({ error: error });
    }
    conn.query(
      "DELETE FROM  products WHERE id_product = ?",
      [req.body.id_product],
      (error, data, field) => {
        conn.release();

        if (error) {
          return res.status(500).send({
            error: error,
            data: null,
          });
        }

        res.status(202).send({
          message: "Produto removido com sucesso",
        });
      }
    );
  });
  res.status(201).send({
    message: "Deleta os produtos",
  });
});

module.exports = router;
