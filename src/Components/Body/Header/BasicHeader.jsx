export default function Header(props) {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto pt-16 px-4 sm:pt-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-violet-500 tracking-wide uppercase">
                {props.title}
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              { props.header }
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              { props.description }
            </p>
          </div>
        </div>
      </div>
    )
}