import React from 'react';

import './styles.css';

function ShareHolders({ sharehd }) {
    return (
        <tr >
            <td>{sharehd.first_name}</td>
            <td>{sharehd.last_name}</td>
            <td>{sharehd.participation}%</td>
        </tr>
    );
}

export default ShareHolders;