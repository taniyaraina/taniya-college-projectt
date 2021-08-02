/* eslint-disable react/button-has-type */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

// import Social from './Social';

const Navbar = styled.div`
  .nav {
    display: flex;
    flex: 3;
  }
  .nav-items-colors {
    font-size: 1rem;
    line-height: 1.6875;
    font-weight: 500;
  }
  img {
    object-fit: contain;
    height: 60px;
    width: 160px;
  }
  /* .nav-items-colors :hover {
    border: solid #3368c6;
    border-width: 0 0 4px 0;
    transition: all 0.2s;
  } */
`;
const NavItems = [
  { id: 1, name: 'Home', url: '/' },
  { id: 2, name: 'Pages', url: '/pages' },
  { id: 3, name: 'Research', url: '/research' },
  { id: 4, name: 'Services', url: '/services' },
  { id: 5, name: 'blog', url: '/news' },
  { id: 6, name: 'Contacts', url: '/contact' },
];
export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  handleMobileMenu() {
    const { isActive } = this.state;
    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { isActive } = this.state;
    return (
      <Navbar className="flex items-center justify-between flex-wrap py-4 px-16 min-w-full bg-white">
        <div className="flex items-center flex-shrink-0 mr-32 pl-24 flex-grow">
          <img src="/images/logo-tech.png" alt="tech-logo" />
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded border-teal-400 hover:text-white hover:border-white"
            onClick={() => this.handleMobileMenu()}>
            {isActive ? (
              <svg
                className="fill-current h-3 w-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <title>Menu</title>
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            ) : (
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            )}
          </button>
        </div>
        <div
          className={
            isActive
              ? 'w-full block flex-grow lg:flex lg:items-center lg:w-auto'
              : 'w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden'
          }>
          <div className="text-sm text-center lg:flex-grow">
            {NavItems.map(item => (
              <Link
                to={item.url}
                className="block mt-6 lg:inline-block lg:mt-0 text-sm mr-8 tracking-wide nav-items-colors"
                key={item.id}>
                {item.name}
              </Link>
            ))}
          </div>
          <div>{/* <Social /> */}</div>
        </div>
      </Navbar>
    );
  }
}
