import { useState } from 'react'
import { CheckIcon } from '@heroicons/react/solid'

export default function Pricing(props) {

  const [period, setPeriod] = useState("monthly");

  const selectedClass = "relative w-1/2 bg-violet-500 border-violet-500 rounded-md shadow-sm py-2 text-sm font-medium text-white whitespace-nowrap focus:outline-none sm:w-auto sm:px-8"
  const nonSelectedClass = "ml-0.5 relative w-1/2 border border-transparent rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none sm:w-auto sm:px-8"

  

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto pb-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <div className="relative self-center mt-6 bg-gray-100 rounded-lg p-0.5 flex sm:mt-8">
            <button
              type="button"
              onClick={() => setPeriod("monthly")}
              className={ period === "monthly" ? selectedClass : nonSelectedClass }
            >
              Monthly billing
            </button>
            <button
              type="button"
              onClick={() => setPeriod("yearly")}
              className={ period === "yearly" ? selectedClass : nonSelectedClass }
            >
              Yearly billing
            </button>
          </div>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {props.plans.map((tier) => (
            <div key={tier.name} className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">{tier.name}</h2>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>

                { period === 'yearly' ? 
                  (<div>
                    { tier.free ? (
                      <div>
                        <p className="mt-4 text-sm text-gray-900">No cost</p>
                      </div>
                    ) : (
                      <div>
                        <p className="mt-4 text-sm text-gray-900 line-through">${ tier.price.monthly }/mo</p>
                      </div>
                    )}
                  </div>) : ""
                }

                { tier.free ?
                  ( <p className="mt-2">
                    <span className="text-4xl font-extrabold text-gray-900">Free</span>{' '}
                  </p>) :
                  ( <p className="mt-2">
                    <span className="text-4xl font-extrabold text-gray-900">${period === 'monthly' ? tier.price.monthly : tier.price.yearly_per_month }</span>{' '}
                    <span className="text-base font-medium text-gray-500">/mo</span>
                  </p>)
                }

                { period === 'yearly' ? 
                  (
                    <div>{ tier.free ? 
                      (<div>
                        <p className="mt-4 text-md font-bold text-gray-900">Risk Free</p>
                        <p className="mt-1 text-sm text-gray-900">No charges</p>
                      </div>)
                      :
                      (<div>
                        <p className="mt-4 text-md font-bold text-gray-900">Save { tier.price.yearly_discount }</p>
                        <p className="mt-1 text-sm text-gray-900">Billed anually at ${ tier.price.yearly_total }</p>
                      </div>)
                    }</div>
                  ) : ""
                }

                <a
                  href={tier.href}
                  className="mt-8 block w-full bg-violet-500 border border-violet-500 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-violet-600"
                >
                  Buy {tier.name}
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
                <ul className="mt-6 space-y-4">
                  {tier.includedFeatures.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
