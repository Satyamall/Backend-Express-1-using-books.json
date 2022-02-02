# Backend-Express-1-using-books.json

<h3>get '/' this will return all the books with, when you are returning an array it should be outside the array for e.g :- { "request_time": "time stamp", "data": []}</h3>
![Screenshot (155)](https://user-images.githubusercontent.com/80479635/152202842-76916d5f-ee02-47b6-ac97-1cf5136a0cf0.png)

<h3>get '/books/:id' - this will return user with a specific id for single book returned it should be like { "request_time": "time stamp","data": {}}</h3>
![Screenshot (156)](https://user-images.githubusercontent.com/80479635/152203364-942f0c1a-068e-4316-8129-660bb8045ec2.png)
![Screenshot (157)](https://user-images.githubusercontent.com/80479635/152203376-98f13e20-b7dc-4f7e-96b7-b005e6c9fe7a.png)


<h3> post '/books' - pass an user to it and it will append it to the end of the books data and return it </h3>
![Screenshot (153)](https://user-images.githubusercontent.com/80479635/152203654-ccf79a67-5db9-48ef-bec0-c1c46a673048.png)

<h3> patch '/books/:id' - pass a different author and published year only and update those on the book that matched the id, respond back with the updated book </h3>
![Screenshot (154)](https://user-images.githubusercontent.com/80479635/152203961-62fa0842-7f7e-4ffd-9a42-3eccbddaaa90.png)

# Before patch id=3 data: 
![Screenshot (160)](https://user-images.githubusercontent.com/80479635/152204178-ae6b7854-6119-44ee-bbb1-0cfe9cd221d1.png)

# After Patch request of id=3 data:
![Screenshot (161)](https://user-images.githubusercontent.com/80479635/152204380-8b0d7743-f3d6-4c7b-8336-496cfd1fd517.png)
![Screenshot (162)](https://user-images.githubusercontent.com/80479635/152204458-bd0a1817-ecd3-4838-bd90-ebc299b2e84e.png)

<h3> delete '/books/:id' - delete the book that matched the id, respond back with</h3>

# After the deletion of id=1 all data
![Screenshot (158)](https://user-images.githubusercontent.com/80479635/152204732-66571494-280b-4c2a-9fe4-e8b79f092555.png)

# After deletion of id=1 data show in below image
![Screenshot (159)](https://user-images.githubusercontent.com/80479635/152204709-e0ced503-855a-4213-80af-d52f81a71161.png)
