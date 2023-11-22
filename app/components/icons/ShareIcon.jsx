export default function ShareIcon({ width = 20, height = 20, className }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.59 11.359L13.42 14.941M13.41 5.059L6.59 8.641M19 3.7C19 5.19117 17.6569 6.4 16 6.4C14.3431 6.4 13 5.19117 13 3.7C13 2.20883 14.3431 1 16 1C17.6569 1 19 2.20883 19 3.7ZM7 10C7 11.4912 5.65685 12.7 4 12.7C2.34315 12.7 1 11.4912 1 10C1 8.50883 2.34315 7.3 4 7.3C5.65685 7.3 7 8.50883 7 10ZM19 16.3C19 17.7912 17.6569 19 16 19C14.3431 19 13 17.7912 13 16.3C13 14.8088 14.3431 13.6 16 13.6C17.6569 13.6 19 14.8088 19 16.3Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
