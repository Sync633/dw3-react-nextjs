// Expressões Javascript
// Como exibir variáveis JS dentro do HTML
const User = () => {
  // Devemos criar as variáveis dentro da função do componente
  const name = "Miguel Santos Pereira"

  return (
    <>
      <div>Bem-Vindo, {name}!</div>
    </>
  )
}

export default User