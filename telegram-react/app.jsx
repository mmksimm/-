const { useState, useEffect } = React;

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    if (tg) {
      tg.ready();
      if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
        setUser(tg.initDataUnsafe.user);
      }
    }
  }, []);

  if (!user) {
    return (
      <div className="container">
        <h2>Верификация Telegram</h2>
        <p>Пожалуйста, откройте приложение внутри Telegram для прохождения верификации.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Привет, {user.first_name}!</h2>
      {user.username && <p>@{user.username}</p>}
      <p>ID: {user.id}</p>
      <p>initData: {window.Telegram.WebApp.initData}</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
