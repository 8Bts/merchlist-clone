export default function GoogleLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props} // allows you to pass className, width, height, etc.
    >
      <defs>
        <clipPath id="clippath">
          <path
            fill="none"
            d="M22.36,10h-10.36v4.26h5.92c-.26,1.37-1.04,2.53-2.21,3.31-.98.66-2.23,1.06-3.71,1.06-2.86,0-5.29-1.93-6.16-4.53h-.013s.013-.0099.013-.0099c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09c.87-2.6,3.3-4.53,6.16-4.53,1.62,0,3.06.56,4.21,1.64l3.15-3.15c-1.91-1.78-4.39-2.87-7.36-2.87C7.7,1,3.99,3.47,2.18,7.07c-.75,1.48-1.18,3.15-1.18,4.93s.43,3.45,1.18,4.93v.01c1.81,3.59,5.52,6.06,9.82,6.06,2.97,0,5.46-.98,7.28-2.66,2.08-1.92,3.28-4.7401,3.28-8.09,0-.78-.07-1.53-.2-2.25Z"
          />
        </clipPath>

        <radialGradient
          id="radial-gradient"
          cx="1.4787"
          cy="12.7883"
          fx="1.4787"
          fy="12.7883"
          r="9.6555"
          gradientTransform="translate(2.4587 -.293) scale(.8032 1.0842)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".368" stopColor="#ffcf09" />
          <stop offset=".7176" stopColor="#ffcf09" stopOpacity=".7" />
          <stop offset="1" stopColor="#ffcf09" stopOpacity="0" />
        </radialGradient>

        <radialGradient
          id="radial-gradient1"
          cx="14.2953"
          cy="23.2909"
          fx="14.2953"
          fy="23.2909"
          r="11.8784"
          gradientTransform="translate(-3.434 -.6716) scale(1.3272 1.0073)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".3827" stopColor="#34a853" />
          <stop offset=".7062" stopColor="#34a853" stopOpacity=".7" />
          <stop offset="1" stopColor="#34a853" stopOpacity="0" />
        </radialGradient>

        <linearGradient
          id="linear-gradient"
          x1="23.5582"
          y1="6.2864"
          x2="12.1477"
          y2="20.2993"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".6711" stopColor="#4285f4" />
          <stop offset=".8852" stopColor="#4285f4" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path
        fill="#fc4c53"
        d="M22.36,10h-10.36v4.26h5.92c-.26,1.37-1.04,2.53-2.21,3.31-.98.66-2.23,1.06-3.71,1.06-2.86,0-5.29-1.93-6.16-4.53h-.013s.013-.0099.013-.0099c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09c.87-2.6,3.3-4.53,6.16-4.53,1.62,0,3.06.56,4.21,1.64l3.15-3.15c-1.91-1.78-4.39-2.87-7.36-2.87C7.7,1,3.99,3.47,2.18,7.07c-.75,1.48-1.18,3.15-1.18,4.93s.43,3.45,1.18,4.93v.01c1.81,3.59,5.52,6.06,9.82,6.06,2.97,0,5.46-.98,7.28-2.66,2.08-1.92,3.28-4.7401,3.28-8.09,0-.78-.07-1.53-.2-2.25Z"
      />
      <g clipPath="url(#clippath)">
        <ellipse
          fill="url(#radial-gradient)"
          cx="3.6464"
          cy="13.5725"
          rx="7.7549"
          ry="10.4689"
        />
        <ellipse
          fill="url(#radial-gradient1)"
          cx="15.5383"
          cy="22.7886"
          rx="15.7646"
          ry="11.9647"
          transform="translate(-2.7047 2.1016) rotate(-7.1197)"
        />
        <polygon
          fill="url(#linear-gradient)"
          points="11.1048 8.2797 11.5957 13.8759 12.2191 17.6234 19.5807 24.4713 28.1881 8.5742 11.1048 8.2797"
        />
      </g>
    </svg>
  );
}
