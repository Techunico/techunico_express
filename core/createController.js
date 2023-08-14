const fs = require('fs');

// Get the command-line arguments (parameters) passed to the script
const args = process.argv.slice(2);

if(args.length != 1){
    console.log(`1 Argument Expcted Recived ${args.length}`)
}else{
    const fs = require('fs');
const exists = fs.existsSync('./controllers');
if(!exists){
    fs.mkdir('./controllers', (err) => {
        if(err){
            console.log(err);
        }else{
            console.log('folder created')
        }
    });
}
}

let filePath = `./controllers/${args[0]}.js`;
let dataToWrite = '';
fs.readFile('./core/template/controller.js', (err, data)=>{
    if(err){
        console.log(err)
    }else{
        dataToWrite = data;
        fs.writeFile(filePath, dataToWrite, { encoding: 'utf8' }, (err) => {
            if (err) {
              console.error('Error writing to file:', err);
            } else {
              console.log('Data has been written to the file.');
            }
          });
          console.log( `${args[0]} Created Successfully`);
        }
    })
