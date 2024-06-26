import { Fragment, useRef, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  CameraIcon,
  LightBulbIcon,
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline'
import { FiPackage } from 'react-icons/fi'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Link, NavLink } from 'react-router-dom';

import logo from '../../Images/logo.png'

const solutions = [
  {
    name: 'Sourcing & Fulfillment',
    description: 'Learn more about our automated fulfillment solution.',
    href: '/features/sourcing-and-fulfillment',
    icon: FiPackage,
  },
  {
    name: 'Custom Content Creation',
    description: 'Discover how you can easily create high-quality content for your store.',
    href: '/features/content',
    icon: CameraIcon,
  },
  {
    name: 'Logo Design',
    description: "Find out more about how we’ll help you end up with the perfect custom logo.",
    href: '/features/logo',
    icon: LightBulbIcon,
  },
  // {
  //   name: 'Automations',
  //   description: 'Build strategic funnels that will drive your customers to convert',
  //   href: '/features/automations',
  //   icon: RefreshIcon,
  // },
]
const callsToAction = [
  // { name: 'Sign Up for Free', href: 'https://app.fulfill.me/register', icon: BadgeCheckIcon },
  // { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  // {
  //   name: 'Help Center',
  //   description: 'Get all of your questions answered in our forums or contact support.',
  //   href: '#',
  //   icon: SupportIcon,
  // },
  // {
  //   name: 'Guides',
  //   description: 'Learn how to maximize our platform to get the most out of it.',
  //   href: '#',
  //   icon: BookmarkAltIcon,
  // },
  // {
  //   name: 'Events',
  //   description: 'See what meet-ups and other events we might be planning near you.',
  //   href: '#',
  //   icon: CalendarIcon,
  // },
  // { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
// const recentPosts = [
//   { id: 1, name: 'Boost your conversion rate', href: '#' },
//   { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
//   { id: 3, name: 'Improve your customer experience', href: '#' },
// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Menu() {

  const productMenuRef = useRef();

  let [isOpen, setIsOpen] = useState(false);

  return (
    <Popover className="relative bg-white shadow z-10">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link to="/">
                  <span className="sr-only">Fulfill</span>
                  <img
                    className="h-6 w-auto sm:h-7"
                    src={ logo }
                    alt="Fulfill Logo"
                  />
                </Link>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <button 
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                  onClick={() => {setIsOpen(true)}}
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-500',
                          'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none'
                        )}
                        ref={productMenuRef}
                      >
                        <span>Product</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-900' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-900'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                        >
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {solutions.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.href}
                                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                  onClick={() => productMenuRef.current?.click()}
                                >
                                  <item.icon className="flex-shrink-0 h-6 w-6 text-violet-500" aria-hidden="true" />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                              {callsToAction.map((item) => (
                                <div key={item.name} className="flow-root">
                                  <Link
                                    to={item.href}
                                    className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                  >
                                    <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                    <span className="ml-3">{item.name}</span>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <NavLink 
                  to="/pricing"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                  activeClassName="text-gray-900"
                >
                  Pricing
                </NavLink>
                
                {/* <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Docs
                </a> */}

              </Popover.Group>
          
            </div>
          </div>

          <Transition
            show={isOpen}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
              <Popover.Panel
                focus
                static
                className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <img
                          className="h-6 w-auto"
                          src={ logo }
                          alt="Fulfill Logo"
                        />
                      </div>
                      <div className="-mr-2">
                        <button
                          className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        {solutions.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="cursor-pointer -m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                            onClick={() => setIsOpen(false)}
                          >
                            <item.icon className="flex-shrink-0 h-6 w-6 text-violet-500" aria-hidden="true" />
                            <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                          </Link>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="py-6 px-5 space-y-6">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                      <Link
                        to="/pricing"
                        className="cursor-pointer text-base font-medium text-gray-900 hover:text-gray-700"
                        onClick={() => setIsOpen(false)}
                      >
                        Pricing
                      </Link>

                      {/* <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                        Docs
                      </a> */}

                      {resources.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="text-base font-medium text-gray-900 hover:text-gray-700"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                 
                  </div>
                </div>
              </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}