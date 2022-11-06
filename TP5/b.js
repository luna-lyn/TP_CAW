const fs = require('fs');
var arg = process.argv;
var fileinp = arg.slice(3);
var co=0;

function grepn(expreg,fileinp){
    const inp = new RegExp(expreg);
    for (let i = 0; i < fileinp.length; i++){
        const inpREP = fs.statSync(`./${fileinp[i]}`).isDirectory();
        
        if(!inpREP){  
            var fdata=fs.readFileSync(`${fileinp[i]}`, 'utf8');
            if(inp.test(fdata)){
                console.log(`found in: ${fileinp[i]}`);
                co=co+1;
            }
        } else {
            var inpdirf = fs.readdirSync(fileinp[i]);
            for(j=0; j< inpdirf.length; j++){
                inpdirf[j] = `./${fileinp[i]}/${inpdirf[j]}`;
            }
            
            console.log(grepn(expreg,inpdirf));
        } 
    }
        
  
 
    
}

console.log(grepn(arg[2],fileinp));

if(co==0){
  console.log("NONE");
}

