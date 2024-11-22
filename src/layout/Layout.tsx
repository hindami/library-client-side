import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <main>
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Outlet></Outlet>
      <footer>Footer</footer>
    </main>
  );
};

export default Layout;
