export default function ArrowIcon({ height = 18, width = 14, className }) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 7H17M17 7L11 1M17 7L11 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
