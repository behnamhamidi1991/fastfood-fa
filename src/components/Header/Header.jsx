import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../../features/themeSlice/themeSlice';

const Header = () => {
  const theme = useSelector((state) => state.theme.dark);
  const dispatch = useDispatch();
  return (
    <div>
      هدر وبسایت
      <button onClick={() => dispatch(toggle(!theme))}>حالت تاریک</button>
    </div>
  );
};

export default Header;
