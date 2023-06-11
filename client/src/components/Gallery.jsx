const images = ["gallery/image1.png","gallery/image2.png","gallery/image3.png","gallery/image4.png","gallery/image5.png","gallery/image6.png","gallery/image7.png","gallery/image8.png"];
const Gallery = () => {
  return (
    <div className="p-4 md:p-10" id="gallery">
      <h2 className="text-red-800 font-bold text-4xl text-center">Gallery</h2>
      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8 mt-4">
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