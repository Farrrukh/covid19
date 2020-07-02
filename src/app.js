import React from 'react'
// import Cards from './Components/Cards'
// import Chart from './Components/Chart'
// import CountryPicker from './Components/CountryPicker'

import {Cards,Chart,CountryPicker} from './Components'
import style from './app.module.css'
import {fetchData,fetchDailyData} from './api/index'

class App extends React.Component {
  state={
         data:{},
  }
  async componentDidMount(){
    const fetchedData=await fetchData();
    this.setState({data:fetchedData})
    const fetchdaily=fetchDailyData();
    console.log(fetchdaily)
  }
    render() {
      const {data}=this.state
        return (
            <div className={style.container}>
              <Cards data={data}/>
              <CountryPicker/>
              <Chart/>
            </div>
          )

    }
  }


export default App;


