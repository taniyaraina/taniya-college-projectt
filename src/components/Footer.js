/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React from 'react';
import styled from 'styled-components';

import { Subtitle, MainContainer, Title } from './elements';
// import Social from './Social';

const Container = styled.div`
  /* background: url(https://colorlib.com/preview/theme/coffee/img/footer-bg.jpg);
  background-size: cover;
  background-position: center; */

  .logo {
    object-fit: contain;
    width: 130px;
    height: auto;
  }
  .text-color {
    color: #031b4e;
  }
  .color-text,
  .color-last-text {
    color: #3368c6;
    opacity: 0.75;
  }
  .color-text:hover {
    opacity: 1;
    transition: 1s;
  }
  input {
    font-size: 15px;
  }
  button {
    background-color: #8893b9;
  }
  .color {
    color: #3368c6;
  }
  .paragraph:hover {
    opacity: 1;
    color: #8893b9;
    transition-duration: 1s;
  }
  .span:hover {
    opacity: 1;
    color: #3368c6;
    transition-duration: 1s;
  }
  .line {
    border-top: 1px solid #000000;
    opacity: 0.15;
  }
`;

const Footer = () => (
  <Container className="pb-16">
    <MainContainer className="container py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left logo">
        <img src="/images/logo-tech.png" alt="tech-logo" />
      </div>
      <div className="flex-grow flex flex-wrap md:pl-16 -mb-10 md:mt-0 mt-10 md:text-left text-center pl-14">
        <div className="lg:w-1/4 md:w-1/2 w-full flex-1">
          <div className="font-semibold text-lg mb-4 mt-4 text-color">
            USEFULL LINKS
          </div>
          <nav className="list-none mb-10">
            <li className="py-6">
              <a className="color-text text-opacity-20 cursor-pointer">
                About Us
              </a>
            </li>
            <li className="pb-6">
              <a className="color-text cursor-pointer">Our Services</a>
            </li>
            <li className="pb-6">
              <a className="color-text cursor-pointer">Our Team</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full flex-1">
          <h2 className="font-semibold text-lg mb-4 mt-4 text-color">
            OUR SERVICES
          </h2>
          <nav className="list-none mb-10">
            <li className="py-6">
              <a className="color-text cursor-pointer">Scientific</a>
            </li>
            <li className="pb-6">
              <a className="color-text cursor-pointer">Chemistry</a>
            </li>
            <li className="pb-6">
              <a className="color-text cursor-pointer">Gemological</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full flex-1">
          <h2 className="font-semibold text-lg mb-4 mt-4 text-color">
            Contacts
          </h2>
          <div>
            <form className="mt-12 flex">
              <input
                className="rounded-l-md pl-4 pr-20 pt-2 pb-2 border-t mr-0 border-b border-l bg-white border-indigo-300"
                placeholder="Enter your email"
              />
              <button className="px-6 rounded-md bg-yellow-400  text-white py-4 border-yellow-500 border-t border-b border-r">
                <i className="fa fa-arrow-right" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </MainContainer>
    <div className="flex px-24 py-2 -mt-8">
      <div className="container mx-auto py-2 px-10 flex flex-wrap flex-col sm:flex-row">
        <p className=" text-center sm:text-left text-blue-700 flex">
          <i className="fa fa-phone text-lg" aria-hidden="true" />
          <p className="pl-4 text-gray-500 text-xl font-medium paragraph cursor-pointer">
            1234 567 89 10
          </p>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a className="text-gray-500 span cursor-pointer">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a className="ml-3 text-gray-500 span cursor-pointer">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a className="ml-3 text-gray-500 span cursor-pointer">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
            </svg>
          </a>
          <a className="ml-3 text-gray-500 span cursor-pointer">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24">
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              />
              <circle cx="4" cy="4" r="2" stroke="none" />
            </svg>
          </a>
        </span>
      </div>
    </div>
    <div className="mx-24 line border-gray-300 py-3" />
    <div className="color-last-text ml-24 pl-6">
      <a className="color ml-1" target="_blank">
        © Copyright 2019 Mobirise - All Rights Reserved
      </a>
    </div>
  </Container>
);

export default Footer;
