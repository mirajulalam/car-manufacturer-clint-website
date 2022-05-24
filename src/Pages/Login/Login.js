import React from 'react';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken';
const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit, getValues, reset } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || gUser)

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if (token) {
        navigate(from, { replace: true })
    }

    let errorMessage;
    if (error || gError) {
        errorMessage = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }
    if (loading || gLoading || sending) {
        return <Loading></Loading>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
        reset();
    };

    const resetPassword = async () => {
        const email = getValues('email')
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address')
        }
    }
    return (
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className='flex justify-center items-center mt-8'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold text-2xl">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your email" className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password" className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters to longer'
                                    }
                                })}
                            />
                            <label className="label">
                                <span onClick={resetPassword} className="label-text-alt cursor-pointer">Forgot password? Reset password</span>
                            </label>
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {errorMessage}
                        <input className='btn w-full max-w-xs btn-primary text-white' type="submit" value="Login" />
                    </form>
                    <p className='text-center'><small>New to Car parts manufacturer? <Link className='text-primary' to="/signup">Create New Account</Link></small></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline btn-info">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;