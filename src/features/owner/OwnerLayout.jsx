import { HiCollection, HiHome } from 'react-icons/hi'
import AppLayout from '../../ui/AppLayout'
import CustomNavLink from '../../ui/CustomNavLink'
import Sidebar from '../../ui/Sidebar'

const OwnerLayout = () => {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink to="/owner/dashboard">
          <HiCollection />
          <span>خانه</span>
        </CustomNavLink>

        <CustomNavLink to="/owner/projects">
          <HiHome />
          <span>پروژه ها</span>
        </CustomNavLink>
      </Sidebar>
    </AppLayout>
  )
}

export default OwnerLayout
