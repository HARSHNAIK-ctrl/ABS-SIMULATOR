const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve everything inside the "public" folder as static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`ABS simulator running — open http://localhost:${PORT} in your browser`);
});