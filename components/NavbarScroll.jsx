"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import SideCart from './SideCart';

export default function NavbarScroll() {
    const [isOpenBrand, setIsOpenBrand] = useState(false);
    const [isOpenInformation, setIsOpenInformation] = useState(false);
    const [isOpenCart, setIsOpenCart] = useState(false)


    const pathname = usePathname();
    return (
        <>
            <div className="flex-row mx-auto md:px-20 lg:px-48 navbar bg-base-100">
                <div className='flex justify-start pb-2 me-4 md:hidden'>
                    <FontAwesomeIcon className='text-xl' icon={faBars} />
                </div>
                <div className="gap-10 md:mb-4 me-12">
                    <img src="/logo (1).jpg" className="w-32 lg:px-0 " alt="logo" />
                </div>
                <div className='flex flex-col items-start w-full gap-2'>
                    <div className='flex justify-end w-full lg:justify-between text-start'>
                        <div className='items-center hidden mt-2 text-sm md:flex pb-7'>
                            <Link
                                className={`${pathname === '/' ? 'text-primary md:px-7 ps-0 pe-7 ' : ''}`}
                                href="/"
                            >HOME</Link>
                            <div
                                onMouseEnter={() => setIsOpenBrand(true)} onMouseLeave={() => setIsOpenBrand(false)}
                                className='relative z-20 px-7'>
                                <Link
                                    href={`/brand`}
                                    className='duration-300 hover:text-primary'
                                >BRAND
                                </Link>
                                <div onMouseEnter={() => setIsOpenBrand(true)} onMouseLeave={() => setIsOpenBrand(false)} className={isOpenBrand ? 'absolute z-10 pt-7' : "overflow-hidden hidden"}>
                                    <div className='grid grid-cols-2 gap-4 px-3 text-gray-600 -translate-x-40 bg-white w-96 top-10'>
                                        <Link className="p-4 text-sm border-b border-dashed hover:text-primary" href='/aas'>
                                            Mukena
                                        </Link>
                                        <Link className="p-4 text-sm border-b border-dashed hover:text-primary" href='/aas'>
                                            Jacket/Coat
                                        </Link>
                                        <Link className="p-4 text-sm border-b border-dashed hover:text-primary" href='/aas'>
                                            Craft
                                        </Link>
                                        <Link className="p-4 text-sm border-b border-dashed hover:text-primary" href='/aas'>
                                            Bag
                                        </Link>
                                        <Link className="p-4 text-sm border-b border-dashed hover:text-primary" href='/aas'>
                                            Skirt/Pants
                                        </Link>
                                        <Link className="p-4 text-sm border-b border-dashed hover:text-primary" href='/aas'>
                                            Drink
                                        </Link>
                                        <Link className="p-4 text-sm border-b border-dashed hover:text-primary" href='/aas'>
                                            Set Syari
                                        </Link>
                                        <Link className="p-4 text-sm border-b border-dashed hover:text-primary" href='/aas'>
                                            Food
                                        </Link>
                                        <Link className="p-4 text-sm border-b border-dashed hover:text-primary" href='/aas'>
                                            Blouse
                                        </Link>
                                        <Link className="p-4 text-sm border-b border-dashed hover:text-primary" href='/aas'>
                                            Outer
                                        </Link>
                                        <Link className="p-4 text-sm border-b border-dashed hover:text-primary" href='/aas'>
                                            Hijab
                                        </Link>
                                        <Link className="p-4 text-sm border-b border-dashed hover:text-primary" href='/aas'>
                                            Dress
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div onMouseEnter={() => setIsOpenInformation(true)} onMouseLeave={() => setIsOpenInformation(false)}
                                className='relative h-full px-7'
                            >
                                <Link
                                    className='duration-300 hover:text-primary'
                                    href='/product' >INFORMATION
                                </Link>
                                <div onMouseEnter={() => setIsOpenInformation(true)} onMouseLeave={() => setIsOpenInformation(false)} className={isOpenInformation ? 'absolute z-10 pt-7' : "overflow-hidden hidden"}>
                                    <div className='flex flex-col w-56 gap-4 px-3 text-gray-600 bg-white top-10'>
                                        <Link className="px-4 py-3 text-sm duration-300 border-b border-dashed hover:text-primary " href='/aas'>
                                            CARA PEMBELIAN
                                        </Link>
                                        <Link className="px-4 py-3 text-sm duration-300 border-b border-dashed hover:text-primary " href='/aas'>
                                            F.A.Q
                                        </Link>
                                        <Link className="px-4 py-3 text-sm duration-300 border-b border-dashed hover:text-primary " href='/aas'>
                                            KONFIRMASI PEMBAYARAN
                                        </Link>
                                        <Link className="px-4 py-3 text-sm duration-300 border-b border-dashed hover:text-primary " href='/aas'>
                                            TENTANG HIJJA
                                        </Link>
                                        <Link className="px-4 py-3 text-sm duration-300 border-b border-dashed hover:text-primary " href='/aas'>
                                            SYARAT & KETENTUAN
                                        </Link>
                                        <Link className="px-4 py-3 text-sm duration-300 border-b border-dashed hover:text-primary " href='/aas'>
                                            PENGEMBALIAN DAN PENUKARAN
                                        </Link>
                                    </div>
                                </div>

                            </div>
                            <Link
                                className='duration-300 hover:text-primary px-7'
                                href='/contact' >BLOG</Link>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='p-2 text-xl' />
                            <FontAwesomeIcon onClick={() => setIsOpenCart(!isOpenCart)} icon={faCartShopping} className='p-2 text-xl border-s ps-6' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='z-50'>
                <SideCart isOpenCart={isOpenCart} setIsOpenCart={setIsOpenCart} />
            </div>
        </>
    )
}