import React, { useEffect, useState } from 'react';
import user1 from '../../assets/review1.jfif';
import user2 from '../../assets/review2.jfif';
import user3 from '../../assets/review3.jfif';
import Review from './Review';
const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://tranquil-anchorage-32269.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    // const reviews = [
    //     {
    //         _id: 1,
    //         name: 'Mary',
    //         reviewDes: "I had a little hickup with processing my order. And customer service was stellar. We had an open line of communication and they resolved the issue in a timely manor. Answered all of my questions and concerns. I personally believe one of the best features a company should strive for is relationships with costomers and willingness to work together to resolve issues.",
    //         location: 'America',
    //         img: user1
    //     },
    //     {
    //         _id: 2,
    //         name: 'Harry',
    //         reviewDes: "After I submitted a low rating due to a shipping delay & faulty part Rose gave me a call within a few hours of submitting my rating & worked diligently to get things straightened out. Originally I had written I wouldn't buy from them again, but seeing how great their customer service is its reassuring to know that if you have an issue they will ensure to fix your issue",
    //         location: 'London',
    //         img: user2
    //     },
    //     {
    //         _id: 3,
    //         name: 'Jennifer',
    //         reviewDes: "I made contact with customer service an they were extremely helpful to get my issue resolved. I explain to them that it was very dented probably from shipping an they are currently shipping me another one free to me. I am very surprised how this company handles their customers an are not all about a dollar. Definitely will be buying more parts. ",
    //         location: 'Russia',
    //         img: user3
    //     },
    // ]
    return (
        <div>
            <h1 className='text-center text-4xl font-bold text-primary mb-8'>User Reviews</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-20'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;