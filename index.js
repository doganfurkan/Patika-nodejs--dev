import odev from "./myModule.js";

odev(1).then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e);
})