import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <ul>
            <li>
            <b className='text-gray-800'>Comprehensive Doctor Listings:</b> <p>YourCareDoctors offers a diverse range of healthcare professionals across various specialties, making it easy to find the right doctor for your needs.</p>
            </li>
            <br />
            <li>
            <b className='text-gray-800'>Seamless Appointment Scheduling:</b> <p>With just a few clicks, you can schedule appointments with your preferred healthcare providers, streamlining the process for a hassle-free experience.</p>
            </li>
            <br />
            <li>
            <b className='text-gray-800'>Patient-Centric Approach:</b> <p>At YourCareDoctors, we prioritize patient convenience by offering easy access to medical professionals and providing a user-friendly platform for managing appointments and health records.</p>
            </li>
            <br />
            <li>
            <b className='text-gray-800'>Verified Healthcare Providers:</b> <p>Our platform ensures that all doctors and healthcare professionals listed are verified and qualified, giving you peace of mind in selecting the best care for you and your family.</p>
            </li>
            <br />
            <li>
            <b className='text-gray-800'>24/7 Appointment Access:</b> <p>Book appointments anytime, anywhere, with our 24/7 access feature, making it easier to plan your healthcare visits around your schedule.</p>
            </li>
          </ul>
        </div>
      </div>

      <div className='text-xl my-4'>
          <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Book appointments and consult with healthcare professionals anytime, anywhere, with our platform’s 24/7 accessibility.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Modify or cancel your appointments with just a few clicks, offering flexibility for changing schedules.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Receive personalized suggestions based on your medical history, preferences, and healthcare needs, ensuring you find the right doctor for your condition.</p>
        </div>
      </div>
    </div>
  )
}

export default About