import { useState } from "react";
import "./newProduct.css";
// import storage from "../../fbase";
import app from "../../firebase"; // Import as default
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const storage = getStorage(app);





export default function NewProduct() {

  const [movie, setMovie] = useState(null)
  const [image, setImage] = useState()
  const [imageTitle, setImageTitle] = useState()
  const [imageSm, setImageSm] = useState()
  const [trailer, setTrailer] = useState()
  const [video, setVideo] = useState()
  const [uploaded, setUploaded] = useState(0)
  const [progress, setProgress] = useState(0)
  const [currentFile, setCurrentFile] = useState('')

  console.log(movie)
  console.log(`Trailer ${trailer?.name}`)
  console.log(`Video ${video?.name}`)
  console.log(`Image ${image?.name}`)
  console.log(`Image Title ${imageTitle?.name}`)
  console.log(`Image Sm ${imageSm?.name}`)

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value })
  }

  const upload = (items) => {
    

    items.forEach(item => {
      console.log(item.file)
      setCurrentFile(item.label)
      const fileName = new Date().getTime() + item.label + item.file?.name;
      const storageRef = ref(storage, `/items/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, item.file);



      uploadTask.on("state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress)
          console.log("Upload of " + item.file.name + " is" + progress + "% done")
        },
        (error) => {
          console.log(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setMovie({ ...movie, [item.label]: url })
            setUploaded(uploaded + 1)
          })
        }
      )

    })
  }

  const handleUpload = (e) => {
    e.preventDefault()
    upload([
      { file: image, label: "img" },
      { file: imageTitle, label: "imgTitle" },
      { file: imageSm, label: "imgSm" },
      { file: video, label: "video" },
      { file: trailer, label: "trailer" },
    ])
  }



  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">


        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="img" name="img" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <div className="addProductItem">
          <label>Title Image</label>
          <input type="file" id="imgTitle" name="imgTitle" onChange={(e) => setImageTitle(e.target.files[0])} />
        </div>
        <div className="addProductItem">
          <label>Thumbnail Image</label>
          <input type="file" id="imgSm" name="imgSm" onChange={(e) => setImageSm(e.target.files[0])} />
        </div>



        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="John Wick" name="title" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input type="text" placeholder="Description" name="desc" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input type="text" placeholder="Year" name="year" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input type="text" placeholder="Genre" name="genre" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Duration</label>
          <input type="text" placeholder="Duration" name="duration" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Limit</label>
          <input type="text" placeholder="Limit" name="limit" onChange={handleChange} />
        </div>


        <div className="addProductItem">
          <label>Is Series?</label>
          <select name="isSeries" id="isSeries" onChange={handleChange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>


        <div className="addProductItem">
          <label>Trailer</label>
          <input type="file" name="trailer" onChange={(e) => { console.log(e.target.files[0]); setTrailer(e.target.files[0]) }} />
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input type="file" name="video" onChange={(e) => setVideo(e.target.files[0])} />
        </div>

        {uploaded === 5 ? (
          <button className="addProductButton">Create</button>
        ) : (
          <button className="addProductButton" onClick={handleUpload}>Upload</button>
        )}

      </form>

      {/* <h1>Upload Progress: {progress}%</h1> */}
      <h2>{`upload of ${currentFile} is ${progress}%`}</h2>
    </div>
  );
}
