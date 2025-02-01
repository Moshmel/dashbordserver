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
  module.exports = {
    parseCSV
  };