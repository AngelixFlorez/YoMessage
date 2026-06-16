import ImageKit, { toFile } from "@imagekit/nodejs";

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,})

function hasImageKitConfig(){
    return Boolean(process.env.IMAGEKIT_PRIVATE_KEY);
}

//Create unique file name for each upload
function createFileName(originalName = "upload"){
    const safeName = originalName.replace(/[^a-z0-9.]/g, "-");
    return `chat-${Date.now()}-${safeName}`;

}
/**
 * Upload chat media files to ImageKit
 *@see https://imagekit.io/docs/api_reference/upload-file/upload-file
*/

//Upload media files for chat
async function uploadChatMedia(file){
    const fileName = createFileName(file.originalname);

    const result = await imagekit.files.upload({
        file: await toFile(file.buffer, fileName, {type: file.mimetype}),
        fileName,
        folder: "/chat",
    })

    return result.url;
}

export { uploadChatMedia, hasImageKitConfig };