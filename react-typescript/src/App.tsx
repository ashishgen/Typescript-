import './App.css';
import { Button } from './components/Button';
import { Great } from './components/Great';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box'
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/state/User';
function App() {
  // const personName ={
  //   first: 'Bruce',
  //   last: 'Wayne'
  // }
  // const nameList = [
  //   {
  //     first: 'Bruce',
  //     last: 'Wayne'
  //   },
  //   {
  //     first: 'Clark',
  //     last: 'Kent'
  //   },
  //   {
  //     first: 'Princess',
  //     last: 'Diana'
  //   }
  // ]
  return (
    <div className="App">
      {/* <Great name='Ashish' messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      // <PersonList names={nameList} /> */}
       {/* <Status status='error' />
       <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario! </Heading>
      </Oscar>
      <Great name='Ashish' isLoggedIn={false} /> */}
      {/* <Button handleClick = {(event, id) => {
        console.log('Button clicked',event,id)
      }}/>
      <Input value='' handleChange= {(event) => console.log(event)} />
      <Container styles={{ border: '1px solid black', padding: '1rem'}} /> */}
    <ThemeContextProvider>
      <Box />
    </ThemeContextProvider>
    </div>
  );
}

export default App;
