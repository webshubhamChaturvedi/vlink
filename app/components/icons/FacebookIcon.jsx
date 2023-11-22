const FacebookIcon = ({ width = 10, height = 20, className }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.69908 19.4426V10.0568H9.28999L9.63334 6.82235H6.69908L6.70348 5.20349C6.70348 4.3599 6.78363 3.90789 7.99527 3.90789H9.615V0.673096H7.02372C3.91118 0.673096 2.81565 2.24214 2.81565 4.88078V6.82271H0.875488V10.0571H2.81565V19.4426H6.69908Z"
        fill="currentColor"
      />
    </svg>
  )
}
export default FacebookIcon
