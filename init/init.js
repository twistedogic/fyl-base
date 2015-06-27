var Firebase = require('firebase');
var async = require("async");
var baseurl = "https://fylbe.firebaseio.com";
var rootRef = new Firebase(baseurl);
// var tableRef = new Firebase(baseurl + "/table");
// var menuRef = new Firebase(baseurl + "/menu");
// var tenantRef = new Firebase(baseurl + "/tenant");
// var shopRef = new Firebase(baseurl + "/shop");

rootRef.set({
    shop:"shop",
    table:"table",
    menu:"menu",
    tenant:"tenant",
    order:"order",
    history:"history"
},function(err){
    if(!err){
        console.log("OK");
    }
});
