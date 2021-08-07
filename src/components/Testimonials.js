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
  p,
  span:hover {
    color: black;
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
        <div className="flex -m-4">
          <div className="md:w-1/2 card w-full background p-8 rounded relative h-64">
            <div className="image">
              <img className="" src="/images/face1.jpg" />
            </div>
            <div className="h-full pt-8 px-12 flex flex-col">
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
                <span className="flex-grow">
                  <span className="title-font font-medium italic heading-color">
                    Liza B.
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/2">
            <div className="h-full bg-gray-100 p-8 rounded-lg background">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-gray-400 mb-4"
                viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
              </svg>
              <p className="leading-relaxed mb-6">
                Synth chartreuse iPhone lomo cray raw denim brunch everyday
                carry neutra before they sold out fixie 90's microdosing. Tacos
                pinterest fanny pack venmo, post-ironic heirloom try-hard pabst
                authentic iceland.
              </p>
              <a className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src="https://dummyimage.com/107x107"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">
                    Alper Kamu
                  </span>
                  <span className="text-gray-500 text-sm">DESIGNER</span>
                </span>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-100 p-8 rounded-lg background">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-gray-400 mb-4"
                viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
              </svg>
              <p className="leading-relaxed mb-6">
                Synth chartreuse iPhone lomo cray raw denim brunch everyday
                carry neutra before they sold out fixie 90's microdosing. Tacos
                pinterest fanny pack venmo, post-ironic heirloom try-hard pabst
                authentic iceland.
              </p>
              <a className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src="https://dummyimage.com/106x106"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">
                    Holden Caulfield
                  </span>
                  <span className="text-gray-500 text-sm">UI DEVELOPER</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  </Container>
);

export default Testimonials;
