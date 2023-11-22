import Requirement from 'app/components/common/Sidebar/Requirement'
import Brochures from './Brochures'
import ProjectInfo from './ProjectInfo'

export default function Sidebar() {
  const project_info = {
    category: 'E-commerce',
    client: 'IT Technology',
    location: 'USA',
    completed_date: '2022',
    teams: '8 Members',
    platform: 'Web, Mob',
    stack: 'JAVA, REACT'
  }
  return (
    <section className="space-y-6">
      <ProjectInfo project_info={project_info} />
      <Requirement />
      <Brochures
        h1="Brochures"
        p="VLink helped an online electronics company create an app that can go a long way toward helping local and regional retailers thrive in an age where better prices often are a few clicks away. "
      />
    </section>
  )
}
