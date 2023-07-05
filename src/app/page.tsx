import { Breadcumbs, Container, MainTitle, ImageCarousel, ImageCard, DetailsCard, Review } from '@/components'
import { designDetails } from '@/utils/constant'

export default function Home() {
  const {details, images, reviews} = designDetails;
  return (
    <div className="content">
      <Breadcumbs />
      <ImageCarousel />
      <Container>
        <div className="grid grid-cols-12 gap-5 py-5">
          <div className="col-span-8">
            <MainTitle title="Tampilan Rumah" />
            <div className="grid grid-cols-12 gap-2">
              {
                images.map(item => {
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
            <DetailsCard details={details} />
            <div className="my-5">
              <MainTitle title="Testimoni" />
              {
                reviews.map(item => {
                  return(
                    <Review
                      username={item.username}
                      star={item.star}
                      review={item.review}
                    />
                  )
                })
              }
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}