function loginValidation(userName, password){
   
    let inputUserName = userName
    let inputPassword = password
    console.log(userName, password)
    let userOne = {
        name: 'Jose Vitor',
        age: 24,
        email: 'josePajota@Gmail.com',
        password: 'Senha123' , 
        userName: 'JosePa'
    }  
    let userTwo = {
        name: 'Almir',
        age: 52,
        email: 'Almiran@outlook.com',
        password: 'Senha@123' , 
        userName: 'Almir_'
    }
    let userThree = {
        name: 'Algusto Cesar',
        age: 35,
        email: 'Algusto@hotmail.com',
        password: 'Senha321',
        userName: 'AlgustoCesar'
    }
    

    var fakeBD = [userOne, userTwo, userThree]


    for (let i = 0; i < (fakeBD.length ); i++){
      console.log(inputUserName + " == " + fakeBD[i].userName + " && " + inputPassword + " == " + fakeBD[i].password )
      if (inputUserName == fakeBD[i].userName && inputPassword == fakeBD[i].password){
        
        alert('Sucesso!')
        location.href= "home.html"
        return True
      }
    }
   alert ('Usuário ou Senha incorretos!')
   return false

}

