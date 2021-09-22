import { useState } from 'react';
import { Form, Input } from './Input';
import Number from './Number';

function App() {
  const [newCounter, setNewCounter] = useState<number>(0);
  const [newName, setNewName] = useState<string>('');
  const counter = (): void => {
    setNewCounter(newCounter + 1);
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNewName(event.target.value);
  };
  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <header className="App-header">
        <Form onFormSubmit={onFormSubmit}>
          <Input value={newName} onChange={onChange} />
        </Form>
        <Number count={newCounter} />
        <br />
        <button onClick={counter}> add </button>
      </header>
    </div>
  );
}

export default App;
