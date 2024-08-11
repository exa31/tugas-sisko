import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (

        <footer className="text-white bg-footer ">
            <div className="flex justify-center pt-20 text-center ">
                <div className="px-8 pb-2 border-b border-r border-gray-800 border-opacity-45 basis-1/4">
                    <h4 className="text-xs italic text-primary">Talk to Us Now !</h4>
                    <h2 className="text-lg">CONTACT US</h2>
                    <img className="mx-auto mt-2 mb-8" src="/driver.png" alt="" />
                    <p className="text-xs opacity-50">Jl. Palagan km 10 Rejodani, Ngaglik Sleman Yogyakarta</p>
                    <p><FontAwesomeIcon icon={faPhone} /> 0877-3821-0660</p>
                </div>
                <div className="px-8 pb-2 border-b border-gray-800 border-opacity-45 basis-1/4">
                    <h4 className="text-xs italic text-primary">Talk to Us Now !</h4>
                    <h2 className="text-lg">OUR SERVICES</h2>
                    <img className="mx-auto mt-2 mb-8" src="/driver.png" alt="" />
                    <p className="pb-2 text-xs opacity-50" >CARA PEMBELIAN</p>
                    <p className="pb-2 text-xs opacity-50">F.A.Q</p>
                    <p className="pb-2 text-xs opacity-50">KONFIRMASI PEMBAYARAN</p>
                    <p className="pb-2 text-xs opacity-50">TENTANG HIJJA</p>
                    <p className="pb-2 text-xs opacity-50">SYARAT & KETENTUAN</p>
                    <p className="pb-2 text-xs opacity-50">PEMNGEMBALIAN DAN PENUKARAN</p>
                </div>
                <div className="px-8 pb-2 border-b border-l border-gray-800 border-opacity-45 basis-1/4">
                    <h4 className="text-xs italic text-primary">Talk to Us Now !</h4>
                    <h2 className="text-lg">FOLLOW US</h2>
                    <img className="mx-auto mt-2 mb-8" src="/driver.png" alt="" />
                    <div className="flex justify-center gap-2q">
                        <div className="w-10 h-10 p-2 text-black bg-white rounded-full">
                            <FontAwesomeIcon className="text-xl" icon={faFacebookF} />
                        </div>
                        <div className="w-10 h-10 p-2 text-black bg-white rounded-full">
                            <FontAwesomeIcon className="text-xl" icon={faTwitter} />
                        </div>
                        <div className="w-10 h-10 p-2 text-black bg-white rounded-full">
                            <FontAwesomeIcon className="text-xl" icon={faInstagram} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center pt-10 pb-6">
                <p className="text-xs text-gray-400">supported by <span className=" text-primary">www.sistemtoko.com.</span> Allright reserved</p>
            </div>
        </footer>
    )

}