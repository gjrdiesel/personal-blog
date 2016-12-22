import _ from 'lodash'
import React from 'react'
import 'isomorphic-fetch'
import Layout from '../components/Layout'
import BlogEntry from '../components/BlogEntry'

function slugify(text)
{
      return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}

export default class extends React.Component {

    static async getInitialProps({ query }){

        let slug = _.keys(query)[0]
            , view = slug ? 'entry' : 'index';
        
        const url = 'https://api.github.com/search/issues';

        if( slug ) {
            const res = await fetch(url+'?q=repo:gjrdiesel/personal-blog+in:title+'+slugify(slug));
            let post = await res.json();
            post = post[0]; 
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
            content = <div>Index</div>;
        } else {
            <BlogEntry post={ this.props.post }/>
        }

     return <Layout>
            { content }
        </Layout>
    }
}
