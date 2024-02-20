import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useSelector } from 'react-redux';
import { toggle } from '../features/themeSlice/themeSlice';

const AppLayout = () => {
  const theme = useSelector((state) => state.theme.dark);

  return (
    <div className={theme ? 'main dark' : 'main'}>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default AppLayout;
