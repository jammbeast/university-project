import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmailConfirm = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    // Для теста просто редиректим на главную страницу
    navigate('/');
  };

  return (
    <div className="bg-black text-white h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold mb-6">Письмо отправлено!</h2>
      <p className="text-lg mb-6">Пожалуйста, проверьте вашу почту, чтобы завершить авторизацию.</p>
      <p className="text-lg mb-6">Вы успешно ввели ваш пароль. Теперь вы можете войти в систему.</p>
      <button onClick={handleRedirect} className="p-2 bg-[#9B0C29] text-white rounded-lg">
        Вернуться на главную
      </button>
    </div>
  );
};

export default EmailConfirm;
