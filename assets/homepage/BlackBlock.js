import React, { Component } from "react";

class BlackBlock extends Component {

    constructor(props) {
        super(props);

        this.state = {
            listName: ""
        }

    }

    componentDidMount() {


        var animateBlock = document.getElementsByClassName('aos-init');
        var animateBlocks = [];
        var animateItem = 0;

        // console.log(animateBlock[0]);
        setTimeout(function () {
            for (let i=0; i<animateBlock.length; i++){

                var block = {
                    height: offset(animateBlock[i]),
                    obj: animateBlock[i],
                    flag: false
                };
                animateBlocks.push(block);
            }

            console.log(animateBlocks);
        }, 500);


        function offset(el) {
            var rect = el.getBoundingClientRect(),
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return rect.top + scrollTop;
        }

        // animateBlock.forEach(function(item){


        //

        // });

        window.addEventListener('scroll', (event) => {

            var scroll = document.documentElement.scrollTop;
            var heightMonitor = window.innerHeight;



            if(animateBlocks[animateItem] && scroll > animateBlocks[animateItem].height - ( heightMonitor / 1.2 ) ){
                var block = animateBlocks[animateItem].obj;
                block.classList.add('aos-animate');

                if(animateItem < animateBlocks.length) animateItem++;
            }



        });


    }

    render() {
        return (
            <React.Fragment>
                <section className="block black-block">

                    {
                        this.props.blackBlock.map((item, index) =>
                            <div className="block__wrap" key = {index}>
                                <div className="block__content">
                                    <h2 className="block__title aos-init" id={'aos-init'} data-aos="fade-up" data-aos-anchor-placement="top-bottom">{ item.second_blc_title }</h2>
                                    <h3 className="block__subtitle aos-init">{ item.second_blc_sub_title }</h3>
                                    <p className="block__desc block__desc--small-margin">{ item.second_blc_description }</p>
                                    <a className="block__button block__button--red" href="#">READ MORE</a>
                                </div>
                                <div className="block__right">

                                    <h2 className="block__title block__title--with80">{
                                        this.props.blackBlockList.map((item, index) =>
                                            <span key={index}>
                                                { index == 0 ? item.listName : '' }
                                            </span>
                                        )
                                    }
                                    </h2>
                                    <ul className="block__list" key={index}>
                                    {
                                        this.props.blackBlockList.map((item, index) =>
                                            <li className="block__list-item" key={index}><a className="block__list-link" href="#">{ item.title }</a></li>
                                        )
                                    }
                                    </ul>
                                </div>
                            </div>
                        )
                    }


                </section>
            </React.Fragment>
        );
    }
}

export default BlackBlock;