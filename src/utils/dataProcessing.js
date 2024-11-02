import { parseISO, format, startOfWeek, startOfMonth, startOfYear } from 'date-fns';

export function processStarData(data, grouping, type, period) {
    const now = new Date();
    let filteredData = data;

    if (period === 'last30days') {
        filteredData = data.filter(entry => {
            const entryDate = parseISO(entry.starred_at);
            return entryDate >= new Date(new Date().setDate(now.getDate() - 30));
        });
    } else if (period === 'last6months') {
        filteredData = data.filter(entry => {
            const entryDate = parseISO(entry.starred_at);
            return entryDate >= new Date(new Date().setMonth(now.getMonth() - 6));
        });
    } else if (period === 'lastYear') {
        filteredData = data.filter(entry => {
            const entryDate = parseISO(entry.starred_at);
            return entryDate >= new Date(new Date().setFullYear(now.getFullYear() - 1));
        });
    }

    filteredData.sort((a, b) => parseISO(a.starred_at) - parseISO(b.starred_at));


    const groupedData = {};

    filteredData.forEach(entry => {
        const date = parseISO(entry.starred_at);
        let key;

        switch (grouping) {
            case 'day':
                key = format(date, 'yyyy-MM-dd');
                break;
            case 'week':
                key = format(startOfWeek(date), 'yyyy-MM-dd');
                break;
            case 'month':
                key = format(startOfMonth(date), 'yyyy-MM');
                break;
            case 'year':
                key = format(startOfYear(date), 'yyyy');
                break;
            default:
                key = format(date, 'yyyy-MM-dd');
        }

        groupedData[key] = (groupedData[key] || 0) + 1;
    });

    if (type === 'cumulative') {
        let cumulativeSum = 0;
        for (const key of Object.keys(groupedData).sort()) {
            cumulativeSum += groupedData[key];
            groupedData[key] = cumulativeSum;
        }
    }

    return groupedData;
}
