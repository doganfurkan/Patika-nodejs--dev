import axios from "axios";

function odev(gelen){
    return new Promise(async (resolve, reject) => {
        if(typeof gelen == "number"){
            var { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${gelen}`);
            var { data: post } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${gelen}`);
            let userim = user;
            userim.posts = post;
            resolve(userim);
        }

        reject("'Number' türünde bir veri girmelisiniz");
    })
}

export default odev;