export default function ImageHeader(props) {
    return (
      <div className={`relative ${ props.color }`}>
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src={props.image}
            alt=""
          />
          <div className={`absolute inset-0 ${ props.color }`} style={{ mixBlendMode: 'multiply' }} aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h2 className="text-base font-semibold text-gray-50 tracking-wide uppercase pb-2">
          SOLUTIONS
          </h2>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">{ props.header }</h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            { props.description }
          </p>
        </div>
      </div>
    )
  }  