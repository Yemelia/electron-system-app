
import { Link } from 'react-router-dom';
import { CNavItem, CSidebar, CSidebarHeader, CSidebarNav, CSidebarToggler } from '@coreui/react';
import { useSystemInfo } from '../../hooks';

export const Sidebar = () => {
  const systemInfo = useSystemInfo();

  return (
    <CSidebar
      className="show border-end"
      position="fixed"
      narrow={false}
    >
      <CSidebarHeader className="border-bottom">
        {systemInfo && (
          <div>
            {systemInfo.cpuModel}
          </div>
        )}
      </CSidebarHeader>
      <CSidebarNav>
        <CNavItem><Link to={'/app-data-usage'}>App Data Usage</Link></CNavItem>
        <CNavItem><Link to={'/orders'}>Orders</Link></CNavItem>
      </CSidebarNav>
      <CSidebarHeader className="border-top">
        <CSidebarToggler />
      </CSidebarHeader>
    </CSidebar>
  )
}
