import {LoadDocs} from './loadDocs.js';

class Users{

    constructor(){
        this.main = document.querySelector('.container');
        this.wrongPwd = document.querySelector('#wrongPwd');
        this.wrongPwd.style.display = 'none';
    }

    allFunctions = () => {
        this.listenEvents();
        this.imageSize();
    }

    imageSize = () => {
        this.arrImg = document.querySelectorAll('.img-custom');
        
        for(let i=0; i<this.arrImg.length; i++){
            this.arrImg[i].setAttribute('width', '140px');
            this.arrImg[i].setAttribute('height', '120px');
            this.arrImg[i].classList.add('rounded-circle');
        };
    }

    routeFor = (name) => {
        this.addr = './routes/allPosts.html?id=' + name;
        window.open(this.addr, '_self');
    }

    control = (userName, password) => {
        this.userName = userName.toLowerCase();
        this.password = password;
    }

    listenEvents = () => {
        this.main.addEventListener('click', (e) => {
            this.userKey = e.target.dataset.key;

            //LOCAL DATABASE (MANUAL)
            if(this.userKey === 'userA'){
                this.control(this.userKey, 'şifrea');
            }else if(this.userKey === 'userB'){
                this.control(this.userKey, 'şifreb');
            }

            //password controls
            else if(this.userKey === 'submit'){
                this.inputPassword = document.querySelector('#pwd').value;
                if(this.inputPassword === this.password){
                    this.routeFor(this.userName);
                    this.wrongPwd.style.display = 'none';                    
                }else{
                    this.wrongPwd.style.display = 'block';
                    document.querySelector('#pwd').value = '';
                }
            }else{
                return;
            }
        })
    }
}

window.onload = () => {
    const load = new LoadDocs;
    const user = new Users;

    load.loadDoc('#navSection', 'routes/header.html');
    user.allFunctions();
}




