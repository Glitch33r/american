import React, { Component } from "react";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";

import  axios  from 'axios'

import Seo from "../components/seo/Seo";

import { ClipLoader } from 'react-spinners';

class Article extends Component {

    constructor(props){
        super(props);

        this.state = {
            seo: [],
            article: [],
        }
    }

    componentDidMount() {
        let url = 'http://' + this.props.domain + '/api/v1/seo/corporate-philosophy';
        axios.get(url)
            .then(response => response.data)
            .then(data =>this.setState({seo: data}));

        // axios.get('/api/v1/page/corp-philosophy/white')
        //     .then(response => this.setState({whiteBlock: response.data}));
    }

    render() {
        let loading = false;
        if( this.state.seo.length != 0 )  {
            loading = true;
        }


        return (
            <React.Fragment>
                <div className={ loading ? "loading-success sweet-loading" : 'load sweet-loading' }>
                    <ClipLoader
                        sizeUnit={"px"}
                        size={150}
                        color={'#123abc'}
                        loading={this.state.loading}
                    />
                </div>
                <Seo seo={this.state.seo}/>
                { loading ?
                    <div>
                        <Breadcrumbs seo={ this.state.seo }/>
                        <section className="content-wrap">
                            <h3 className="team-block__left_subtitle">We Are Family</h3>
                            <div className="team-block__left_desc">
                                <p>
                                    We extend to our drivers both philosophically and pragmatically all that we hold true to ourselves as
                                    management. We offer an environment not only based on our own needs but more importantly their needs.
                                    Without them, there is no us.
                                </p>
                                <p>
                                    Our drivers are our foundation our rock, our boots on the ground, our infantry. They are the engine that
                                    facilitates the means to achieve all dreams, possibilities, growth and ultimately ourjointly held achieved
                                    realities.
                                </p>
                                <p>
                                    Our duty as managers is to provide an environment so that our drivers may continuously grow and thrive
                                    both as individuals and professional drivers. We wish to give our drivers an experience of the best of both
                                    worlds. We offer the intimacy and ambiance of a personalized small compa ny with an abundance of
                                    enhanced and conﬁnuous growth throughout their entire driving career with us.
                                </p>
                                <p>
                                    We never wish as a company to lose sense of self, nor desire to compromise our core values. We value
                                    relationship, and our relationships to our drivers was and shall remain priority one. Family is forever
                                    extended to our drivers each and every day.
                                </p>
                                <p>
                                    Our commitment to our drivers is abundant, real, and applied. They are human beings, not automitons, nor
                                    machines. They have names, ﬁrst and last we know them all. They have children and spouses.We know them
                                    too.They have wa nts, desires, dreams, hopes and aspirations. We offer to them an environment to help them
                                    achieve all that they can. We are accessible to their needs, they know who we are, they know what we look
                                    like, they know our voices. We are not comprised of 50 layers of bureaucracy set up to run interference so
                                    that our drivers feel lost, and not get answers to there questions and concerns. in fact, there is no
                                    bureaucracy, period!
                                </p>
                                <p>
                                    No matter how large of a company that we may become in the future, we will never lose sight of who and
                                    what we are as management and how we view our infantry, our drivers. Our stand, morals, ethics and
                                    principles will forever be part of the fabric of our relationship between ourselves as management and most
                                    importa ntly, the relationships with our drivers.
                                </p>
                                <p>
                                    We empower our drivers to become all that they can be, Rega rding growth, our ﬂexible corporate dyna mic
                                    allows them to always move their careers forward and not run into a brick wall. We ensure that they will not
                                    only be safe in our trucks, but we offer them surroundings which enable them the ability to earn abundant
                                    cash, and enjoy abundant opportunity during their tenure at Gra nd USA Transport.
                                </p>
                                <p>
                                    As a company, we are always there for our drivers. For good, bad, signiﬁca nt and conversely insigniﬁcant.
                                    Problems happen, personally and professionally. We do not have all the answers, but if we do not we try our
                                    best to ﬁgure out the answers to our drivers issues. they are always part of the conversation. The drivers
                                    come to us because we answer the phone, we make time available. Little things matter. We do not dick and
                                    run, but address their problems. if it’s important to our drivers, it’s importa nt to us. it must be this way,
                                    always. it’s the only way as a company that we know. No broken promises, no misinformation. We’re not
                                    perfect, but we strive to be. Our drivers are truly our most valued asset. We rely on them, they rely on us.
                                    Always give and take, always balance maintained, always a conversation that includes their thoughts, their
                                    feelings, their input and insight. Our drivers will always be and intimate part of Grand USA Transport. After
                                    ail, ”We are family".
                                </p>
                            </div>
                        </section>
                    </div>
                    : ""
                }

            </React.Fragment>
        );
    }
}

export default Article;