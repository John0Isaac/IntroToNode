const postData = async (url = '', data = {})=>{
    console.log(data);
    const response = await fetch (url, {
        method: 'POST', // Any Method
        credentials: 'same-origin', // include same origin
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Contetn-Type" header
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch(error){
        console.log("error", error);
        // Error handler
    }
}
postData('/add', {answer:42});