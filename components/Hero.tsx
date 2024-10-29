import React from 'react';
import Image from 'next/image';
import { ArrowRight } from "lucide-react"

const Hero = () => {
  return (
    <div className='bg-[#043873] h-auto py-20 sm:text-center md:text-center lg:text-left flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col items-center justify-center gap-5'
    style={{ backgroundImage: `url('/SVG/Element.svg')`, backgroundPosition: '10% 100%', backgroundSize: 'cover' }}
    >
        <div className='flex-col w-full max-w-lg flex md:items-center sm:items-center lg:items-start'>
            <h1 className='font-bold text-5xl mb-5'>
                Get More Done with whitepace
            </h1>
            <p className='2xl:mb-10 xl:mb-10 lg:mb-10 md:mb-5 sm:mb-5 px-4'>
                Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
            </p>
            <button className='bg-[#4F9CF9] flex items-center justify-center lg:w-[219px] lg:h-[63px] sm:w-[232px] sm:h-[70px] rounded-lg'>
                Try Whitepace free <ArrowRight />
            </button>
        </div>
        <div>
            <Image
            src="/images/image1.png"
            alt='abstract blue'
            width={500}
            height={100}
            className='2xl:w-[824px] 2xl:h-[549px] xl:w-[685px] xl:[456.39px] lg:w-[526px] lg:h-[350.45px] md:w-[551px] md:h-[367px] sm:w-[286px] sm:h-[191px]'
            />
        </div>
    </div>
  );
}

export default Hero
