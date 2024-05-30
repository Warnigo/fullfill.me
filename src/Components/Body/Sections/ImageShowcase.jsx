import space1 from '../../../Images/space1a.jpg'
import space2 from '../../../Images/space2a.jpg'
import space3 from '../../../Images/space3a.jpg'

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive sales',
  },
  {
    id: 3,
    title: 'Improve your customer experience',
  },
]

export default function ImageShowcase(props) {
  return (
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
          <div className="bg-gray-50 h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">{props.title}</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            {props.description}
          </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-10 lg:grid-cols-3 lg:max-w-none">

            <div key={posts[0].title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                  <img className="h-72 w-full object-cover" src={space2} alt="" />
              </div>
            </div>
            <div key={posts[1].title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                  <img className="h-72 w-full object-cover" src={space1} alt="" />
              </div>
            </div>
            <div key={posts[2].title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                  <img className="h-72 w-full object-cover" src={space3} alt="" />
              </div>
            </div>

          </div>
      </div>
      </div>
  )
}