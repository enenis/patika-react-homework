# patika-react-homework
- This function should be defined as **"async"** and exported by default. Asynchronous functions inside the function must be defined with **"await"**.
- The function takes a single parameter of type **Number**. This parameter specifies **user id**.
- The task of the function should be to go to the following endpoint and retrieve the user's data related to the user id given in the parameter. You have to make the requests using the **"axios"** library. When making the request, you need to replace the end of the following endpoint with the user id in the parameter.

[https://jsonplaceholder.typicode.com/users/1](https://jsonplaceholder.typicode.com/users/1)

- A "posts" request should also be made within the same function and for the same user id. When making the request, you need to change the number at the end of the endpoint below with the user id from the parameter.

[https://jsonplaceholder.typicode.com/posts?userId=1](https://jsonplaceholder.typicode.com/posts?userId=1)

- Now we have user information and posts of this user. Combine these two data and return it. As a result of the merge, you should have an object like the one below.
