import Layout from '../components/Layout'

export default () => (
    <Layout>
        <section className="hero is-medium is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
               Justin Reasoner 
              </h1>
              <h2 className="subtitle">
               one web dev's journey 
              </h2>
            </div>
          </div>
        </section>
        <div className="container">
            <br/>
            <h1 className="title is-1">Most Recent Posts</h1>
            <div className="tile is-ancestor">
                <div className="tile is-vertical is-12">
                    <div className="tile">
                     <div className="tile is-parent is-vertical">
                      <article className="tile is-child notification is-warning">
                       <p className="title">Building a blog in react</p>
                       <p className="subtitle">Because you just felt like it</p>
                        <figure className="image is-4by3">
                          <img src="https://images.unsplash.com/photo-1417436183232-5748bd9f144e?dpr=2&auto=format&fit=crop&w=1500&h=981&q=80&cs=tinysrgb&crop=" />
                        </figure> 
                      </article>
                     <article className="tile is-child notification is-danger">
                       <p className="title">Forcing vim</p>
                       <p className="subtitle">Don't you want to be a cool kid?</p>
                      </article>
                    </div> 
                   <div className="tile is-parent">
                      <article className="tile is-child notification is-info">
                       <p className="title">Setting up ubuntu/nginx/web dev env</p>
                       <p className="subtitle">Do it old skool and bare metal</p>
                       <figure className="image is-4by3">
                        <img src="https://images.unsplash.com/photo-1451640174119-0d92078401a5?dpr=2&auto=format&fit=crop&w=200&h=150&q=80&cs=tinysrgb&crop="/>
                       </figure>
                      </article>
                   </div> 
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)
