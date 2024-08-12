export default function SideCart({ isOpenCart, setIsOpenCart }) {


    const cart = []

    return (
        <div className={isOpenCart ? "fixed duration-75 top-0 right-0 z-50 min-h-screen shadow-2xl shadow-cart w-72" : "absolute duration-75 top-0 right-0 z-10 min-h-screen shadow-2xl overflow-hidden shadow-cart w-0 "}>
            <div className="flex justify-between w-full min-h-screen p-3 sh bg-sideCart">
                <h2>Daftar Belanja</h2>
                <button onClick={() => setIsOpenCart(false)} className="text-white rounded btn btn-sm btn-error">X</button>
            </div>
            <div className="min-h-screen bg-white">
                {cart.length === 0 ?
                    <div className="h-20 ">
                        <p className="text-xs text-center opacity-75 pt-7">- Shopping Cart Empty -</p>
                    </div>
                    : ''}
            </div>
        </div>
    )
}