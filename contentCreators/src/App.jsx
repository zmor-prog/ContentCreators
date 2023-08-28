import { useRoutes,Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import supabase from './client.js'
import ViewYouTubers from './pages/ShowCreators'
import YTCreator from './pages/YTCreatorPage'
import CreateYoutuber from './pages/CreateYouTuber'
import EditYouTuber from './pages/EditYouTuber'
const App = () => {
  const youtubersList = [
  ]
 

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ViewYouTubers data={youtubersList}/>
    },
    {
      path:"/view/:id",
      element: <YTCreator data={youtubersList} />
    },
    {
      path:'/new',
      element:<CreateYoutuber></CreateYoutuber>
    },
    {
      path:"/edit/:id",
      element: <EditYouTuber data={youtubersList} />
    }

  ]);
console.log('Starting App')
  return ( 

    <div className="App">

      <div className="header">
        <h1>Great YouTubers</h1>
        <h2>My Favorite YouTubers</h2>
        <Link to="/"><button className="headerBtn"> View YouTubers 🔍  </button></Link>
        <Link to="/new"><button className="headerBtn"> Add YouTuber  </button></Link>
      </div>
        {element}
    </div>

  );
}

export default App