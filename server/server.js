import express from "express";
import CableProducts from "./data/CableProducts.js";
import ComputerProducts from "./data/ComputerProducts.js";
import HeadphonesProducts from "./data/HeadphonesProducts.js";
import KeyboardProducts from "./data/KeyboardProducts.js";
import LaptopProducts from "./data/LaptopProducts.js";
import MonitorProducts from "./data/MonitorProducts.js";
import MouseProducts from "./data/MouseProducts.js";
import TabletProducts from "./data/TabletProducts.js";

const app = express();

app.get("/diplom/api/cable_products", (req, res) => {
  res.json(CableProducts);
});

app.get("/dipom/api/computer_products", (req, res) => {
  res.json(ComputerProducts);
});

app.get("/diplom/api/headphones_products", (req, res) => {
  res.json(HeadphonesProducts);
});

app.get("/diplom/api/keyboard_products", (req, res) => {
  res.json(KeyboardProducts);
});

app.get("/diplom/api/laptop_products", (req, res) => {
  res.json(LaptopProducts);
});

app.get("/diplom/api/monitor_products", (req, res) => {
  res.json(MonitorProducts);
});

app.get("/diplom/api/mouse_products", (req, res) => {
  res.json(MouseProducts);
});

app.get("/diplom/api/tablet_products", (req, res) => {
  res.json(TabletProducts);
});

app.get("/", (req, res) => {
  res.send("API is Running....");
});

app.listen(5000, console.log("server running..."));
