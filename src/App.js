import React, {useState} from 'react';
import './App.css';
import contactsJSON from './contacts.json'
console.log(contactsJSON.length)

function App() {

  let [ contacts, setContacts] = useState(contactsJSON.splice(0, 5));
  let [ restOfContacts, setRestOfContacts] = useState(contactsJSON)
  console.log(contacts, restOfContacts)

  return (
    <div className="App">
      <h1 style={{fontSize: '4rem'}}>Celebrities</h1>
      <button onClick={getRandom} >Add Random Famous</button> 
      <button onClick={sortNameAscending} >Sort by Name</button> 
      <button onClick={sortPopulatiry} >Sort by Popularity</button>
      <table style={{margin: '20px auto'}}>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
      <FamousPeople/>
      </table>   
    </div>
  );
  function FamousPeople() {
    console.log(contacts)
    return contacts.map((eachFamousPerson) => {
      return (
          <tr key={eachFamousPerson.id} style={{margin: 'auto', padding: '20px'}}>
              <td>
                <img style={{width: '100px'}} src={eachFamousPerson.pictureUrl} alt="Holywood" />
              </td>
              <td>
                <p style={{fontSize: '22px', fontWeight: 'bold', textAlign: 'center'}}>{eachFamousPerson.name}</p>
              </td>
              <td>
                <p style={{fontSize: '22px'}}>{eachFamousPerson.popularity.toFixed(2)}</p>
              </td>
              <td>
                <p><button id={eachFamousPerson.id} onClick={deleteContact}>Delete</button></p>
              </td>
        </tr>
      )
    })
  }


  function getRandom(){
    let num = Math.floor(Math.random() * restOfContacts.length);
    let randomContact = restOfContacts[num];
    
    let newRestOfContacts = [...restOfContacts];
    let newContacts = [...contacts];
    
    newRestOfContacts.splice(num,1);
    newContacts.push(randomContact);

    setContacts(newContacts);
    setRestOfContacts(newRestOfContacts);

  }

  function sortNameAscending() {
    let newContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name)) ;
    setContacts(newContacts)
    FamousPeople()
  }


  function sortPopulatiry() {
    let newContacts = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setContacts(newContacts)
    FamousPeople()
  }

  function deleteContact(e) {
    let removeContacts = [...contacts].filter((contact) => contact.id !== e.target.id)
    setContacts(removeContacts)
  }
}



export default App;

