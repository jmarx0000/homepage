import React from 'react';
import PropTypes from 'prop-types';
import './Styles/ContactTile.css';

const ContactTile = ({ name, firmName, position, lastReachOut, phoneNumber, notes }) => {
    return (
        <tr className="contact-tile">
            <td className="contact-detail">{name}</td>
            <td className="contact-detail">{firmName}</td>
            <td className="contact-detail">{position}</td>
            <td className="contact-detail">{lastReachOut}</td>
            <td className="contact-detail">{phoneNumber}</td>
            <td className="contact-detail">{notes}</td>
        </tr>
    );
};

ContactTile.propTypes = {
    name: PropTypes.string.isRequired,
    firmName: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    lastReachOut: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
};

export default ContactTile;