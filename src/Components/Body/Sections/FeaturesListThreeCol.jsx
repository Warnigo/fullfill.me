import tiktokIcon from './1714299248tiktok-shop-logo-png-transparent.png'
import fbaIcon from './Amazon-FBA-Logo.png'

export default function FeaturesListThreeCol(props) {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">A better way to send money.</h2>
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          <div >
            <dt>
              <div className="flex items-center justify-center h-24 w-24 rounded-md  text-white">
                <img src={tiktokIcon} className="h-14 w-14" aria-hidden="true" alt='' />
              </div>
              <p className="mt-5 text-lg leading-6 font-medium text-gray-900">Tik Tok Shop Owners</p>
            </dt>
          </div>

          <div >
            <dt>
              <div className="flex items-center justify-center h-24 w-24 rounded-md  text-white">
                <img src={fbaIcon} className="h-14 w-14" aria-hidden="true" alt='' />
              </div>
              <p className="mt-5 text-lg leading-6 font-medium text-gray-900">Amazon FBA	</p>
            </dt>
          </div>

          <div>
            <dt>
              <div className="flex items-center justify-center h-24 w-24 rounded-md  text-white">
                <div className="h-14 w-14" aria-hidden="true" />
              </div>
              <p className="mt-5 text-lg leading-6 font-medium text-gray-900">Brands or Business Owner</p>
            </dt>
          </div>
        </dl>
      </div>
    </div>
  )
}
