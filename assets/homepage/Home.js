import React, { Component } from "react";
import HomeSlider from "../components/slider/HomeSlider";

class Home extends Component {



    render() {
        // let items = JSON.stringify(this.state.data);
        // console.log(this.state.data);
        // this.state.responseData
        return (
            <React.Fragment>
                {/*{*/}
                    {/*items.map((key) =>{*/}
                        {/*console.log(key);*/}
                    {/*})*/}
                {/*}*/}
                <HomeSlider />
            </React.Fragment>
        );
    }
}

export default Home;