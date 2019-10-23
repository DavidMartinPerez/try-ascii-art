// Dependencies
const imageToAscii = require("image-to-ascii");

const url = "http://www.elmercuriomediacenter.cl/wp-content/uploads/mcdonald-s-logo-255A7B5646-seeklogo.com_.png";
// The path can be either a local path or an url
imageToAscii(url, (err, converted) => {
    console.log(err || converted);
});