function FunctionParenthesisAndParameters() {
  const square = (a) => a * a;
  const plusOne = (a) => a + 1;
  const twoSquared = square(2);
  const threePlusOne = plusOne(3);

  return <>
    <h3>Parenthesis and parameters</h3>
    <br/>
    twoSquared = {twoSquared}
    <br/>
    squre(2) = {square(2)}
    <br/>
    threePlusOne = {threePlusOne}
    <br/>
    plusOne(3) = {plusOne(3)}
  </>
}

export default FunctionParenthesisAndParameters;
