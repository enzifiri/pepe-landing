"use client"

import Image from "next/image"
import { useState } from "react"

const HeroSection = () => {
  const heroImageUrl =
    process.env.NEXT_PUBLIC_MAIN_IMAGE || "https://pbs.twimg.com/media/GrfSJbZaIAAaUb6?format=jpg&name=large"

  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "0x865331a601F129540b6F70a9FCA2Bd9Dd71de298"
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <section className="relative w-full">
      <div className="w-full">
        <Image
          src={heroImageUrl || "/placeholder.svg"}
          alt="Wrapped Pepe"
          layout="responsive"
          width={1920}
          height={800}
          quality={100}
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0 22.1667C240 70.9667 960 -44.5 1440 22.1667V100H0V22.1667Z" fill="#34A853" />
        </svg>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform flex flex-col items-center">
          <div className="bg-[#F5E6B8] rounded-2xl px-6 py-4 border-4 border-[#8B4513] shadow-[8px_8px_0_0_rgba(139,69,19,0.4)] hover:shadow-[4px_4px_0_0_rgba(139,69,19,0.4)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 max-w-lg">
            <div className="text-[#8B4513] mb-2 text-center uppercase tracking-wide text-xl font-extrabold">
              Contract Address
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[#2D5016] break-all leading-tight font-extrabold text-lg">{contractAddress}</span>
              <button
                onClick={copyToClipboard}
                className="p-2 hover:bg-[#E6D7A8] rounded-lg transition-colors flex-shrink-0"
                title="Copy contract address"
              >
                {copied ? (
                  <svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-[#8B4513]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                    <path className="flex-col" d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
