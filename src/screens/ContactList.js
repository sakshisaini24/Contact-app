import React, { useState } from 'react';
import Navbar from '../components/Navbar';

export const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: '', email: '', phone: '' });
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddContact = (e) => {
    e.preventDefault();
    if (editMode) {
      // Update existing contact
      const updatedContacts = [...contacts];
      updatedContacts[editIndex] = newContact;
      setContacts(updatedContacts);
      setEditMode(false);
      setEditIndex(null);
    } else {
      // Add new contact
      if (newContact.name.trim() !== '') {
        setContacts([...contacts, newContact]);
      }
    }
    setNewContact({ name: '', email: '', phone: '' });
  };

  const handleEditContact = (index) => {
    const contactToEdit = contacts[index];
    setNewContact(contactToEdit);
    setEditMode(true);
    setEditIndex(index);
  };

  const handleDeleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  return (
    <div>
        <div><Navbar></Navbar></div>
        <div className='container'>
      <div className='h2 text-center'>Contact List</div>
      <div class="row">
  <div class="mx-auto col-10 col-md-8 col-lg-6">
      <form onSubmit={handleAddContact}>
        <div className="form-group">
          <label for="name1">Name</label>
          <input type="text" class="form-control" value={newContact.name}
            onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
            id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
        </div>
        <div className="form-group">
          <label for="name2">Email</label>
          <input type="email" class="form-control" value={newContact.email}
            onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
            id="exampleInputEmail1" aria-describedby="email" placeholder="Enter Email"/>
        </div>
        <div className="form-group">
          <label for="name3">Phone</label>
          <input type="number" class="form-control" value={newContact.phone}
            onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
            id="exampleInputEmail1" aria-describedby="phone" placeholder="Enter Phone"/>
        </div>
        <div className="mt-2 mb-3">
          <button className="corner-round btn-primary" type="submit">
            {editMode ? 'Update Contact' : 'Add Contact'}
          </button>
        </div>
      </form>
      </div>
      </div>
      <div>
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th scope="col">Serial No.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>
                  <button className="btn btn-primary mr-2" onClick={() => handleEditContact(index)}>
                    Edit
                  </button>
                  <button className="btn btn-danger" onClick={() => handleDeleteContact(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

