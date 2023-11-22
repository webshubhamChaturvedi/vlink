import Card from 'app/components/common/Card'

export default function ProjectInfo({ project_info }) {
  const { category, client, location, completed_date, teams, platform, stack } =
    project_info
  return (
    <Card classname="font-bold" blue>
      <h2 className='mb-3'>Project Info</h2>
      <table className="w-full">
        <tbody>
          <tr>
            <td>Category:</td>
            <td>{category}</td>
          </tr>
          <tr>
            <td>Client:</td>
            <td>{client}</td>
          </tr>
          <tr>
            <td>Location:</td>
            <td>{location}</td>
          </tr>
          <tr>
            <td>Completed Date:</td>
            <td>{completed_date}</td>
          </tr>
          <tr>
            <td>Teams:</td>
            <td>{teams}</td>
          </tr>
          <tr>
            <td>Platform:</td>
            <td>{platform}</td>
          </tr>
          <tr>
            <td>Stack:</td>
            <td>{stack}</td>
          </tr>
        </tbody>
      </table>
    </Card>
  )
}
