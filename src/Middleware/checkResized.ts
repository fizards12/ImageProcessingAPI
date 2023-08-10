import express from 'express';
import sharp from 'sharp';
import path from 'path';
import { promises as fsPromises } from 'fs';

const checkImage = async (
  req: express.Request,
  res: express.Response,
  next: () => void
) => {
  try {
    const width: string = req.query.width as string;
    const height: string = req.query.height as string;
    const name : string = req.query.name as string;
    const resizedImagePath = path.resolve(__dirname,
      '..',
      'thumb',
      name.slice(0,name.indexOf('.')) +
      '_' + width + 
      '_' + height +
      name.slice(name.indexOf('.'),name.length));

    await fsPromises.readFile(resizedImagePath)
    .then(()=>{
      res.status(201).sendFile(resizedImagePath);
    })
    .catch(() => {
        throw 'First access to the endpoint';
    });

  } catch (err) {
    console.log(err);
    next();
  }
};

export default checkImage;
