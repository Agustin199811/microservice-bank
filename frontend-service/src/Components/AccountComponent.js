import React, { useState, useEffect } from 'react';
import bankServiceInstance from '../Service/BankService';


export default function AccountComponent() {
    const [accounts, setAccounts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchAccounts();
    }, []);

    const fetchAccounts = async () => {
        try {
            const response = await bankServiceInstance.getAllAccounts();
            console.log(response.data);
            setAccounts(response.data); // Actualiza el estado con los datos recibidos
        } catch (error) {
            setError(error.message); // Maneja el error estableciendo el estado de error
            console.error('Error fetching accounts:', error);
        }
    };

    return (
        <div>
            {error && <p>Error fetching accounts: {error}</p>}
            <ul>
                {accounts.map(account => (
                    <li key={account.id}>{account.accountHolder}</li>
                ))}
            </ul>
        </div>
    );
}
