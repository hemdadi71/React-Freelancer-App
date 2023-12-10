import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { createProposalApi } from '../../services/proposalService'

export default function useCreateProposal() {
  const queryClient = useQueryClient()
  const { isPending: isCreating, mutate: createProposal } = useMutation({
    mutationFn: createProposalApi,
    onSuccess: ({ message }) => {
      toast.success(message)
      queryClient.invalidateQueries({ queryKey: ['proposals'] })
    },
    onError: error => {
      toast.error(error?.response?.data?.message)
    },
  })
  return { isCreating, createProposal }
}
