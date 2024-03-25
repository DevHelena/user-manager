import { v4 as uuidv4 } from 'uuid';

let items = [
  {
    username: 'Helena Maia',
    password: '123',
    id: uuidv4()
  }
];

export const getAllItems = (req, res) => {
  res.json(items);
};

export const getItemById = (req, res) => {
  const id = req.params.id;
  const item = items.find(item => item.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
};

export const createItem = (req, res) => {
  const newItem = { id: uuidv4(), ...req.body };
  items.push(newItem);
  res.status(201).json(newItem);
};

export const updateItem = (req, res) => {
  const id = req.params.id;
  const index = items.findIndex(item => item.id === id);
  if (index !== -1) {
    items[index] = { ...items[index], ...req.body };
    res.json(items[index]);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
};

export const deleteItem = (req, res) => {
  const id = req.params.id;
  const index = items.findIndex(item => item.id === id);
  if (index !== -1) {
    items.splice(index, 1);
    res.json({ message: 'Item deleted successfully' });
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
};
