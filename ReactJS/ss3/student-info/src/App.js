import './App.css';
import Student from './components/Student';
function App() {
  const students = [
    {
      id: 1,
      name: "ThanhBui",
      age: 22,
      address: 'DaNang'
    },
    {
      id: 2,
      name: "ChauBui",
      age: 10,
      address: 'QuangNgai'
    }
  ]
  return (
    <>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
            </tr>
        </thead>
        <tbody>
            {
                students.map((values,index) =>
                <Student key={index} id = {values.id} name={values.name} age={values.age} address={values.address}></Student>
                )
            }
        </tbody>
    </table>
    </>
  )
}

export default App;
