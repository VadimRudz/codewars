// const PDFExtract = require('pdf.js-extract').PDFExtract;
// const pdfExtract = new PDFExtract();
// const options = {}; /* see below */
// pdfExtract.extract('./files/transaction.pdf', options, (err, data) => {
//   if (err) return console.log(err);
//   console.log(data.pages[0].content);
// });


const fs = require('fs');
const pdf = require('pdf-parse');
 
let dataBuffer = fs.readFileSync('./files/transaction.pdf');
 
pdf(dataBuffer).then(function(data) {
 
    // number of pages
    // console.log(data.numpages);
    // number of rendered pages
    // console.log(data.numrender);
    // PDF info
    // console.log(data.info);
    // PDF metadata
    // console.log(data.metadata); 
    // PDF.js version
    // check https://mozilla.github.io/pdf.js/getting_started/
    // console.log(data.version);
    // PDF text
    console.log(data.text); 
        
});
