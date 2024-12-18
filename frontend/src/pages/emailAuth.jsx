import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EmailAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Простая валидация почты
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError('Введите корректный адрес электронной почты');
      return;
    }

    // Валидация пароля
    if (password.length < 6) {
      setPasswordError('Пароль должен содержать минимум 6 символов');
      return;
    }

    // Валидация подтверждения пароля
    if (password !== confirmPassword) {
      setPasswordError('Пароли не совпадают');
      return;
    }

    // Если все ок, редиректим на следующую страницу
    navigate('/email/confirm'); // Переход на страницу подтверждения
  };

  return (
    <div className="bg-black text-white h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold mb-6">Введите ваш Email и Пароль</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center w-96 p-6 bg-[#DBDCD0] rounded-lg shadow-lg">
        <input
          type="email"
          placeholder="Email"
          className="p-2 mb-4 w-full rounded-lg text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
        
        <input 
          type="password"
          placeholder="Пароль"
          className="p-2 mb-4 w-full rounded-lg text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <input
          type="password"
          placeholder="Подтвердите пароль"
          className="p-2 mb-4 w-full rounded-lg text-black"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        
        {passwordError && <div className="text-red-500 text-sm mb-4">{passwordError}</div>}
        
        <button type="submit" className="p-2 bg-[#9B0C29] text-white rounded-lg w-full">
          Продолжить
        </button>
      </form>
    </div>
  );
};

export default EmailAuth;
