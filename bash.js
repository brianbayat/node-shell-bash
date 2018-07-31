const pwdFunc = require('./pwd')
const {lsFunc}= require('./ls');
process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if(cmd === 'pwd'){
        pwdFunc();
        // process.stdout.write('We give you now!!! ' + __dirname);
    }
    if(cmd === 'ls'){
        lsFunc();
    }


    process.stdout.write('\nprompt > ');
});