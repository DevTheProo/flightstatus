const express = require('express');
const app = express();

app.use(express.json());

app.post('/webhook', (req, res) => {
  const parameters = req.body.queryResult.parameters;
  const flight = parameters['flight-number'];
  const rawDate = parameters['travel_date'];
  const date = rawDate ? rawDate.split('T')[0] : 'unknown date';

  const responseText = `Flight ${flight} on ${date} is currently on time and departs at 10:30 AM.`;

  res.json({
    fulfillmentText: responseText
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Webhook is running on port " + PORT));
