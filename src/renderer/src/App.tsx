import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import BillPage from './components/BillPage'
import AddItemPage from './components/AddItem'
import ViewItemPage from './components/ViewItemPage'
import BillHistoryPage from './components/BillHistory'


const App: React.FC = () => {
  const [activePage, setActivePage] = useState('dashboard')

  const renderPage = (): JSX.Element => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />
      case 'bill':
        return <BillPage />
      case 'addItem':
        return <AddItemPage />
      case 'viewItem':
        return <ViewItemPage />
      case 'billHistory':
        return <BillHistoryPage />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-1 overflow-y-auto p-6">{renderPage()}</main>
    </div>
  )
}

export default App