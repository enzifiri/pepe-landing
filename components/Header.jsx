const Header = () => {
  const tokenName = process.env.NEXT_PUBLIC_TOKEN_NAME || "WPEPE"
  const buyButtonText = "Buy Now"
  const buyNowLink = process.env.NEXT_PUBLIC_BUY_NOW_LINK || "#"

  return (
    <header className="w-full bg-wpepe-bg py-4 px-8 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold text-slate-800 tracking-wider">{tokenName}</h1>
        </div>

        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-xl text-slate-700 hover:text-slate-900 transition-colors duration-200">
            About {tokenName.toLowerCase()}
          </a>
          <a href="#" className="text-xl text-slate-700 hover:text-slate-900 transition-colors duration-200">
            Tokenomics
          </a>
        </nav>

        <a
          href={buyNowLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
            bg-gray-100 
            text-slate-800 
            font-semibold 
            py-2 
            px-6 
            rounded-xl 
            border 
            border-gray-300 
            shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] 
            hover:shadow-none 
            hover:translate-x-[4px] 
            hover:translate-y-[4px] 
            transition-all 
            duration-200
          "
        >
          {buyButtonText}
        </a>
      </div>
    </header>
  )
}

export default Header
