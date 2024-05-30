import hero from '../../../Images/hero.svg'

export default function Header(props) {
  return (
    <div className="relative bg-gray-50">
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-6 pb-6 sm:pt-8 sm:pb-10 md:pt-10 md:pb-14 text-center lg:py-36 lg:text-left">
          <div className="px-2 lg:w-1/2 sm:px-8 xl:pr-10">
            <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
              <span className="hidden sm:block lg:hidden">{ props.header1 }</span>{' '}
              <span className="block sm:hidden lg:block">Your One-Stop Shop for  </span>{' '}
              <span className="block sm:hidden lg:block">Product Sourcing Fulfillment keep same half</span>{' '}
              <span className="block text-violet-500 xl:inline">black half purple style</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-base md:text-xl md:mt-5 md:max-w-3xl">
              { props.description1 }
            </p>
            <p className="mt-3 max-w-md mx-auto text-sm text-gray-400 sm:text-base md:text-xl md:mt-5 md:max-w-3xl">
              { props.description2 }
            </p>
            <div className="mt-4 lg:mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href={ props.buttonRedirect }
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-violet-500 hover:bg-violet-600 md:py-4 md:text-lg md:px-10"
                >
                 Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-96 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-3/5 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={hero}
            alt=""
          />
        </div>
      </main>
    </div>

  )
}