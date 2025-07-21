import { REVIEWS } from "../Constants/Reviews"

const Reviews = () => {
  return (
    <section className="max-w-7xl mx-auto mb-20 border-b-2" id="reviews">
        <div className="my-20">
            <h2 className="text-xl lg:text-3xl tracking-tight uppercase text-center mb-12">Reviews</h2>
            <p className="max-w-2xl mx-auto mb-12 text-center text-lg">
                {REVIEWS.text}
            </p>
            <div className="flex flex-wrap justify-center">
              {REVIEWS.reviews.map((review,index)=>(
                <div className="max-w-sm flex flex-col items-center justify-center mt-12 mx-2 p-10 border border-neutral-300 rounded-2xl "> 
                <p>{review.review}</p>
                <div className="flex items-center mt-4">
                  <img className="w-12 h-12 rounded-full mr-4" src={review.image} alt={review.name} />
                  <div>
                    <p className="text-sm font-bold">{review.name}</p>
                    <p className="text-sm text-neutral-500">{review.title}</p>
                  </div>
                </div>
                </div>
              ))}
            </div>
        </div>

    </section>
  )
}

export default Reviews