import { useState } from 'react'
import { TonConnectUIProvider, TonConnectButton, useTonAddress } from '@tonconnect/ui-react'

function App() {
  const userFriendlyAddress = useTonAddress()
  const [name, setName] = useState('')
  const [ticker, setTicker] = useState('')
  const [supply, setSupply] = useState('')
  const [creating, setCreating] = useState(false)

  async function createToken() {
    setCreating(true)
    // TODO: call TON Minter REST API
    console.log('Create token', { name, ticker, supply })
    setCreating(false)
  }

  return (
    <TonConnectUIProvider manifestUrl="/tonconnect-manifest.json">
      <div className="p-4 text-white bg-gray-900 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">TON Token Forge</h1>
        <TonConnectButton />
        {userFriendlyAddress && (
          <div className="mt-4 space-y-2">
            <input
              className="w-full p-2 rounded bg-gray-800"
              placeholder="Token Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input
              className="w-full p-2 rounded bg-gray-800"
              placeholder="Ticker"
              value={ticker}
              onChange={e => setTicker(e.target.value)}
            />
            <input
              className="w-full p-2 rounded bg-gray-800"
              placeholder="Total Supply"
              value={supply}
              onChange={e => setSupply(e.target.value)}
            />
            <button
              className="bg-blue-600 hover:bg-blue-700 p-2 w-full rounded text-white disabled:opacity-50"
              disabled={creating}
              onClick={createToken}
            >
              Create Token
            </button>
          </div>
        )}
      </div>
    </TonConnectUIProvider>
  )
}

export default App
