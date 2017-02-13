import * as HeightMap from 'modules/height-map';

(async function(){

    try {
        console.log("server execution start");
        const heightMap = await HeightMap.loadFromImage({
            url: "http://libnoise.sourceforge.net/tutorials/images/firstheightmap.jpg"
        })

        console.log("server execution end")
    } catch (error){
        console.log("server execution failed", error);
    }
}())
