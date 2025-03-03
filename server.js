import express, { json } from 'express';
import cors from 'cors';
import admin from "firebase-admin";

import serviceAccount from './serviceAccount.json' with { type: 'json' }

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const app = express();
app.use(cors());
app.use(json());

// **Get Users (For Debugging)**
app.get('/users', async (req, res) => {
  const results = await admin.auth().listUsers(1000);
  res.json(results.users.map((user) => ({ id: user.uid, fullName: user.displayName, email: user.email })));
});

// **Get Users (For Debugging)**
app.get('/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await admin.auth().getUsers([{uid: id}]);

    const user = result.users[0];

    return res.json({ userId: user.uid, fullName: user.displayName, email: user.email });
  }
  catch {
    return res.status(404).json({ error: 'User not found' });
  }
});

// **Start Server**
app.listen(5000, () => console.log('Server running on port 5000'));
