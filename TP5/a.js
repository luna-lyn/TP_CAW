
const fs = require('fs');
var arg = process.argv;
var fileinp = arg.slice(3);

function grepn(expreg,fileinp){
    const inp = new RegExp(expreg);
    var co=0;
    for (let i = 0; i < fileinp.length; i++){
        
        if(fileinp[i].match('.txt')){
            var fdata=fs.readFileSync(`${fileinp[i]}`, 'utf8');
            if(inp.test(fdata)){
                console.log(`found in: ${fileinp[i]}`);
                co=co+1;
            }

        }else{
            console.log("this element",[i],"is not a .txt file ")
        }
        
           
    }
    if(co==0){
        console.log("NONE");
    }
}




console.log(grepn(arg[2],fileinp));






// //code if files we are looking to search in are not only text files 
// const fs = require('fs');
// var arg = process.argv;
// var fileinp = arg.slice(3);

// function grepn(expreg,fileinp){
//     const inp = new RegExp(expreg);
//     var co=0;
//     for (let i = 0; i < fileinp.length; i++){ 
//         var fdata=fs.readFileSync(`${fileinp[i]}`, 'utf8');
//             if(inp.test(fdata)){
//                 console.log(`found in: ${fileinp[i]}`);
//                 co=co+1;
//             }
//     }
        
//     if(co==0){
//         console.log("NONE");
//     }
// }




// console.log(grepn(arg[2],fileinp));







