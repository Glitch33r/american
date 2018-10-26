import React, { Component } from "react";

import { Route } from 'react-router-dom';

class AnimationFunc extends Component {

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
            </React.Fragment>
        )
    }
}

export default AnimationFunc;