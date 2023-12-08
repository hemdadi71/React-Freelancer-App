
import Loading from '../../ui/Loading'
import Input from '../../ui/Input'

const SendOTPForm = ({ register, onSubmit, isPending }) => {
  return (
    <>
      <div>
        <form className="space-y-8" onSubmit={onSubmit}>
          <Input
            label="شماره موبایل"
            name="phoneNumber"
            register={register}
            type='number'
          />
          <div>
            {isPending ? (
              <Loading />
            ) : (
              <button className="btn btn--primary w-full">
                ارسال کد تایید
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  )
}

export default SendOTPForm
