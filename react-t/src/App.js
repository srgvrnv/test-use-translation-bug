import React from 'react';
import './App.css';
import Test from './components/test';
import i18n from './i18n';

const Locales = () => (
  <>
    {['en', 'ru'].map(locale => (
      <button type="button" key={locale} onClick={() => { i18n.changeLanguage(locale); }}>
        {locale}
      </button>
    ))}
  </>
);

function App() {
  let tests = [];

  for (let index = 0; index < 100; index++) {
    let testsinner = [];
    for (let index2 = 0; index2 < 10; index2++) {
      testsinner.push(<Test key={`${index}_${index2}`} />);
    }
    tests.push(<Test key={index}>{testsinner}</Test>);
  }

  return (
    <>
      <Locales />
      <div>
        {tests}
      </div>
    </>
  );

}

export default App;
