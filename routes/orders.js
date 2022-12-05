import express from "express";
import { Order } from "../models/order.js"

const router = express.Router();

router.get('/', (req, res) => {
  Order.find()
    .then(orders => res.json(orders))
      .catch(err => res.status(404).json(err))
});

router.post('/', (req, res) => {
  // res.json("POST Success")
  const newOrder = new Order({
    items: req.body.items, 
    name: req.body.name,
    address: req.body.address,
  });

  newOrder.save()
    .then((order) => res.json("Your order has been placed!"))
    .catch(err => res.status(422).json(err))

});

router.patch('/', (req, res) => {
  res.json("PATCH Success")
});

router.delete('/:order_id', (req, res) => {
  const id = req.params.order_id
  // res.json(`DELETE Success: ${id}`)
  Order.findOneAndDelete(id)
    .then(() => res.json({id: questions._di}))
    .catch(err => res.status(404).json(err))
});

export const orders = router