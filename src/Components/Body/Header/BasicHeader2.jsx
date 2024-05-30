import { ChevronDownIcon } from '@heroicons/react/solid'

export default function Header(props) {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            { props.header }
          </h2>
          <p className="mt-5 text-xl text-gray-500">
            { props.description }
          </p>
        </div>
      </div>
    </div>
  )
}