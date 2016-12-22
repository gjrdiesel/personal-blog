import React from 'react'
import Head from 'next/head'
import Navigation from './Navigation'

export default class extends React.Component {

    constructor(props) {
     super(props);
     this.state = {date: new Date()};
    }

    componentDidMount() {
      this.timerID = setInterval(() => this.tick(),1000);
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    tick() {
        this.setState({ date: new Date() }); 
    }

   render () {

       return <div>
            <Head>
                <title>Justin Reasoner</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.2.3/css/bulma.css" />
            </Head>
            <Navigation page="home"></Navigation>
            <div>
            {this.props.children}
            </div>
            <section style={{'marginTop': '150px'}} className="hero is-dark">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title">
                   Connect with me 
                  </h1>
                  <h2 className="subtitle">
                   <a href="">github</a> | <a href="">twitter</a> | <a href="">email</a>
                  </h2>
                </div>
              </div>
            </section>
            <footer style={{'marginTop': '50px'}} className="footer">
              <div className="container">
                <div className="content has-text-centered">
                  <div>
                    <kbd>// <span style={{ color: 'orange' }}>TODO</span>: Legal things/nifty footer for justinreasoner.com</kbd>
            
                    <br/><br/>
                    <p>Legal stuff goes here &copy; { this.state.date.toUTCString() }</p>
                  </div>
                  <p>
                    <a className="icon" href="https://github.com/jgthms/bulma">
                      <i className="fa fa-github"></i>
                    </a>
                  </p>
                </div>
              </div>
            </footer>
        </div>
    }
}
