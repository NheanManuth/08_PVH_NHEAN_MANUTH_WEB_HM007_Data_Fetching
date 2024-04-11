export async function getAllMovieService(){
    const res = await fetch('https://movie-api-get-only-bmc3.vercel.app/api');
    const data = res.json();
    return data;
}

export async function getAllMovieActionService(){
    const res = await fetch('https://movie-api-get-only-bmc3.vercel.app/api/?genre=Action');
    const data = res.json();
    return data;
}

export async function getAllMovieDramaService(){
    const res = await fetch('https://movie-api-get-only-bmc3.vercel.app/api/?genre=Drama');
    const data = res.json();
    return data;
}

export async function getAllMovieScienceFictionService(){
    const res = await fetch('https://movie-api-get-only-bmc3.vercel.app/api/?genre=Science Fiction');
    const data = res.json();
    return data;
}

export async function getMovieByIdService(id){
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/${id}`);
    const data = await res.json();


    // console.log("ID: ", id)
    // console.log("Data: ", data)
    return data;
}
