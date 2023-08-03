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

    let result = await response.json() ;

    if(response.ok) {
        console.log(result)
    }else{
        console.log('Error user not found')
    }
    appendResult(result)
}

const appendResult = (result) =>{
    console.table(result)
    const resultContainer = document.querySelector('#result');
    resultContainer.innerHTML = ''; // Clear previous content

    if (result.message === 'Not Found') {
      // User not found
      resultContainer.innerHTML = '<p>Error: User not found</p>';
    } else {
      // User found, display details
      const userDetails = `

        <div class="up">
            <img src="${result.avatar_url}" alt="Profile Picture" class="img-profil"/>
            <div><<h2 class="name">${result.name}</h2></div>
            <div class="login">@${result.login}</div>
            <p class="bio"> ${result.bio}</p>
        </div>

          <ul class="follow">
              <li>public Repos: ${result.public_repos}</li>
              <li>followers: ${result.followers}</li>
              <li>following: ${result.following}</li>
          </ul>
          <ul class="other-info">
                <p>company: ${result.company}</p>
                <p>Location: ${result.location}</p>
          </ul>


      `;
      resultContainer.innerHTML = userDetails;
    }
}


input.addEventListener('change',searchGithub)