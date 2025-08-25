import Image from "next/image"

const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 text-green-600">{icon}</div>
      <div>
        <h3 className="text-xl font-bold text-slate-800">{title}</h3>
        <p className="mt-1 text-slate-700">{description}</p>
      </div>
    </div>
  )
}

const AboutSection = () => {
  const tokenName = process.env.NEXT_PUBLIC_TOKEN_NAME || "WPEPE"
  const aboutImageUrl = process.env.NEXT_PUBLIC_ABOUT_TEST_IMAGE || "https://i.hizliresim.com/rpqftni.png"

  return (
    <section className="bg-wpepe-bg py-16 px-8">
      <div className="container mx-auto grid md:grid-cols-5 gap-16 items-center">
        <div className="md:col-span-2">
          <Image
            src={aboutImageUrl || "/placeholder.svg"}
            alt={`About ${tokenName}`}
            width={800}
            height={900}
            className="rounded-2xl w-full h-auto"
          />
        </div>

        <div className="md:col-span-3 flex flex-col">
          <h2 className="text-5xl font-bold text-slate-800 tracking-wider mb-6">ABOUT {tokenName}</h2>

          <div className="flex flex-col gap-8">
            <p className="text-xl text-slate-800">
              {tokenName} is an innovative cryptocurrency that brings together the power and humor of Pepe, the beloved
              icon of internet culture. We aim to create a community-focused, fun, and reliable ecosystem.
            </p>

            <FeatureItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              }
              title="Liquidity Pool"
              description="Our liquidity pool is securely locked to provide a stable and reliable trading environment for all users."
            />
            <FeatureItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 7.5h.75A2.25 2.25 0 0 0 10.5 5.25v-2.25c0-.966.965-1.75 2.162-1.75a2.25 2.25 0 0 1 2.163 1.75V5.25a2.25 2.25 0 0 0 2.25 2.25h.75m-9 0a2.25 2.25 0 0 0-2.25 2.25v2.25c0 .966.965 1.75 2.162 1.75a2.25 2.25 0 0 1 2.163-1.75V11.25a2.25 2.25 0 0 0 2.25-2.25v-.75m-9 0h-.75A2.25 2.25 0 0 0 5.25 9.75v.75m9-9h.75A2.25 2.25 0 0 1 18.75 5.25V7.5a2.25 2.25 0 0 0 2.25 2.25h.75m-9 0h-.75A2.25 2.25 0 0 0 5.25 11.25V13.5c0 .966.965 1.75 2.162 1.75a2.25 2.25 0 0 1 2.163-1.75V15.75a2.25 2.25 0 0 0 2.25 2.25v-.75m9-9h.75A2.25 2.25 0 0 1 18.75 18.75V21a2.25 2.25 0 0 0 2.25 2.25h.75m-9 0h-.75A2.25 2.25 0 0 0 5.25 18.75V21a2.25 2.25 0 0 0 2.25 2.25h.75M7.5 16.5a2.25 2.25 0 0 0 2.25 2.25v.75m-9-9h-.75A2.25 2.25 0 0 0 5.25 18.75V21a2.25 2.25 0 0 0 2.25 2.25h.75m9-9h.75A2.25 2.25 0 0 1 18.75 18.75V21a2.25 2.25 0 0 0 2.25 2.25h.75m-9-9h-.75A2.25 2.25 0 0 0 5.25 18.75V21a2.25 2.25 0 0 0 2.25 2.25h.75"
                  />
                </svg>
              }
              title="Smart Contract Audited"
              description="Our contract has been professionally audited to ensure its security and integrity, providing peace of mind to our community."
            />
            <FeatureItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75a17.933 17.933 0 0 1-7.499-1.632Z"
                  />
                </svg>
              }
              title="Community Driven"
              description="Our project is built on the foundation of our strong and passionate community, whose feedback shapes our future development."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
