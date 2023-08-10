import sharp from 'sharp';
const resize = async (
  width: number,
  height: number,
  originalImage: string,
  resizedImageName: string
) => {
  try {
    await sharp(originalImage)
      .resize(width, height)
      .toFile(resizedImageName)
      .catch(() => {
        throw 'error';
      });
    return true;
  } catch (err) {
    console.log("Error: Couldn't resize the Image");
    throw "Error: Couldn't resize the Image";
  }
};

export default resize;
