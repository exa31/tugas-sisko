"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import SideCart from './SideCart';

export default function Navbar({ handleOpenSearch }) {

    const [isOpenBrand, setIsOpenBrand] = useState(false);
    const [isOpenInformation, setIsOpenInformation] = useState(false);
    const [isOpenCart, setIsOpenCart] = useState(false)
    const [isOpenNav, setIsOpenNav] = useState(false)


    const pathname = usePathname();
    return (
        <>
            <div className="container flex-row px-4 py-0 mx-auto md:px-20 md:flex-col lg:flex-row navbar bg-base-100">
                <div className='flex justify-start pb-2 me-4 md:hidden'>
                    <FontAwesomeIcon onClick={() => setIsOpenNav(true)} className='text-xl' icon={faBars} />
                </div>
                <div className="gap-10 md:mb-4 me-12">
                    <img src="/logo (1).jpg" className="w-32 md:px-24 lg:px-0 lg:w-72 md:w-screen" alt="logo" />
                </div>
                <div className='flex flex-col items-start w-full gap-2'>
                    <div className='flex justify-end w-full md:border-b md:justify-between text-start'>
                        <h1 className='hidden text-xl md:block text-start'>Hijja Indonesia</h1>
                        <div>
                            <FontAwesomeIcon onClick={() => handleOpenSearch()} icon={faMagnifyingGlass} className='p-2 text-xl' />
                            <FontAwesomeIcon onClick={() => setIsOpenCart(!isOpenCart)} icon={faCartShopping} className='p-2 text-xl border-s ps-6' />
                        </div>
                    </div>
                    <div className={isOpenNav ? 'items-center duration-300  overflow-auto z-50 fixed md:static md:flex-row text-white md:px-0 px-4 md:text-black left-0 flex-col w-full h-full top-0 md:bg-transparent bg-black md:mt-2 text-sm md:flex pb-7' :
                        'items-center fixed md:static text-black overflow-hidden md:overflow-visible top-0 w-0 duration-300 mt-0 md:mt-2 h-full left-0 text-sm md:flex pb-7'
                    }>
                        <div className='flex justify-end p-5 md:hidden'>
                            <FontAwesomeIcon onClick={() => setIsOpenNav(!isOpenNav)} className='p-3 text-white border border-gray-700' icon={faX} />
                        </div>
                        <Link
                            className={`${pathname === '/' ? 'pt-2 block pb-4 md:pb-0 border-b md:border-none border-gray-700 text-primary md:ps-0 pe-7 ' : ''}`}
                            href="/"
                        >HOME</Link>
                        <div
                            onMouseEnter={() => setIsOpenBrand(true)} onMouseLeave={() => setIsOpenBrand(false)}
                            className='relative z-20 block pt-2 pb-4 border-b border-gray-700 md:border-none md:pb-0 ps-0 md:px-7 '>
                            <Link
                                href={`/brand`}
                                className='block duration-300 hover:text-primary'
                            >BRAND
                            </Link>
                            <div onMouseEnter={() => setIsOpenBrand(true)} onMouseLeave={() => setIsOpenBrand(false)} className={isOpenBrand ? ' md:absolute w-full z-50 pt-7' : "hidden"}>
                                <div className='grid w-full grid-cols-1 px-3 text-gray-600 bg-white md:gap-4 md:-translate-x-40 md:grid-cols-2 md:w-96 top-10'>
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
                            className='relative block pt-2 pb-4 border-b border-gray-700 md:border-none md:pb-0 ps-0 md:px-7'
                        >
                            <Link
                                className='duration-300 hover:text-primary'
                                href='/product' >INFORMATION
                            </Link>
                            <div onMouseEnter={() => setIsOpenInformation(true)} onMouseLeave={() => setIsOpenInformation(false)} className={isOpenInformation ? 'md:absolute z-10 pt-7 w-full' : "overflow-hidden hidden"}>
                                <div className='flex flex-col gap-4 px-3 text-gray-600 bg-white md:w-56 top-10'>
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
                            className='block pt-2 pb-4 duration-300 border-b border-gray-700 md:border-none md:pb-0 hover:text-primary ps-0 md:px-7'
                            href='/contact' >BLOG</Link>
                    </div>
                </div>
            </div>
            <div className='z-50'>
                <SideCart isOpenCart={isOpenCart} setIsOpenCart={setIsOpenCart} />
            </div>
        </>
    )
}