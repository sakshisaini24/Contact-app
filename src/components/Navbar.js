import React from 'react'

export default function Navbar() {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg text-center navbar-dark bg-info">
        <div className="text-center container-fluid">
          <div className="navbar-brand fs1 text-center fst-italic" >YOUR CONTACTS ☎️</div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

    </div>
  )
}