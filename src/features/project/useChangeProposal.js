import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { changeProposalStatusApi } from '../../services/proposalService'

export default function useChangeProposalStatus() {
  const { isPending: isUpdating, mutate: changeProposalStatus } = useMutation({
    mutationFn: changeProposalStatusApi,
    onSuccess: ({ message }) => {
      toast.success(message)
    },
    onError: error => {
      toast.error(error?.response?.data?.message)
    },
  })
  return { isUpdating, changeProposalStatus }
}
