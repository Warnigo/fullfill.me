import tiktokIcon from './1714299248tiktok-shop-logo-png-transparent.png'

export default function FeaturesList(props) {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-48">
        <div className="lg:text-center">
          <h2 className="text-base text-violet-500 font-semibold tracking-wide uppercase">{props.title}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {props.header}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {props.description}
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
           
              <div  className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white">
                    <img src={tiktokIcon} className="h-6 w-6" aria-hidden="true" alt='img' />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900"></p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500"></dd>
              </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
