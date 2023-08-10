import { promises as fsPromises } from 'fs';
import express from 'express';
import path from 'path';

const checkImage = async (
  req: express.Request,
  res: express.Response,
  next: () => void
) => {
  try {
    const width : string = req.query.width as string;
    const height : string = req.query.height as string;
    const name : string = req.query.name as string;
    
    if(!name && !height && !width){
      throw 'No queries entered';
    } else{
      const imagePath: string = path.resolve( __dirname ,'..' , 'images' , name);
      await fsPromises.readFile(imagePath).catch((err) => {
        throw 'Wrong image';
      });
    }

    
    next();
  } catch (err) {
    
    if(err == 'No queries entered'){
      res.status(400).send(`<h1> Please write correct width and height and name </h1>
      <h2> URL : localhost:portnumber/image?name=<em>filename</em>&width=<em>Positive number</em>&height=<em>Positive number</em></h2>`);
      console.log('Please write the width and height and name of the Image you want to resize');
    } else {
      res.status(401).send('<h1>Please set the correct image name with its extension like <strong>test.png</strong></h1>');
      console.log('Image not found in Images folder');
    }
  }
};

export default checkImage;
