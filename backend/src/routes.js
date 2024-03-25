import express from 'express';
import { getAllItems, getItemById, createItem, updateItem, deleteItem } from './controller.js';
import cors from "cors"

const router = express.Router()

router.get('/users', getAllItems);
router.get('/users/:id', getItemById);
router.post('/users', createItem);
router.put('/users/:id', updateItem);
router.delete('/users/:id', deleteItem);

const routes = (app) => {
  app.route('/').get((req, res) => {res.status(200).send({title: "axios api"})})

  app.use(
    express.json(),
    cors(),
    router
  )
}

export default routes
