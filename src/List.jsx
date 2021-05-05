import { useEffect, useState } from "react";

export const List = () => {
  const [addresses, setAddresses] = useState([]);

  const fetchAddresses = async () => {
    // const response = await fetch('/api/posts');

    const response = await fetch('/addresses');

    console.log("RESPONSE", response);
    if (response.ok) {
      const data = await response.json();
        console.log('data:', data);
        const resultingAddresses = data;
        setAddresses(resultingAddresses);

    } else {
      console.error("BAD RESPONSE");
    }

  }

  useEffect(() => {

    console.log("WE STARTING");

    fetchAddresses();

  }, []);

  return (
    <ul>
    { 
      addresses.length && addresses.map((add) => {
        return (
          <li>
            {add.careOfOrCompany && <p>{`${add.careOfOrCompany}`}</p>}
            <p>{`${add.unitNumber ? add.unitNumber + ' - ' : ''}${add.streetAddress}`}</p>
            {add.additionalLine && <p>{`${add.additionalLine}`}</p>}
            <p>{`${add.city}, ${add.provinceState}  ${add.postalCode}`}</p>
            {add.country !== 'Canada' ? <p>{add.country}</p> :  null}
          </li>
        );
      })
    }
    </ul>
  );
}