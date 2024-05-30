import Header from './../../Components/Body/Header/ImageHeader'
import FeaturesList from './../../Components/Body/Sections/FeaturesList2';
import BlogContent from './../../Components/Body/Sections/BlogContent3'
import ImageShowcase from '../../Components/Body/Sections/ImageShowcaseLogo';
import CTA from './../../Components/Body/Sections/CTA';

import { GlobeAltIcon, ScaleIcon } from '@heroicons/react/outline'

import logo from '../../Images/back-logo2.jpg'

import logo1 from '../../Images/logos/logo1a.png'
import logo2 from '../../Images/logos/logo2a.png'
import logo3 from '../../Images/logos/logo3a.png'
import logo4 from '../../Images/logos/logo4a.png'
import logo5 from '../../Images/logos/logo5a.png'
import logo6 from '../../Images/logos/logo6a.png'
import logo7 from '../../Images/logos/logo7a.png'
import logo8 from '../../Images/logos/logo8a.png'
import logo9 from '../../Images/logos/logo9a.png'

const types = [
  {
    name: '+23%',
    description:
      'Brand consistency, the kind that comes with a distinct logo, can increase your overall revenue by up to 23%.',
    icon: GlobeAltIcon,
  },
  {
    name: '+80%',
    description:
      'Using a consistent color through your logo and creatives can improve brand recognition by up to 80%.',
    icon: ScaleIcon,
  },
  {
    name: '60,000x',
    description:
      'The brain processes images up to 60,000 times faster than words, so a logo gives your brand a better chance at being understood.',
    icon: ScaleIcon,
  },
  {
    name: '1000%',
    description:
      'Brand loyalty, the kind of relationship that a logo helps you to build, is worth 1000% more than a single purchase.',
    icon: ScaleIcon,
  },
]

const logos = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9
]

export default function Content() {
  return (
    <div>

      <Header
        title="Product Features"
        header="Logo Design"
        description="Without a great logo, your store won’t stand a chance. Luckily, Fulfill offers high-end logo design services to make sure you’ve got the best possible chance of success."
        color="bg-violet-500"
        image={logo}
      />

      <FeaturesList
        title="Look at the statistics"
        header="What’s in a logo?"
        description="Each and every business, no matter how big or small, can reap tangible rewards from putting the time and effort in to design a logo that stands out from the crowd."
        features={types}
      />

      <BlogContent />

      <ImageShowcase 
        title="Our work"
        description="Check out what our professional team has produced for some of our users in the past:"
        posts={logos}
      />

      <CTA 
        header_line1="Ready to stand out from the crowd"
        header_line2="with the perfect custom logo?"
        description="Kick your dropshipping up a notch with Fulfill by getting started for free."
        buttonText="Get started for free"
        buttonRedirect="https://app.fulfill.me/register"
      />
      
    </div>
  );
}