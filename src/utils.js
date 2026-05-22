export async function requireAuth(){
    const isLoggedIn = localStorage.getItem("loggedin")
    if(!isLoggedIn){
        throw redirect("/login")
    }
}