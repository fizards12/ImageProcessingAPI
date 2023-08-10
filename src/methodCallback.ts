import resize from './get&resize';
import express from 'express';
import path from 'path';

const call = async (req: express.Request, res: express.Response) => {
  try {
    const width = parseInt(req.query.width as string);
    const height = parseInt(req.query.height as string);
    const name: string = req.query.name as string;
    const originalImagePath = path.resolve(__dirname,'images',name);
    const thumbedImagePath = path.resolve(__dirname,
      'thumb',
      name.slice(0,name.indexOf('.')) +
      '_' + width + 
      '_' + height +
      name.slice(name.indexOf('.'),name.length));

    if (width > 0 && height > 0 && name) {
      await resize(
        width,
        height,
        originalImagePath,
        thumbedImagePath
      );
      
      res.status(200).sendFile(thumbedImagePath);
    } else {
      throw `<h1> Please write correct width and height</h1>
                      <h2> URL : localhost:portnumber/image?name=<em>filename</em>&width=<em>Positive number</em>&height=<em>Positive number</em></h2>`;
    }
  } catch (err) {
    res.status(402).send(err);
  }
};

export default call;
