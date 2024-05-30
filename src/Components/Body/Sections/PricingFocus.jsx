import { CheckIcon } from "@heroicons/react/outline"

export default function Pricing(props) {
  return (
    <div className="bg-gray-900">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Additional solutions</h2>
            <p className="mt-4 text-lg text-gray-500">
              No matter your business type, we have solutions tailored to fit your needs.
            </p>
          </div>
          <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
            <dt>
              <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
              <p className="ml-9 text-lg leading-6 font-medium text-gray-900">Dropshipping </p>
            </dt>
            <dt>
              <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
              <p className="ml-9 text-lg leading-6 font-medium text-gray-900">Bulk Orders </p>
            </dt>
            <dt>
              <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
              <p className="ml-9 text-lg leading-6 font-medium text-gray-900">Custom Content Creation </p>
            </dt>
            <dt>
              <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
              <p className="ml-9 text-lg leading-6 font-medium text-gray-900">Product Development </p>
            </dt>
            <dt>
              <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
              <p className="ml-9 text-lg leading-6 font-medium text-gray-900">Custom Packaging  </p>
            </dt>
            <dt>
              <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
              <p className="ml-9 text-lg leading-6 font-medium text-gray-900">Private Labeling & White Labeling</p>
            </dt>
          </dl>
        </div>
      </div>
      <div className="bg-white pb-14">
      </div>
    </div>
  )
}
