import './App.css'
import UserCard from './User-card'
import Title from './Title'

// Componente prefabricado de NPM
import Video from 'react-player'

function App() {
  return (
    <main>

      <Title text="Listado de personas de CRA:" />

      <hr />

      <UserCard
        name="Germán"
        lastName="Álvarez"
        birth="23.05.1986"
        avatar="https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg"
      />

      <UserCard name="Popino" lastName="Whatever" birth="23.05.1986" />
      <UserCard name="Sara" lastName="Suarez" birth="23.05.1986" avatar="https://www.theglobeandmail.com/resizer/a1tsouRgbsPGVK8OvdFYJqxNhEo=/4415x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/5HSZVXDII5BRRHH4S6KE4WZ7RE.jpg" />
      <UserCard name="Raúl" lastName="Doe" birth="23.05.748" avatar="https://api.time.com/wp-content/uploads/2017/12/terry-crews-person-of-year-2017-time-magazine-facebook-1.jpg" />
      <UserCard name="Popino" lastName="Whatever" birth="23.05.1986" avatar="https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg" />

      <Title text="Y ahora un vídeo de Leticia Sabater" />
      <Video url="https://www.youtube.com/watch?v=gTE58kvDSRM" playing="true" volume="1" muted="true" />

    </main>
  )
}

export default App