import { useEffect, useState } from "react";

export const ContactsList = () => {
  const [contacts, setContacts] = useState([]);
  const [hasFetched, setHasFetched] = useState(false);

  const fetchContacts = async () => {

    const response = await fetch('/contacts');

    if (response.ok) {
      const data = await response.json();
      console.log('data:', data);
      const resultingAddresses = data;
      setContacts(resultingAddresses);
      setHasFetched(true);
      
    } else {
      console.error("BAD RESPONSE");
    }
    
  }

  useEffect(() => {
    fetchContacts();
  }, []);

  const deleteContact = async (id) => {
    await fetch('/contacts/' + id, {
      method: 'DELETE',
    })
    .then(res => res.text())
    .then(res => console.log(res));

    fetchContacts();
  };

  return (
    <>
      <h1>My Friends</h1>
      {!contacts.length && hasFetched && (
          <img src="https://cdn.domestika.org/c_fill,dpr_1.0,h_1200,t_base_params.format_jpg,w_1200/v1551304691/project-covers/000/478/583/478583-original.jpg?1551304691" alt="forever alone"/>
        )}
      {!!(contacts.length) && 
        <ul>
        { contacts.map((contact) => {
            return (
              <li className="contact-box" key={contact._id}>
                <p>{`${contact.firstName} ${contact.lastName}`}</p>
                <button onClick={() => deleteContact(contact._id)}>Friendship ended with {contact.firstName}</button>
              </li>
            );
          })
        }
        </ul>
      }
    </>
  );
}