import Image from "next/image";
export default function MenuItem({
  basePrice,
  name,
  sizes,
  extraIngredientPrices,
  image,
  description,
}) {
  return (
    <div className="bg-gray-300 mx-auto  w-72 p-4 rounded-lg text-center flex flex-col items-center cursor-pointer hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      <div className="h-52 w-48 relative">
        <Image src={image} layout={"fill"} objectFit={"contain"} alt={""} />
      </div>

      <h4 className="font-semibold my-2 text-xl">{name}</h4>
      <p className="text-gray-500 text-sm line-clamp-3">{description}</p>
      <button className="bg-primary text-white rounded-full px-6 py-2 mt-1">
        Add to cart {basePrice} $
      </button>
    </div>
  );
}
