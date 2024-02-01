import React from 'react'

export const AboutData = [
    {
        img : "https://b.zmtcdn.com/data/o2_assets/ebd42529c3342bdaf8b624a63a571fcc1585754330.png",
        topText : "RESTAURANT SAFETY MEASURE",
        bottomText : "Well Sanitized Kitchen"
    },
    {
        img : "https://b.zmtcdn.com/data/o2_assets/fa7443fb81df3ff2c54186672599c3db1585754076.png",
        topText : "RESTAURANT SAFETY MEASURE",
        bottomText : "Rider Hand Wash"
    },
    {
        img : "https://b.zmtcdn.com/data/o2_assets/8ecc61badb80ea685f0afc71a4d721671585754288.png",
        topText : "RESTAURANT SAFETY MEASURE",
        bottomText : "Daily Temp. Checks"
    }
];

const AboutCard = ({img,topText,bottomText}) => {
  return (
    <>
        <div className='flex gap-0  rounded-md px-2 shadow-md'>
            <div className='h-10 '>
                <img src={img} alt="" className='w-full h-full object-center object-cover items-center justify-items-center'/>
            </div>
            <div className='flex flex-col p-1 gap-1'>
                <h6 className='text-xs text-gray-400'>{topText}</h6>
                <h6 className='text-md'>{bottomText}</h6>
            </div>
        </div>
    </>
  )
}

export default AboutCard