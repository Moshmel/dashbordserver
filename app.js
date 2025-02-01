const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // הוספת CORS
const { extractGeneralData } = require('./functions/csvParser').default; // מייבאים את הפונקציה מקובץ functions/csvParser.js

const app = express();
const PORT = process.env.PORT || 3000;

// משתנה לאחסון הנתונים שהתקבלו
let salesData = [];
let generalData = [];

app.use(cors());
app.use(bodyParser.json());  // שים לב שפה אנחנו בוחרים ב-json

// Endpoint שמאזין לבקשת GET בנתיב הראשי (לצורך הצגת הנתונים)
app.get('/', (req, res) => {
  res.send(`
    <h1>הנתונים שהתקבלו:</h1>
  `);
});

// Endpoint לשליפת הנתונים
app.get('/general-data', (req, res) => {
  // מחזיר את הנתונים שנשמרו
  res.status(200).json(generalData);
});

// Endpoint לשליפת הנתונים
app.get('/sales-data', (req, res) => {
  // מחזיר את הנתונים שנשמרו
  res.status(200).json(salesData);
});

// Endpoint שמאזין לנתונים לוובהוק
app.post('/webhook-sales-data', (req, res) => {
  // עדכון המשתנה עם המידע שהתקבל מהוובהוק
  const webhookSalesData = req.body;
  salesData = webhookSalesData;

  // הדפסת המידע שהתקבל בקונסול של השרת
  console.log(' התקבל מידע מהוובהוק:', webhookSalesData);

  // שליחה של תשובה ללקוח שהמידע התקבל בהצלחה
  res.status(201).json({ message: 'Sales data received successfully!', data: webhookSalesData });
});

// Webhook לקבלת הנתונים
app.post('/webhook-general', (req, res) => {
  // קבל את הנתונים מהבקשה
  const receivedGeneralData = req.body;

  // שמור את הנתונים (במקרה הזה נשמר ב-memory)
  generalData = receivedGeneralData;

  // שלח תשובה שהנתונים התקבלו בהצלחה
  res.status(201).json({ message: 'General data received successfully!', data: receivedGeneralData });
});

// הפעלת השרת
app.listen(PORT, () => {
  console.log(`🚀 השרת רץ על http://localhost:${PORT}`);
});
