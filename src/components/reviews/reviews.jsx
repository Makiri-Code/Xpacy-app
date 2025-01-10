import ClientRating from '../clientRating/clientRating';
import Review01 from '../../assets/homepage-assets/testimonial-section-images/review-img01.png';
import './reviews.style.css';

const Reviews = ({background, width, headingFont, subHeadingFont, cardPadding, subHeadinFontFamily, scrollWidth}) => {
    const clientRatings = [
        {
            Reviewer: Review01,
            comment: '“Listing my property with Xpacy was the best decision I made. Their team handled everything, from photos to tenant management, giving me peace of mind and steady income!”',
            name: 'Deola Alade',
            title:'Property owner',
            rating: 5
        },
        {
            Reviewer: Review01,
            comment: '“Listing my property with Xpacy was the best decision I made. Their team handled everything, from photos to tenant management, giving me peace of mind and steady income!”',
            name: 'Deola Alade',
            title:'Property owner',
            rating: 5
        },
        {
            Reviewer: Review01,
            comment: '“Listing my property with Xpacy was the best decision I made. Their team handled everything, from photos to tenant management, giving me peace of mind and steady income!”',
            name: 'Deola Alade',
            title:'Property owner',
            rating: 5
        },
    ]
    return (
        <div className="client-reviews" style={{background: background, width: width}}>
                <div className="text-center">
                    <h1 className="heading" style={{fontSize: headingFont}}>What Our Clients Are Saying</h1>
                    <h5 className="sub-heading" style={{fontSize: subHeadingFont, fontFamily: subHeadinFontFamily}}>Hear firsthand from our customers who have experienced exceptional service with us</h5>
                </div>
                <div className="testimonial-card-container overflow-hidden" style={{padding: cardPadding, width: scrollWidth}} >
                    <div className="testimonial-scroll" >
                        {clientRatings.concat(clientRatings).map((clientRating, index)=>{
                            const {Reviewer, comment, name, title, rating} = clientRating
                            return (
                                <ClientRating
                                    image = {Reviewer}
                                    comment={comment}
                                    name={name}
                                    title={title}
                                    rating={rating}
                                    key={index}
                                    index={index}
                                />
                            )
                        })}
                    </div>
                </div>
        </div>
    );
}

export default Reviews;