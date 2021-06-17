const url = process.env.REACT_APP_CLOUDINARY_API_KEY;
const name = process.env.REACT_APP_CLOUDINARY_NAME;

class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "spujmpfx");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/soojin/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    return await res.json();
  }
}

export default ImageUploader;
