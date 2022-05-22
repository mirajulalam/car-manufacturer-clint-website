import React from 'react';
const Blogs = () => {
    return (
        <section>
            <div className='mb-5'>
                <h3 className='text-2xl font-bold fs-5'>Question No1: How will you improve the performance of a React Application?</h3>
                <h5 className='text-xl font-semibold'>To improve the performance of your React app,</h5>
                <p>1. Avoid inline functions as much as possible.</p>
                <p>2. Remember that Immutability is the key to avoid unnecessary re-renders.</p>
                <p>3. Always render hidden components like Modals and Dropdowns conditionally.</p>
                <p>4. Always call multiple APIs parallelly.</p>
            </div>
            <div className='mb-5'>
                <h3 className='text-2xl font-bold fs-5'>Question No2:  What are the different ways to manage a state in a React application?</h3>
                <h5 className='text-xl font-semibold'>The Four Kinds of React State to Manage</h5>
                <p>When we talk about state in our applications, it’s important to be clear about what types of state actually matter.There are four main types of state you need to properly manage in React apps:</p>
                <p>1. Local state</p>
                <p>2. Global state</p>
                <p>3. Server state</p>
                <p >4. URL state</p>
            </div>
            <div className='mb-5'>
                <h3 className='text-2xl font-bold fs-5'>Question No3: How does prototypical inheritance work? </h3>
                <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
            </div>
            <div className='mb-5'>
                <h3 className='text-2xl font-bold fs-5'>Question No4: Why you do not set the state directly in React? </h3>
                <p>One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this.</p>
            </div>
            <div className='mb-5'>
                <h3 className='text-2xl font-bold fs-5'>Question No5: What is a unit test? Why should write unit tests? </h3>
                <h5 className=' font-semibold text-xl'>What is a unit test</h5>
                <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.</p>
                <h5 className=' font-semibold text-xl'>Why should we write unit tests</h5>
                <p>
                    Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p>
            </div>
        </section>

    );
};

export default Blogs;