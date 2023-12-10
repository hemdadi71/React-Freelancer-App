import { useForm } from 'react-hook-form'
import Input from '../../ui/Input'
import Loading from '../../ui/Loading'
import useCreateProposal from './useCreateProposal'

const CreateProposal = ({ onClose, projectId }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()
  const { isCreating, createProposal } = useCreateProposal()
  const onSubmit = data => {
    createProposal(
      { ...data, projectId },
      {
        onSuccess: () => {
          onClose()
        },
      }
    )
  }
  return (
    <div>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="توضیحات"
          name="description"
          register={register}
          required
          validationSchema={{
            required: 'توضیحات ظروری است',
            minLength: {
              value: 10,
              message: 'طول توضیحات نامعتبر است',
            },
          }}
          errors={errors}
        />
        <Input
          label="قیمت"
          name="price"
          type="number"
          register={register}
          required
          validationSchema={{
            required: 'قیمت ظروری است',
          }}
          errors={errors}
        />
        <Input
          label="مدت زمان"
          name="duration"
          type="number"
          register={register}
          required
          validationSchema={{
            required: 'مدت زمان ظروری است',
          }}
          errors={errors}
        />

        {isCreating ? (
          <Loading />
        ) : (
          <button className="btn btn--primary w-full">
            {!isCreating ? 'ایجاد پروژه جدید' : 'ویرایش پروژه'}
          </button>
        )}
      </form>
    </div>
  )
}

export default CreateProposal
