import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("API HOME IS WORKING");
});
app.get("/contact", (req, res) => {
  res.send("API CONTACT IS WORKING");
});

app.get("/product", (req, res) => {
  res.send("API PRODUCT IS WORKING");
});

// const PORT = 5001;
// app.listen(PORT, () => {
//   console.log(`Server is running at PORT ${PORT}`);
// });
console.log("Server is running");

export default app;
