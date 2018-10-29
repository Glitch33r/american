import React, { Component } from "react";
import Content from "../components/content/Content";

class BlackBlock extends Component {

    render() {
        return (
            <section className="block black-block ">
                <div className="block__wrap">
                    <div className="block__content">
                        <h2 className="block__title">CUSTOMER REEFER RELATIONS</h2>
                        <div className="block__number" data-num="1">
                            <div className={'block__number-wrap'}>
                                <h3 className="block__subtitle block__subtitle--marginb0"><a
                                    className="block__subtitle_link" href="#">Refrigerated trucking</a></h3>
                                <p className="block__desc block__desc--small-margin">When it comes to the world of refrigerated trucking, and transport, longshots are not worth the gamble. There is too much at stake, and not worth the risk. Precision is necessity. Science is golden!</p>
                            </div>
                        </div>
                        <div className="block__number" data-num="2">
                            <div className={'block__number-wrap'}>
                                <h3 className="block__subtitle block__subtitle--marginb0"><a
                                    className="block__subtitle_link" href="#">Grand USA Transport has mastered the art of the words ”Reefer Transport"</a></h3>
                                <p className="block__desc block__desc--small-margin">Cost matters, but it is not the only consideration. This is most definitely true regarding the need for refrigerated transport of perishable goods. Perhaps the need for reefer transport may indeed increase cost to our customer due to added energy consumptions but the tradeoff of cost-v-waste is well worth peace of mind.</p>
                            </div>
                        </div>
                        <div className="block__number" data-num="3">
                            <div className={'block__number-wrap'}>
                                <h3 className="block__subtitle block__subtitle--marginb0"><a
                                    className="block__subtitle_link" href="#">Our reputation, is a standard</a></h3>
                                <p className="block__desc block__desc--small-margin">Our reputation, is a standard that we as a company and as individual that stand behind our company will never compromise any less than the highest conceivable thus ensuring our customers with consistent confidence in our performance. </p>
                            </div>
                        </div>
                    </div>



                    <div className="block__right">
                        { this.props.listRight.map((item, index) =>
                            <React.Fragment key={index}>
                                { index != this.props.listRight.length - 1 ?
                                    <React.Fragment>
                                        <h2 className="block__title">{ item.listright_blc_title }</h2>
                                        <h3 className="block__subtitle block__subtitle--marginb0">{ item.listright_blc_sub_title }</h3>
                                        <p className="block__desc block__desc--small-margin">
                                            { item.listright_blc_description }
                                        </p>
                                    </React.Fragment>
                                    :
                                    <ul className="block__list">
                                        { this.props.listRight[this.props.listRight.length - 1].map((item, index) =>
                                        <li className="block__list-item" key={index}>
                                            <a className="block__list-link block__list-link--alter-hover" href="#">{ item.title }</a>
                                        </li>
                                        ) }
                                    </ul>
                                }
                            </React.Fragment>
                        ) }
                    </div>



                </div>
            </section>
        );
    }
}

export default BlackBlock;