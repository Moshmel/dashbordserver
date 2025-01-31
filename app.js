const express = require('express');
const app = express();

// בחר פורט שבו השרת יאזין
const PORT = 3000;

// נתיב בסיסי שמחזיר טקסט לדפדפן
app.get('/', (req, res) => {
    res.send('השרת רץ בהצלחה!');
});

// הפעלת השרת
app.listen(PORT, () => {
    console.log(`השרת רץ על http://localhost:${PORT}`);
});
