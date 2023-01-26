const ejs = require('ejs');
const fs = require('fs');

const files=JSON.parse(fs.readFileSync('map.json',"utf8")).files;
for(const file of files){
    ejs.renderFile(`src/${file}`, {}, {
        views:"./src",
        strict:true
    }, (err, str)=>{
        fs.writeFile(`dist/${file}`,str,()=>{});
    });
}