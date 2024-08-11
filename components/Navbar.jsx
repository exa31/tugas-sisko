"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {

    const [isOpenBrand, setIsOpenBrand] = useState(true);

    const pathname = usePathname();
    return (
        <div className="container px-20 pb-0 mx-auto navbar bg-base-100">
            <div className="gap-10 me-12">
                <Image src="/logo (1).jpg" alt="logo" width={250} height={200} />
            </div>
            <div className='flex flex-col items-start w-full gap-2'>
                <div className='flex justify-between w-full border-b text-start'>
                    <h1 className='text-xl text-start'>Hijja Indonesia</h1>
                    <div>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='p-2 text-xl' />
                        <FontAwesomeIcon icon={faCartShopping} className='p-2 text-xl border-s ps-6' />
                    </div>
                </div>
                <div className='flex'>
                    <Link
                        className={`${pathname === '/' ? 'text-primary px-7' : ''}`}
                        href="/"
                    >HOME</Link>
                    <div
                        onMouseEnter={() => setIsOpenBrand(true)} onMouseLeave={() => setIsOpenBrand(false)}
                        className='relative block h-full border-2 px-7'>
                        <button
                            className='duration-300 hover:text-primary'
                        >BRAND
                        </button>
                        <div onMouseEnter={() => setIsOpenBrand(true)} onMouseLeave={() => setIsOpenBrand(false)} className={isOpenBrand ? 'absolute -mt-1 z-10 grid grid-cols-2 gap-4 -translate-x-40 bg-white w-96 top-10' : "overflow-hidden hidden"}>
                            <Link className="p-4 text-xs border-b border-dashed" href='/aas'>
                                Mukena
                            </Link>
                            <Link className="p-4 text-xs border-b border-dashed" href='/aas'>
                                Jacket/Coat
                            </Link>
                            <Link className="p-4 text-xs border-b border-dashed" href='/aas'>
                                Craft
                            </Link>
                            <Link className="p-4 text-xs border-b border-dashed" href='/aas'>
                                Bag
                            </Link>
                            <Link className="p-4 text-xs border-b border-dashed" href='/aas'>
                                Skirt/Pants
                            </Link>
                            <Link className="p-4 text-xs border-b border-dashed" href='/aas'>
                                Drink
                            </Link>
                            <Link className="p-4 text-xs border-b border-dashed" href='/aas'>
                                Set Syari
                            </Link>
                            <Link className="p-4 text-xs border-b border-dashed" href='/aas'>
                                Food
                            </Link>
                            <Link className="p-4 text-xs border-b border-dashed" href='/aas'>
                                Blouse
                            </Link>
                            <Link className="p-4 text-xs border-b border-dashed" href='/aas'>
                                Outer
                            </Link>
                            <Link className="p-4 text-xs border-b border-dashed" href='/aas'>
                                Hijab
                            </Link>
                            <Link className="p-4 text-xs border-b border-dashed" href='/aas'>
                                Dress
                            </Link>
                        </div>
                    </div>
                    <Link
                        className={`${pathname === '/aa' ? 'text-primary' : 'px-7'}`}
                        href='/product' >INFORMATION</Link>
                    <Link
                        className={`${pathname === '/asa' ? 'text-primary' : 'px-7'}`}
                        href='/contact' >BLOG</Link>
                </div>
            </div>
        </div>
    )
}