import ButtonHome from "@/components/ButtonHome";
import CarouselPlugin from "@/components/CarouselComponent";
import axios from "axios";


export default async function Home() {
  const data = await axios.get("https://sistemtoko.com/public/demo/product?page=1&sorting=Lates&categories=all&search_name=none");
  const image = [
    {
      src: "/banner1.jpg",
      alt: "banner1",
    },
    {
      src: "/banner2.jpg",
      alt: "banner2",
    },
    {
      src: "/banner3.jpg",
      alt: "banner3",
    },
  ];
  return (
    <>
      <CarouselPlugin />
      <main className="container mx-auto">
        <div className="w-full gap-8 p-4 mt-16 md:flex md:justify-center md:flex-nowrap">
          {
            image.map((img, index) => (
              <div className="mb-8 overflow-hidden grow" key={index}>
                <img className="w-full h-full duration-200 hover:brightness-75 hover:scale-110" src={img.src} alt={img.alt} />
              </div>
            ))
          }
        </div>
        <div className="flex flex-col p-4" >
          <div className="mb-8 bg-gray-100 text-start">
            <h3 className="p-2">Home/ <span className="opacity-90">Categories</span></h3>
          </div>
          <div className="grid grid-cols-4 gap-8">
            {
              data.data.aaData.map((product, index) => (
                <div key={index}>
                  <img className="w-full h-72" src={product.photo} alt={product.name} />
                  <div className="flex flex-col items-center gap-4">
                    <h3 className="mt-4 font-semibold">{product.name.toUpperCase()}</h3>
                    <p>Rp {product.price}</p>
                    <button className="text-white bg-black rounded-none hover:text-white hover:btn-primary btn">ADD TO CART</button>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex justify-center">
            <ButtonHome />
          </div>
        </div>
      </main>
    </>
  );
}
