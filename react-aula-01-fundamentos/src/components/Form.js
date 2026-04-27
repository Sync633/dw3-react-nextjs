import { useState } from "react";

const Form = () => {
  // Criando os estados
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");

  // Criando a função que irá lidar com a submissão do formulário
  const handleSubmit = (event) => {
    // Aqui os dados serão enviados

    event.preventDefault()

    console.log(nome);
    console.log(sobrenome);
    console.log(email);

    // Aqui seria enviada uma requisição POST para a API com as informações a serem cadastradas.
  };

  return (
    <>
      <br />
      <h3>Formulário de Cadastro: </h3>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Insira seu nome"
          value={nome}
          // Quando o valor da input mudar, pega o novo valor (e.target.value) e atualiza o estado com este valor.
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="text"
          placeholder="Insira seu sobrenome"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
        />

        <input
          type="text"
          placeholder="Insira seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <button type="submit">Enviar</button>
      </form>
      <br />
      {nome} <br />
      {sobrenome} <br />
      {email} <br />
    </>
  );
};

export default Form;
