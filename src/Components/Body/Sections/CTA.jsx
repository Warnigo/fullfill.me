export default function CTA(props) {
  return (
    <div className="bg-violet-500">
      <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-6">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className>Ready to increase efficiencies and improve</span>
          <span className="block">profit margins with our solutions?</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-100">
        Elevate your business with Fulfill
        </p>
        <a
          href={ props.buttonRedirect }
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-violet-600 bg-white hover:bg-violet-50 sm:w-auto"
        >
          Contact us
        </a>
      </div>
    </div>
  )
}