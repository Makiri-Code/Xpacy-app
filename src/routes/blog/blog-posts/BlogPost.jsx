import { useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
import {
    BlogHeadingBox,
    BlogCoverImg,
    BlogBody,
    Divider

} from "./BlogPosts.styles";
import DraftEditor from "../../../components/editor/Editor";
import BlogPostOutput from "../../../components/blog-post-output/BlogPostOutput";
import { 
    InsightCardContainer,
    Heading,
 } from "../blog-page/BlogPage.stylex";

import BlogPostCard from "../blog-post-card/BlogPostCard";
const BlogPost = () => {
    const [htmlOutput, setHtmlOutout] = useState("");
       const blogPosts = [
        {
            title: 'Top Tips for First-Time Property Owners: Maximize Your Investment with Ease',
            category: 'Property Investment',
            date: '2nd Oct, 2024',
            time: '11 min',
            imgSrc: 'https://images.unsplash.com/photo-1729855637715-99192904aac5?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
         {
            title: 'Understanding Facility Management: How to Keep Your Property in Peak Condition',
            category: 'Facility Management',
            date: '2nd Nov, 2024',
            time: '6 min',
            imgSrc: 'https://images.unsplash.com/photo-1694521787193-9293daeddbaa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RmFjaWxpdHklMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww',
        },
         {
            title: 'Top Tips for First-Time Property Owners: Maximize Your Investment with Ease',
            category: 'Property Investment',
            date: '1st Dec, 2024',
            time: '8 min',
            imgSrc: 'https://images.unsplash.com/photo-1687075430355-ed8df51c1670?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlJTIwaW52ZXN0bWVudHxlbnwwfHwwfHx8MA%3D%3D'
        },
    ]
    return (
        <div className="contacts-container">
            <div className="header d-flex flex-column align-items-start">
                <div className="header-navigation">
                    <Link to={'/'} className="header-nav-text">Home</Link> <span><IoChevronForward/></span><Link to={'/blog'} className="header-nav-text">Blog</Link><span><IoChevronForward/></span> <span className="header-nav-text" style={{color:  "#007BFF"}}>Blog post</span>
                </div>
            </div>
            <BlogHeadingBox>
                <div className="header__box">
                    <p className="header__box-title">Facility Management, Tips</p>
                    <h3 className="header__box-heading mb-0">Top Tips for First-Time Property Owners: Maximize Your Investment with Ease</h3>
                    <p className="header__box-subheading mb-0">Discover the best practices for maintaining and managing your facilities efficiently.</p>
                    <div className="author-box">
                        <div className="author-img"></div>
                        <div className="authour">
                            <span className="author-name">Tope Korede</span>
                            <span className="author-name">Facility Manager at Xpacy.</span>
                        </div>
                    </div>
                    <p className="heading-title dark mb-0 ">October 21, 2024</p>
                </div>
            </BlogHeadingBox>
            <BlogCoverImg>
                <img src="https://images.unsplash.com/flagged/photo-1558954157-aa76c0d246c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D" alt="" />
            </BlogCoverImg>
            <BlogBody>
                {/* <DraftEditor htmlOutPut={htmlOutput} setHtmlOutout={setHtmlOutout}/>
                <BlogPostOutput htmlOutput={htmlOutput}/> */}
                    <p><strong>Introduction</strong></p>
                    <p><br/></p>
                    <p>Becoming a property owner is a huge milestone, whether you’re renting it out, holding it as an investment, or setting it up as a personal space. But taking care of a property, understanding its value, and handling tenants can feel overwhelming. Here are some simple, effective tips to help you get the most from your property with confidence and ease.</p>
                    <p><br/></p>
                    <p><strong>1. Your Market Value</strong></p>
                    <p>Understanding the current value of your property is key to making smart decisions. This helps you set the right rent if you're leasing it out and gives you an idea of how much you could earn if you decide to sell in the future. Look for real estate tools that provide local property insights or connect with property management experts who can give you accurate valuation data.</p>
                    <p><br/></p>
                    <p><strong>Quick Tip:</strong> Check the property’s market value at least twice a year to stay updated on trends!</p>
                    <p><br/></p>
                    <p>&nbsp;<strong>2. Set Up Your Maintenance Plan Early</strong></p>
                    <p>Well-maintained properties have a higher value and attract better tenants. Regular maintenance can prevent small issues from becoming big (and expensive) ones. Start with a seasonal checklist for basic things like plumbing, electricity, and heating/cooling systems.</p>
                    <p><br/></p>
                    <p><strong>Quick Tip:</strong> Schedule professional maintenance for high-impact areas like the roof, HVAC, and plumbing annually.</p>
                    <p><br/></p>
                    <p><strong>3. Prioritize Good Tenants</strong></p>
                    <p>If you’re renting, a reliable tenant can make all the difference. A thorough screening process helps you find people who respect the property, pay on time, and communicate well. Trustworthy tenants lead to fewer property issues, lower repair costs, and steady rental income.</p>
                    <p><br/></p>
                    <p><strong>Quick Tip:</strong> Have a standard checklist for screening tenants, including credit checks, references, and income verification.</p>
                    <p><br/></p>
                    <p><strong>4. Don’t Be Afraid to Ask for Help</strong></p>
                    <p>Managing a property can feel like a lot at first, but you don’t have to go it alone. Property managers, real estate agents, and financial advisors can provide you with valuable insights and support. If you’re unsure of the next steps, getting advice from the experts can save you both time and money.</p>
                    <p><br/></p>
                    <p><strong>Quick Tip:</strong> Seek recommendations for reliable property management services to get support tailored to your needs.</p>
                    <p><br/></p>
                    <p><strong>Conclusion</strong></p>
                    <p><br/></p>
                    <p>Owning a property for the first time is exciting and can be incredibly rewarding with a few smart strategies. By following these simple tips, you’ll not only protect your investment but also set it up for long-term success. Enjoy the journey—property ownership is a rewarding way to build value over time!</p>
                    <p><br/></p>
                    <p><br/></p>
            </BlogBody>
            <Divider/>
            <Heading>Related Articles</Heading>
            <InsightCardContainer>
                {
                    blogPosts.map(({title, category, date, time, imgSrc}, index) => (
                        <BlogPostCard 
                            imageSrc={imgSrc}
                            title={title}
                            category={category}
                            date={date}
                            time={time}
                            key={index}
                        />
                    ))
                }
            </InsightCardContainer>
        </div>
    );
};

export default BlogPost;