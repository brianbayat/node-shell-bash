// function pwdFunc (){
//     process.stdout.write('We give you now some directory ' + __dirname);
// }
// module.exports = {pwdFunc};
module.exports = function(){
    process.stdout.write('We give you now some directory ' + __dirname); 
}

