import * as React from "react";

interface IconProps {
    color?: string;
}


export const IconBookmark = ({color}: IconProps) => (
  <svg
    width="42px"
    height="42px"
    viewBox="0 0 42 42"
    id="magicoon-Regular"
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    stroke={color}
  >
      <path
        id="bookmark-Regular-2"
        data-name="bookmark-Regular"
        className="cls-1"
        d="M28.125 4.218H16.875A8.918 8.918 0 0 0 7.969 13.125V37.5A3.284 3.284 0 0 0 13.125 40.194l9.111 -6.313a0.472 0.472 0 0 1 0.535 0L31.875 40.194A3.281 3.281 0 0 0 37.031 37.5V13.125A8.918 8.918 0 0 0 28.125 4.218ZM34.219 37.5a0.469 0.469 0 0 1 -0.737 0.386L24.375 31.569a3.297 3.297 0 0 0 -3.739 0L11.516 37.875A0.469 0.469 0 0 1 10.781 37.5V13.125A6.101 6.101 0 0 1 16.875 7.032h11.25A6.101 6.101 0 0 1 34.219 13.125Z"
      />
  </svg>
);

export const IconHome = ({color}: IconProps) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="50px"
    height="50px"
    viewBox="199 199 50 50"
    enableBackground="new 796 796 200 200"
    xmlSpace="preserve"
    fill={color}
    stroke={color}
  >
    <g>
      <path d="M246.513 218.252l-20.313 -18.404c-1.249 -1.132 -3.152 -1.132 -4.401 0l-20.313 18.404c-1.045 0.947 -1.641 2.291 -1.641 3.7v25.387c0 0.917 0.744 1.661 1.661 1.661h15.232v-20.038c0 -1.41 1.143 -2.553 2.554 -2.553h9.416c1.411 0 2.554 1.143 2.554 2.553V249h15.232c0.917 0 1.661 -0.744 1.661 -1.661V221.953C248.154 220.543 247.558 219.199 246.513 218.252z" />
    </g>
  </svg>
);


export const IconPlus = ({color}: IconProps) => (
<svg
    width="60px"
    height="60px"
    viewBox="0 0 60 60"
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    stroke={color}
  >
    <path d="M30 5C16.215 5 5 16.215 5 30s11.215 25 25 25 25 -11.215 25 -25S43.785 5 30 5zm12.5 27.5h-10v10h-5v-10H17.5v-5h10V17.5h5v10h10v5z" />
  </svg>
);


export const IconUser = ({color}: IconProps) => (
    <svg
    width="45px"
    height="45px"
    viewBox="0 0 45 45"
    data-name="Layer 1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    stroke={color}
  >
    <title />
    <path d="M38.025 38.41l-0.45 -0.9a16.601 16.601 0 0 0 -6.975 -7.2 14.882 14.882 0 0 0 6.525 -12.263 14.625 14.625 0 1 0 -22.725 12.15 16.601 16.601 0 0 0 -6.975 7.2l-0.45 0.9a2.264 2.264 0 0 0 4.05 2.025l0.45 -0.9a12.375 12.375 0 0 1 22.05 0l0.45 0.9a2.25 2.25 0 0 0 3.038 1.012c1.125 -0.45 1.575 -1.8 1.012 -2.925ZM12.375 18.047a10.125 10.125 0 1 1 10.125 10.125A10.082 10.082 0 0 1 12.375 18.047Z" />
  </svg>
);


export const IconVertical = ({color}: IconProps) => (
    <svg
    width="45px"
    height="45px"
    viewBox="0 0 45 45"
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    stroke={color}
  >
    <path d="M22.502 17.55a4.95 4.95 0 1 0 0 9.905A4.95 4.95 0 0 0 22.5 17.55zm0 -5.85A4.95 4.95 0 1 0 22.498 1.8a4.95 4.95 0 0 0 0.005 9.9zm0 21.6a4.95 4.95 0 1 0 0 9.905 4.95 4.95 0 0 0 0 -9.905z" />
  </svg>
);