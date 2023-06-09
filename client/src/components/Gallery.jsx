import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
const images = [image1,image2,image3,image4,image1,image2,image3,image4];
const Gallery = () => {
  return (
    <div className="p-4 md:p-10">
      <h2 className="text-red-800 font-bold text-4xl text-center">Gallery</h2>
      {/* Images */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 mt-4">
        {
          images.map((image,index)=>{
            return (
                <img src={image} className="w-full" key={index}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Gallery