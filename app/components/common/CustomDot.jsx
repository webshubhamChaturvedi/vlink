export default function CustomDot({ onClick, ...rest }) {
  const { active } = rest
  return (
    <button
      className={`p-1.5 !rounded-full ${
        active ? 'bg-primary' : 'bg-gray-400'
      } mx-1`}
      onClick={() => onClick()}
    ></button>
  )
}
