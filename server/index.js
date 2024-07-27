const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

  var allowedOrigin = ['http://127.0.0.1:5500'];
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

app.get('/', (req, res)=> {
  app.use(express.static(path.resolve(__dirname, 'frontend', 'build')))
  res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
})

app.get('/list', (req, res) => {
  res.send([{
    id: 1,
    title: 'Namaste Frontend System Design'
  }])
})

const port = process.env.PORT || 1000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});