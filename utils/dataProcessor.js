// Data processing utilities for EV dashboard

export const getEVTypeDistribution = (data) => {
    const distribution = {};
    data.forEach(row => {
        const type = row['Electric Vehicle Type'];
        if (type) {
            distribution[type] = (distribution[type] || 0) + 1;
        }
    });
    return Object.entries(distribution).map(([name, value]) => ({ name, value }));
};

export const getTopMakes = (data, limit = 10) => {
    const makes = {};
    data.forEach(row => {
        const make = row.Make;
        if (make) {
            makes[make] = (makes[make] || 0) + 1;
        }
    });
    return Object.entries(makes)
        .sort((a, b) => b[1] - a[1])
        .slice(0, limit)
        .map(([name, value]) => ({ name, value }));
};

export const getTopModels = (data, limit = 10) => {
    const models = {};
    data.forEach(row => {
        const model = row.Model;
        if (model) {
            models[model] = (models[model] || 0) + 1;
        }
    });
    return Object.entries(models)
        .sort((a, b) => b[1] - a[1])
        .slice(0, limit)
        .map(([name, value]) => ({ name, value }));
};

export const getYearlyTrend = (data) => {
    const yearly = {};
    data.forEach(row => {
        const year = row['Model Year'];
        if (year && year >= 2010 && year <= 2024) {
            yearly[year] = (yearly[year] || 0) + 1;
        }
    });
    return Object.entries(yearly)
        .sort((a, b) => Number(a[0]) - Number(b[0]))
        .map(([year, count]) => ({ year: Number(year), count }));
};

export const getCountyDistribution = (data, limit = 10) => {
    const counties = {};
    data.forEach(row => {
        const county = row.County;
        if (county) {
            counties[county] = (counties[county] || 0) + 1;
        }
    });
    return Object.entries(counties)
        .sort((a, b) => b[1] - a[1])
        .slice(0, limit)
        .map(([name, value]) => ({ name, value }));
};

export const getCityDistribution = (data, limit = 10) => {
    const cities = {};
    data.forEach(row => {
        const city = row.City;
        if (city) {
            cities[city] = (cities[city] || 0) + 1;
        }
    });
    return Object.entries(cities)
        .sort((a, b) => b[1] - a[1])
        .slice(0, limit)
        .map(([name, value]) => ({ name, value }));
};

export const getRangeDistribution = (data) => {
    const ranges = {
        '0-50': 0,
        '51-100': 0,
        '101-150': 0,
        '151-200': 0,
        '201-250': 0,
        '251-300': 0,
        '300+': 0
    };

    data.forEach(row => {
        const range = row['Electric Range'];
        if (range !== null && range !== undefined) {
            if (range <= 50) ranges['0-50']++;
            else if (range <= 100) ranges['51-100']++;
            else if (range <= 150) ranges['101-150']++;
            else if (range <= 200) ranges['151-200']++;
            else if (range <= 250) ranges['201-250']++;
            else if (range <= 300) ranges['251-300']++;
            else ranges['300+']++;
        }
    });

    return Object.entries(ranges).map(([name, value]) => ({ name, value }));
};

export const getCAFVDistribution = (data) => {
    const cafv = {};
    data.forEach(row => {
        const eligibility = row['Clean Alternative Fuel Vehicle (CAFV) Eligibility'];
        if (eligibility) {
            cafv[eligibility] = (cafv[eligibility] || 0) + 1;
        }
    });
    return Object.entries(cafv).map(([name, value]) => ({ name, value }));
};

export const calculateMetrics = (data) => {
    const totalEVs = data.length;

    const bevCount = data.filter(row =>
        row['Electric Vehicle Type'] === 'Battery Electric Vehicle (BEV)'
    ).length;
    const bevPercentage = ((bevCount / totalEVs) * 100).toFixed(1);

    const ranges = data
        .map(row => row['Electric Range'])
        .filter(range => range && range > 0);
    const avgRange = ranges.length > 0
        ? Math.round(ranges.reduce((sum, r) => sum + r, 0) / ranges.length)
        : 0;

    const makes = {};
    data.forEach(row => {
        const make = row.Make;
        if (make) {
            makes[make] = (makes[make] || 0) + 1;
        }
    });
    const topMake = Object.entries(makes).sort((a, b) => b[1] - a[1])[0];

    return {
        totalEVs,
        bevPercentage,
        avgRange,
        topMake: topMake ? { name: topMake[0], count: topMake[1] } : { name: 'N/A', count: 0 }
    };
};

export const getYearlyTrendByType = (data) => {
    const yearly = {};
    data.forEach(row => {
        const year = row['Model Year'];
        const type = row['Electric Vehicle Type'];
        if (year && year >= 2010 && year <= 2024 && type) {
            if (!yearly[year]) {
                yearly[year] = { year: Number(year), BEV: 0, PHEV: 0 };
            }
            if (type.includes('BEV')) {
                yearly[year].BEV++;
            } else if (type.includes('PHEV')) {
                yearly[year].PHEV++;
            }
        }
    });
    return Object.values(yearly).sort((a, b) => a.year - b.year);
};
