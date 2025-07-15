/*
const path = "./"; 
const xmlHttp = new XMLHttpRequest(); 
xmlHttp.open("GET", path, false);
xmlHttp.send(); 

const directoryListing = xmlHttp.responseText; 
console.log(directoryListing); 
const files = directoryListing.split("\n"); 
console.log(files); 

for(let file of files)
{
    const fileInfo = file.split(' ');
    if(fileInfo[0] == "201:")
        console.log(fileInfo); 
}
*/ 

const pageW = document.getElementById("resizer").scrollWidth; 
const pageH = document.getElementById("resizer").scrollHeight; 

console.log("PAGE: " + pageW + "x" + pageH); 
const canvas = document.getElementById("pixels"); 
const ctx = canvas.getContext("2d"); 


const image  = new Image(); 
image.src = "./region65PixelNoAvg.png"; 


image.onload = loadImage;

function loadImage()
{
    let width = 0, height = 0; 

    let imageW = image.naturalWidth; 
    let imageH = image.naturalHeight; 
    
    const imageRatio = imageW / imageH; 

    console.log("Image: " + imageW + "x" + imageH); 

    if(imageW > pageW)
    {
        console.log("IMAGE LARGER THAN WIDTH");
        const diff = imageW - pageW; 
        const heightShrinkage = diff * imageRatio; 

        width = pageW; 
        height = imageH - heightShrinkage; 
                
        console.log("Shrinking to be: " + width + "x" + height); 

    }
    else if(imageH > pageH)
    {
        console.log("IMAGE LARGER THAN HEIGHT")
        const diff = imageH - pageH; 
        const widthShrinkage = diff * imageRatio; 

        width = imageW - widthShrinkage; 
        height = pageH; 

        console.log("Shrinking to be: " + width + "x" + height); 
    }
    else 
    {
        width = imageW; 
        height = imageH; 
    }

    canvas.width = width; 
    canvas.height = height; 

    ctx.drawImage(image, 0, 0, width, height); 
}
 