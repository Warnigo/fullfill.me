import Header from './../../Components/Body/Header/ImageHeader'
// import ImageShowcaseText from '../../Components/Body/Sections/ImageShowcaseText';
import Blog from './../../Components/Body/Sections/BlogContent2';
import FeaturesListThreeCol from './../../Components/Body/Sections/FeaturesListThreeCol';
import CTA from './../../Components/Body/Sections/CTA';

import { GlobeAltIcon, ScaleIcon } from '@heroicons/react/outline'
import { FiTruck } from 'react-icons/fi'

import sourcing from '../../Images/back-sourcing2.jpg'

const features = [
  {
    name: 'Data-driven product sourcing',
    description:
      'We list thousands of vetted products on our platform, so you’ll be able to search to your heart’s content for the perfect items to provide your customers with. ',
    icon: GlobeAltIcon,
  },
  {
    name: 'Automatic fulfillment in our own warehouse',
    description:
      'Because we built our own custom 20,000 sq. ft. fulfillment warehouse for handling orders for products that flow through China, you’ll never have to worry about wading through dozens of shipping options.',
    icon: ScaleIcon,
  },
  {
    name: 'Carrier integrations',
    description:
      'We work directly with a number of different carriers, as well as giving our users the ability to make their choice of ideal shipping line with up-to-date and transparent shipping changes.',
    icon: FiTruck,
  },
]

export default function Content() {
  return (
    <div>

      <Header
          title="Product Features"
          header="Sourcing & Fulfillment"
          description="Fulfill’s automated sourcing and fulfillment solution is based on a powerful suite of unique features. Learn more about them below."
          color="bg-gray-800"
          image={sourcing}
      />
  
      <FeaturesListThreeCol features={features} />
      
      {/* <ImageShowcaseText /> */}

      <Blog />
      
      <CTA 
        header_line1="Ready to painlessly automate"
        header_line2="your order fulfillment?"
        description="Kick your dropshipping up a notch with Fulfill by getting started for free."
        buttonText="Get started for free"
        buttonRedirect="https://app.fulfill.me/register"
      />
      
    </div>
  );
}