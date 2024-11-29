import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { CContainer } from '@coreui/react';

import './index.scss';

export const DefaultLayout = () => {
  return (
    <div>
      <Sidebar />
      <div className="wrapper layout-content d-flex flex-column min-vh-100">
        <div className="body flex-grow-1">
          <CContainer>
            <Outlet />
          </CContainer>
        </div>
      </div>
    </div>
  )
}
