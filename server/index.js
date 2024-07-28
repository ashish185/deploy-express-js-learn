const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

// const corsOptions = {
//   origin: function(origin, callback) {
//     if (allowedOrigin.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('CORS error'));
//     }
//   }
// }

app.use(cors());
const dir = __dirname.split('server').join('');
app.get('/', (req, res)=> {
  app.use(express.static(path.resolve(dir, 'frontend', 'build')))
  res.sendFile(path.resolve(dir, 'frontend', 'build', 'index.html'))
})

app.get('/list', (req, res) => {
  res.send([{
    id: 1,
    title: 'Namaste Frontend System Design'
  }])
})

const port = 1000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});