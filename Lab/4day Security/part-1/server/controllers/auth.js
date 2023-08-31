const bcrypt = require ('bcryptjs')
const users = []

module.exports = {
    register: (req, res) => {
      let {username, password, email, firstName, lastName} = req.body
      let salt = bcrypt.genSaltSync(10)
      let hashedPass = bcrypt.hashSync(password, salt)
      console.log(hashedPass)
      let newUser = {
        username: username,
        email: email,
        firstName: firstName,
        lastName: lastName,
        hashedPass: hashedPass,
      }
        console.log('Registering User')
        console.log(req.body)
        users.push(newUser)
        res.status(200).send(req.body)
    },
    login: (req, res) => {
      let{username, password} = req.body
      let checkUser = users.filter((user) => user.username === username)
      if(checkUser.length !== 0) {
        let validPassword = bcrypt.compareSync(password, checkUser[0].hashedPass)
        if (validPassword){
            return res.status(200).send("Successsfully logged in")
        }else{
          return res.status(401).send("Password Incorrect")
        }
      }
        for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
          res.status(200).send(users[i])
        }
      }
      res.status(400).send("User not found.")
    }
}