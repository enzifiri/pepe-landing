"use client"

import { useState } from "react"

const CopyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
    />
  </svg>
)

const TokenomicsSection = () => {
  const tokenName = process.env.NEXT_PUBLIC_TOKEN_NAME || "WPEPE"
  const tokenomicsSubtitle = `Don't miss the chance, grab your ${tokenName} tokens now!`
  const totalSupply = process.env.NEXT_PUBLIC_TOTAL_SUPPLY || "676,602,254"
  const coinTicker = process.env.NEXT_PUBLIC_COIN_TICKER || "WPEPE"
  const symbol = `$${coinTicker}`
  const lpTokensText = "LP Tokens Are Burnt, And Contract Ownership Is Renounced."
  const totalName = tokenName
  const tokenAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "0x865331a601F129540b6F70a9FCA2Bd9Dd71de298"
  const areYouReadyTitle = "ARE YOU READY?"
  const areYouReadyText = `Recently, many meme coins have emerged in the crypto space. These projects grow with the power of their communities and bring fun into the world of investing. Yet within this movement, there is a need for a true leader to stand out.
Meme coins are not just about humor; they also provide utility and unity. They are creating a new culture within the crypto ecosystem. We believe in the power of communities and in the bright future of memes.`
  const buyButtonText = "Buy Now"
  const buyNowLink = process.env.NEXT_PUBLIC_BUY_NOW_LINK || "#"

  const [copyStatus, setCopyStatus] = useState("Copy")

  const handleCopy = () => {
    if (tokenAddress) {
      navigator.clipboard.writeText(tokenAddress)
      setCopyStatus("Copied!")
      setTimeout(() => setCopyStatus("Copy"), 2000)
    }
  }

  return (
    <section className="relative bg-[#006400] text-white pt-20 px-4 md:px-8 overflow-hidden">
      <div className="container mx-auto z-10 relative">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold tracking-wider">TOKENOMICS</h2>
          <p className="mt-2 text-lg text-gray-300">{tokenomicsSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-green-700 bg-opacity-50 border border-green-400 rounded-xl p-4">
            <h3 className="text-gray-300">Total Supply</h3>
            <div className="text-2xl font-bold">
              <span>{totalSupply}</span>
            </div>
          </div>
          <div className="bg-green-700 bg-opacity-50 border border-green-400 rounded-xl p-4">
            <h3 className="text-gray-300">Symbol</h3>
            <div className="text-2xl font-bold">
              <span>{symbol}</span>
            </div>
          </div>
          <div className="bg-green-700 bg-opacity-50 border border-green-400 rounded-xl p-4 flex items-center justify-center text-center">
            <p className="font-semibold">{lpTokensText}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <div className="bg-green-700 bg-opacity-50 border border-green-400 rounded-xl p-4">
            <h3 className="text-gray-300">Token Name</h3>
            <p className="text-2xl font-bold">{totalName}</p>
          </div>
          <div className="bg-green-700 bg-opacity-50 border border-green-400 rounded-xl p-4">
            <h3 className="text-gray-300">Token Address</h3>
            <div className="flex items-center justify-between gap-4">
              <p className="text-lg font-mono break-all md:text-2xl">{tokenAddress}</p>
              <button
                onClick={handleCopy}
                title={copyStatus}
                className="p-2 rounded-md hover:bg-green-600 transition-colors"
              >
                <CopyIcon />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end mt-20">
          <div className="flex flex-col items-start gap-6 text-left pb-24">
            <h2 className="text-5xl font-extrabold">{areYouReadyTitle}</h2>
            <p className="text-gray-200">{areYouReadyText}</p>
            <a
              href={buyNowLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-800 text-xl font-bold py-3 px-10 rounded-xl border-2 border-gray-400 shadow-[4px_4px_0_0_rgba(0,0,0,0.25)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200"
            >
              {buyButtonText}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 z-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0 100C240 25 960 129.5 1440 29V100H0Z" fill="#D7C49E" />
        </svg>
      </div>
    </section>
  )
}

export default TokenomicsSection
