import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

// The template component queries each page by ID,
// which is passed from context field in createPage
// in gatsby-node.js
const DefaultPageTemplate = ({ data: { wpPage } }) => {
    const {title, content} = wpPage;

    return (
        <Layout>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </Layout>
    );
};

export const query = graphql`
    query($id: String!) {
        wpPage(id: {eq: $id}) {
            title
            content
        }
    }
`;

export default DefaultPageTemplate;