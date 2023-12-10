import { useSearchParams } from 'react-router-dom'
import Select from './Select'

const FilterDropDown = ({ options, filterfield }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const value = searchParams.get(filterfield) || ''
  const handleChange = e => {
    searchParams.set(filterfield, e.target.value)
    setSearchParams(searchParams)
  }
  return <Select onChange={handleChange} value={value} options={options} />
}

export default FilterDropDown
