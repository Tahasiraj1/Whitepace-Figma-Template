import React from 'react';
import { ArrowRight } from 'lucide-react';

const FreeTrial = () => {
  return (
    <div className='bg-[#043873] sm:items-start sm:px-4 lg:px-0 text-white py-20 flex flex-col lg:items-center justify-center'>
      <h1 className='text-5xl mb-8 font-bold sm:text-start lg:text-center'>
        Try Whitepace<br/> today
      </h1>
      <p className='mb-10 sm:text-start lg:text-center'>
        Get started for free.<br /> Add your whole team as your needs grow.
      </p>
      <button className='flex mb-8 w-[218px] h-[59px] bg-[#4F9CF9] items-center justify-center rounded-lg'>
        Try Taskey free <ArrowRight />
      </button>
      <h2 className='text-lg mb-8'>
        On a big team? Contact sales
      </h2>
      <div className='flex gap-8'>
        {/* Apple */}
        <svg className='cursor-pointer' width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_9_4793)">
        <path d="M46.4408 34.1088C44.7903 25.8025 52.6744 20.9309 52.6744 20.9309C52.6744 20.9309 49.6027 16.4868 44.4402 15.3435C39.2803 14.1977 36.6978 15.6293 34.1203 16.703C31.5404 17.7793 30.253 17.7793 30.253 17.7793C26.5299 17.7793 23.8082 13.8373 16.7147 15.6319C11.8277 16.8652 6.68317 22.5067 5.75367 29.2398C4.82417 35.9755 6.82999 44.5702 10.6973 51.2313C14.5646 57.8975 18.5042 60.4028 21.3003 60.4749C24.0966 60.5443 26.8877 58.4717 30.253 57.967C33.6209 57.4674 35.6936 59.1875 38.997 60.117C42.2876 61.044 43.4411 60.184 47.2312 56.9603C51.0316 53.7365 54.4716 44.4905 54.4716 44.4905C54.4716 44.4905 48.0912 42.4202 46.4408 34.1088Z" fill="white"/>
        <path d="M39.1335 9.96983C42.7896 6.24419 41.5512 0.476562 41.5512 0.476562C41.5512 0.476562 36.4171 1.37777 32.9771 4.95671C29.5397 8.53828 30.1087 14.1951 30.1087 14.1951C30.1087 14.1951 35.4772 13.6931 39.1335 9.96983Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_9_4793">
        <rect width="60" height="60" fill="white" transform="translate(0 0.476562)"/>
        </clipPath>
        </defs>
        </svg>
        {/* Windows */}
        <svg className='cursor-pointer' width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 33.3711V50.8478L24.9507 54.4307V33.3711H0Z" fill="white"/>
        <path d="M24.9507 6.52637L0 10.1092V27.5859H24.9507V6.52637Z" fill="white"/>
        <path d="M59.9997 27.5853V1.19727L30.7413 5.39668V27.5853H59.9997Z" fill="white"/>
        <path d="M30.7413 55.5597L59.9997 59.7549V33.3711H30.7413V55.5597Z" fill="white"/>
        </svg>
        {/* Android */}
        <svg className='cursor-pointer' width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_9_4805)">
        <path d="M8.32884 19.9121C7.29504 19.9121 6.4179 20.2726 5.69688 20.9936C4.97585 21.7147 4.61523 22.5799 4.61523 23.5897V39.0944C4.61523 40.1295 4.97575 41.0059 5.69688 41.727C6.4179 42.448 7.29504 42.8087 8.32884 42.8087C9.36188 42.8087 10.2337 42.4481 10.9435 41.727C11.652 41.006 12.0072 40.1295 12.0072 39.0944V23.5897C12.0072 22.5798 11.6467 21.7147 10.9255 20.9936C10.2044 20.2726 9.33866 19.9121 8.32884 19.9121Z" fill="white"/>
        <path d="M38.1846 5.99291L40.7448 1.27014C40.9128 0.957473 40.853 0.717711 40.5649 0.549118C40.2521 0.403742 40.0118 0.477406 39.8439 0.764904L37.2479 5.52543C34.9637 4.5155 32.5477 4.00961 30.0001 4.00961C27.4519 4.00961 25.0357 4.51561 22.7523 5.52543L20.1562 0.764904C19.9875 0.477406 19.7472 0.404393 19.4352 0.549118C19.1464 0.71847 19.0866 0.957473 19.2553 1.27014L21.8156 5.99291C19.2195 7.31681 17.1519 9.1606 15.6136 11.5283C14.0752 13.8973 13.3057 16.486 13.3057 19.2992H46.6582C46.6582 16.4867 45.8886 13.8978 44.3503 11.5283C42.8118 9.1606 40.7562 7.31681 38.1846 5.99291ZM23.3831 12.8623C23.1062 13.1398 22.7755 13.2779 22.3911 13.2779C22.006 13.2779 21.682 13.1398 21.4178 12.8623C21.1535 12.586 21.0213 12.2567 21.0213 11.871C21.0213 11.4866 21.1535 11.1566 21.4178 10.8797C21.682 10.6035 22.0068 10.4654 22.3911 10.4654C22.7755 10.4654 23.1062 10.6035 23.3831 10.8797C23.6593 11.1572 23.798 11.4866 23.798 11.871C23.7973 12.256 23.6586 12.586 23.3831 12.8623ZM38.5809 12.8623C38.3161 13.1398 37.9914 13.2779 37.6077 13.2779C37.2224 13.2779 36.8919 13.1398 36.6155 12.8623C36.3388 12.586 36.2007 12.2567 36.2007 11.871C36.2007 11.4866 36.3388 11.1566 36.6155 10.8797C36.8919 10.6035 37.2224 10.4654 37.6077 10.4654C37.9921 10.4654 38.316 10.6035 38.5809 10.8797C38.8454 11.1572 38.9774 11.4866 38.9774 11.871C38.9774 12.256 38.8453 12.586 38.5809 12.8623Z" fill="white"/>
        <path d="M13.4492 44.6103C13.4492 45.7171 13.8336 46.654 14.6025 47.4229C15.372 48.1918 16.3089 48.5761 17.415 48.5761H20.0834L20.1199 56.7621C20.1199 57.7958 20.4804 58.6736 21.2015 59.3947C21.9225 60.1158 22.7883 60.4764 23.7975 60.4764C24.8307 60.4764 25.7083 60.1158 26.4295 59.3947C27.1506 58.6736 27.5111 57.7959 27.5111 56.7621V48.5769H32.4869V56.7621C32.4869 57.7958 32.8473 58.6736 33.5684 59.3947C34.2896 60.1158 35.1665 60.4764 36.2004 60.4764C37.2335 60.4764 38.1112 60.1158 38.8323 59.3947C39.5535 58.6736 39.9139 57.7959 39.9139 56.7621V48.5769H42.6183C43.6998 48.5769 44.6247 48.1924 45.395 47.4235C46.1637 46.6547 46.5483 45.7178 46.5483 44.6111V20.5957H13.4492V44.6103Z" fill="white"/>
        <path d="M51.6709 19.9121C50.6609 19.9121 49.7958 20.2673 49.0747 20.9757C48.3537 21.6855 47.9932 22.5573 47.9932 23.5897V39.0944C47.9932 40.1295 48.3536 41.0059 49.0747 41.727C49.7958 42.4481 50.6616 42.8087 51.6709 42.8087C52.704 42.8087 53.5817 42.4481 54.3028 41.727C55.0239 41.0059 55.3843 40.1295 55.3843 39.0944V23.5897C55.3843 22.5572 55.0239 21.6855 54.3028 20.9757C53.5817 20.2673 52.704 19.9121 51.6709 19.9121Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_9_4805">
        <rect width="60" height="60" fill="white" transform="translate(0 0.476562)"/>
        </clipPath>
        </defs>
        </svg>
      </div>
    </div>
  )
}

export default FreeTrial
