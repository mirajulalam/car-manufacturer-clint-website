import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const AddAReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = "471d1141ac13b90a4dedd43aa0764fc6";
    const onSubmit = async data => {
        const image = data.Images[0];
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const review = {
                        rating: data.rating,
                        name: data.name,
                        location: data.location,
                        reviewText: data.reviewText,
                        img: img
                    }
                    // send to your database
                    const url = 'https://tranquil-anchorage-32269.herokuapp.com/review';
                    fetch(url, {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(review)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log(inserted);
                            if (inserted.insertedId) {
                                swal("Successfully", "Review added successfull", "success");
                                reset()
                            }
                            else {
                                swal("Error", "Review added failed!", "error");
                            }
                        })
                }
            })
    };
    return (
        <div >
            <h2 className="text-4xl font-bold text-primary text-center">Add a Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}  className='grid justify-items-center'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <select {...register("rating", {
                        required: {
                            value: true
                        }
                    })} className="select select-bordered w-full max-w-xs">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name" className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your location" className="input input-bordered w-full max-w-xs"
                        {...register("location", {
                            required: {
                                value: true,
                                message: 'Location is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.location?.type === 'required' && <span className="label-text-alt text-red-500">{errors.location.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Review</span>
                    </label>
                    <textarea {...register("reviewText", {
                        required: {
                            value: true,
                            message: 'Review is Required'
                        }
                    })} className="textarea textarea-bordered" placeholder="Review"></textarea>
                    <label className="label">
                        {errors.reviewText?.type === 'required' && <span className="label-text-alt text-red-500">{errors.reviewText.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label htmlFor='Images' className="btn btn-outline btn-info ">
                        <span className="label-text">Image url</span>
                    </label>
                    <input
                    id='Images'
                        type="file"
                        placeholder="Image url" className="input input-bordered w-full max-w-xs hidden"
                        {...register("Images", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                     <label className="label">
                        {errors.Images?.type === 'required' && <span className="label-text-alt text-red-500">{errors.Images.message}</span>}
                    </label>
                </div>
                <input className='btn btn-primary w-full max-w-xs text-white' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddAReview;