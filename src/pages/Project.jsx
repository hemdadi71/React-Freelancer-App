import useProject from '../features/project/useProject'
import Loading from '../ui/Loading'
import ProjectHeader from '../features/project/projectHeader'
import ProposalsTable from '../features/project/ProposalsTable'

const Project = () => {
  const { project, isLoading } = useProject()
  if (isLoading) return <Loading />
  return (
    <div>
      <ProjectHeader project={project} />
      <ProposalsTable proposals={project.proposals} />
    </div>
  )
}

export default Project
