import { Breadcumbs, Container, ContentTitle, ImageCarousel, ImageCard } from '@/components'
import { houseSpecs } from '@/utils/constant'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="content">
      <Breadcumbs />
      <ImageCarousel />
      <Container>
        <div className="grid grid-cols-12 py-5">
          <div className="col-span-8">
            <ContentTitle title="Tampilan Rumah" />
            <div className="grid grid-cols-12 gap-2">
              {
                houseSpecs.map(item => {
                  return(
                    <div className="col-span-4">
                      <ImageCard
                        title={item.title}
                        desc={item.desc}
                        imagePath={item.imagePath}
                        />
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="col-span-4">
            Specs
          </div>
        </div>
      </Container>
    </div>
  )
}
