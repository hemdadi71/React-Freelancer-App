import { HiOutlineViewGrid } from 'react-icons/hi'
import { HiCurrencyDollar } from 'react-icons/hi'
import { HiCollection } from 'react-icons/hi'
import Stat from '../../ui/Stat'
const Stats = ({ projects }) => {
  const numOfProjects = projects.length
  const numOfAcceptedProjects = projects.map(p => p.status === 2).length
  const numOfProposals = projects.reduce(
    (acc, curr) => curr.proposals.length + acc,
    0
  )
  return (
    <div className="grid grid-cols-3 gap-x-2">
      <Stat
        title="پروژه ها"
        value={numOfProjects}
        Icon={HiOutlineViewGrid}
        color="primary"
      />
      <Stat
        title="پروژه های واگذار شده"
        value={numOfAcceptedProjects}
        Icon={HiCurrencyDollar}
        color="green"
      />
      <Stat
        title="درخواست ها"
        value={numOfProposals}
        Icon={HiCollection}
        color="yellow"
      />
    </div>
  )
}

export default Stats
