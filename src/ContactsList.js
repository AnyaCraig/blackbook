import { useEffect, useState } from "react";

export const ContactsList = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    // const response = await fetch('/api/posts');

    const response = await fetch('/contacts');

    console.log("RESPONSE", response);
    if (response.ok) {
      const data = await response.json();
        console.log('data:', data);
        const resultingAddresses = data;
        setContacts(resultingAddresses);

    } else {
      console.error("BAD RESPONSE");
    }

  }

  useEffect(() => {

    console.log("WE STARTING");

    fetchContacts();

  }, []);

  return (
    <ul>
    { 
      contacts.length && contacts.map((contact) => {
        return (
          <li>
            <p>{`${contact.firstName} ${contact.lastName}`}</p>
          </li>
        );
      })
    }
    </ul>
  );
}