const express = require("express");
const cors = require("cors");
const userRoutes = require("./project/userRoute");
const entityRoutes = require("./project/EntityRoute");
const arouter = require("./project/authroute");



const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", entityRoutes);
app.use("/api",arouter)


const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
