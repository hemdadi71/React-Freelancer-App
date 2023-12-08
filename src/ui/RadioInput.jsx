const RadioInput = ({
  label,
  value,
  name,
  id,
  register,
  watch,
  validationSchema,
}) => {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <input
        className="cursor-pointer w-4 h-4 form-radio text-primary-900 focus:ring-white"
        type="radio"
        name={name}
        {...register(name, validationSchema)}
        checked={watch(name) === value}
        id={id}
        value={value}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default RadioInput
