import axios from "axios";
import fetch from "node-fetch";

async function getData(number){
    const {data:user}=await axios("https://jsonplaceholder.typicode.com/users/"+number)

    const {data:post}=await axios("https://jsonplaceholder.typicode.com/posts/"+number)

    console.log(user);
    console.log("posts:",post);
}

getData(1)