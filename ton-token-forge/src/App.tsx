import { useEffect, useState } from 'react'
import { TonConnectUIProvider, TonConnectButton, useTonAddress } from '@tonconnect/ui-react'
import { useTranslation } from 'react-i18next'
import { useForgeStore } from './store'

declare global {
  interface TelegramWebApp {
    ready: () => void
    expand: () => void
    shareText?: (text: string) => void
    openTelegramLink?: (url: string) => void
  }
  interface Window {
    Telegram?: { WebApp: TelegramWebApp }
  }
}

function App() {
  const { t } = useTranslation()
  const userFriendlyAddress = useTonAddress()
  const [name, setName] = useState('')
  const [ticker, setTicker] = useState('')
  const [supply, setSupply] = useState('')
  const [creating, setCreating] = useState(false)
  const setToken = useForgeStore(s => s.setToken)

  useEffect(() => {
    const tg = window.Telegram?.WebApp
    if (tg) {
      tg.ready()
      tg.expand()
    }
  }, [])

  async function createToken() {
    setCreating(true)
    // TODO: call TON Minter REST API
    console.log('Create token', { name, ticker, supply })
    setToken({ name, ticker, supply })
    setCreating(false)
  }

  function shareReferral() {
    const tg = window.Telegram?.WebApp
    if (!tg || !userFriendlyAddress) return
    const url = `https://t.me/YOUR_BOT?startapp=ref_${userFriendlyAddress}`
    if (tg.shareText) tg.shareText(url)
    else if (tg.openTelegramLink) tg.openTelegramLink(url)
  }

  return (
    <TonConnectUIProvider manifestUrl="/tonconnect-manifest.json">
      <div className="p-4 min-h-screen" style={{ backgroundColor: 'var(--tg-theme-bg-color)', color: 'var(--tg-theme-text-color)' }}>
        <h1 className="text-2xl font-bold mb-4">{t('title')}</h1>
        <TonConnectButton />
        {userFriendlyAddress && (
          <div className="mt-4 space-y-2">
            <input
              className="w-full p-2 rounded bg-gray-800"
              placeholder={t('tokenName')}
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input
              className="w-full p-2 rounded bg-gray-800"
              placeholder={t('ticker')}
              value={ticker}
              onChange={e => setTicker(e.target.value)}
            />
            <input
              className="w-full p-2 rounded bg-gray-800"
              placeholder={t('supply')}
              value={supply}
              onChange={e => setSupply(e.target.value)}
            />
            <button
              className="bg-blue-600 hover:bg-blue-700 p-2 w-full rounded text-white disabled:opacity-50"
              disabled={creating}
              onClick={createToken}
            >
              {creating ? '...' : t('createToken')}
            </button>
            <button
              className="bg-gray-600 hover:bg-gray-700 p-2 w-full rounded text-white"
              onClick={shareReferral}
            >
              {t('inviteFriends')}
            </button>
          </div>
        )}
      </div>
    </TonConnectUIProvider>
  )
}

export default App
