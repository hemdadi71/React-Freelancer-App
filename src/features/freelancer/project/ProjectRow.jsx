import Table from '../../../ui/Table'
import { toPersianNumbersWithComma } from '../../../utils/toPersianNumbers'
import toLocalDateShort from '../../../utils/toLocalDateShort'
import truncateText from '../../../utils/truncateText'
import { MdAssignmentAdd } from 'react-icons/md'
import { useState } from 'react'
import Modal from '../../../ui/Modal'
import CreateProposal from '../../proposals/CreateProposal'
const projectStatus = {
  OPEN: { label: 'باز', className: 'badge--success' },
  CLOSED: { label: 'بسته', className: 'badge--danger' },
}

const ProjectRow = ({ project, index }) => {
  const { title, category, budget, deadline, status } = project
  const [open, setOpen] = useState(false)
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(title, 30)}</td>
      <td>{category.title}</td>
      <td>{toPersianNumbersWithComma(budget)}</td>
      <td>{toLocalDateShort(deadline)}</td>
      <td>
        <span className={`badge ${projectStatus[status]?.className}`}>
          {projectStatus[status]?.label}
        </span>
      </td>
      <td>
        <Modal
          onClose={() => setOpen(false)}
          open={open}
          title={`درخواست انجام پروژه ${title}`}>
          <CreateProposal
            onClose={() => setOpen(false)}
            projectId={project._id}
          />
        </Modal>
        <button onClick={() => setOpen(true)}>
          <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
        </button>
      </td>
    </Table.Row>
  )
}

export default ProjectRow
