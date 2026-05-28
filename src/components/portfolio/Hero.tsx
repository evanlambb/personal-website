import Image from 'next/image'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100svh-var(--header-height))] flex-col"
      aria-labelledby="hero-heading"
    >
      <div className="flex flex-1 items-center justify-center px-6 py-12 sm:px-10 md:py-16 lg:px-14">
        <div className="mx-auto flex w-full max-w-4xl items-center justify-center gap-6 sm:gap-10 md:gap-14 lg:gap-16">
          <div className="shrink text-left">
            <p className="hero-intro">Hey there, my name is</p>
            <h1 id="hero-heading" className="hero-title">
              Evan Lamb
            </h1>
            <h2 className="hero-subtitle">Backend Software Engineer</h2>
          </div>
          <div className="shrink-0">
            <Image
              src="/images/profile_photo.jpg"
              alt="Evan Lamb"
              width={320}
              height={320}
              className="hero-headshot aspect-square h-40 w-40 rounded-full object-cover sm:h-64 sm:w-64 md:h-80 md:w-80"
              priority
              sizes="(max-width: 640px) 160px, (max-width: 768px) 256px, 320px"
            />
          </div>
        </div>
      </div>
      <hr className="hero-divider mt-auto w-full shrink-0" />
    </section>
  )
}
