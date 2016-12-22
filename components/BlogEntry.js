import React from 'react'
import 'isomorphic-fetch'

export default class extends React.Component { 
    constructor(props){
        super(props);
        this.state = { issue: { user: {} }, html: '' };
    }

    async componentDidMount(){
        const res = await fetch('https://api.github.com/repos/gjrdiesel/personal-blog/issues/1');
        const issue = await res.json();

        this.setState({ issue });

        const converter = new showdown.Converter();
        const html = converter.makeHtml(issue.body);

        this.setState({ html });
    }

    getMarkdown(){
        return {__html: this.state.html};
    }
        
    render(){
     
        return <div>
               <section className="section">
                <div className="container">
                  <div className="heading" style={{ textTransform: 'inherit' }}>
                    <h1 className="title">{ this.state.issue.title }</h1>
                    <h2 className="subtitle">
                      <article className="media">
                        <figure className="image media-left is-24x24">
                          <img src={ this.state.issue.user.avatar_url }/>
                        </figure>
                        <div className="media-content">
                         { this.state.issue.user.login } { this.state.issue.created_at }
                        </div>
                      </article>
                    </h2>
                  </div>
                </div>
              </section>
                <div className="container markdown content" style={{ marginTop: '60px' }}
                    dangerouslySetInnerHTML={{__html: this.state.html}}>
                </div>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/showdown/1.5.4/showdown.min.js"></script>
            </div>
    }
}
