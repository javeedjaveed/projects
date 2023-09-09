// Write your code here
import './index.css'

const DenominationItem = props => {
  const {details, onClick} = props
  const {value} = details

  const clickOnAmount = () => {
    onClick(value)
  }

  return (
    <li className="list">
      <button className="button" type="button" onClick={clickOnAmount}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
