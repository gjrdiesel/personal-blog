import _ from 'lodash'
import React from 'react'
import 'isomorphic-fetch'
import Layout from '../components/Layout'
import BlogEntry from '../components/BlogEntry'
import BlogIndex from '../components/BlogIndex'
import Slugify from '../components/Slugify'

export default class extends React.Component {

    static async getInitialProps({ query }){

        let slug = _.keys(query)[0]
            , view = slug ? 'entry' : 'index';
        
        const url = 'https://api.github.com/search/issues';

        if( slug ) {
            const res = await fetch(url+'?q=repo:gjrdiesel/personal-blog+in:title+'+Slugify(slug));
            let post = await res.json();
            return { post }; 
        }


        // index view ( grab all the posts )
        const res = await fetch(url+'?q=repo:gjrdiesel/personal-blog');
        const issues = await res.json();
        return { issues };

     }

    render() { 
        let content = null;

        if( this.props.issues ){
            content = <BlogIndex issues={ this.props.issues.items }/>;
        } else {
            content = <BlogEntry post={ this.props.post.items[0] }/>
        }

     return <Layout>
            { content }
        </Layout>
    }
}
