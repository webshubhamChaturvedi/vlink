export default function DownloadIcon({ width = 20, height = 20, className }) {
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
        d="M1.41992 19L19.4199 19M4.41992 9L10.4199 15M10.4199 15L16.4199 9M10.4199 15L10.4199 0.999999"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
