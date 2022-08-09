import { useEffect, useState } from "react"

const Catcard = () => {

    const [cats, setCats] = useState([])
  

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Alecsander-Castro/json-animals/cats')
            .then(response => response.json()
                .then(data => setCats(data)))
    }, [])    



    return ( 
        <>
            <div className="carding">
                {cats.map((cat =>
                <div key={cat.id}  className="style-card scale-in-center ">
                    <img src={cat.img_url} alt="cats" width="200" heigh="200" />
                    <p>Nome: {cat.name}</p>
                    <p>Raça: {cat.race}</p>
                </div>
                    ))}
            </div>

        </>
    )
}

export default Catcard;