const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');

app.use(cors({ origin: true }));

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

const publicDir = path.join(__dirname, '../../frontend/build');

if (fs.existsSync(publicDir)) {
  app.use('/', express.static(publicDir));

  app.get('*', function(request, response) {
    response.sendFile(path.resolve(publicDir, 'index.html'));
  });
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;
