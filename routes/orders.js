import express from "express";
import { Order } from "../models/order"

const router = express.Router();

router.get('/', (req, res) => {
  // res.json("GET Success")
  // get out orders

  Order.find()
    .then(orders => res.json(orders))
      .catch(err => res.status(404).json(err))
});

router.post('/', (req, res) => {
  res.json("POST Success")
});

router.patch('/', (req, res) => {
  res.json("PATCH Success")
});

router.delete('/:order_id', (req, res) => {
  const id = req.params.order_id
  res.json(`DELETE Success: ${id}`)
});

export const orders = router