import React from 'react'

const Tabs = (props) => {

    const { activeTab, setActiveTab, allTabs } = props

    const styledTabs = {
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
    }

    const tabs = {
        width: '100px',
        border: '2px solid black',
        padding: '8px',
        cursor: 'pointer',
        outline: 'none',
        color: '#fff',
        backgroundColor: '#04AA6D',
        border: 'none',
        borderRadius: '15px',
        boxShadow: '0 9px #999',
    }

    const active = {
        backgroundColor: '#3e8e41',
        color: 'white',
        border: '2px solid black',
        padding: '8px',
        width: '100px',
        boxShadow: '0 5px #666',
        transform: 'translateY(4px)',
        outline: 'none',
        color: '#fff',
        border: 'none',
        borderRadius: '15px',
    }

    const clickHandler = (index) => {
        setActiveTab(index);
    }

    return (
        <div style={styledTabs}>
            {
                allTabs.map((item, index) => (
                    <div key={index} style={activeTab === index ? active : tabs} onClick={(e) => clickHandler(index)}>
                        <p>{item.tabNum}</p>
                    </div>
                ))
            }
        </div>
        )
    }

    export default Tabs;