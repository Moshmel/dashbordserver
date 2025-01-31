const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // הוספת CORS

const app = express();
const PORT = process.env.PORT || 3000;

// משתנה לאחסון הנתונים שהתקבלו
let webhookData = 'הנתונים טרם התקבלו';

// אפשר לכל האתרים לשלוח בקשות (או לציין דומיין ספציפי)
app.use(cors());

// Middleware שיאפשר קריאת Body כטקסט רגיל (string)
app.use(bodyParser.text({ type: '*/*' }));

// Endpoint שמאזין לבקשת GET בנתיב הראשי (לצורך הצגת הנתונים)
app.get('/', (req, res) => {
    res.send(`<h1>השרת רץ בהצלחה!</h1><p>הנתונים שהתקבלו מהוובהוק:</p><pre>${webhookData}</pre>`);
});

// Endpoint שמאזין לנתונים לוובהוק
app.post('/webhook', (req, res) => {
    // עדכון המשתנה עם המידע שהתקבל מהוובהוק
    webhookData = req.body;

    // הדפסת המידע שהתקבל בקונסול של השרת
    console.log('📩 התקבל מידע מהוובהוק:', webhookData);

    // שליחה של תשובה ללקוח שהמידע התקבל בהצלחה
    res.send(`המידע שהתקבל: ${webhookData}`);
});

// הפעלת השרת
app.listen(PORT, () => {
    console.log(`🚀 השרת רץ על http://localhost:${PORT}`);
});
