# Florum

A plant cataloging application where users can learn about new plants and how to take care of them by creating their own catalog items and communicating with other users through the application’s forum feature.

---

### Requirements
- Ruby 2.7.4
- NodeJS (v16), and npm
- Postgresql

---

### Installation

1. Fork this repository
   
![image](https://user-images.githubusercontent.com/103388556/189546584-8ec5fef7-4d7d-4c47-ae6b-f6e6ae834a69.png)
  
![image](https://user-images.githubusercontent.com/103388556/189546761-f0f05411-1967-46c7-b081-063bc6951ae0.png)

3. Copy the SSH key from the forked repository.

![image](https://user-images.githubusercontent.com/103388556/189546817-4d32dcbb-e79e-4220-8fc2-c573d21e9cc1.png)
  
4. In your terminal, clone the repository using the SSH key you copied from the fork.
```
git clone <pasted-ssh-key>
```
5. Navigate to the `root` of the cloned repository and install the back-end dependancies
```
cd florum
bundle install
```

6. In a new terminal, navigate to the `client` directory from the cloned repository's `root` and install the front-end dependancies. Keep this terminal open.
```
cd client
npm install
```

---

### Usage

7. In the same directory that you installed the back-end dependancies in, start Rails using:
```
rails s
```

8. In the same directory that you installed the front-end dependancies in, start React using:
```
npm start
```

- You can access the Rails API routes at: http://localhost:3000
- You can access the Florum front-end at: http://localhost:4000

---

### Data Model
```
User |---< ForumEntry >---| Plant
User |---< Plant
```

---

### Resources

[React Bootstrap](https://react-bootstrap.github.io/)\
[Faker](https://github.com/faker-ruby/faker)

---

### Contributions

Contributions are welcome, but please open an issue first to discuss what you would like to change.

---

### License

[MIT](https://choosealicense.com/licenses/mit/)
