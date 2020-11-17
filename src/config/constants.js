const API_URL='https://weddingplanning-1234.herokuapp.com';

function setHeaders(){
    let token = localStorage.getItem("jwt")
    if(token){
        return {
            'Authorization': `Bearer ${token}`
        }
    } else {
        return {
            
        }
    }
}

export { API_URL, setHeaders }