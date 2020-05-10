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

    control = (userName, password) => {
        this.userName = userName;
        this.password = password;
        console.log('username: ' + this.userName + ' password: ' +this.password );
    }

    listenEvents = () => {
        this.main.addEventListener('click', (e) => {
            this.userKey = e.target.dataset.key;

            //local database
            if(this.userKey === 'userA'){
                this.control(this.userKey, 'şifrea');
            }else if(this.userKey === 'userB'){
                this.control(this.userKey, 'şifreb');
            }

            //password controls
            else if(this.userKey === 'submit'){
                this.inputPassword = document.querySelector('#pwd').value;
                if(this.inputPassword === this.password){
                    //window.open('./routes/' + this.userName + '.html', '_self');
                    window.open('./routes/usera.html', '_self');
                    this.wrongPwd.style.display = 'none';                    
                }else{
                    this.wrongPwd.style.display = 'block'; //class ekleyip transition 3s

                    document.querySelector('#pwd').value = '';
                }
            }else{
                return;
            }
        })
    }
}

window.onload = () => {
    const user = new Users;
    user.allFunctions();
}

