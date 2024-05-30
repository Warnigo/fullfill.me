import Header from './../Components/Body/Header/BasicHeader'
import CTA from './../Components/Body/Sections/CTA';
import FeaturesList from './../Components/Body/Sections/FeaturesList';
import PricingDetail from './../Components/Body/Sections/PricingDetail';

const plans = [
  {
    name: 'Build',
    href: 'https://app.fulfill.me',
    free: false,
    price: {
      monthly: 19,
      yearly_per_month: 15,
      yearly_total: 180,
      yearly_discount: "20%"
    },
    description: 'Perfect for first-time dropshippers starting out',
    includedFeatures: [
      'Analytics dashboard',
      'Access to marketplace (Up to 10 imports)',
      'Access to product sourcing (Up to 5 quotes)',
      'Shipment tracking',
      'Email support'
    ],
  },
  {
    name: 'Grow',
    href: 'https://app.fulfill.me',
    free: false,
    price: {
      monthly: 39,
      yearly_per_month: 31,
      yearly_total: 372,
      yearly_discount: "20%"
    },
    description: 'Ideal for experienced sellers looking to up their game',
    includedFeatures: [
      'Everything included in Build',
      'Unlimited marketplace products',
      'Unlimited product quote/sourcing',
      'Bulk/samples ordering',
      'Live chat support',
    ],
  },
  {
    name: 'Scale',
    href: 'https://app.fulfill.me',
    free: false,
    price: {
      monthly: 79,
      yearly_per_month: 62,
      yearly_total: 744,
      yearly_discount: "20%"
    },
    description: 'The right choice for larger stores with custom needs.',
    includedFeatures: [
      'Everything included in Grow',
      'Exclusive products',
      'Exclusive features',
      'Dedicated account manager',
    ],
  },
]

const features = [
  {
    name: 'Product Photography',
    description: 'Available for $25.00/Product',
  },
  {
    name: 'Product Videography',
    description: 'Available for $50.00/Product',
  },
  {
    name: 'Logo Design',
    description: 'Available for $25.00/Logo',
  },
]

// const features = [
//   {
//     name: 'Quoted products',
//     description: 'If you’re already selling a product that’s listed on our marketplace, you can easily check how much bigger your margin would be with Fulfill.',
//   },
//   {
//     name: 'Auto-fulfillment',
//     description: 'Make your life easier with automatic fulfillment in one of our proprietary locations (depending on the goods in question).',
//   },
//   {
//     name: 'Real-time shipping prices',
//     description: 'We make our live shipping price updates available to everyone, so you’ll always know how much you should be paying.',
//   },
//   {
//     name: 'Knowledge hub',
//     description: 'Our knowledge hub contains a wealth of information on just about every aspect of dropshipping, and we made it available to everybody to browse at any time',
//   },
//   {
//     name: 'Access to vetted suppliers',
//     description: 'Work with the best in the business by getting access to our carefully vetted list of suppliers from all over the world.',
//   },
//   {
//     name: 'Transparent feedback',
//     description: 'Get an objective view of how good different suppliers are to work with thanks to Fulfill’s transparent, user-generated feedback loop system.',
//   },
// ]

// const questions = [
//   {
//     question: 'Is Fulfill suitable for beginners?',
//     answer:
//       'Yes, Fulfill was designed to be suitable for beginners and experienced dropshippers alike.',
//   },
//   {
//     question: "Where does Fulfill’s shipping information come from?",
//     answer:
//       'We aggregate live shipping prices from all carriers over the world and continuously update them using our built-in carrier API.',
//   },
//   {
//     question: 'Does Fulfill have a free trial?',
//     answer:
//       'Yes! Fulfill offers an obligation-free 7 free trial so you can get your store started off on the right foot without making any big commitments.',
//   },
//   {
//     question: 'How do you vet your suppliers?',
//     answer:
//       'We carry out regular financial analyses with our suppliers as well as in-person visits to verify that everything they claim is backed up. We also make sure to personally use the services from as many suppliers as we can ourselves to get a first-hand insight into how they serve their customers.',
//   },
//   {
//     question: 'I’m confused about integrations. How can I connect my store to Fulfill?',
//     answer: 'It’s easy! Just click the “Connect store” button on your dashboard. From there, you’ll be asked to log into your Shopify account to finalize the connection process, and all your information will be automatically transferred over.'
//   }
// ]

export default function Pricing() {
  return (
    <div>

      <Header
        title="Pricing"
        header="Choose the right plan for you"
        description="No matter the size of your business, we’ve got the perfect plan for you."
      />

      <PricingDetail
        plans={plans}
      />

      <FeaturesList
        header="Additional services"
        description="No matter what plan you’re on, you will have access to the design center."
        features={features}
      />

      {/* <FAQ
        title="Frequently asked questions"
        description="Can’t find the answer you’re looking for? Get in touch with our customer support team inside the app and we’ll help you out right away."
        questions={questions}
      /> */}

      <CTA 
        header_line1="Picked out the perfect"
        header_line2="plan for you?"
        description="Kick your dropshipping up a notch with Fulfill by getting started for free."
        buttonText="Get started for free"
        buttonRedirect="https://app.fulfill.me/register"
      />
      
    </div>
  );
}