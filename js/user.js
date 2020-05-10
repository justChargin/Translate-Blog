class Posts{
    constructor(){
    }

    jsonPosts = () => {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', '../js/posts.json', true);
        xhr.onload = function(){
            const userUnParsed = location.search;
            const user = userUnParsed.split("=")[1];
            console.log(user);
    
            this.userBlog = document.querySelector('#' + user);
            console.log(this.userBlog);

            this.html = "";

            this.posts = JSON.parse(this.responseText);
            this.posts.forEach(post => {
                if(post.owner == user){
                    this.html += 
                    '<div class="row justify-content-center m-0 mb-5"> <div class="col-10 col-md-10 col-lg-8"> <div class="card shadow-lg mt-5"> <div class="card-body">'+
                    '<h3 class="card-title text-center">' + post.topic + '</h3> <div class="allPosts"></div> <h4 class="card-title">' + post.header + '</h4> <p class="card-text">' + post.content + '</p> <button class="btn btn-outline-dark btn-sm mt-3">Show More</button>' +
                    '</div></div></div></div></div>';
                }else{
                    return;
                }
            return this.html;
            })
            this.userBlog.innerHTML = this.html;
        }
        xhr.send();
    }
}

window.onload = () => {
    const posts = new Posts();
    posts.jsonPosts();
}
