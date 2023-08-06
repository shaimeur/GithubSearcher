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
            <h2 class="name">${result.name}</h2>
            <div class="login">@${result.login}</div>
            <p class="bio"> ${result.bio}</p>
        </div>

          <div class="follow">
              <li>public Repos <span>${result.public_repos}</span></li>
              <li>followers <span>${result.followers}</span> </li>
              <li>following <span>${result.following}</span> </li>
          </div>
          <div class="other-info">
                <p> ${result.company}</p>
                <p> ${result.blog}</p>
          </div>


      `;
      resultContainer.innerHTML = userDetails;
    }
}


input.addEventListener('change',searchGithub)