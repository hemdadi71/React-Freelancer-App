import { useMutation } from '@tanstack/react-query'
import { completeProfile } from '../../services/authService'
import toast from 'react-hot-toast'
import Loading from '../../ui/Loading'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Input from '../../ui/Input'
import RadioInputGroup from '../../ui/RadioInputGroup'

const CompleteProfileForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()
  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  })
  const onSubmit = async data => {
    console.log(data)
    try {
      const { user, message } = await mutateAsync(data)
      toast.success(message)
      if (!user.isActive) return navigate('/complete-profile')
      if (!user.status !== 2) {
        navigate('/')
        toast('پروفایل شما در انتظار تایید است', {
          style: {
            backgroundColor: 'yellow',
          },
        })
        return
      }

      if (user.role === 'OWNER') navigate('/owner')
      if (user.role === 'FREELANCER') navigate('/freelancer')
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }
  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="نام و نام خانوادگی"
            name="name"
            register={register}
            required
            errors={errors}
            validationSchema={{ required: 'نام و نام خانوادگی ضروری است' }}
          />
          <Input
            label="ایمیل"
            name="email"
            register={register}
            required
            errors={errors}
            validationSchema={{
              required: 'ایمیل ضروری است',
              pattern: {
                value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3,4}$/,
                message:'ایمیل نامعتبر است'
              },
            }}
          />
          <RadioInputGroup
            errors={errors}
            register={register}
            watch={watch}
            configs={{
              name: 'role',
              validationSchema: { required: 'انتخاب نقش ضروری است' },
              options: [
                { value: 'OWNER', label: 'کارفرما' },
                { value: 'FREELANCER', label: 'فریلنسر' },
              ],
            }}
          />
          {/* <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center gap-x-8">
              <RadioInput
                label="کارفرما"
                value="OWNER"
                register={register}
                validationSchema={{ required: 'انتخاب نقش ضروری است' }}
                id="OWNER"
                name="role"
                watch={watch}
              />
              <RadioInput
                label="فریلنسر"
                value="FREELANCER"
                register={register}
                validationSchema={{ required: 'انتخاب نقش ضروری است' }}
                id="FREELANCER"
                name="role"
                watch={watch}
              />
            </div>
            <div>
              {errors && errors['role'] && (
                <span className="text-error block text-sm mt-2">
                  {errors['role']?.message}
                </span>
              )}
            </div>
          </div> */}
          <div>
            {isPending ? (
              <Loading />
            ) : (
              <button className="btn btn--primary w-full">تایید</button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default CompleteProfileForm
