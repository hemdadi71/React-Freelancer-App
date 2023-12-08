
export default function TextField({ label, name, value, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        type="text"
        className="textField__input"
      />
    </div>
  )
}
