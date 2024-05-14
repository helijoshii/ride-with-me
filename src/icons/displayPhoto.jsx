import React from "react";

const DisplayPhoto = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="67"
      viewBox="0 0 64 67"
      fill="none"
      {...props}
    >
      <rect y="0.969482" width="64" height="65.5756" rx="32" fill="#CAEFFF" />
      <path
        d="M32 35.8065C36.42 35.8065 40 32.1384 40 27.6095C40 23.0807 36.42 19.4126 32 19.4126C27.58 19.4126 24 23.0807 24 27.6095C24 32.1384 27.58 35.8065 32 35.8065ZM32 39.905C26.66 39.905 16 42.651 16 48.1019V50.1512C16 51.2782 16.9 52.2004 18 52.2004H46C47.1 52.2004 48 51.2782 48 50.1512V48.1019C48 42.651 37.34 39.905 32 39.905Z"
        fill="black"
      />
    </svg>
  );
};

export default DisplayPhoto;
