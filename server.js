import express, { json } from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

const app = express();
app.use(cors());
app.use(json());

let users = []; // In-memory storage

// **Signup (Register)**
app.post('/signup', (req, res) => {
  const { email, password, fullName } = req.body;

  if (!email || !password || !fullName) {
    return res.status(400).json({ error: 'Email, password, and full name are required' });
  }

  if (users.some(user => user.email === email)) {
    return res.status(409).json({ error: 'User with this email already exists' });
  }

  const newUser = { id: uuidv4(), email, password, fullName };
  users.push(newUser);
  res.status(201).json({ message: 'User registered successfully', userId: newUser.id });
});

// **Login**
app.post('/signin', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(user => user.email === email && user.password === password);
  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  res.json({ message: 'Login successful', userId: user.id, fullName: user.fullName });
});

// **Get Users (For Debugging)**
app.get('/users', (req, res) => {
  // eslint-disable-next-line no-unused-vars
  res.json(users.map(({password, ...user}) => user));
});

// **Get Users (For Debugging)**
app.get('/users/:id', (req, res) => {
  const { id } = req.params;

  const user = users.find(user => id === user.id);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json({ userId: user.id, fullName: user.fullName, email: user.email });
});

// **Start Server**
app.listen(5000, () => console.log('Server running on port 5000'));
