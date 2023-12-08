import { HiCollection, HiHome } from 'react-icons/hi'
import CustomNavLink from './CustomNavLink'

const Sidebar = () => {
  return (
    <div className="bg-secondary-0 row-start-1 row-span-2 border-l border-secondary-200 p-4">
      <ul className="flex flex-col gap-y-4">
        <li>
          <CustomNavLink to="/owner/dashboard">
            <HiCollection />
            <span>خانه</span>
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/owner/projects">
            <HiHome />
            <span>پروژه ها</span>
          </CustomNavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
