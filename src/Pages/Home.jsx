import Header from '../Components/Body/Header/MainHeader'
import Features from '../Components/Body/Sections/Features';
import CTA from '../Components/Body/Sections/CTA';
import Pricing from '../Components/Body/Sections/PricingFocus';

import { BiTrophy } from 'react-icons/bi'
import { FiPackage, FiCamera } from 'react-icons/fi'

const features = [
  { name: 'Sourcing',
    header: 'Factory-Direct Pricing for Your Products instead of Stock your store full of winning products.',
    description: 'We can help you source your exact current product or future product by scouring through our vast factory network, spanning across all categories, ensuring you find precisely what you need. Instead of We’ll help you source the perfect products by showing you thousands of items from our carefully vetted suppliers.',
    icon: BiTrophy
  },
  { name: 'Fulfillment',
    header: 'Seamless Fulfillment Solutions Tailored to Your Needs instead of Put your store on autopilot. ',
    description: "Our fulfillment solutions offer a range of options once your product reaches our warehouse. From dropshipping to bulk orders, we've got you covered. ",
    icon: FiPackage
  },
  { name: 'Content',
    header: 'Leverage a full-service content creation team.',
    description: 'Get elite custom content by working with our in-house team of professional photographers and graphic designers.',
    icon: FiCamera
  },
]

const plans = {
  first: {
    name: 'Build',
    free: false,
    price: {
      monthly: 19,
      yearly_per_month: 15,
      yearly_total: 180,
      yearly_discount: "20%"
    },
    features: [
      'Analytics dashboard',
      'Access to marketplace',
      'Access to product quotation',
      'Shipment tracking',
      'Email support'
    ]
  },
  second: {
    name: 'Grow',
    free: false,
    price: {
      monthly: 39,
      yearly_per_month: 31,
      yearly_total: 372,
      yearly_discount: "20%"
    },
    features: [
      'Everything included in Build',
      'Unlimited marketplace products',
      'Unlimited product quotes',
      'Bulk/samples ordering',
      'Live chat support',
    ]
  },
  third: {
    name: 'Scale',
    free: false,
    price: {
      monthly: 79,
      yearly_per_month: 62,
      yearly_total: 744,
      yearly_discount: "20%"
    },
    features: [
      'Everything included in Grow',
      'Exclusive products',
      'Exclusive features',
      'Dedicated account manager'
    ]
  }
}

const other_features = [
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

export default function Home() {
  return (
    <div className="min-h-screen">

      <Header
        header1="The one-click dropshipping solution"
        header2="you've been waiting for."
        description1="White glove service with boots on the ground in China and factory-direct pricing. From sourcing to branding, Fulfill covers it all."
        description2="At Fulfill, we’re ready to revolutionize your entire business with just a few clicks. Are you?"
        buttonText="Get started for free"
        buttonRedirect="/contact"
      />
      
      <Features
        title="Immediate Solutions"
        header="Powerful features line to  Empowering features to boost your business, tailored for all sizes."
        description="We built Fulfill from the ground up to make life easier for entrepreneurs like you."
        features={features}
      />

      <Pricing 
        plans={plans}
        header="Additional services"
        description="No matter what plan you’re on, you will have access to the design center."
        features={other_features}
      />

      <CTA 
        header_line1="Ready to start dropshipping"
        header_line2="the easiest way possible?"
        description="Kick your dropshipping up a notch with Fulfill by getting started for free."
        buttonText="Get started for free"
        buttonRedirect="https://app.fulfill.me/register"
      />

    </div>
  );
}