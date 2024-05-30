export default function ImageShowcase(props) {
  return (
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
          <div className="bg-gray-50 h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">{props.title}</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            {props.description}
          </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-10 lg:grid-cols-3 lg:max-w-none">

            {props.posts.map((post) => (
              <div className="flex flex-col justify-center rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                    <img className="h-full w-1/2 mx-auto object-cover" src={post} alt="" />
                </div>
              </div>
            ))}

          </div>
      </div>
      </div>
  )
}