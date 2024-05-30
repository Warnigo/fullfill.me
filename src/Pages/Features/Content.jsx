
import Header from './../../Components/Body/Header/ImageHeader'
// import ImageShowcaseText from '../../Components/Body/Sections/ImageShowcaseText';
import ImageShowcase from '../../Components/Body/Sections/ImageShowcase';
import BlogContent from './../../Components/Body/Sections/BlogContent'
import CTA from './../../Components/Body/Sections/CTA';
import FeaturesList2 from './../../Components/Body/Sections/FeaturesList2'
import FeaturesList from './../../Components/Body/Sections/FeaturesListSide';

import { FiCamera, FiVideo } from 'react-icons/fi'

import content from '../../Images/back-content2.jpg'


const types = [
    {
      name: 'Photography',
      description:
        'Working out of our custom studio, our experienced photography team knows exactly what kinds of photos to take to ensure your products sell like crazy.',
      icon: FiCamera,
    },
    {
      name: 'Videography',
      description:
        'Our professional team of videographers works around the clock shooting and editing high-quality video footage in our dedicated, custom in-house studio.',
      icon: FiVideo,
    },
]

const features = [
    {
      name: 'In-House Professional Studio',
      description: 'Our team works in a custom-built studio to have complete control over the process.',
    },
    { 
      name: 'Full-Scale Team',
      description: 'With multiple photographers and videographers, you can count on our efficiency and quality.' 
    },
    {
      name: 'Designed for Ads',
      description: 'Our team creates video that slots right into FB and IG ads.',
    },
    {
      name: 'Disruptive Content',
      description: 'We create artistic content designed to shake up your niche and sell more products.'
    },
    { 
      name: 'Global Content Rights',
      description: 'The global rights to the photo and video work we produce are yours forever to use as you please.'
    },
    { 
      name: '360 Photos',
      description: 'Stand out from the crowd with 360-degree photos.'
    },
]



export default function Content() {
  return (
    <div>
        
        <Header
            title="Product Features"
            header="Content Creation"
            description="Our elite team of design and photography specialists works around-the-clock to deliver plug and play content for our users."
            color="bg-violet-700"
            image={content}
        />

        <FeaturesList2
          title="Your own studio"
          header="Our content creation"
          description="Marketing campaigns are a really big part of the dropshipping business and we deliver the best phography and videography for yours"
          features={types}
        />

        {/* <ImageShowcaseText /> */}
        <ImageShowcase 
          title="Our space"
          description="Here’s where we make it all happen — our custom 7000 sq. ft. content creation studio, located right next to our proprietary warehouse in China."
        />

        <FeaturesList features={features} />
        <BlogContent />
        
        <CTA 
        header_line1="Ready to level up your store"
        header_line2="with custom content?"
        description="Kick your dropshipping up a notch with Fulfill by getting started for free."
        buttonText="Get started for free"
        buttonRedirect="https://app.fulfill.me/register"
      />
      
    </div>
  );
}