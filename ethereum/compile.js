const path=require('path');
const solc = require('solc');
const fs = require('fs-extra');
const { readFileSync } = require('fs');
const buildpath = path.resolve(__dirname,'build');
fs.removeSync(buildpath);

const campaignpath = path.resolve(__dirname,'contracts','Campaign.sol');
const file=readFileSync(campaignpath,'utf-8');

const output=solc.compile(file,1).contracts;
fs.ensureDirSync(buildpath);
for(let contract in output){
    fs.outputJsonSync(
        path.resolve(buildpath,contract.replace(/:/g,'')+'.json'),
        output[contract]
    );
}