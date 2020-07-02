import axios from 'axios'

const url='https://covid19.mathdro.id/api'

export const fetchData=async()=>{
    try{
         const {data:{confirmed,recovered,deaths,lastUpdate}}=await axios.get(url)
        //  const modifiedData={

        //     confirmed,recoverd,deaths,lastUpdate
            //  confirmed:confirmed,
            //  recoverd:recoverd,
            //  deaths:deaths,
            //  lastUpdate:lastUpdate
         //}
         return {confirmed,recovered,deaths,lastUpdate};
    }catch(error){

    }
}

export const fetchDailyData=async()=>{
    try {
        const api=await axios.get(`${url}/daily`)
        console.log(api)
    } catch (error) {
        
    }
}