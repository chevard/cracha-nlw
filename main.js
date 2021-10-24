const linksSocialMedia = {
  github: 'chevard',
  youtube: 'user/paulodeff',
  facebook: 'chevard88',
  instagram: 'chevard',
  twitter: '`Chevard88`'
}
function changeSocialMedia() {
  for (let li of socialMedia.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    // alert(li.children[0].href)
  }
}
changeSocialMedia()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()

/* === ANOTAÇÕES ===
userName.textContent = 'Gigante'
ou
document.getElementById('userName').textContent = 'Gigante 02'
for (let i = 0; i <= 10; i++) alert(i)
alert(social)

Incrementar
i = i + 1
i++

Contagem em Programação
Huamno 1234567890
Computador 0123456789
*/
