import React, {useState}from 'react';


function App() {
 //return 'hello'; // we can render simple string from this function 
//return <h3>hello</h3>; // we can render html elements too. 
 return <div> 
   <h3>hi</h3>
    <h4>hey</h4>
 </div>; // we can return html elements like this too.

//   return <div div >
//     <h3>hi</h3>
//     <h4>hey</h4>
//     <Folder/> 
//  </div >; // we can render folder function as a component by keeping it as the html element

  // return <div div >
  //   <Folder name="mydesktop">
  //     some stuffs  
  //   </Folder>
  //   <Folder name="myApplication"></Folder>
  //   <File name="cats.jpeg"/>
  //   <File name="dogs.png"></File>

  // </div >; // whatever we keep in between the folder conmponets it will be regarded as childern and we can access those


  // return <div div >
  //   <Folder name="mydesktop">
  //     some stuffs
  //     <File name="cats.jpeg" />
  //     <File name="dogs.png"></File>
  //   </Folder>
  //   <Folder name="myApplication"></Folder>
    

  // </div >; // we can even keep html elements inbetween those.
  // return <div div >
  //   <Folder name="mydesktop">
  //     <File name="cats.jpeg" />
  //     <File name="dogs.png"></File>
  //   </Folder>
  //   <Folder name="myApplication"></Folder>


  // </div >;


  // return <div>
  //   <Folder name="mydesktop">
  //     <Folder name="myMusic">
  //       <File name="songs.mp4" />
  //       <File name="sing.mp4"></File>
  //     </Folder>
  //     <File name="cats.jpeg" />
  //     <File name="dogs.png"></File>
  //   </Folder>
  //   <Folder name="myApplication"></Folder>


  // </div >;
}

 const Folder = (props)=>{ // every js function is also a component in react and we can render it as the html element
  const name = 'Destop'
  // return <h2>name</h2>;  if we just keep name it will just print name it won't be a variable
  return <h2>{name}</h2>; // here we enclosed with the curly brackets so it acts as js variable

//return <h3>{props.name}</h3> // props is analogous to passing arguments in the react component
// here we were only rendering name of props but if we want to render all its children we can do so by
// using children property
// return <div>
// {props.name}
// {props.children}
// </div>;

// we can give inline style to components 
// const borderStyle = {border: '2px solid black'};
//    const marginStyle = { marginLeft: '12px' };

//    return <div style={borderStyle}>
//      {props.name}
//      <div style={marginStyle}>
//      {props.children}

//      </div>
//    </div>;

  
//  console.log(props)
//    const marginStyle = { marginLeft: '12px' };
//    const [isOpen, setIsOpen] = useState(true); // useState is an array with two element and we can destructure it with
//    // the variable name that we prefer as isOpen and setIsOpen
//    // eg  let arr =[1,2,3];
//    // let [a, b] = arr;
//    // it will make a = 1, and b = 2 

//    const {name, children} = props; // this is object destructing same as array destructuring
//    return <div >
//      {name}
//      <div style={marginStyle}>
//        {isOpen ? children: null}
//      </div>
//    </div>; // if isOpen is false it will be null which means render nothing, value null mean nothing and render null 
   // is quivalent to say render nothing


// const handleClick = ()=>{
//    setIsOpen(!isOpen);
// }
  
//    const marginStyle = { marginLeft: '12px' };
//    const [isOpen, setIsOpen] = useState(true);
//    const { name, children } = props; 
//    return <div >
//      <span onClick={handleClick}>{name}</span>
//      <div style={marginStyle}>
//        {isOpen ? children : null}
//      </div>
//    </div>;


  //  const handleClick = () => {
  //    setIsOpen(!isOpen);
  //  }

  //  const marginStyle = { marginLeft: '12px' };
  //  const [isOpen, setIsOpen] = useState(true);
  //  const { name, children } = props;
  //  return <div > // we can get this css from sematic ui cdn and paste link to index.html
  //    <span onClick={handleClick}><i class="folder icon"></i></span> // we can't use class in react 
                                                                      // we have to use className
  //    {name}
  //    <div style={marginStyle}>
  //      {isOpen ? children : null}
  //    </div>
  //  </div>;



  //  const handleClick = () => {
  //    setIsOpen(!isOpen);
  //  }

  //  const marginStyle = { marginLeft: '12px' };
  //  const [isOpen, setIsOpen] = useState(true);
  //  const { name, children } = props;
  //  return <div >
  //    <span onClick={handleClick}>
  //      <i className="blue folder icon"></i>
  //      <i className="caret right icon"></i>
  //    </span>
  //    {name}
  //    <div style={marginStyle}>
  //      {isOpen ? children : null}
  //    </div>
  //  </div>;



  //  const handleClick = () => {
  //    setIsOpen(!isOpen);
  //  }

  //  const marginStyle = { marginLeft: '12px' };
  //  const [isOpen, setIsOpen] = useState(true);
  //  const direction  = isOpen ? 'down' : 'right';
  //  const { name, children } = props;
  //  return <div >
  //    <span onClick={handleClick}>
  //      <i className="blue folder icon"></i>
  //      <i className={`caret ${direction} icon`}></i>
  //    </span>
  //    {name}
  //    <div style={marginStyle}>
  //      {isOpen ? children : null}
  //    </div>
  //  </div>;
}

const File = (props) =>{
return <div>{props.name}</div>;
}


// const File = (props) => { // to keep the icons for mp4 and images
//   const {name} = props;
//  const fileExtention =  name.split(".")[1]; // this is the value that will be obtained
//  const icons = {  // this is the object that will contain all possible values
//     mp4: 'headphones' ,
//     png: 'file image',
//     jpeg:'file image outline'
//  };

//   return <div>
//     <i className={`${icons[fileExtention]} icon`}></i>
//     {name}</div>; // and we will key into the object with the specific value
// }

export default App;
