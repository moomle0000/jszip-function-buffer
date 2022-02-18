const jszip = require("jszip");
const fetch = require('cross-fetch');


// buffer can ues path or fetch arrayBuffer//
async function jszipe(buffer){
    const zip = await jszip.loadAsync(buffer)

    const folder = await Object.keys(zip.files)

    const file = await zip.file(folder[0]).async("nodebuffer")

    const data = await file.toString()
    return data;
}

// url example https://example.com/zip/file.zip //
async function downloadFile(url) {
    const response = await fetch(url);

    const data = await response.arrayBuffer();

    return data

}


module.exports = {
    downloadFile: downloadFile,
    vttData:vttData
}
