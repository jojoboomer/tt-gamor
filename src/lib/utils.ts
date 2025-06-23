import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

const stringToHslColor = (str: string, s: number, l: number) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h = hash % 360;
  return `hsl(${h}, ${s}%, ${l}%)`;
};

// `cn` utility function: Combines `clsx` and `twMerge`.
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

// `createInitialsAvatar` utility function: Generates a base64-encoded SVG URL for an initials avatar.
export const createInitialsAvatar = (name: string) => {
    const bgColor = stringToHslColor(name, 70, 50); // Use a consistent saturation and lightness

  const initials = name
    .split(" ")
    .map((part) => part[0]?.toUpperCase() || "")
    .filter(Boolean)
    .slice(0, 2)
    .join("");

  const svg = `
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect 
          width="24" 
          height="24" 
          rx="size / 2" 
          fill="${bgColor}"
        />
        <text 
          x="50%" 
          y="50%" 
          font-family="Arial, sans-serif" 
          font-size="0.75rem" 
          fill="#fff" 
          text-anchor="middle" 
          dy=".35em"
        >
          ${initials}
        </text>
      </svg>
    `;

  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
};