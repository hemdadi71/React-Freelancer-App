import { useForm } from 'react-hook-form'
import RHFSelect from '../../ui/RHFSelect'
import useChangeProposalStatus from './useChangeProposal'
import { useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import Loading from '../../ui/Loading'

const ChangeProposalStatus = ({ proposalId, onClose }) => {
  const { register, handleSubmit } = useForm()
  const options = [
    {
      label: 'رد شده',
      value: 0,
    },
    {
      label: 'در انتظار تایید',
      value: 1,
    },
    {
      label: 'تایید شده',
      value: 2,
    },
  ]
  const { changeProposalStatus, isUpdating } = useChangeProposalStatus()
  const { id: projectId } = useParams()
  const queryClient = useQueryClient()
  const onSubmit = data => {
    changeProposalStatus(
      { id: proposalId, data },
      {
        onSuccess: () => {
          onClose()
          queryClient.invalidateQueries({ queryKey: ['project', projectId] })
        },
      }
    )
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RHFSelect
        name="status"
        label="تغییر وضعیت"
        register={register}
        options={options}
        required
      />
      <div className="mt-8">
        {isUpdating ? (
          <Loading />
        ) : (
          <button className="btn btn--primary w-full" type="submit">
            تایید
          </button>
        )}
      </div>
    </form>
  )
}

export default ChangeProposalStatus
