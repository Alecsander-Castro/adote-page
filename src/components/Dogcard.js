import { useEffect, useState } from "react"

const Dogcard = () => {

    const [dogs, setDogs] = useState([])
  

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Alecsander-Castro/json-animals/dogs')
            .then(response => response.json()
                .then(data => setDogs(data)))
    }, [])    



    return ( 
        <>
            <div className="carding">
                {dogs.map((dog =>
                <div key={dog.id} className="style-card scale-in-center ">
                    <img src={dog.img_url} alt="cats" width="200" heigh="200" />
                    <p>Nome: {dog.name}</p>
                    <p>Raça: {dog.race}</p>
                </div>
                    ))}
            </div>

        </>
    )
}

export default Dogcard;