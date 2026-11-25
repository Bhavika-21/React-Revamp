// traditional functional component
// we'll always have to return explicitly here

// function ComBasics(){
//        return(
//               <h1>Welcome</h1>
//        )
// };



// arrow functional component with implicit return
// we can only return implicitly in arrow functions

//single line return
// const CompBasics = () => <h1>Welcome</h1>;

// multiline implicit return
// const CompBasics = () =>(
//        <div>
//           <h1>Welcome home</h1>
//        </div>
// )

// arrow function with explicit return

const CompBasics = ()=>{
       return(
              <div>
                     <h1>Welcome home bhavika</h1>
              </div>
       )
}



export default CompBasics;