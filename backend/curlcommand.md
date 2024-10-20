# createUser
curl -X POST -H "Content-Type: application/json" -d '{
  "email": "example4@example.com",
  "firstName": "Jessy",
  "lastName": "Chen",
  "userName": "jessychen"
}' http://localhost:3000/users/new

# getUserByEmail
curl http://localhost:3000/users?email=example@example.com

# editUser 
curl -X POST -H "Content-Type: application/json" -d '{
  "email": "example1@example.com",
  "firstName": "John1",
  "lastName": "Doe1",
  "userName": "johndoe3"
}' http://localhost:3000/users/edit/3
