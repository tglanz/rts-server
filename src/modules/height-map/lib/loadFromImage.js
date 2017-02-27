import Jimp from 'jimp';

import * as args from 'args';
import Matrix2d from 'matrix-2d';
import HeightMap from './HeightMap';

const _calculateHeight = ({
    r = args.mandatory("r"),
    g = args.mandatory("g"),
    b = args.mandatory("b")
}) => ((r + g + b) % 255) / 255;

export default async function({
    url = args.mandatory("url")
}){
    const image = await Jimp.read(url)
    
    const heightMatrix = new Matrix2d({
        columnCount: image.bitmap.width,
        rowCount: image.bitmap.height
    })

    image.greyscale().scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
        const heightValue = _calculateHeight({
            r: this.bitmap.data[idx + 0],
            g: this.bitmap.data[idx + 1],
            b: this.bitmap.data[idx + 2],
            a: this.bitmap.data[idx + 3]
        })

        heightMatrix.setEntry(x, y, heightValue);
    })

    return new HeightMap({ heightMatrix })
}