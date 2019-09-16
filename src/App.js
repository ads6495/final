import React, { Component } from 'react'
import Navbar from './components/admin/Navbar'
import AdminBody from './components/admin/AdminBody'

class App extends Component {
  render() {
    return (
      <section>
        <Navbar />
        <AdminBody />
      </section>
    )
  }
}

export default App
