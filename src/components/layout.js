import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import parse from "html-react-parser";
import styled from 'styled-components';

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
    allWpMenu: {
      nodes: {
        0: {
          // why 0 here?
          menuItems: { nodes },
        },
      },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
      allWpMenu {
        nodes {
          menuItems {
            nodes {
              label
              url
            }
          }
        }
      }
    }
  `);

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <header className="global-header">
        {isHomePage ? (
          <h1 className="main-heading">
            <Link to="/">{parse(title)}</Link>
          </h1>
        ) : (
          <Link className="header-link-home" to="/">
            {title}
          </Link>
        )}
      </header>
      <MainNav>
        {nodes.map((item, index) => {
          const { label, url } = item;

          return <Link to={url}>{label}</Link>;
        })}
      </MainNav>

      <main>{children}</main>

      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}
        And <a href="https://wordpress.org/">WordPress</a>
      </footer>
    </div>
  );
};

const MainNav = styled.ul`
  list-style-type: none;
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex !important;
    flex-direction: row;
    justify-content: space-evenly;
  }
`

export default Layout;
