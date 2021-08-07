/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import MainContainer from './elements/MainContainer';

const Container = styled.div`
  .color {
    color: #3368c6;
  }
  .background {
    background-color: #eef3f9;
  }
  .image {
    width: 60px;
    height: 60px;
    max-width: 100px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .filter {
    filter: grayscale();
  }
  .heading-color {
    color: #031b4e;
  }
  .line {
    border: 0.6px solid #031b4e;
    height: 0;
    opacity: 0.5;
  }
  .paragraph-color {
    color: #8893b9;
  }
  .icon {
    color: #fabd4a;
    font-size: 15px;
  }
`;

const Testimonials = () => (
  <Container>
    <MainContainer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex pb-10">
          <div className="bg-gray-100 background rounded-lg mt-4 mb-4 p-4 color">
            <i className="fa fa-user fa-lg" aria-hidden="true" />
          </div>
          <h1 className="text-2xl font-semibold heading-color m-6 text-start self-center">
            TESTIMONIALS
          </h1>
        </div>
        <div className="flex">
          <div className="md:w-1/2 lg:h-64 card w-full background rounded relative">
            <div className="image rounded-lg">
              <img className="filter contrast-200" src="/images/face1.jpg" />
            </div>
            <div className="h-full pt-16 pb-9 pr-12 pl-20 flex flex-col">
              <div className="flex icon mb-6">
                <i className="fa fa-star mr-1" aria-hidden="true" />
                <i className="fa fa-star mr-1" aria-hidden="true" />
                <i className="fa fa-star mr-1" aria-hidden="true" />
                <i className="fa fa-star mr-1" aria-hidden="true" />
                <i className="fa fa-star mr-1" aria-hidden="true" />
              </div>
              <p className="leading-relaxed mb-6 paragraph-color">
                Click on the text in the block and enter the text you want to
                show.
              </p>
              <div className="inline-flex justify-center items-center">
                <div className="w-12 h-12 border line flex-shrink-0 object-cover object-center" />
                <span className="flex-grow span">
                  <span className="title-font font-medium italic heading-color">
                    Liza B.
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 lg:h-64 card w-full background rounded relative">
            <div className="image rounded-lg">
              <img className="filter contrast-200" src="/images/face1.jpg" />
            </div>
            <div className="h-full pt-16 pb-9 pr-12 pl-20 flex flex-col">
              <div className="flex icon mb-6">
                <i className="fa fa-star mr-1" aria-hidden="true" />
                <i className="fa fa-star mr-1" aria-hidden="true" />
                <i className="fa fa-star mr-1" aria-hidden="true" />
                <i className="fa fa-star mr-1" aria-hidden="true" />
                <i className="fa fa-star mr-1" aria-hidden="true" />
              </div>
              <p className="leading-relaxed mb-6 paragraph-color">
                Click on the text in the block and enter the text you want to
                show.
              </p>
              <div className="inline-flex justify-center items-center">
                <div className="w-12 h-12 border line flex-shrink-0 object-cover object-center" />
                <span className="flex-grow span">
                  <span className="title-font font-medium italic heading-color">
                    Liza B.
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 lg:h-64 card w-full background rounded relative">
            <div className="image rounded-lg">
              <img className="filter contrast-200" src="/images/face1.jpg" />
            </div>
            <div className="h-full pt-16 pb-9 pr-12 pl-20 flex flex-col">
              <div className="flex icon mb-6">
                <i className="fa fa-star mr-1" aria-hidden="true" />
                <i className="fa fa-star mr-1" aria-hidden="true" />
                <i className="fa fa-star mr-1" aria-hidden="true" />
                <i className="fa fa-star mr-1" aria-hidden="true" />
                <i className="fa fa-star mr-1" aria-hidden="true" />
              </div>
              <p className="leading-relaxed mb-6 paragraph-color">
                Click on the text in the block and enter the text you want to
                show.
              </p>
              <div className="inline-flex justify-center items-center">
                <div className="w-12 h-12 border line flex-shrink-0 object-cover object-center" />
                <span className="flex-grow span">
                  <span className="title-font font-medium italic heading-color">
                    Liza B.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  </Container>
);

export default Testimonials;
