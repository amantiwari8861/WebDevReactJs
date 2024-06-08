import '../styles/DarkMode.css'
const DarkLight = () => {
    function changeMode()
    {
        
    }
    return (
        <label className="ui-switch" onClick={changeMode}>
            <input type="checkbox"/>
                <div className="slider">
                    <div className="circle"></div>
                </div>
        </label>
    )
}

export default DarkLight
