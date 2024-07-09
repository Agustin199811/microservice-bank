import React, { useEffect, useState } from "react";
import bankServiceInstance from "../Service/BankService";

export default function CustomerComponent() {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await bankServiceInstance.getAllCustomers();
      console.log(response.data);
      setCustomers(response.data); // Actualiza el estado con los datos recibidos
    } catch (error) {
      setError(error.message); // Maneja el error estableciendo el estado de error
      console.error("Error fetching customers:", error);
    }
  };

  return (
    <div>
      {error && <p>Error fetching customers: {error}</p>}
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>{customer.name}</li>
        ))}
      </ul>
    </div>
  );
}
