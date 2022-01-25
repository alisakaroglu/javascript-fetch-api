document.querySelector('#button1').addEventListener("click",getTextFile);
document.querySelector('#button2').addEventListener("click",getJson);
document.querySelector('#button3').addEventListener("click",getApi);

function getTextFile(){
     fetch("textfile.txt").then(response => response.text()).then(res => {
        document.getElementById("output").innerHTML += res + "<hr>";
    }).catch(function(err){
        console.log(err);
    });
}

function getJson(){
    fetch("article.json").then(response => response.json()).then(articles => {
        //console.log(articles);
        let output = "<ul>";
        articles.forEach(article => {
            output += `<li>${article.id})  Name: ${article.name} - Age: ${article.age} - Phone: ${article.phone} </li> `;
        });

        output += "</ul> <hr>";
        document.getElementById("output").innerHTML += output;
    })
}

function getApi(){
    fetch("https://api.github.com/users").then(res => res.json()).then(users => {
        let output = "<ul> Github API = https://api.github.com/users";
        users.forEach(user => {
            output += `<li>${user.id})  ${user.login}</li>`;
        });
        output += "</ul> <hr>";
        document.getElementById("output").innerHTML += output;
    })
}