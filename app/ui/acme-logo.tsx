import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { Lusitana } from 'next/font/google';

export const lusitana = Lusitana({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-lusitana' 
});


export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.variable} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
