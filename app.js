const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // הוספת CORS
const { parseCSV,extractGeneralData } = require('./functions/csvParser').default; // מייבאים את הפונקציה מקובץ functions/csvParser.js

const app = express();
const PORT = process.env.PORT || 3000;

// משתנה לאחסון הנתונים שהתקבלו

app.use(cors());
app.use(bodyParser.text({ type: '*/*' }));

let webhookData = '[]';
let salesData=[];
let generalData=[];

// Endpoint שמאזין לבקשת GET בנתיב הראשי (לצורך הצגת הנתונים)
app.get('/', (req, res) => {
    res.send(`<pre>${JSON.stringify(generalData, null, 2)}</pre>`);
});

// Endpoint שמאזין לנתונים לוובהוק
app.post('/webhook', (req, res) => {
    // עדכון המשתנה עם המידע שהתקבל מהוובהוק
    webhookData = parseCSV(req.body);
    generalData=extractGeneralData(webhookData);
    // הדפסת המידע שהתקבל בקונסול של השרת
    console.log('📩 התקבל מידע מהוובהוק:', webhookData);

    // שליחה של תשובה ללקוח שהמידע התקבל בהצלחה
    res.send(`המידע שהתקבל: ${webhookData}`);
});

// הפעלת השרת
app.listen(PORT, () => {
    console.log(`🚀 השרת רץ על http://localhost:${PORT}`);
});
