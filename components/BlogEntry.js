import React from 'react'

export default class extends React.Component { 

    getInitialProps(){
        return { post: { user: {} } };
    }
        
    render(){
        return <div>
               <section className="section">
                <div className="container">
                  <div className="heading" style={{ textTransform: 'inherit' }}>
                    <h1 className="title">{ this.props.post.title }</h1>
                    <h2 className="subtitle">
                      <article className="media">
                        <figure className="image media-left is-24x24">
                          <img src={ this.props.post.user.avatar_url }/>
                        </figure>
                        <div className="media-content">
                         { this.props.post.user.login } { this.props.post.created_at }
                        </div>
                      </article>
                    </h2>
                  </div>
                </div>
              </section>
                <div className="container markdown content" style={{ marginTop: '60px' }}
                    dangerouslySetInnerHTML={{ __html: this.props.post.body }}>
                </div>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/showdown/1.5.4/showdown.min.js"></script>
            </div>
    }
}
