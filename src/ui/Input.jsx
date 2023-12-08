export default function Input({
  label,
  name,
  register,
  type = 'text',
  required,
  validationSchema,
  errors,
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="mb-1 text-secondary-700" htmlFor={name}>
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        {...register(name, validationSchema)}
        id={name}
        type={type}
        className="textField__input"
        autoComplete="off"
      />
      {errors && errors[name] && <span className="text-error block text-sm mt-2">{errors[name]?.message}</span>}
    </div>
  )
}
