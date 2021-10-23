//Objeto
const linksSocialMedia = {
  github: '4snoow',
  youtube: 'channel/UCXDFjvnb7nLGg3m5cQwgzng',
  facebook: 'gabriel.bastos.58958',
  instagram: 'jakeliny.gracielly',
  twitter: 'GabrielVxV'
}

//função
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json()) //Resposta em json
    .then(data => {
      document.getElementById('userName').textContent = data.name
      document.getElementById('userBio').textContent = data.bio
      document.getElementById('userLink').href = data.html_url
      document.getElementById('userImage').src = data.avatar_url
      document.getElementById('userLogin').textContent = data.login
    })
}
getGitHubProfileInfos()
