const Dog = ({nome, raca, idade}) => {
  return(
    // Fragment
    <>
      <div>
        <br />
        <p>Nome do Pet: {nome}</p>
        <p>Raça do Pet: {raca}</p>
        <p>Idade do Pet: {idade}</p>
      </div>
    </>
  )
}

export default Dog