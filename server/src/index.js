const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());

app.get("/api/menus", async (req, res) => {
  try {
    const response = await axios.post(
      `https://service.jamie.g6tech.com.br/api/v1/menus/jamie-demo/eval`,
      {}
    );
    // console.log("DATA: ", response.data);
    res.send(response.data);
  } catch (e) {
    console.error("error", e);
    res.send(e.message);
  }
});

app.listen(8000);
