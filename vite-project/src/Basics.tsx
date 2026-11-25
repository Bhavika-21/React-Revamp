function Basics() {

       const person = {name : "Bhavi", age: 26};
       const things = ["Book", "Pen"];
       const status = true;

  return (
    <div className= "jsx-basics">

      <h1>{`My Name is ${person.name} and i am ${person.age}`}</h1>
      <p>{things.map((thing) => <span>{thing}</span>)}</p>
      <h3>{status? "Active": "Inactive"}</h3>
    </div>
    
  );
}

export default Basics;
