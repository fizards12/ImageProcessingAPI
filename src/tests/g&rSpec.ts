import resize from '../get&resize';
import path from 'path';

describe('Is the image resized', () => {
  it('resized', async () => {
    const width = 200;
    const height = 200;
    const originalImagePath : string = path.resolve(__dirname , '..' , 'images/backgrauand.png');
    const thumbedImagePath = path.resolve(__dirname , '..' , 'thumb/backgrauand_' + width + '_' + height + '.png')

    console.log(originalImagePath + '\n' + thumbedImagePath);
    const result = await resize(
      width,
      height,
      originalImagePath,
      thumbedImagePath
    );
    expect(result).toEqual(true);
  });
});
