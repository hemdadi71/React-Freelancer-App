
import useToggleProjectStatus from './useToggleProjectStatus'
import Loading from '../../ui/Loading'
import Toggle from '../../ui/Toggle'

const ToggleProjectStatus = ({ project }) => {
  const enabled = project.status === 'OPEN' ? true : false

  const { isUpdating, toggleProjectStatus } = useToggleProjectStatus()
  const toggleHandler = () => {
    const status = project.status === 'OPEN' ? 'CLOSED' : 'OPEN'
    toggleProjectStatus({ id: project._id, data: { status } })
  }
  return (
    <div className="w-[5rem]">
      {isUpdating ? (
        <Loading height={20} width={50} />
      ) : (
        <Toggle
          label={project.status === 'OPEN' ? 'باز' : 'بسته'}
          enabled={enabled}
          onChange={toggleHandler}
        />
      )}
    </div>
  )
}

export default ToggleProjectStatus
