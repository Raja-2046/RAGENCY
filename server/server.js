require('dotenv').config();
const app = require("./index");

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
