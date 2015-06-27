var init = require('../init/init.js');

describe("Firebase is initialized",function(){
    it("relation is good",function(done){
        init(function(err,res){
            var data = res;
            var tableId = Object.keys(data.table)[0];
            if(data.shop){
                if(data.shop[data.table[tableId].shop].name == "testShop"){
                    done();
                }
            }
        })
    })
})