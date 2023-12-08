import { useForm } from 'react-hook-form'
import Input from '../../ui/Input'
import RHFSelect from '../../ui/RHFSelect'
import { TagsInput } from 'react-tag-input-component'
import { useState } from 'react'
import DatePickerField from '../../ui/DatePickerField'
import useCategories from '../../hooks/useCategories'
import useCreateProject from './useCreateProject'
import Loading from '../../ui/Loading'
import useEditProject from './useEditProject'

const CreateProjectForm = ({ onClose, projectToEdit = {} }) => {
  const { _id: editId } = projectToEdit
  const isEditing = !!editId
  const {
    title,
    description,
    budget,
    category,
    deadline,
    tags: prevTags,
  } = projectToEdit
  let editValues = {}
  if (isEditing) {
    editValues = {
      title,
      description,
      budget,
      category: category._id,
    }
  }
  const [tags, setTags] = useState(prevTags || [])
  const [date, setDate] = useState(new Date(deadline || ''))
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: editValues,
  })
  const { isCreating, createProject } = useCreateProject()
  const { isEdiging, editProject } = useEditProject()
  const onSubmit = data => {
    const newProject = { ...data, deadline: new Date(date).toISOString(), tags }
    if (isEditing) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose()
            reset()
          },
        }
      )
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose()
          reset()
        },
      })
    }
  }
  const { categories } = useCategories()
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <Input
        label="عنوان پروژه"
        name="title"
        register={register}
        required
        validationSchema={{
          required: 'عنوان ظروری است',
          minLength: {
            value: 10,
            message: 'طول عنوان نامعتبر است',
          },
        }}
        errors={errors}
      />
      <Input
        label="توضیحات"
        name="description"
        register={register}
        required
        validationSchema={{
          required: 'توضیحات ظروری است',
          minLength: {
            value: 10,
            message: 'طول توضحات نامعتبر است',
          },
        }}
        errors={errors}
      />
      <Input
        label="بودجه"
        name="budget"
        register={register}
        required
        type="number"
        validationSchema={{
          required: 'بودجه ظروری است',
          minLength: {
            value: 4,
            message: 'طول بودجه نامعتبر است',
          },
        }}
        errors={errors}
      />
      <RHFSelect
        label="دسته بندی"
        name="category"
        register={register}
        options={categories}
      />
      <div>
        <label className="mb-2 block text-secondary-700">تگ ها</label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <DatePickerField label="ددلاین" date={date} setDate={setDate} />
      {isCreating || isEdiging ? (
        <Loading />
      ) : (
        <button className="btn btn--primary w-full">
          {!isEditing ? 'ایجاد پروژه جدید' : 'ویرایش پروژه'}
        </button>
      )}
    </form>
  )
}

export default CreateProjectForm
