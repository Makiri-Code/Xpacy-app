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
            Reviewer: "https://images.unsplash.com/photo-1611432579699-484f7990b127?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D",
            comment: '"Renting through Xpacy has been a fantastic experience. Their team made everything smooth and stress-free, and I’ve felt well taken care of from the start!"',
            name: 'Dara Ojo',
            title:'Property tenant',
            rating: 4.5
        },
        {
            Reviewer: "https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            comment: '"I am so glad I found my place through Xpacy. The whole process was easy, the team was super helpful, and I’ve been really happy and comfortable ever since!"',
            name: 'Dami Adeola',
            title:'Property buyer',
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