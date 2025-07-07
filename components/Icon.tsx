
import React from 'react';

interface IconProps {
  name: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className = "w-6 h-6" }) => {
  const normalizedName = name.toLowerCase();

  if (normalizedName.includes("rerna") || normalizedName.includes("pećnica")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.014A8.003 8.003 0 0122 12c0 3.182-1.965 5.885-4.563 7.014a9.96 9.96 0 01-4.784-1.357M1.5 4.5l5.5 5.5" />
      </svg>
    );
  }
  if (normalizedName.includes("tava") || normalizedName.includes("pan")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 14.25h18m-12 0v5.25a2.25 2.25 0 002.25 2.25h3.5a2.25 2.25 0 002.25-2.25V14.25M4.5 14.25L4.5 5.25a2.25 2.25 0 012.25-2.25h10.5a2.25 2.25 0 012.25 2.25v9M4.5 14.25h15" />
      </svg>
    );
  }
  if (normalizedName.includes("šporet") || normalizedName.includes("štednjak")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6.75A2.25 2.25 0 0111.25 4.5h1.5A2.25 2.25 0 0115 6.75V19M6 19h12M5.25 9h13.5" />
      </svg>
    );
  }
  if (normalizedName.includes("lonac") || normalizedName.includes("pot")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v6M21 7.5H3m18 0l-2.25 1.313M3 7.5h18m0 0l-2.25 1.313M3 7.5V1.313l-2.25 1.313M3 7.5v6m0-6H.75m3 6H.75m19.5 0v.75a2.25 2.25 0 01-2.25 2.25H3.75a2.25 2.25 0 01-2.25-2.25V13.5m19.5 0h.75" />
      </svg>
    );
  }
  if (normalizedName.includes("air fryer") || normalizedName.includes("friteza")) {
     return (
       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
         <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c-5.13 0-9.363-4.14-9.363-9.25C2.637 7.39 6.87 3.25 12 3.25s9.363 4.14 9.363 9.25c0 5.11-4.233 9.25-9.363 9.25z" />
         <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.25a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5z" />
         <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 9.25h13.5" />
       </svg>
     )
  }
  // Default icon
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12h-3l-3 3-3-3h-3a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 013.375-3.375H6.75" />
    </svg>
  );
};

export default Icon;
