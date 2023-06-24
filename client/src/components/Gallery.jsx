const images = ["gallery/gallery17.jpg","gallery/gallery18.jpg","gallery/gallery3.jpg","gallery/gallery6.jpg","gallery/gallery7.jpg","gallery/gallery8.jpg",
"gallery/gallery9.jpg","gallery/gallery10.jpg","gallery/gallery11.jpg","gallery/gallery12.jpg","gallery/gallery13.jpg","gallery/gallery14.jpg"]
const Gallery = ({language}) => {
  return (
    <div className="p-4 md:p-10" id="gallery">
      <h2 className="text-red-800 font-bold text-4xl text-center">
        {language === "Telugu" ? "గ్యాలరీ" : "Gallery"}
      </h2>
      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8 mt-4">
        {
          images.map((image,index)=>{
            return (
                <img src={image} className="w-96 h-64" key={index}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Gallery