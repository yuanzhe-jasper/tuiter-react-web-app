function ImpliedReturn() {
  const multiply = (a, b) => a * b;
  const fourTimesFive = multiply(4, 5);
  console.log(fourTimesFive);
  return <>
    <h3>Implied Return</h3>
    fourTimeFive = {fourTimesFive}
    <br/>
    multiply(4,5) = {multiply(4,5)}
  </>;
}

export default ImpliedReturn;
