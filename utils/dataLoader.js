import Papa from 'papaparse';

export const loadEVData = async () => {
    try {
        const response = await fetch('/Electric_Vehicle_Population_Data.csv');
        const csvText = await response.text();

        return new Promise((resolve, reject) => {
            Papa.parse(csvText, {
                header: true,
                dynamicTyping: true,
                skipEmptyLines: true,
                complete: (results) => {
                    resolve(results.data);
                },
                error: (error) => {
                    reject(error);
                }
            });
        });
    } catch (error) {
        console.error('Error loading CSV data:', error);
        throw error;
    }
};
