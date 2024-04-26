/* eslint-disable @next/next/no-img-element */
import { IconParkSolidRocketOne } from "./icons/rocket";

export default function Home() {
  return (
    <>
      <div className="h-464px w-full">
        <img
          src="/mentorship-mob.png"
          alt="Next.js Logo"
          className="h-464px w-full"
        />
      </div>
      <div className="flex mt-4 space-x-4">
        <div className="border-l-12 h-68px border-orange-100"></div>
        <div className="manrope font-extrabold text-25px leading-34.15px">
          We will Turn Your Biggest Dream Into Reality
        </div>
      </div>
      <div className="border-b-0.4px border-orange-100 mx-4"></div>
      <div className="p-8 text-sm	leading-6.5">
        Ensure smooth business planning, co-working, and direct elevation with
        Think Ahoy.
      </div>
      <div className="grid grid-cols-2 ">
        <div>
          <img src="/h1-banner1 1.png" alt="banner" className="h-full"/>
        </div>
        <div className="p-2 h-59 grid grid-rows-8">
        <div className="row-span-2"><IconParkSolidRocketOne /></div>  
        <div className="text-base leading-21.86px font-semibold	row-span-1">For Startups</div>
        <div className="text-sm leading-20px row-span-4">Empower all startups giving them access to mentors, investors, and service providers.</div>
        <div className="text-xs leading-5.5 font-bold text-orange-200 row-span-1"> View more details</div>
        </div>
         <div className="p-2 h-59 grid grid-rows-8">
        <div className="row-span-2"><IconParkSolidRocketOne /></div>  
        <div className="text-base leading-21.86px font-semibold	row-span-1">For Service Provider</div>
        <div className="text-sm leading-20px row-span-4">Providing quality clientele and the merit of working with trust trustworthy network.</div>
        <div className="text-xs leading-5.5 font-bold text-orange-200 row-span-1"> View more details</div>
        </div>
         <div className="p-2 h-59 grid grid-rows-8 bg-gray-100">
        <div className="row-span-2"><IconParkSolidRocketOne /></div>  
        <div className="text-base leading-21.86px font-semibold	row-span-1">For Investors</div>
        <div className="text-sm leading-20px row-span-4">Built ourselves as an efficient platform to discover & connect with promising startups</div>
        <div className="text-xs leading-5.5 font-bold text-orange-200 row-span-1"> View more details</div>
        </div>
         <div className="p-2 h-59 grid grid-rows-8 bg-gray-100">
        <div className="row-span-2"><IconParkSolidRocketOne /></div>  
        <div className="text-base leading-21.86px font-semibold	row-span-1">Independent Teams</div>
        <div className="text-sm leading-20px row-span-4">As an independent team, you can also connect with more investors, mentors, & service providers in the same system.</div>
        <div className="text-xs leading-5.5 font-bold text-orange-200 row-span-1"> View more details</div>
        </div> <div className="p-2 h-59 grid grid-rows-8 ">
        <div className="row-span-2"><IconParkSolidRocketOne /></div>  
        <div className="text-base leading-21.86px font-semibold	row-span-1">For Mentor</div>
        <div className="text-sm leading-20px row-span-4">Bringing an opportunity for subject matter experts to share their expertise with aspiring entrepreneurs.</div>
        <div className="text-xs leading-5.5 font-bold text-orange-200 row-span-1"> View more details</div>
        </div>
        
      </div>
    </>
  );
}
