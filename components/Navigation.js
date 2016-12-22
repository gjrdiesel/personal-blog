import React from 'react'
import Link from 'next/link'

export default class extends React.Component {
    render () {
    return <div>
        <nav className="nav">
          <div className="nav-left">
            <a className="nav-item is-brand" href="/">
                JustinReasoner.com
            </a>
          </div>

           <span className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>

          <div className="nav-right nav-menu">
            <Link href="/">
                <a className={`nav-item ${ this.props.page == 'home' ? 'active' : ''}`} href="#">
                 Home
                </a>
            </Link>
            <Link href="/about">
                <a className="nav-item" href="#">
                 About
                </a>
            </Link>
            <Link href="/blog">
                <a className="nav-item" href="#">
                 Blog
                </a>
            </Link>
          </div>
        </nav>
    </div>
    }
}
