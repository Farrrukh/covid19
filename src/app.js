import React from 'react'
// import Cards from './Components/Cards'
// import Chart from './Components/Chart'
// import CountryPicker from './Components/CountryPicker'
import Header from  './Components/Header'
import {Cards,Chart,CountryPicker} from './Components'
import style from './app.module.css'
import {fetchData,fetchDailyData} from './api/index'

class App extends React.Component {
  state={
         data:{},
         country:''
  }
  async componentDidMount(){
    const fetchedData=await fetchData();
    this.setState({data:fetchedData})
    const fetchdaily=fetchDailyData();
    console.log(fetchdaily)
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

    render() {
      const {data,country}=this.state
        return (
          <div>
          <Header/>
            <div className={style.container}>
              <Cards data={data}/>
              <br></br>
              <CountryPicker handleCountryChange={this.handleCountryChange}/>
              <br></br>
              <Chart data={data} country={country}/>
            </div>
            </div>
          )

    }
  }


export default App;


