const Son1 = require('./../son1/Son1');
module.exports={
    x:100,
    test:function(){
        console.log('调用test方法');
        document.write(Son1.link);
    }
}