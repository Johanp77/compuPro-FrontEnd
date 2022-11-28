
export async function getUsers(){
    const request = await fetch("http://localhost:8080/api/users",{
        method: "GET",
        headers: {
            "Accept": "application/json",
            "content-type": "application/json"
        }
    })
    const users = await request.json()

    console.log(users);
}