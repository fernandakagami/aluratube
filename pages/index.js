import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    const estilosDaHomePage = {
        // backgroundColor: "red"
    };

    return (
        <>
            <CSSReset />
            <div style={estilosDaHomePage}>                
                <Menu />
                <Banner />
                <Header />
                <Timeline playlists={config.playlists}>
                    Conteúdo
                </Timeline>                
                <Favorites favoritos={config.favoritos} />                    
            </div>
        </>
        
    );
}

export default HomePage

const StyledBanner = styled.div`
    img {
        margin-top: 50px;
        width: 100%;
        height: 350px;
    }
`;

function Banner() {    
    return (
        <StyledBanner>
            <img src={config.banner} />
        </StyledBanner>        
    )
}

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

function Header() {
    return (
        <StyledHeader>
            {/* <img src="banner" /> */}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    );
}

function Timeline(props) {
    const playlistsNames = Object.keys(props.playlists);
    return (
        <StyledTimeline>
            {playlistsNames.map((playlistName, index) => {                               
                const videos = props.playlists[playlistName];                
                return (
                    <section key={index}>
                        <h2>{playlistName}</h2>
                        <div>
                            {
                                videos.map((video, index) => {                                                                                                               
                                    return (
                                        <a key={index} href={video.url}>
                                            <img src={video.thumb} />
                                            <span>
                                                {video.title}
                                            </span>
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    );
}

const StyledFavorites = styled.div`
    h3 {
        margin-left: 30px;
    }
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;        
    }
    .favorite-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
        text-align: center;
    }
`;

function Favorites(props) {
    const favoritosData = props.favoritos;    
    return (
        <StyledFavorites>
            <h3>AluraTubes Favorites</h3>
            <div className="favorite-info">
                {favoritosData.map((favorito,index) => {
                    return (
                        <div key={index}>
                            <img src={`https://github.com/${favorito.github}.png`} />
                            <p>@{favorito.github}</p>                            
                        </div>
                    )                                
                })}
            </div>
        </StyledFavorites>        
    )   
}
