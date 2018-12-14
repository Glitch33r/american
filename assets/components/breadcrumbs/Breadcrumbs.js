import React, { Component } from "react";
import {
    NavLink,
} from "react-router-dom";



class Breadcrumbs extends Component {

    constructor(props){
        super(props);
    }


    render() {
        return (


        <React.Fragment>

            {/*<Route  path="/app_dev.php" render={ () => <BreadHtml greeting={this.state.home} /> } />*/}
            {/*<Route  path="/about" render={ () => <BreadHtml greeting={this.state.about} /> } />*/}

            <div className={'header-image'} style={ {background: "url(/bundles/frontend/images/header-car2.jpg)"} } >
                <nav className="breadcrumbs">
                    <div className="breadcrumbs-wrap">
                        <ul className="breadcrumbs__list">
                            <li className="breadcrumbs__item"><NavLink className="breadcrumbs__link" exact to="/" >HOME</NavLink></li>
                            <li className="breadcrumbs__item"><a className="breadcrumbs__link" href="#">{ this.props.seo.h1 }</a></li>
                            { this.props.undercategory ?
                                <li className="breadcrumbs__item"><a className="breadcrumbs__link" href="#">{ this.props.undercategory }</a></li>
                                : '' }
                        </ul>
                        <h1 className="breadcrumbs__pagename">{ this.props.seo.h1 }</h1>
                    </div>
                </nav>
            </div>

        </React.Fragment>


        );
    }
}

export default Breadcrumbs;


// class BreadHtml extends Component {
//
//     constructor(props){
//         super(props);
//
//         this.state = {
//             data: []
//         }
//     }
//
//     componentDidMount() {
//         // delete this.state.data;
//         let url = 'http://american/app_dev.php/api/seo/' + this.props.greeting;
//         fetch(url)
//             .then(response => response.json())
//             .then(data =>this.setState({data: JSON.parse(data)}))
//     }
//
//
//     render() {
//
//
//         // console.log(this.state.data);
//         return (
//             <React.Fragment>
//
//             <nav className="breadcrumbs">
//                 <div className="breadcrumbs-wrap">
//                     <h2 className="breadcrumbs__pagename">{ this.state.data.h1 }</h2>
//                     <ul className="breadcrumbs__list">
//                         <li className="breadcrumbs__item"><a className="breadcrumbs__link" href="#">HOME</a></li>
//                         <li className="breadcrumbs__item"><a className="breadcrumbs__link" href="#">{ this.state.data.h1 }</a></li>
//                     </ul>
//                 </div>
//             </nav>
//             </React.Fragment>
//         );
//     }
// }
