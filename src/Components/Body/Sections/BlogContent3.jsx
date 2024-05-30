import { CameraIcon } from '@heroicons/react/solid'

export default function Example() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base text-violet-500 font-semibold tracking-wide uppercase">Step by Step</h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How Logo Creation Works At Fulfill
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src="https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80"
                    alt="Whitney leaning against a railing on a downtown street"
                    width={1184}
                    height={1376}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <CameraIcon className="flex-none w-5 h-5 text-gray-400" aria-hidden="true" />
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">
                Our designers will work with you to deliver a new branding experience with a logo design.
              </p>
            </div>
            <div className="mt-5 prose prose-violet text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">

              <h3>Step 1: Order your logo</h3>
              <p>To get started, just click on the “Request Logo” button, which you’ll find on your dashboard. You’ll be taken to our structured walkthrough process that will explain each step to you as you progress to make it all as easy as possible.</p>

              <h3>Step 2: Specify what you’re looking for</h3>
              <p>You’ll be prompted to briefly describe what you’re looking for and what style would be best before choosing 5 designs to represent what you’re looking for.</p>

              <h3>Step 3: Our designers submit a range of options</h3>
              <p>Once you’ve specified exactly what you’re looking for, our in-house team of designers will get to work on creating a selection of potential winners and present them to you once they’re ready.</p>

              <h3>Step 4: Choose your favorite</h3>
              <p>Our designers will take your revisions into account when we get to work on your favorite version of the logo, so when you receive your final delivery it’ll be the perfect way to stamp your own personality onto the world of eCommerce, no matter what your niche is.</p>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
