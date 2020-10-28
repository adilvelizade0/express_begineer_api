const express = require("express");
const app = express();
const { errorHandler } = require("./middleware/errorHandler");
require("dotenv").config();

const port = process.env.PORT || 3000;

app.use(express.json());

const users = [
  {
    id: 1,
    name: "Adil",
    place: "Baku",
  },
  {
    id: 2,
    name: "Nicat",
    place: "Baku",
  },
];

app.get("/users", errorHandler, (req, res) => {
  res.json({ users });
});

app.post("/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.json({ user });
});

app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users[i] = {
        ...users[i],
        ...req.body,
      };
    }
  }
  res.json({ users });
});

app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users.splice(i, 1);
    }
  }
  res.json({ users });
});

app.listen(port, () => {
  console.log(`Server started : localhost:${port}`);
});
