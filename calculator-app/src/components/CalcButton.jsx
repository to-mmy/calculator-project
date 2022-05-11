

function CalcButton(props) {
  const [width, height] = props.dimensions
  return <button onClick={() => props.handleClick(props.text)} style={{width: width, height: height}}><code>{props.text}</code></button>
}

export default CalcButton