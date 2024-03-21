import './index.css'

const TabItem = props => {
  const {tabDetails, updateActivetabId,isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTabItem = () => {
    updateActivetabId(tabId)
  }
  const activeTabClass = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button type="button" className={`tab-btn ${activeTabClass}`} onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
