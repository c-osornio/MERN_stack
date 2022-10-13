import './App.css'
import Tabs from './components/Tabs'
import Content from './components/Content'
import { useState } from 'react'

function App() {

  const myArray = [
    {
      tabNum: 'Tab 1', 
      details: 'Tab 1 details is showing here'
    },
    {
      tabNum: 'Tab 2',
      details: 'Tab 2 details is showing here'
    },
    {
      tabNum:'Tab 3',
      details: 'Tab 3 details is showing here'
    }
  ]

  const [activeTab, setActiveTab] = useState(0)

  const [allTabs, setAllTabs] = useState(myArray)

  return (
    <div className="App">
      <Tabs 
      activeTab = {activeTab} 
      setActiveTab = {setActiveTab} 
      allTabs = {allTabs} 
      />
      <Content 
      activeTab = {activeTab}  
      allTabs = {allTabs}  
      />
    </div>
  )
}

export default App;
