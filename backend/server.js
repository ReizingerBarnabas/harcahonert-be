const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

//send the following question
app.get('/api/question', (req, res) => {
  res.json([
    { id: 1, q: 'Mikor született II.András?', a1: '1232', a2: '1177', a3: '1209' },
    { id: 2, q: 'Melyik évszázadban élt IV.Béla?', a1: '11', a2: '12', a3: '13' },
    { id: 3, q: 'Mikor írták alá az Aranybullát?', a1: '1222', a2: '1165', a3: '1308' }
  ]);
});

//get the answer
app.post('/api/answer', (req, res) => {
  const data = req.body;
  console.log('Kapott adat:', data);
  // reply to the frontend
  if (data.answer === 2) {
    res.json({
    received: true,
    message: `Your answer was correct:`
  });
  } else {
    res.json({
      reveived: true,
      message: 'Your answer was wrong'
    })
  }
});

app.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`));
