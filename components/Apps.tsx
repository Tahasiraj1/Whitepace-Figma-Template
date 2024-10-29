import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';


const Apps = () => {
  return (
    <div className='bg-[#043873] text-white h-auto py-20 sm:text-center md:text-center lg:text-left flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col items-center justify-center gap-5'
    style={{ backgroundImage: `url('/SVG/Element.svg')`, backgroundPosition: '10% 10%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
    >
        <div className="2xl:order-1 xl:order-1 lg:order-1 md:order-1 sm:order-1 sm:mb-10 lg:mb-0">
            <Image
            src="/images/Apps.png"
            alt='abstract blue'
            width={500}
            height={100}
            className='2xl:w-[582px] 2xl:h-[470.8px] xl:w-[582px] xl:h-[470.8px] lg:w-[528px] lg:h-[427.11px] md:w-[485px] md:h-[392.33px] sm:w-[286.5px] sm:h-[231.76px]'
            />
        </div>
        <div className='flex-col md:mb-10 sm:mb-8 w-full max-w-lg lg:ml-10 flex md:items-center sm:items-center lg:items-start 2xl:order-2 xl:order-2 lg:order-2 md:order-2 sm:order-2'>
            <h1 className='font-bold text-5xl mb-5'>
                Work with Your Favorite Apps Using whitepace
            </h1>
            <p className='2xl:mb-10 xl:mb-10 lg:mb-10 md:mb-5 sm:mb-5 px-4'>
                Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
            </p>
            <button className='bg-[#4F9CF9] text-white flex items-center justify-center lg:w-[219px] lg:h-[63px] sm:w-[232px] sm:h-[70px] rounded-lg'>
                Read more <ArrowRight />
            </button>
        </div>
    </div>
  )
}

export default Apps
