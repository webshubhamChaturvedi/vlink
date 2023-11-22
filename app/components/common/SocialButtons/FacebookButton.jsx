export default function FacebookButton({ width = 44, height = 44 }) {
  return (
    <button
      className="!rounded-full relative bg-facebook p-0"
      style={{ height, width }}
    >
      <svg
        width="12"
        height="25"
        viewBox="0 0 12 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.64815 24.3833V12.4345H11.0004L11.4447 8.31684H7.64815L7.65385 6.25593C7.65385 5.18199 7.75755 4.60655 9.32523 4.60655H11.4209V0.488464H8.06819C4.04102 0.488464 2.62356 2.48595 2.62356 5.8451V8.31731H0.113281V12.4349H2.62356V24.3833H7.64815Z"
          fill="white"
        />
      </svg>
    </button>
  )
}
