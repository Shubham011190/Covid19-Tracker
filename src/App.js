import React from 'react'
import styles from './App.module.css'
import {fetchData} from './API'
//import Cards from './components/Cards/Cards'
//import Charts from './components/Charts/Charts'
//import CountryPicker from './components/CountryPicker/CountryPicker'

import { Cards, Charts, CountryPicker } from './components';    //See index.js in 'components' for more.

class App extends React.Component {

    state = {
        data: {},
        country:''
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
        console.log(fetchedData);
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });
        //console.log(country);
        console.log(fetchedData);
        
    }
    render() {
        const { data } = this.state;
         return (
        <div className={styles.container}>
            <Cards data={data}/>
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Charts />
        </div>
        
    )
    }
   
}

export default App;