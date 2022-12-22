import * as React from "react";

interface IconProps {
  width?: number;
  height?: number;  
  fill?: string;
  stroke?: string;
  onClick?: React.MouseEvent<HTMLDivElement, MouseEvent>;
}


export const IconBookmark = ({width, height, fill, stroke, onClick}: IconProps) => (

  <svg
    width="42px"
    height="42px"
    viewBox="0 0 42 42"
    id="magicoon-Regular"
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    stroke={stroke}
  >
      <path
        id="bookmark-Regular-2"
        data-name="bookmark-Regular"
        className="cls-1"
        d="M28.125 4.218H16.875A8.918 8.918 0 0 0 7.969 13.125V37.5A3.284 3.284 0 0 0 13.125 40.194l9.111 -6.313a0.472 0.472 0 0 1 0.535 0L31.875 40.194A3.281 3.281 0 0 0 37.031 37.5V13.125A8.918 8.918 0 0 0 28.125 4.218ZM34.219 37.5a0.469 0.469 0 0 1 -0.737 0.386L24.375 31.569a3.297 3.297 0 0 0 -3.739 0L11.516 37.875A0.469 0.469 0 0 1 10.781 37.5V13.125A6.101 6.101 0 0 1 16.875 7.032h11.25A6.101 6.101 0 0 1 34.219 13.125Z"
      />
  </svg>
);

export const IconHome = ({fill}: IconProps) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="37px"
    height="37px"
    viewBox="199 199 50 50"
    enableBackground="new 796 796 200 200"
    xmlSpace="preserve"
    fill={fill}
    stroke={fill}
  >
    <g>
      <path d="M246.513 218.252l-20.313 -18.404c-1.249 -1.132 -3.152 -1.132 -4.401 0l-20.313 18.404c-1.045 0.947 -1.641 2.291 -1.641 3.7v25.387c0 0.917 0.744 1.661 1.661 1.661h15.232v-20.038c0 -1.41 1.143 -2.553 2.554 -2.553h9.416c1.411 0 2.554 1.143 2.554 2.553V249h15.232c0.917 0 1.661 -0.744 1.661 -1.661V221.953C248.154 220.543 247.558 219.199 246.513 218.252z" />
    </g>
  </svg>
);


export const IconPlus = ({width, height, fill, stroke, onClick}: IconProps) => (
<svg
    width="70px"
    height="70px"
    viewBox="0 0 60 60"
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    stroke={stroke}
  >
    <path d="M30 5C16.215 5 5 16.215 5 30s11.215 25 25 25 25 -11.215 25 -25S43.785 5 30 5zm12.5 27.5h-10v10h-5v-10H17.5v-5h10V17.5h5v10h10v5z" />
  </svg>
);


export const IconUser = ({width, height, fill, stroke, onClick}: IconProps) => (
    <svg
    width="45px"
    height="45px"
    viewBox="0 0 45 45"
    data-name="Layer 1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    stroke={stroke}
  >
    <title />
    <path d="M38.025 38.41l-0.45 -0.9a16.601 16.601 0 0 0 -6.975 -7.2 14.882 14.882 0 0 0 6.525 -12.263 14.625 14.625 0 1 0 -22.725 12.15 16.601 16.601 0 0 0 -6.975 7.2l-0.45 0.9a2.264 2.264 0 0 0 4.05 2.025l0.45 -0.9a12.375 12.375 0 0 1 22.05 0l0.45 0.9a2.25 2.25 0 0 0 3.038 1.012c1.125 -0.45 1.575 -1.8 1.012 -2.925ZM12.375 18.047a10.125 10.125 0 1 1 10.125 10.125A10.082 10.082 0 0 1 12.375 18.047Z" />
  </svg>
);


export const IconVertical = ({width, height, fill, stroke, onClick}: IconProps) => (
    <svg
    width="40px"
    height="40px"
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    stroke={stroke}
  >
    <path d="M22.502 17.55a4.95 4.95 0 1 0 0 9.905A4.95 4.95 0 0 0 22.5 17.55zm0 -5.85A4.95 4.95 0 1 0 22.498 1.8a4.95 4.95 0 0 0 0.005 9.9zm0 21.6a4.95 4.95 0 1 0 0 9.905 4.95 4.95 0 0 0 0 -9.905z" />
  </svg>
);

export const IconAlarm = ({width, height, fill, stroke, onClick}: IconProps) => (
  <svg
    width="40px"
    height="40px"
    viewBox="0 0 24 24"
    id="magicoon-Regular"
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    stroke={stroke}
  >
      <path d="M20.456,15.646,19.35,13.8a4.245,4.245,0,0,1-.605-2.184V8.99a6.745,6.745,0,0,0-13.49,0v2.627a4.245,4.245,0,0,1-.6,2.184L3.544,15.646A2.05,2.05,0,0,0,5.3,18.75h3.98c-.008.084-.033.165-.033.25a2.75,2.75,0,0,0,5.5,0c0-.085-.025-.166-.033-.25H18.7a2.05,2.05,0,0,0,1.759-3.1ZM13.25,19a1.25,1.25,0,0,1-2.5,0,1.232,1.232,0,0,1,.033-.25h2.434A1.232,1.232,0,0,1,13.25,19Zm5.927-2.029a.542.542,0,0,1-.48.279H5.3a.549.549,0,0,1-.473-.832l1.107-1.846a5.752,5.752,0,0,0,.818-2.955V8.99a5.245,5.245,0,0,1,10.49,0v2.627a5.752,5.752,0,0,0,.818,2.955l1.107,1.846A.541.541,0,0,1,19.177,16.971Z"
      />
  </svg>
);