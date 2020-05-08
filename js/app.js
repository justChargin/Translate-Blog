class Users{
    constructor(deneme){
        this.main = document.querySelector('.container');
        this.wrongPwd = document.querySelector('#wrongPwd');
        this.wrongPwd.style.display = 'none';
    }

    allFunctions = () => {
        this.listenEventsForUsers();
        this.listenEventsForSubmit();
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

    listenEventsForUsers = () => {
        this.main.addEventListener('click', (e) => {
            this.userKey = e.target.dataset.key;

            if(this.userKey === 'userA'){
                this.control(this.userKey, 'şifrea');
            }else if(this.userKey === 'userB'){
                this.control(this.userKey, 'şifreb');
            }else{
                return;
            }
        })
    }

    listenEventsForSubmit = () => {
        this.main.addEventListener('click', (e) => {
            this.submitKey = e.target.dataset.key;            
            if(this.submitKey === 'submit'){
                this.inputPassword = document.querySelector('#pwd').value;
                this.wrongPwd = document.querySelector('#wrongPwd');

                if(this.inputPassword === this.password){
                    console.log(this.userName + ' logged in.');
                    this.wrongPwd.style.display = 'none';

                    document.querySelector('#pwd').value = '';
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
    const user = new Users('oldu mu');
    user.allFunctions();
}