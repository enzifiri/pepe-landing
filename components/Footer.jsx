"use client"

const TwitterIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current">
    <title>Twitter</title>
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.223.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
)

const TelegramIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current">
    <title>Telegram</title>
    <path d="M.434 9.832c-.52.203-.506.84.022 1.026l4.633 1.486L19.46 3.034c.423-.27.755-.12.43.203L6.15 16.51l.002 4.694c.48.002.693-.223.96-.484l2.25-2.164 4.755 3.51c.852.51 1.44.248 1.65-.774l3.29-15.54c.29-1.317-.48-1.845-1.35-1.513L.434 9.832Z" />
  </svg>
)

const DiscordIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current">
    <title>Discord</title>
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z" />
  </svg>
)

const Footer = () => {
  const tokenName = process.env.NEXT_PUBLIC_TOKEN_NAME || "WPEPE"
  const footerText = "Join Us! To The MOOOOOOOOOOOOOOOON!"
  const twitterUrl = process.env.NEXT_PUBLIC_TWITTER_URL
  const telegramUrl = process.env.NEXT_PUBLIC_TELEGRAM_URL
  const discordUrl = process.env.NEXT_PUBLIC_DISCORD_URL
  const copyrightText = "© 2025 All rights reserved"

  return (
    <footer className="w-full">
      <div className="bg-wpepe-bg py-12 px-8 text-center relative">
        <div className="absolute top-0 left-0 w-full h-8 -translate-y-full">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M0 32C240 0 480 0 720 0C960 0 1200 0 1440 32V0H0V32Z" fill="#D7C49E" />
          </svg>
        </div>

        <div className="flex flex-col items-center gap-6">
          <h2 className="text-4xl font-bold text-slate-800 tracking-wider">{tokenName}</h2>
          <p className="max-w-xl text-slate-700">{footerText}</p>

          <div className="flex items-center gap-4 mt-2">
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-slate-800 hover:bg-yellow-500 transition-colors"
            >
              <TwitterIcon />
            </a>
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-slate-800 hover:bg-yellow-500 transition-colors"
            >
              <TelegramIcon />
            </a>
            <a
              href={discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-slate-800 hover:bg-yellow-500 transition-colors"
            >
              <DiscordIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-green-500 py-4 px-8 text-center text-white font-semibold">
        <p>{copyrightText}</p>
      </div>
    </footer>
  )
}

export default Footer
