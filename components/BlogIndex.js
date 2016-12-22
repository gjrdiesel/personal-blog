import React from 'react'
import Link from 'next/link'
import Slugify from '../components/Slugify'

export default class extends React.Component {

   static async getInitialProps(){
      return { issues: [] }
   } 

    render() {

        return <div className='container'>
            {

            this.props.issues.map(function(issue){
            
              return <div className="card is-fullwidth" style={{ marginTop: '40px' }}>
              <header className="card-header">
                <p className="card-header-title">
                    { issue.title }
                </p>
                <a className="card-header-icon">
                  <i className="fa fa-angle-down"></i>
                </a>
              </header>
              <div className="card-content">
                <div className="content">
                    { issue.body } 
                 <br/>
                  <small>date</small>
                </div>
              </div>
              <footer className="card-footer">
                <Link href="/blog?test-post">
                    <a className="card-footer-item">Comment</a>
                </Link>
                <Link href="/blog?test-post">
                    <a className="card-footer-item is-primary">Read More</a>
                </Link>
              </footer>
            </div>


            })
            } 
            </div>
    }
}
