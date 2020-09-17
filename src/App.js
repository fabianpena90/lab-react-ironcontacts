import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import contactsJSON from './contacts.json'
console.log(contactsJSON.length)
function App() {

  let [ contacts, setContacts] = useState(contactsJSON.splice(0, 5));
  let [ restOfContacts, setRestOfContacts] = useState(contactsJSON)
  console.log(contacts, restOfContacts)

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={getRandom} >Add Random Famous</button>
      <table>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
      <FamousPeople/>
      </table>   
    </div>
  );
  function FamousPeople() {
    console.log(contacts)
    return contacts.map((eachFamousPerson) => {
      return (
          <tr key={eachFamousPerson.name} style={{margin: '0 auto', padding: '20px'}}>
              <td>
                <img style={{width: '50px'}} src={eachFamousPerson.pictureUrl} alt="Holywood" />
              </td>
              <td>
                <p>{eachFamousPerson.name}</p>
              </td>
              <td>
                <p>{eachFamousPerson.popularity.toFixed(2)}</p>
              </td>


        </tr>
      )
    })
  }


  function getRandom(){
    let num = Math.floor(Math.random()*restOfContacts.length)
    let randomContact = restOfContacts[num]

    let newRestOfContacts = [...restOfContacts]
    let newContacts = [...contacts]

    newRestOfContacts.splice(num,1)
    newContacts.push(randomContact)

    setContacts(newContacts)
    setRestOfContacts(newRestOfContacts)

  }
}






export default App;

