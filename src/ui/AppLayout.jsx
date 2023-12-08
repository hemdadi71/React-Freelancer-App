import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

const AppLayout = () => {
  return (
    <div className="grid grid-rows-[auto_1fr] h-screen grid-cols-[15rem_1fr]">
      <Header />
      <Sidebar />
      <div className="bg-secondary-100 p-8 overflow-y-hidden">
        <div className="mx-auto max-w-screen-lg flex flex-col gap-y-12">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AppLayout
