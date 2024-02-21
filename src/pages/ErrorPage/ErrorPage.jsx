import React from 'react';
import './error.scss';
import { useRouteError } from 'react-router-dom';
import BackBtn from '../../components/shared/BackBtn/BackBtn';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="error-page">
      <div className="error-header">
        <h1 className="error-status">{error.status}</h1>
        <h1 className="error-sorry">متاسفیم!</h1>
        <p className="error-farsi">خطا در حین انجام عملیات!</p>
      </div>

      <div className="error-en">
        <p>{error.data}</p>
        <p>{error.message}</p>
      </div>

      <div className="error-btn-contanier">
        <BackBtn />
      </div>
    </div>
  );
};

export default ErrorPage;
