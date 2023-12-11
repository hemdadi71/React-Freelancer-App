import useCategories from '../../../hooks/useCategories'
import FilterDropDown from '../../../ui/FilterDropDown'
import Filter from '../../../ui/filter'

const sortOptions = [
  { label: 'جدیدترین', value: 'latest' },
  { label: 'قدیمی ترین', value: 'earliest' },
]

const statusOptions = [
  {
    value: 'ALL',
    label: 'همه',
  },
  {
    value: 'OPEN',
    label: 'باز',
  },
  {
    value: 'CLOSED',
    label: 'بسته',
  },
]

const ProjectsHeader = () => {
  const { transformCategories } = useCategories()
  return (
    <div className="flex items-center justify-between text-secondary-700 mb-8">
      <h1 className="text-lg font-bold">لیست پروژه ها</h1>
      <div className="flex gap-x-8 items-center">
        <Filter filterField='status' options={statusOptions} />
        <FilterDropDown filterfield="sort" options={sortOptions} />
        <FilterDropDown
          filterfield="category"
          options={[{ value: 'ALL', label: 'همه' }, ...transformCategories]}
        />
      </div>
    </div>
  )
}

export default ProjectsHeader
