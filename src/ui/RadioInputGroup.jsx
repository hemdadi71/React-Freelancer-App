import RadioInput from './RadioInput'

const RadioInputGroup = ({ register, watch, errors, configs }) => {
  const { name, validationSchema = {}, options } = configs
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-center justify-center gap-x-8">
        {options.map(({ label, value }) => (
          <RadioInput
            key={value}
            label={label}
            value={value}
            id={value}
            name={name}
            register={register}
            watch={watch}
            validationSchema={validationSchema}
            errors={errors}
          />
        ))}
      </div>
      <div>
        {errors && errors[name] && (
          <span className="text-error block text-sm mt-2">
            {errors[name]?.message}
          </span>
        )}
      </div>
    </div>
  )
}

export default RadioInputGroup
