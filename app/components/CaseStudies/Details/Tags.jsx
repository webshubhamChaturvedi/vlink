import Link from 'next/link'

export default function Tags({ tags }) {
  return (
    <div className="flex flex-wrap justify-start space-x-2">
      {tags.map((tag, index) => (
        <Link
          href={`/case-study?tags=${tag}`}
          key={index}
          className="text-lg text-underline text-stickyPrimary hover:underline"
        >#{tag}
            {index < tags.length - 1 && <span>,</span>}
        </Link>
      ))}
    </div>
  )
}
