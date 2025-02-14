function extractGeneralData(data) {
    // 1. קבלת ימי עסקים שנותרו
    const businessDaysLeft = String(data[0][data[0].length - 1]).trim() || '0';

    // 2. אסוף את הנתונים הכלליים לשורות
    const monthlyTargetPlatinum = String(data[data.length - 5][1]).trim() || '0';
    const monthlySalesPlatinum = String(data[data.length - 5][3]).trim() || '0';
    const dailyTargetPlatinum = String(data[data.length - 4][1]).trim() || '0';
    const dailySalesPlatinum = String(data[data.length - 4][3]).trim() || '0';

    const monthlyTargetMediho = String(data[data.length - 3][1]).trim() || '0';
    const monthlySalesMediho = String(data[data.length - 3][3]).trim() || '0';
    const dailyTargetMediho = String(data[data.length - 2][1]).trim() || '0';
    const dailySalesMediho = String(data[data.length - 2][3]).trim() || '0';

    const newsUpdates = String(data[data.length - 1][1]).trim() || '';

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
    extractGeneralData
  };