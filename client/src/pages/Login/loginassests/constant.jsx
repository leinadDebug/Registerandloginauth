import React from "react";

export function Logo() {
  return (
    <svg
      width=""
      height=""
      viewBox="0 0 134 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M71.257 34.3144C71.3989 15.6392 85.3728 0.628982 102.469 0.788091C119.565 0.947201 133.308 16.2154 133.166 34.8906C133.025 53.5658 119.051 68.576 101.955 68.4169C84.8589 68.2578 71.115 52.9896 71.257 34.3144Z"
        fill="url(#paint0_linear_523049_46)"
      />
      <path d="M0 0.5H59V66.5H0V0.5Z" fill="url(#paint1_linear_523049_46)" />
      <path
        d="M102.158 33.7496L72.1096 33.8977L72 6.64803L102.049 6.5L102.158 33.7496Z"
        fill="url(#paint2_linear_523049_46)"
      />
      <path
        d="M72 25C72 35.2173 64.6127 43.5 55.5 43.5C46.3873 43.5 39 35.2173 39 25C39 14.7827 46.3873 6.5 55.5 6.5C64.6127 6.5 72 14.7827 72 25Z"
        fill="url(#paint3_linear_523049_46)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_523049_46"
          x1="66.5838"
          y1="0.5"
          x2="66.5838"
          y2="68.4182"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E30B0B" />
          <stop offset="1" stopColor="#372222" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_523049_46"
          x1="66.5838"
          y1="0.5"
          x2="66.5838"
          y2="68.4182"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00BDE7" />
          <stop offset="1" stopColor="#C8E4EB" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_523049_46"
          x1="158.819"
          y1="0.499996"
          x2="158.819"
          y2="68.4182"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#FFFCF8" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_523049_46"
          x1="55.5"
          y1="6.5"
          x2="55.2374"
          y2="43.4996"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFFCF8" />
          <stop offset="0.797468" stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" stopOpacity="0.01" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function BgAnimation() {
  return (
    <div>
      <div className="absolute top-[10%] left-4 w-36 h-24 md:w-72  md:h-70 mix-blend-multiply filter blur-lg opacity-90 animate-fadeBubble animation-delay-4000  bg-cyan-300 rounded-full"></div>
      <div className="absolute top-[25%] right-24 w-36 h-24 md:w-72 md:h-70 mix-blend-multiply filter blur-xl opacity-90 animate-fadeBubble delay-1000  bg-orange-300 rounded-full"></div>
      <div className="absolute top-[55%] left-48 w-36 h-24 md:w-72 md:h-70 mix-blend-multiply filter blur-xl opacity-90 animate-fadeBubble animation-delay-2000   bg-red-300 rounded-full"></div>
    </div>
  );
}
