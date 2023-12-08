import { useMutation, useQueryClient } from '@tanstack/react-query'
import {  editProjectApi } from '../../services/projectService'
import toast from 'react-hot-toast'

export default function useEditProject() {
  const queryClient = useQueryClient()
  const { isPending: isEdiging, mutate: editProject } = useMutation({
    mutationFn: editProjectApi,
    onSuccess: ({ message }) => {
      toast.success(message)
      queryClient.invalidateQueries({ queryKey: ['owner-projects'] })
    },
    onError: error => {
      toast.error(error?.response?.data?.message)
    },
  })
  return { isEdiging, editProject }
}
