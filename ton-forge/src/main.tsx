import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TonConnectUIProvider manifestUrl="/tonconnect-manifest.json">
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </TonConnectUIProvider>
  </StrictMode>
);
