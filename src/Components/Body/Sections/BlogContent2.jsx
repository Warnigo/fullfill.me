export default function BlogContent() {
    return (
      <div className="relative bg-white">
        <div className="py-16">
        <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
              alt=""
            />
          </div>
          <div className="lg:col-start-2 lg:pl-8 pt-100 lg:pt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h2 className="leading-6 text-violet-500 font-semibold tracking-wide uppercase">Work with us</h2>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Our Sourcing & Fulfillment Process
              </h3>
              <p className="mt-8 prose prose-violet text-gray-500">
              With Fulfill, you don't just have access to a huge range of new products — it's easy to work with products you’re already selling, too.
              </p>
              <div className="mt-5 prose prose-violet text-gray-500">

              <p>Just a few clicks is all it takes to get a quote, which includes a detailed report of your shipping options, delivery times, and carrier information.</p>

              <p>If you’d like help choosing your next winning item, you can choose from our constantly updated list of trending products from all over the world.</p>

              <p>We'll handle any orders that come from China in our own warehouse. For products that come from anywhere else, we’ll link you in with our exclusive list of suppliers from our marketplace. We've extensively vetted each supplier by:</p>
              
              <ul>
                <li>In-person visits (even when they’re all the way in China)</li>
                <li>Thorough financial analysis</li>
                <li>Ongoing check-ins to make sure all the rules are being followed</li>
              </ul>

              <p>All you need to decide on is shipping — and at Fulfill, that means choosing from our huge selection of integrated carriers depending on your business’s price points, margin, and delivery requirements.</p>

              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
}
  