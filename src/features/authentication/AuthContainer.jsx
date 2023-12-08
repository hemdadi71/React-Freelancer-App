import { useState } from 'react'
import SendOTPForm from './SendOTPForm'
import { CheckOTPForm } from './CheckOTPForm'
import { getOtp } from '../../services/authService'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'

const AuthContainer = () => {
  const [step, setStep] = useState(1)
  const [time, setTime] = useState(90)
  const { handleSubmit, register, getValues } = useForm()
  const {
    isPending,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  })
  const sendOtpHandler = async data => {
    console.log(data)
    if (step === 2) {
      setTime(90)
    }
    try {
      const { message } = await mutateAsync(data)
      setStep(2)
      toast.success(message)
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            setStep={setStep}
            onSubmit={handleSubmit(sendOtpHandler)}
            isPending={isPending}
            register={register}
          />
        )
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={getValues('phoneNumber')}
            onBack={() => setStep(1)}
            onResendOtp={sendOtpHandler}
            time={time}
            setTime={setTime}
            otpResponse={otpResponse}
          />
        )
      default:
        return null
    }
  }
  return (
    <div className="w-full sm:max-w-sm">
      {renderStep()}
    </div>
  )
}

export default AuthContainer
