import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import OTPInput from 'react-otp-input'
import { checkOtp } from '../../services/authService'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import { CiEdit } from 'react-icons/ci'
import Loading from '../../ui/Loading'
export const CheckOTPForm = ({
  phoneNumber,
  onBack,
  onResendOtp,
  time,
  setTime,
  otpResponse,
}) => {
  const [otp, setOtp] = useState('')

  const navigate = useNavigate()
  const { mutateAsync, isPending } = useMutation({
    mutationFn: checkOtp,
  })
  const checkOtpHandler = async e => {
    e.preventDefault()
    try {
      const { message, user } = await mutateAsync({
        phoneNumber,
        otp,
      })
      if (!user.isActive) return navigate('/complete-profile')
      if (!user.status !== 2) {
        navigate('/')
        toast.error('پروفایل شما در انتظار تایید است')
        return
      }

      if (user.role === 'OWNER') navigate('/owner')
      if (user.role === 'FREELANCER') navigate('/freelancer')

      toast.success(message)
      console.log(user)
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }
  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime(t => t - 1), 1000)
    return () => {
      if (timer) clearInterval(timer)
    }
  }, [time, setTime])
  return (
    <div>
      <button onClick={onBack}>
        <HiArrowRight className="w-6 h-6 text-secondary-500" />
      </button>
      {otpResponse && (
        <p className="flex items-center gap-x-2 my-4">
          <span>{otpResponse?.message}</span>{' '}
          <button onClick={onBack}>
            <CiEdit className="w-6 h-6 text-primary-900" />
          </button>
        </p>
      )}
      <form className="space-y-8" onSubmit={checkOtpHandler}>
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={props => <input type="number" {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center"
          inputStyle={{
            width: '2.5rem',
            padding: '0.5rem 0.2rem',
            border: '1px solid rgb(var(--color-primary-300))',
            borderRadius: '0.5rem',
          }}
        />

        <div className="mt-4 text-secondary-900">
          {time > 0 ? (
            <p>{time} ثانیه تا ارسال مجدد کد</p>
          ) : (
            <button onClick={onResendOtp}>ارسال مجدد کد تایید</button>
          )}
        </div>
        <div>
          {isPending ? (
            <Loading />
          ) : (
            <button className="btn btn--primary w-full">تایید</button>
          )}
        </div>
      </form>
    </div>
  )
}
