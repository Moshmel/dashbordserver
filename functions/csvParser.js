function parseCSV(csvString) {
    // מפצלים את המחרוזת לשורות (כל שורה ב-CSV)
    const rows = csvString.split('\n');
    
    // מפצלים כל שורה לערכים (ע"י split() עם פסיק כמאפיין בין הערכים)
    const parsedData = rows.map(row => {
      // חותכים את הערכים בתוך השורה
      const values = row.split(',');
  
      // עבור כל ערך בשורה, אם הוא ריק, ממלאים אותו באובייקט ריק (או null, אם תרצה)
      return values.map(value => value.trim() === '' ? {} : value);
    });
  
    return parsedData;
  }

  function extractGeneralData(data) {
    // 1. קבלת ימי עסקים שנותרו
    const businessDaysLeft = data[0][data[0].length - 1] ? String(data[0][data[0].length - 1]).trim() : '0';

    // 2. אסוף את הנתונים הכלליים לשורות
    const monthlyTargetPlatinum = data[data.length - 5] && data[data.length - 5][1] ? String(data[data.length - 5][1]).trim() : '0';
    const monthlySalesPlatinum = data[data.length - 5] && data[data.length - 5][3] ? String(data[data.length - 5][3]).trim() : '0';
    const dailyTargetPlatinum = data[data.length - 4] && data[data.length - 4][1] ? String(data[data.length - 4][1]).trim() : '0';
    const dailySalesPlatinum = data[data.length - 4] && data[data.length - 4][3] ? String(data[data.length - 4][3]).trim() : '0';

    const monthlyTargetMediho = data[data.length - 3] && data[data.length - 3][1] ? String(data[data.length - 3][1]).trim() : '0';
    const monthlySalesMediho = data[data.length - 3] && data[data.length - 3][3] ? String(data[data.length - 3][3]).trim() : '0';
    const dailyTargetMediho = data[data.length - 2] && data[data.length - 2][1] ? String(data[data.length - 2][1]).trim() : '0';
    const dailySalesMediho = data[data.length - 2] && data[data.length - 2][3] ? String(data[data.length - 2][3]).trim() : '0';

    const newsUpdates = data[data.length - 1] && data[data.length - 1][1] ? String(data[data.length - 1][1]).trim() : '';

    // החזרת אובייקט עם הנתונים הכלליים
    return {
        businessDaysLeft,
        monthlyTargetPlatinum,
        monthlySalesPlatinum,
        dailyTargetPlatinum,
        dailySalesPlatinum,
        monthlyTargetMediho,
        monthlySalesMediho,
        dailyTargetMediho,
        dailySalesMediho,
        newsUpdates
    };
}


  export default {
    parseCSV,extractGeneralData
  };