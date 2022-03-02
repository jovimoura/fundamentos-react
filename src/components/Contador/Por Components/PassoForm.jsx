function PassoForm(props) {
  return (
    <div>
      <label htmlFor="passoInput">Passo: </label>
      <input
        type="number"
        id="passoInput"
        value={props.passo}
        // ao colocar o + na frente do e.target.value, você transforma esse valor em um int
        onChange={e => props.setPasso(+e.target.value)}
      />
    </div>
  );
}

export default PassoForm;
