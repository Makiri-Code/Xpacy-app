const fetchServer = async (method, body, token, endpoint, server)=>{
    const data = {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
        },
        body: JSON.stringify({
            ...body
        }),
    }
    if (method==='GET'){
        delete data.body
    }else{
        delete data.headers.Authorization
    }
    try {
        const resp = await fetch(server + '/' + endpoint, data)
        const response = await resp.json()
        return {err: false, ...response}
    } catch (error) {
        return {err: true, mess: "Could not connect to server. Please check your internet connection"}
    }
}

export default fetchServer;