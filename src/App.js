import logo from './logo.svg';
import './App.css';


const MyStyle={
  backgroundColor: 'teal',
  color: 'white',
  padding: '5px 15px',
  borderRadius: '7px'
}
const MyStyle2={
  backgroundColor: 'green',
  color: 'white',
  padding: '5px 15px',
  borderRadius: '7px',
  width: '150px'
}
let c=0;

function App() {
const Movie=[
    {
      Movie: 'Joss',
      Actor: 'Jeet',
      Actress: 'Shrabanti'
    },
    {
      Movie: 'Paglu',
      Actor: 'Deb',
      Actress: 'Koyel'
    },
    {
      Movie: 'Guru',
      Actor: 'Mithun',
      Actress: 'Shrabanti'
    },
    {
      Movie: 'Andho Prem',
      Actor: 'Prosenjit',
      Actress: 'Rachona'
    },

  ];

  const Hero=['Jeet','Deb','Mithun','Prosenjit']
  const Heroin=['Shrabanti','Suvabsree','Koyel','Payel'];


  return (
    <div className="App">
    

        <h1 className='Title'>Hero</h1>
        {/* Only Hero Start */}
        {
          Hero.map(HeroName=><OnlyHero name={HeroName}></OnlyHero>)
        }
        {/* Only Hero End */}


        <h1 className='Title'>Actress</h1>
        {/* Only Heroin Start */}
        {
          Heroin.map(actressName=><OnlyActress name={actressName}></OnlyActress>)
        }
        {/* Only Hero End */}

      
        <h1 className='Title'>Movie</h1>
        {/* Movie Start */}
         {
          Movie.map(flim=> <Movie1 name={flim}></Movie1> )
         }
        {/* Movie End */}

    
        
    </div>
  );
}

function OnlyHero(props){
 // console.log(props)
  return (
    <div className='Container'>
       <div style={MyStyle} >Actor: {props.name}</div>
   </div>
  )
}

function OnlyActress(props){
 // console.log(props)
  return (
    <div className='Container'>
       <div style={MyStyle} >Actor: {props.name}</div>
   </div>
  )
}


function Movie1(props){
  console.log(props)
  return (
    <div className='Container'>
      <div className="Title">Movie {props.name.Movie}</div>
      <div style={MyStyle} >Actor: {props.name.Actor}</div>
      <div style={MyStyle2} >Actress: {props.name.Actress}</div>
      
    </div>
  )
}


export default App;
