import React from 'react';
import './NotFoundPage.css';
import { Link } from "react-router-dom";

function NotFoundPage({ goBack }) {
  const handleGoBack = () => {
    if (goBack && typeof goBack === 'function') {
      goBack();
    }
  };

  return (
    <main className="notFound__container">
        <h1 className="notFound__title">404</h1>
        <p className="notFound__text">Страница не найдена</p> 
        <Link onClick={handleGoBack} className="notFound__button">Назад</Link>
    </main>
  );
}

export default NotFoundPage;
