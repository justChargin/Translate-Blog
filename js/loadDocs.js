export {LoadDocs}

class LoadDocs{

    loadDoc = (node, html) => {
        if(node && html){
            const xhttp = new XMLHttpRequest();
            xhttp.onload = function() {
                if (this.status == 200) {
                    document.querySelector(node).innerHTML = this.responseText;
                }
            }
            xhttp.open("GET", html, true);
            xhttp.send();
        }else{
            return console.log('This function is need 2 parameters. Example: loadDoc("#any", "link")');
        }
    }   
}
