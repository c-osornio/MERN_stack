
const Content = (props) => {

    const { activeTab, allTabs } = props;

    const styledCont = {
        border: '2px solid black',
        padding: '20px',
        margin: '50px auto',
        borderRadius: '20px',
        width: '50%',
        backgroundColor: '#04AA6D',
        color: 'white',
    }

    return (
        <div style={styledCont}>
            <p>{allTabs[activeTab].details}</p>
        </div>
    )
}

export default Content