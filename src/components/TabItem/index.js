import './index.css'

const TabItem = props => {
  const {tabDetails, updateActivetabId} = props
  const {tabId, displayText} = tabDetails
  const onClickTabItem = () => {
    updateActivetabId(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button type="button" className="tab-btn" onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
