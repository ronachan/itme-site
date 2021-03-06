import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import about from './Components/about';
import contact from './Components/contact';
import resume from './Components/resume';

// async function getDate(reference) {
//   const res = await fetch('/api/date');
//   const newDate = await res.text();
//   reference.setState({date:newDate});
// }


class App extends React.Component{

    constructor(props){
      console.log(this)
      super(props); 
      this.state = {
        date: null,
        foo: 'bar',
        resumeData: {}
      }
  };

  async componentDidMount() {
    const res = await fetch('/api/date');
    const newDate = await res.text();
    // getDate(this);
    this.setState({date:newDate});
  }

  render(){
    
    return (
      <main>
        <h1>RONA IS A CUTE DUMPLING~</h1>
        <h2>
          DAYLEN IS CUTEEEE!
        </h2>
        <p>
          <a
            href="https://github.com/vercel/vercel/tree/master/examples/create-react-app"
            target="_blank"
            rel="noreferrer noopener"
          >
            This project
          </a>{' '}
          was bootstrapped with{' '}
          <a href="https://facebook.github.io/create-react-app/">
            Create React App
          </a>{' '}
          and contains three directories, <code>/public</code> for static assets,{' '}
          <code>/src</code> for components and content, and <code>/api</code>{' '}
          which contains a serverless <a href="https://golang.org/">Go</a>{' '}
          function. See{' '}
          <a href="/api/date">
            <code>api/date</code> for the Date API with Go
          </a>
          .
        </p>
        <br />
        <h2>The date according to Go is:</h2>
        <p>{this.state.date ? this.state.date : 'Loading date...'}</p>
      </main>
    )
  }

  // render(){
  //   return(
  //     <main>
  //       <h1>RONA IS A CUTE DUMPLING~</h1>
  //       <h2>DAYLEN IS ADORABLE!!</h2>
  //     </main>
  //   );
  // }
}
// function App() {
//   const [date, setDate] = useState(null);
//   useEffect(() => {
//     async function getDate() {
//       const res = await fetch('/api/date');
//       const newDate = await res.text();
//       setDate(newDate);
//     }
//     getDate();
//   }, []);
//   return (
//     <main>
//       <h1>RONA IS A CUTE DUMPLING~</h1>
//       <h2>
//         DAYLEN IS CUTEEEE!
//       </h2>
//       <p>
//         <a
//           href="https://github.com/vercel/vercel/tree/master/examples/create-react-app"
//           target="_blank"
//           rel="noreferrer noopener"
//         >
//           This project
//         </a>{' '}
//         was bootstrapped with{' '}
//         <a href="https://facebook.github.io/create-react-app/">
//           Create React App
//         </a>{' '}
//         and contains three directories, <code>/public</code> for static assets,{' '}
//         <code>/src</code> for components and content, and <code>/api</code>{' '}
//         which contains a serverless <a href="https://golang.org/">Go</a>{' '}
//         function. See{' '}
//         <a href="/api/date">
//           <code>api/date</code> for the Date API with Go
//         </a>
//         .
//       </p>
//       <br />
//       <h2>The date according to Go is:</h2>
//       <p>{date ? date : 'Loading date...'}</p>
//     </main>
//   );
// }

export default App;
