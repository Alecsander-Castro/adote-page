const Contact = () => {
    return(
        <>
        <h1 className=" contact-title text-focus-in">Contato</h1>

        <form className="forming text-focus-in " action="">
            <label htmlFor="formName">Nome</label>
            <input type="text" name="formName" id="formName" required/>

            <label htmlFor="formEmail">E-mail</label>
            <input type="email" name="formEmail" id="formEmail" required />

            <label htmlFor="formDuvida"></label>
            <textarea name="formDuvida" id="formDuvida" cols="40" rows="10" placeholder="Escreva aqui..." required ></textarea>

            <input className="inputSubmit" type="submit" value="Enviar" />
        </form>
        </>
    )
}

export default Contact;