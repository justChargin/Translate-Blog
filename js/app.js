window.onload = () => {
   let arrImg = document.querySelectorAll('.img-custom');

    for(let i=0; i<arrImg.length; i++){
        arrImg[i].setAttribute('width', '140px');
        arrImg[i].setAttribute('height', '120px');
        arrImg[i].classList.add('rounded-circle');
    };

/////////////////////////////////////////////////////////////////////
    const main = document.querySelector('.container');
    let sonuc = '';

    function aRoute(user){
        window.location.href = 'file:///C:/Users/Byte/Desktop/Translate%20Blog/routes/' + user + '.html';
    }

    main.addEventListener('click', (e) => {
        
        const key = e.target.dataset.key;
        if(key === 'userA'){
            sonuc = key;
        }else if(key === 'userB'){
            sonuc = key;
        }

        let psw = '';
        if(key === 'submit'){
            if(sonuc === 'userA'){
                psw = document.querySelector('#pwd').value;
                
                if(psw === 'userAşifre'){
                    console.log('Giriş Yapıldı.');
                    aRoute(sonuc);
                }else{
                    console.log('Şifreniz Yanlış.');
                }
            }else if(sonuc === 'userB'){
                psw = document.querySelector('#pwd').value;
                if(psw === 'userBşifre'){
                    aRoute(sonuc);
                    console.log('Giriş Yapıldı.');
                }else{
                    console.log('Şifreniz Yanlış.');
                }
            }
        }
        
    })

}