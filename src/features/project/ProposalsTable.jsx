import Empty from '../../ui/Empty'
import Table from '../../ui/Table'
import ProposalRow from './ProposalRow'
const ProposalsTable = ({ proposals }) => {
  if (!proposals.length) return <Empty resourceName="درخواستی" />
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>فریلنسر</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>ددلاین</th>
        <th>هزینه</th>
        <th>وضعیت</th>
      </Table.Header>
      <Table.Body>
        {proposals?.map((proposal, index) => (
          <ProposalRow key={proposal._id} proposal={proposal} index={index} />
        ))}
      </Table.Body>
    </Table>
  )
}

export default ProposalsTable
