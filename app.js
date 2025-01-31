const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // 📌 הוספת CORS

const app = express();
const PORT = process.env.PORT || 3000;

// 📌 אפשר לכל האתרים לשלוח בקשות (או לציין דומיין ספציפי)
app.use(cors());

// 📌 Middleware שיאפשר קריאת Body כטקסט
app.use(bodyParser.text({ type: '*/*' }));

// 📌 Endpoint שמאזין לנתונים
app.post('/webhook', (req, res) => {
    console.log('📩 התקבל מידע מהוובהוק:',req.body); // 📌 הדפסת הנתונים בקונסול של השרת
    res.send(req.body);
});

// 📌 הפעלת השרת
app.listen(PORT, () => {
    console.log(`🚀 השרת רץ על http://localhost:${PORT}`);
});