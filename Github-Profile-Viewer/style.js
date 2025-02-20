function fetchProfile(){
    const username = document.getElementById("username").value
    if(!username){
        alert("Inter a Github username here only")
        return
    }
    fetch(`https://api.github.com/users/${username}`).then(response => {
        if(!response.ok){
            throw new Error("Netowork response is not okkkk")            
            
        }
        return response.json();
    })
    .then(data =>{
        displayProfile(data)
    }).catch(err =>{
        console.error("There was a problem with the fetch the error", err)
    })
}

function displayProfile(profileData){
    const profileElement = document.getElementById('profile')
    profileElement.innerHTML = `<h2> Name: ${profileData.login}</h2><br>
    <h2> Login: ${profileData.login}</h2><br>
    <img src="${profileData.avatar_url}" style="width:100px; height:100px; border-radius:50%" /> <br>
    <h2> Profile Url: ${profileData.html_url}<h2> <br>
    <h2> Bio: ${profileData.bio}<h2> <br>
    <h2> Publick_Repos: ${profileData.public_repos}<h2>`
}
