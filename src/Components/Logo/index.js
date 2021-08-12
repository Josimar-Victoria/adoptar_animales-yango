import * as React from "react"
import { Svg } from "./styles"

export const Logo = (props) => {
  return (
    <Svg
      width={510.28}
      height={122.021}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-5.14 13.989 510.28 122.021"
      style={{
        background: "0 0",
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <linearGradient
          id="prefix__editing-gradow-gradient"
          x1={0}
          x2={1}
          y1={0.5}
          y2={0.5}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="rgba(100%,84.57142857142857%,0%,0.933)" />
          <stop offset={1} stopColor="#00ff1c" />
        </linearGradient>
        <filter
          id="prefix__editing-gradow-filter"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feFlood floodColor="#fffcd9" result="flood" />
          <feComposite
            operator="in"
            in2="SourceAlpha"
            in="flood"
            result="shadow"
          />
          <feOffset dx={-4} dy={-4} in="SourceGraphic" result="offset-1" />
          <feOffset dx={4} dy={4} in="shadow" result="offset-2" />
          <feMerge>
            <feMergeNode in="offset-2" />
            <feMergeNode in="offset-1" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#prefix__editing-gradow-filter)">
        <path
          d="M7.17 0l3.71-18.82Q9.02-36.16 2.5-39.87q1.34-1.67 3.52-2.59 2.17-.93 4.8-.93 2.62 0 4.6.93 1.99.92 3.27 2.91 2.43 3.77 2.43 12.8v4.61q3.84-11.27 7.68-16.13 3.9-4.99 8.77-4.99 1.92 0 3.2.99 1.28.99 1.92 2.46-4.93 2.18-9.67 8.45-4.73 6.27-7.8 15.04L21.44 0H7.17zm31.71-1.92q-1.5-1.66-2.18-4.29-.67-2.62-.67-6.91t1.47-8.19q1.48-3.91 4.16-6.72 5.51-5.89 14.6-5.89 3.26 0 5.63 1.09l10.94-1.09L68.1-8.96q-.2.77-.2 2.18 0 1.4.87 2.3.86.9 2.14 1.02-.64 2.18-2.97 3.46-2.34 1.28-4.96 1.28-2.63 0-4.39-.99-1.76-.99-2.27-2.66-1.02 1.6-3.2 2.63-2.18 1.02-5.09 1.02-2.91 0-5.28-.77t-3.87-2.43zm13.5-25.98q-.73 1.15-1.37 3.1-.64 1.95-1.7 7.17-1.05 5.21-1.05 8.93 0 3.71.57 4.8.58 1.08 1.6 1.08 2.05 0 3.55-1.95 1.51-1.95 2.08-5.41l3.4-18.75q-1.35-1.15-2.92-1.15-1.56 0-2.49.51-.93.51-1.67 1.67zm69.99 29.18q-7.75 0-7.75-6.02 0-2.62 1.12-7.71t1.51-7.13q.89-4.68.89-6.15 0-3.26-2.43-3.26-1.6 0-3.13 2.21-1.54 2.2-2.24 6.62L106.37 0 93.89 1.28l3.45-17.41q.58-2.88 1.09-6.14.51-3.27.51-3.78 0-2.94-2.17-2.94-1.47 0-3.07 2.17-1.6 2.18-2.5 6.66L87.3 0 74.69 1.28l6.72-33.92 10.43-1.28-1.09 6.46q1.67-3.45 4.74-4.96 3.07-1.5 7.87-1.5 2.75 0 4.54 1.34 1.8 1.35 2.37 3.52 1.09-2.24 3.87-3.55 2.79-1.31 6.21-1.31 3.43 0 5.12.74 1.7.73 2.72 1.95 1.73 2.24 1.73 6.33 0 4.04-1.73 12.42-.89 4.1-.89 5.6t.86 2.4q.86.9 2.14 1.02-.64 2.18-2.84 3.46-2.21 1.28-5.09 1.28zm17.41-28.03q2.17-3.07 5.47-5.12 3.29-2.05 7.33-2.05 4.03 0 5.95 1.28l12.54-1.28-4.35 24.58q-2.24 12.54-6.98 17.47-4.54 4.67-13.37 4.67-6.72 0-10.56-2.11-3.84-2.11-3.84-5.63 0-2.63 1.98-4.13 1.99-1.51 5.06-1.51 2.69 0 4.73 1.22 1.22.64 1.8 1.54-1.48 1.28-1.48 3.39 0 2.75 2.56 2.75 4.29 0 6.72-10.11.71-2.75 1.28-5.51-2.88 3.52-9.4 3.52-4.55 0-7.17-2.17-2.63-2.18-2.63-7.3 0-3.2 1.09-6.81 1.09-3.62 3.27-6.69zm8.32 13.69q0 4.36 2.24 4.36 1.53 0 3-1.67 1.16-1.34 1.6-3.33l3.27-16.44q-.32-.07-.64-.2-.64-.25-1.47-.25-3.91 0-6.21 6.4-1.79 4.99-1.79 11.13zm39.42 14.34q-14.08 0-14.08-13.25 0-9.41 5.18-15.49 5.51-6.46 15.04-6.46 6.92 0 10.44 3.2 3.52 3.2 3.52 9.92 0 10.24-5.51 16.19-5.37 5.89-14.59 5.89zm1.66-27.84q-.76 1.73-1.37 4.32-.61 2.59-1.38 6.69-.77 4.09-.77 9.15 0 1.66.55 2.75.54 1.09 2.01 1.09 1.48 0 2.4-.7.93-.71 1.64-2.37 1.28-2.95 2.3-8.42 1.02-5.47 1.12-7.84.1-2.37.1-4.13 0-1.76-.52-2.91-.51-1.15-1.95-1.15t-2.4.9q-.96.89-1.73 2.62zm22.28 33.79q0-2.11 1.34-3.42t3.39-1.31h26.95q.32 1.08.32 1.92 0 1.92-1.32 3.26-1.31 1.34-4 1.34h-26.43q-.25-.83-.25-1.79zm72.96-41.15q-5.19 0-8.96-1.73l-2.05 10.37h12.35q0 3.39-1.7 5.54-1.69 2.14-4.76 2.14-3.33 0-6.4-1.22-.64-.25-.71-.32L268.54 0h-13.95l8.13-42.24h28.54q0 3.9-1.82 6.11-1.82 2.21-5.02 2.21zm7.58 32q-1.5-1.66-2.18-4.29-.67-2.62-.67-6.91t1.47-8.19q1.48-3.91 4.16-6.72 5.51-5.89 14.6-5.89 3.26 0 5.63 1.09l10.94-1.09-4.73 24.96q-.2.77-.2 2.18 0 1.4.87 2.3.86.9 2.14 1.02-.64 2.18-2.97 3.46-2.34 1.28-4.96 1.28-2.63 0-4.39-.99-1.76-.99-2.27-2.66-1.02 1.6-3.2 2.63-2.18 1.02-5.09 1.02-2.91 0-5.28-.77T292-1.92zm13.5-25.98q-.73 1.15-1.37 3.1-.64 1.95-1.7 7.17-1.05 5.21-1.05 8.93 0 3.71.57 4.8.58 1.08 1.6 1.08 2.05 0 3.55-1.95 1.51-1.95 2.08-5.41l3.4-18.75q-1.35-1.15-2.92-1.15-1.56 0-2.49.51-.93.51-1.67 1.67zM341.73.64q-3.04-.64-4.61-.93-1.57-.29-3.39-.29-1.83 0-3.62.64-.96-.57-1.57-1.72-.6-1.16-.6-2.95 0-3.77 3.84-6.65l16.25-11.72q-4.54-1.28-8.67-1.28t-5.6 2.82q-2.18-2.56-2.18-6.59 0-2.69 1.96-4.45 1.95-1.76 6.04-1.76 2.31 0 4.39.29 2.08.29 3.93.54l3.46.51q1.66.26 3.36.26t2.98-.7q1.66 1.53 1.66 3.64 0 3.33-4.1 6.79l-16.19 12.09q4.99 1.48 7.55 1.48 5.38 0 7.68-2.56 1.8 2.04 1.8 5.6 0 3.55-2.31 5.56-2.3 2.02-6.46 2.02-2.56 0-5.6-.64z"
          fill="url(#prefix__editing-gradow-gradient)"
          transform="translate(69.07 103.087)"
        />
      </g>
      <style />
    </Svg>
  )
}

