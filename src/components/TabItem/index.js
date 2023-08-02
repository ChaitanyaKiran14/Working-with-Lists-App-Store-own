// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsLiss, clickTabItem} = props
  const {tabId, displayText} = tabsLiss

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  return (
    <button onClick={onClickTabItem} className="butt" type="button">
      <li key={tabId} value={tabId}>
        {displayText}
      </li>
    </button>
  )
}

export default TabItem
