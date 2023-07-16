let input = document.querySelector('#searchInput')

const searchGithub = (event) =>{
        let userName = '' ;
           userName = event.target.value ;
            console.log(userName)
            // return userName ;
            fetchUser(userName)
}

const fetchUser = async (userName) =>{
    let response = await fetch(`https://api.github.com/users/${userName}`) ;
    if(response.ok) {
        let result = await response.json()
        console.log(result)
    }else{
        console.log('Error user not found')
    }

}


input.addEventListener('change',searchGithub)