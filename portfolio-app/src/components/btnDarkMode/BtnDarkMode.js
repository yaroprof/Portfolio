import { useEffect } from 'react';
import { useLocalStorage } from './../../utils/useLocalStorage';
import detectDarkMode from '../../utils/detectDarkMode';

import sun from './sun.svg';
import moon from './moon.svg';
import './style.css';

const BtnDarkMode = () => {
  // виклик useLocalStorage
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());

  // за результатми darkMode body отримує той, чи інший клас та стилі
  // Потім компонент викликає дві функції useEffect залежності (залежно від змінної darkMode), які відслідковують зміну темного режиму та відображають відповідний клас на тілі сторінки. Функція useEffect залежності викликається кожен раз, коли значення darkMode змінюється.

  useEffect(() => {
    if (darkMode === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  // Друга функція useEffect відслідковує зміну переваги кольорової схеми, встановленої на пристрої користувача, та автоматично змінює тему, якщо користувач змінює цю настройку.

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme)').addEventListener('change', (event) => {
      const newColorScheme = event.matches ? 'dark' : 'light';
      setDarkMode(newColorScheme);
    });
  }, [setDarkMode]);

  // toggleDarkMode запускає ф-ю setDarkMode , Яка змінює показник на протилежний
  // Під час виконання коду, спочатку компонент BtnDarkMode викликає функцію useLocalStorage з двома параметрами: ключем "darkMode" та значенням функції detectDarkMode(). Ця функція зберігає у локальному сховищі браузера значення з ключем "darkMode". Якщо воно не знайдене, то встановлюється значення, отримане з функції detectDarkMode().

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === 'light' ? 'dark' : 'light';
    });
  };
  const btnNormal = 'dark-mode-btn';
  const btnActive = 'dark-mode-btn dark-mode-btn--active';
  // Нарешті, функція повертає кнопку з класом "dark-mode-btn" або "dark-mode-btn dark-mode-btn--active", залежно від того, чи ввімкнений темний режим. Кнопка містить дві іконки - сонце та місяць, що показують поточний режим.
  return (
    <button className={darkMode === 'dark' ? btnActive : btnNormal} onClick={toggleDarkMode}>
      <img src={sun} alt="light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="light mode" className="dark-mode-btn__icon" />
    </button>
  );
};

export default BtnDarkMode;
