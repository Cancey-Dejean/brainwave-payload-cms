import React, { SVGProps } from "react";

export function MenuSvg({ openNavigation }: { openNavigation: boolean }) {
  return (
    <svg
      className="overflow-visible"
      width="20"
      height="12"
      viewBox="0 0 20 12"
    >
      <rect
        className="origin-center transition-all"
        y={openNavigation ? "5" : "0"}
        width="20"
        height="2"
        rx="1"
        fill="white"
        transform={`rotate(${openNavigation ? "45" : "0"})`}
      />
      <rect
        className="origin-center transition-all"
        y={openNavigation ? "5" : "10"}
        width="20"
        height="2"
        rx="1"
        fill="white"
        transform={`rotate(${openNavigation ? "-45" : "0"})`}
      />
    </svg>
  );
}

export function SectionSvg({ crossesOffset }: { crossesOffset: boolean }) {
  return (
    <>
      <PlusSvg
        className={`absolute -top-[0.3125rem] left-[1.5625rem] hidden ${
          crossesOffset && crossesOffset
        } pointer-events-none lg:block xl:left-[2.1875rem]`}
      />

      <PlusSvg
        className={`absolute -top-[0.3125rem] right-[1.5625rem] hidden ${
          crossesOffset && crossesOffset
        } pointer-events-none lg:block xl:right-[2.1875rem]`}
      />
    </>
  );
}

export function PlusSvg({ className }: { className?: string }) {
  return (
    <svg className={`${className} || ""`} width="11" height="11" fill="none">
      <path
        d="M7 1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1V1z"
        fill="#ada8c4"
      />
    </svg>
  );
}

export function ClipPath() {
  return (
    <svg className="block" width={0} height={0}>
      <clipPath id="benefits" clipPathUnits="objectBoundingBox">
        <path d="M0.079,0 h0.756 a0.079,0.083,0,0,1,0.058,0.026 l0.086,0.096 A0.079,0.083,0,0,1,1,0.179 V0.917 c0,0.046,-0.035,0.083,-0.079,0.083 H0.079 c-0.044,0,-0.079,-0.037,-0.079,-0.083 V0.083 C0,0.037,0.035,0,0.079,0" />
      </clipPath>
    </svg>
  );
}

export const brackets = (position: any) =>
  position === "left" ? (
    <svg
      width="5"
      height="14"
      viewBox="0 0 5 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 0.822266H1V12.8223H5" stroke="url(#brackets-left)" />
      <defs>
        <linearGradient id="brackets-left" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#89F9E8" />
          <stop offset="100%" stopColor="#FACB7B" />
        </linearGradient>
      </defs>
    </svg>
  ) : (
    <svg
      width="5"
      height="14"
      viewBox="0 0 5 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-2.98023e-08 0.822266H4V12.8223H-2.98023e-08"
        stroke="url(#brackets-right)"
      />
      <defs>
        <linearGradient
          id="brackets-right"
          x1="14.635%"
          x2="14.635%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#9099FC" />
          <stop offset="100%" stopColor="#D87CEE" />
        </linearGradient>
      </defs>
    </svg>
  );

export function TwitterCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="15" cy="15" r="15" fill="white" />
      <path
        d="M21.9961 11.4915C22.6854 10.9745 23.3058 10.3541 23.7884 9.63028C23.168 9.90602 22.4442 10.1128 21.7204 10.1818C22.4786 9.73369 23.0301 9.04435 23.3058 8.18267C22.6165 8.59628 21.8238 8.90648 21.031 9.07881C20.3417 8.35501 19.4111 7.94141 18.3771 7.94141C16.378 7.94141 14.758 9.56135 14.758 11.5604C14.758 11.8362 14.7925 12.1119 14.8614 12.3876C11.8628 12.2153 9.1744 10.7677 7.38212 8.59628C7.07192 9.11328 6.89959 9.73369 6.89959 10.423C6.89959 11.6638 7.51999 12.7668 8.51953 13.4216C7.93359 13.3872 7.34766 13.2493 6.86512 12.9736V13.008C6.86512 14.7659 8.10593 16.2135 9.76034 16.5581C9.48461 16.6271 9.13994 16.696 8.82973 16.696C8.58847 16.696 8.38166 16.6615 8.1404 16.6271C8.58847 18.0747 9.93267 19.1087 11.5182 19.1432C10.2773 20.1082 8.72633 20.6942 7.03745 20.6942C6.72725 20.6942 6.45152 20.6597 6.17578 20.6252C7.76126 21.6592 9.65694 22.2452 11.725 22.2452C18.3771 22.2452 21.9961 16.7649 21.9961 11.974C21.9961 11.8017 21.9961 11.6638 21.9961 11.4915Z"
        fill="black"
      />
    </svg>
  );
}

export function Arrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg className="ml-5 fill-white" width="24" height="24" {...props}>
      <path d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414z" />
    </svg>
  );
}
