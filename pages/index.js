import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/CSSreset"
import Menu from "../src/components/Menu"
import Timeline from "../src/components/Timeline"

function HomePage() {


  return (
    <>
      <CSSReset/>
      <div>
      <Menu/>
      <Header/>
      <Timeline playlists={config.playlists}/>
      <Favorities users={config.Favorite}/>
      </div>
    </>
    
  )
  
 
}

export default HomePage



// function Menu() {
//   return (
//     <div>Menu</div>
//   )
// }

function Header() {
  const StyledHeader = styled.div`
  
    img{
      width:100%;
      height:300px;
      object-fit:cover;
      overflow:hidden;
    }

    .avatar{
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    .user-info{
      display:flex;
      align-items:center;
      padding:16px 32px;
      gap:16px
      
      

    }
    

  `;

  return (
    <StyledHeader>
      <div className="banner">
        <img src={config.Banner}/>
        </div>
      <section className="user-info">
        <img className="avatar"
          src={`https://github.com/${config.Github}.png`}
          alt="Foto do Github"
        />
       <div>
        <h2>{config.nome}</h2>
        <p>{config.position}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Favorities(users) {
  const userList = (users.users.channels)
  const StyledFav = styled.div`
  padding:16px;

  h2{
    font-size:16px;
    padding:8px;
  };

  img{
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    .favorite-container{
      display:flex;
      align-items:center;
      padding:8px;
      gap:16px
    }
    .avatar-container{
      display:flex;
      flex-direction:column;
      align-items: center;
      padding:8px;
    }
    .username{
      padding:5px 0;
    }
    `;
    
return(
   <StyledFav>
    <h2>Favoritos</h2>
    <span className="favorite-container">
    {userList.map((user)=>{
      return (
          <span className="avatar-container">
            <img className="avatar" src={user.thum} />
            <span className="username">{user.username}</span>
          </span>
      );
    }
    
    )}
    </span>
  
  </StyledFav>
)
}

// function Timeline(playlists) {
//   const playlistTitles = Object.keys(playlists.playlists); // Pega a key do objeto e transforma em uma array
//   return (
//     <div>
//       {playlistTitles.map((playlistTitle) => {
//         const videos = playlists.playlists[playlistTitle]; // retorna o conteudo do objeto que comeca com o playlist title
//         return (
//           <section>
//             <h2>{playlistTitle}</h2>
//             <div>
//             {videos.map((video) => {
//           return (
//             <a href={video.url}>
//               <img src={video.thumb} />
//               <span>{video.title}</span>
//             </a>
//           );
//         })};
//             </div>
//           </section>

//         )
        
        
//       })}
//     </div>
//   );
// }
