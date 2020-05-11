import {LoadDocs} from './loadDocs.js';

class Posts{

    jsonPosts = () => {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', '../js/posts.json', true);
        xhr.onload = function(){
            const userUnParsed = location.search;
            const user = userUnParsed.split("=")[1];
            document.querySelector('#navBlog').innerText = user[0].toUpperCase() + user.substring(1) + '\'s Blog';
            
            let html = '';
            this.posts = JSON.parse(this.responseText);
            this.posts.forEach(post => {
            if(post.owner.toLowerCase() == user){
                html = 
                '<div class="col-10 col-md-10 col-lg-8"> <div class="card shadow-lg mt-5"> <div class="card-body">' +
                '<h3 class="card-title text-center post-topic">' + post.topic + '</h3><h4 class="card-title">' + post.header + '</h4> <p class="card-text">' + post.content + '</p> <button class="btn btn-outline-dark btn-sm mt-3">Show More</button>' +
                '</div></div></div>';
                let newPost = document.createElement('div');
                newPost.innerHTML = html;
                newPost.classList = 'row justify-content-center m-0 mb-5';
                document.querySelector('#allPosts').appendChild(newPost);
            }
        })
        }
        xhr.send();
    }
}

window.onload = () => {
    const load = new LoadDocs;
    const posts = new Posts;

    load.loadDoc('#navSection', 'header.html');
    posts.jsonPosts();
}
