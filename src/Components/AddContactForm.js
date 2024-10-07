import React, { useState } from 'react';

const AddContactForm = () => {
  // Form state
  const [contact, setContact] = useState({
    fullName: '',
    firmName: '',
    position: '',
    lastReachOut: '',
    email: '',
    phoneNumber: '', // Add phone number field
    notes: ''
  });

  // Input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  // Form submit handler (no functionality yet)
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // For now, just log the form data
    console.log('Form Submitted: ', contact);

    // Reset form fields after submission
    setContact({
      fullName: '',
      firmName: '',
      position: '',
      lastReachOut: '',
      email: '',
      phoneNumber: '', // Reset phone number
      notes: ''
    });
  };

  return (
    <div className="contact-form-container">
      <h2>Add New Contact</h2>
      <form onSubmit={handleSubmit}>

        <div>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={contact.fullName}
            onChange={handleInputChange}
            required
            placeholder="First and Last Name"
          />
        </div>

        <div>
          <label>Firm Name</label>
          <input
            type="text"
            name="firmName"
            value={contact.firmName}
            onChange={handleInputChange}
            required
            placeholder="Firm Name"
          />
        </div>

        <div>
          <label>Position</label>
          <input
            type="text"
            name="position"
            value={contact.position}
            onChange={handleInputChange}
            required
            placeholder="Position at Firm"
          />
        </div>

        <div>
          <label>Date of Last Reach Out</label>
          <input
            type="date"
            name="lastReachOut"
            value={contact.lastReachOut}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleInputChange}
            required
            placeholder="Email Address"
          />
        </div>

        <div>
          <label>Phone Number</label> {/* New Phone Number Field */}
          <input
            type="tel" // Use type="tel" for phone numbers
            name="phoneNumber"
            value={contact.phoneNumber}
            onChange={handleInputChange}
            required
            placeholder="Phone Number"
          />
        </div>

        <div>
          <label>Notes</label>
          <textarea
            name="notes"
            value={contact.notes}
            onChange={handleInputChange}
            placeholder="Interaction notes"
          />
        </div>

        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default AddContactForm;
