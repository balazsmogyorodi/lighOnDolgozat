import Controller from "./controller/controller.js"


$(function(){
    const articleElem = $("article");
    const navElem = $("nav");
    new Controller(articleElem, navElem);



})