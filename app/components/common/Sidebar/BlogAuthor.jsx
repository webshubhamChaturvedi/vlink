import Card from '../Card'

export default function BlogAuthor({ author }) {
  const { img, name, p } = author
  return (
    <Card img={img} className='text-center space-y-3'>
      <h3 className='text-lightGray'>Blog Posted By</h3>
      <h2 className='text-secondary'>{name}</h2>
      <p >{p}</p>
    </Card>
  )
}
