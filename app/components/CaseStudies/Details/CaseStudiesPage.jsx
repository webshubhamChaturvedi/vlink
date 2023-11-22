import Card from 'app/components/common/Card'
import Container from 'app/components/common/Container'
import Image from 'next/image'
import Link from 'next/link'
import Sidebar from './Sidebar'
import Tags from './Tags'

export default function CaseStudiesPage() {
  return (
    <Container className=" py-16">
      <div className="grid grid-cols-4 gap-12">
        <div className="flex flex-col justify-between col-span-3">
          <Card className="leading-relaxed space-y-5">
            {/* load content of blog here */}
            <div className="space-y-3">
              <h1 className="text-stickyPrimary">
                Hyper-local Shopping App Seeking to Combine Online Retail &
                Local Shopping
              </h1>
              <p>
                VLink helped an online electronics company create an app that
                can go a long way toward helping local and regional retailers
                thrive in an age where better prices often are a few clicks
                away. The platform makes it easy for the shopper and the store
                to have an online dialog that leads to a value-add for the
                customer. The idea is to empower the retailer to leverage what
                it has and the big national online chain doesn’t have: Locality
                and flexibility.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-stickyPrimary">Challenge</h2>
              <p>
                To help brick-and-mortar stores to take advantage of their
                locality and build relationships with prospects and ongoing
                customers, and neutralize the price advantage enjoyed by online
                retailers.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-stickyPrimary">Solution</h2>
              <p>
                VLink helped an online electronics company create an app that
                makes it easy for the shopper and the store to have an online
                dialog that leads to a value-add for the customer.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-stickyPrimary">Benefits</h2>
              <p>
                Empowered the retailer to leverage what it has and the big
                national online chain doesn't have: Locality and flexibility.
                The app helped the shopper, by letting the store and negotiate
                these perks, making it more likely they will continue doing so.
              </p>
            </div>
            <div className="image-container -mx-6">
              <Image
                className="image"
                fill
                sizes="100%"
                alt="case-studies-details"
                src="/img/case-studies-details.png"
              />
            </div>
            <div>
              <h2 className="text-stickyPrimary">Key Facts</h2>
              <ul className="case-study-list">
                <li>
                  VLink worked with a major electronics, gadgets & appliances
                  retailer, on an app that can help neutralize the price
                  advantage enjoyed by online retailers.
                </li>
                <li>
                  The goal is for brick-and-mortar stores to take advantage of
                  their locality and build relationships with prospects and
                  ongoing customers.
                </li>
                <li>
                  Creativity is the key. What can a retailer offer a customer to
                  make up for the premium they will pay? Some extra filters for
                  a coffee machine? A couple of reams of paper with a copier
                  purchase? Set up for a home gym?
                </li>
                <li>
                  People like to shop at stores. The mobile app, by letting the
                  store and customer negotiate these perks, makes it more likely
                  they will continue doing so.
                </li>
              </ul>
            </div>
            <div>
              <Link
                href="#"
                className="text-stickyPrimary w-fit text-lg hover:underline"
              >
                To learn more, please download the case study
              </Link>
            </div>
            <div>
              <Tags
                tags={[
                  'ecommerce_app_development',
                  'retail_shopping app',
                  'shopping_application'
                ]}
              />
            </div>
          </Card>
        </div>
        <Sidebar />
      </div>
    </Container>
  )
}
