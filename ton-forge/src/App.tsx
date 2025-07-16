import { useState } from 'react';
import { TonConnectButton, useTonConnectUI, useTonAddress } from '@tonconnect/ui-react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  const [name, setName] = useState('');
  const [ticker, setTicker] = useState('');
  const [supply, setSupply] = useState('');
  const userAddress = useTonAddress();
  const [tonConnectUI] = useTonConnectUI();

  const changeLang = (lng: string) => i18n.changeLanguage(lng);

  const createToken = async () => {
    if (!userAddress) {
      await tonConnectUI.connectWallet();
      return;
    }
    // placeholder: in real app send transaction to create token
    alert(`Token ${name} (${ticker}) with supply ${supply}`);
  };

  return (
    <div className="p-4 max-w-md mx-auto space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">TON Forge</h1>
        <TonConnectButton />
      </div>

      <div className="space-y-2">
        <label className="block">
          <span>{t('name')}</span>
          <input
            className="border p-2 w-full rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="block">
          <span>{t('ticker')}</span>
          <input
            className="border p-2 w-full rounded"
            value={ticker}
            onChange={(e) => setTicker(e.target.value)}
          />
        </label>
        <label className="block">
          <span>{t('supply')}</span>
          <input
            type="number"
            className="border p-2 w-full rounded"
            value={supply}
            onChange={(e) => setSupply(e.target.value)}
          />
        </label>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          onClick={createToken}
        >
          {t('createToken')}
        </button>
      </div>

      <div className="flex space-x-2 mt-4">
        <button className="border px-2" onClick={() => changeLang('en')}>EN</button>
        <button className="border px-2" onClick={() => changeLang('ru')}>RU</button>
      </div>
    </div>
  );
}

export default App;
