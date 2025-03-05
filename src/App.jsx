import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState, useEffect } from "react";

// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Get projectId from https://cloud.walletconnect.com
const projectId = '4a8a24d94e714b4a3640be30ac65b887'

// 2. Create wagmiConfig
const metadata = {
  name: 'AppKit',
  description: 'AppKit Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum, polygon]
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
})

// 3. Create modal
createWeb3Modal({
  metadata,
  wagmiConfig: config,
  projectId,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})

AOS.init();

function App() {
  const [bgColor, setBgColor] = useState("#ff6a00");

  useEffect(() => {
    const colors = ["#ff6a00", "#e65100", "#ffa726", "#ff9800"];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % colors.length; // Loop through colors
      setBgColor(colors[index]);
    }, 3000); // Change color every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <Routes>
                  <Route index element={<LandingPage />} />
                  <Route path="/home" element={<LandingPage />} />
              </Routes>
            </BrowserRouter>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  )
}

export default App
