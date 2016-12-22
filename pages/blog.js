import Layout from '../components/layout'

export default () => (
    <Layout>
        <div className="container">
            <div className="card is-fullwidth" style={{ marginTop: '100px' }}>
             <header className="card-header">
               <p className="card-header-title">
                 Component
           </p>
               <a className="card-header-icon">
                 <i className="fa fa-angle-down"></i>
               </a>
             </header>
             <div className="card-content">
               <div className="content">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a href="#">#css</a> <a href="#">#responsive</a>
                 <br/>
                 <small>11:09 PM - 1 Jan 2016</small>
               </div>
             </div>
             <footer className="card-footer">
               <a className="card-footer-item">Read more</a>
             </footer>
           </div> 
            <div className="card is-fullwidth" style={{ marginTop: '100px' }}>
             <header className="card-header">
               <p className="card-header-title">
                 Component
           </p>
               <a className="card-header-icon">
                 <i className="fa fa-angle-down"></i>
               </a>
             </header>
             <div className="card-content">
               <div className="content">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a href="#">#css</a> <a href="#">#responsive</a>
                 <br/>
                 <small>11:09 PM - 1 Jan 2016</small>
               </div>
             </div>
             <footer className="card-footer">
               <a className="card-footer-item">Read more</a>
             </footer>
           </div> 
            </div>
    </Layout>
)
