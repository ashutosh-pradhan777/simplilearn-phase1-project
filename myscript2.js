//document.getElementsByClassName("card-container").innerHTML += "<div class='card container-item' style='width: 18rem;'><img src='https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198__340.jpg' class='card-img-top' alt='...'>  <div class='card-body'><h5 class='card-title'>Tech-Headline</h5><p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p><a href='#' class='btn btn-primary'>Click Here</a><i class='fas fa-comment-alt' style='margin-left: 40px;'></i></div></div>" ;

//var count = 4;
function fun(){
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;
    alert(title +" "+ content);
    //document.getElementById("cont").innerHTML += "<h1>Hello</h1>";
    document.getElementById("cont").innerHTML += `<div class='card container-item' style='width: 18rem;'><img src='https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198__340.jpg' class='card-img-top' alt='...'>  <div class='card-body'><h5 class='card-title'>${title}</h5><p class='card-text'> ${content}</p><a href='#' class='btn btn-primary'>Click Here</a><i class='fas fa-comment-alt' style='margin-left: 40px;'></i></div></div>` ;
}

function comment(event)
{
    var parent = event.target.parentElement;
    var user = parent.children[0].value;
    var comment = parent.children[1].value;
    parent.innerHTML += `<p>${user}: ${comment}</p>`;
}