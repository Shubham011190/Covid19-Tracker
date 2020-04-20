import axios from 'axios';
const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);
        
        return { confirmed, recovered, deaths, lastUpdate };    //We can directly use this instead of definition below.
        // const modifiedData = {
        //    confirmed,
        //    recovered,
        //    deaths,             //Since the value and data have same identifiers, we don't need to write as deaths:deaths
        //    lastUpdate,
        //}
        //return modifiedData;       
        
        //console.log(response);
    } catch (error) {
        
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(url + "/daily");
        //console.log(data);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))
        return modifiedData;
    } catch (error) {
        
    }
}