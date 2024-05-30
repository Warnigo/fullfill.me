export default function BlogContent() {
    return (
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-violet-500 font-semibold tracking-wide uppercase">
                Step By Step
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Our Content Creation Process
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-500 leading-8">
              Check out how our entire process of content creation works
            </p>
          </div>
          <div className="mt-6 prose prose-violet prose-lg text-gray-500 mx-auto">
            <h3><span className="text-violet-500">Step 1:</span> Choose a supported product and follow our walkthrough</h3>

            <p>The products on our marketplace (whether they’re new for you or items you were already selling) that support custom content have a “Request content” button below them.</p>
            <p>Once you click “Request”, we’ll walk you through a structured selection process for creating exactly the content you need, whether it’s photography, videography, or both.</p>

            <h3><span className="text-violet-500">Step 2:</span> Our team gets to work</h3>
            <p>We’ll get your product over to our team as soon as possible. The second they get the product, they’ll be able to start shooting photo and video right away.</p>
            

            <h3><span className="text-violet-500">Step 3:</span> Delivery, often within 24 hours</h3>
            <p>Once they’ve got enough creative work to meet the standards you ordered, they’ll get down to an extensive editing process before ever presenting the content to you.</p>

            <h3><span className="text-violet-500">Step 4:</span> Revisions & refining</h3>
            <p>Once you’ve had a chance to check out the content in detail, you’ll be offered to suggest as many revisions as you’d like, free of charge. </p>

            <h3><span className="text-violet-500">Step 5:</span> Start selling</h3>
            <p>Now that you’ve got the perfect set of ad creatives for your products, it’s time to get down to business — selling! </p>
            <p>Just throw the content into your ads or eCommerce shop and start selling right away, safe in the knowledge that your custom content is primed to help you stand out from your competition.</p>
            
            {/* <figure>
              <img
                className="w-full rounded-lg"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
                alt=""
                width={1310}
                height={873}
              />
              <figcaption>Sagittis scelerisque nulla cursus in enim consectetur quam.</figcaption>
            </figure> */}
          </div>
        </div>
      </div>
    )
  }
  