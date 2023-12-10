import { HiOutlineViewGrid } from 'react-icons/hi'
import { HiCurrencyDollar } from 'react-icons/hi'
import { HiCollection } from 'react-icons/hi'
import Stat from '../../ui/Stat'
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from '../../utils/toPersianNumbers'

const Stats = ({ proposals }) => {
  const numOfProposals = proposals.length
  const acceptedProposals = proposals.filter(p => p.status === 2)
  const balance = acceptedProposals.reduce((acc, curr) => acc + curr.price, 0)
  return (
    <div className="grid grid-cols-3 gap-x-2">
      <Stat
        title="درخواست ها"
        value={toPersianNumbers(numOfProposals)}
        Icon={HiOutlineViewGrid}
        color="primary"
      />
      <Stat
        title="درخواست های تایید شده"
        value={toPersianNumbers(acceptedProposals.length)}
        Icon={HiCurrencyDollar}
        color="green"
      />
      <Stat
        title="کیف پول"
        value={toPersianNumbersWithComma(balance)}
        Icon={HiCollection}
        color="yellow"
      />
    </div>
  )
}

export default Stats
