import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import PostModel from "../model/postModel";
import PostItem from "../components/organisms/postItem";

const Post = ({ data }) => {
  const {
    allMarkdownRemark: { edges },
  } = data;

  const posts: Array<any> = edges.map(({ node }) => {
    return new PostModel(node);
  });

  return (
    <Layout>
      <SEO title="post" />
      {posts.map((post) => {
        return <PostItem post={post} />;
      })}
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            path
            title
            subtitle
            thumbnail
          }
        }
      }
    }
  }
`;

export default Post;
