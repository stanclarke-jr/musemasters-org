import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import videojs from 'video.js';
import 'videojs-youtube';
import { YoutubeSearchContext } from '../../contexts/YoutubeSearchContext';
import SideBar from './SideBar';
import NavBar from './NavBar';
import VideoPlayer from './VideoPlayer';
import Footer from './Footer';
import Loading from './Loading';

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const {
    guitarVideos,
    pianoVideos,
    drumVideos,
    violinVideos,
    saxophoneVideos,
    isLoading,
  } = useContext(YoutubeSearchContext);

  // let navigate = useNavigate();

  // useEffect(() => {
  //   const userInfo = localStorage.getItem('userInfo');

  //   if (userInfo) {
  //     navigate('/');
  //   }
  // }, []);

  const youtubeBaseUrl = 'http://www.youtube.com/watch?v=';
  const player = videojs.getPlayer('vid1');

  const videoPlayerOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    // fluid: true,
    sources: [
      {
        src: `${youtubeBaseUrl}${videoId}`,
        type: 'video/youtube',
      },
    ],
    techOrder: ['youtube'],
    youtube: { iv_load_policy: 3 },
  };

  const handlePlayVideo = () => {
    window.scrollTo(0, 0);
    player.src({
      type: 'video/youtube',
      src: `${youtubeBaseUrl}${videoId}`,
    });
    // Check if playing...;
    player.play();
  };

  if (
    !guitarVideos ||
    !pianoVideos ||
    !drumVideos ||
    !violinVideos ||
    !saxophoneVideos
  ) {
    return <div></div>;
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <MainWrapper>
          {showSidebar && (
            <SideBar
              showSidebar={showSidebar}
              setShowSidebar={setShowSidebar}
            />
          )}
          <NavBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          <main>
            <VideoPlayerSection>
              <HeaderOne></HeaderOne>
              <VideoPlayer options={videoPlayerOptions} />
            </VideoPlayerSection>

            <IconsSection>
              <Icon className="fal fa-guitar"></Icon>
              <Icon className="fal fa-piano"></Icon>
              <Icon className="fal fa-drum"></Icon>
              <Icon className="fal fa-violin"></Icon>
              <Icon className="fal fa-saxophone"></Icon>
            </IconsSection>
            <HeaderTwo>Guitar</HeaderTwo>
            <GridRow>
              {guitarVideos.map((video) => {
                return (
                  <>
                    <CardContainer key={video.etag}>
                      <ImgThumbnail
                        onClick={() => {
                          setVideoId(video.id.videoId);
                          handlePlayVideo();
                        }}
                        src={video.snippet.thumbnails.high.url}
                        alt=""
                      />
                      <DetailsWrapper>
                        <VideoTitle>{video.snippet.title}</VideoTitle>
                      </DetailsWrapper>
                    </CardContainer>
                  </>
                );
              })}
            </GridRow>
            <HeaderTwo>Piano</HeaderTwo>
            <GridRow>
              {pianoVideos.map((video) => {
                return (
                  <>
                    <CardContainer key={video.etag}>
                      <ImgThumbnail
                        onClick={() => {
                          setVideoId(video.id.videoId);
                          handlePlayVideo();
                        }}
                        src={video.snippet.thumbnails.high.url}
                        alt=""
                      />
                      <DetailsWrapper>
                        <VideoTitle>{video.snippet.title}</VideoTitle>
                      </DetailsWrapper>
                    </CardContainer>
                  </>
                );
              })}
            </GridRow>
            <HeaderTwo>Drums</HeaderTwo>
            <GridRow>
              {drumVideos.map((video) => {
                return (
                  <>
                    <CardContainer key={video.etag}>
                      <ImgThumbnail
                        onClick={() => {
                          setVideoId(video.id.videoId);
                          handlePlayVideo();
                        }}
                        src={video.snippet.thumbnails.high.url}
                        alt=""
                      />
                      <DetailsWrapper>
                        <VideoTitle>{video.snippet.title}</VideoTitle>
                      </DetailsWrapper>
                    </CardContainer>
                  </>
                );
              })}
            </GridRow>
            <HeaderTwo>Violin</HeaderTwo>
            <GridRow>
              {violinVideos.map((video) => {
                return (
                  <>
                    <CardContainer key={video.etag}>
                      <ImgThumbnail
                        onClick={() => {
                          setVideoId(video.id.videoId);
                          handlePlayVideo();
                        }}
                        src={video.snippet.thumbnails.high.url}
                        alt=""
                      />
                      <DetailsWrapper>
                        <VideoTitle>{video.snippet.title}</VideoTitle>
                      </DetailsWrapper>
                    </CardContainer>
                  </>
                );
              })}
            </GridRow>
            <HeaderTwo>Saxophone</HeaderTwo>
            <GridRow>
              {saxophoneVideos.map((video) => {
                return (
                  <>
                    <CardContainer key={video.etag}>
                      <ImgThumbnail
                        onClick={() => {
                          setVideoId(video.id.videoId);
                          handlePlayVideo();
                        }}
                        src={video.snippet.thumbnails.high.url}
                        alt=""
                      />
                      <DetailsWrapper>
                        <VideoTitle>{video.snippet.title}</VideoTitle>
                      </DetailsWrapper>
                    </CardContainer>
                  </>
                );
              })}
            </GridRow>
            <Footer />
          </main>
        </MainWrapper>
      )}
    </>
  );
};

const MainWrapper = styled.div`
  overflow: visible;
`;
const HeaderOne = styled.h1`
  font-size: 2.25rem; // 36px
  line-height: 2.5rem; // 40px
  letter-spacing: 0.025em;
  color: rgb(203 213 225);
  padding: 12px 0;
`;
const VideoPlayerSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(24 24 27);
  padding: 6rem 0 3rem 0; // 96px 48px
`;
const IconsSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  font-size: 3.75rem;
  line-height: 1;
  padding: 5rem 3rem;
`;
const Icon = styled.i`
  margin: 1rem;
`;
const HeaderTwo = styled.h2`
  font-size: 1.5rem;
  line-height: 2rem;
  color: #555;
  font-weight: 300;
  padding: 0 3rem;
`;
const GridRow = styled.div`
  display: grid;
  padding: 2.5rem;
  margin-bottom: 2rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.25rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;
const CardContainer = styled.div`
  overflow: hidden;
  border-radius: 0.5rem; // 8px
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;
const ImgThumbnail = styled.img`
  width: 100%;
  cursor: pointer;
`;
const DetailsWrapper = styled.div`
  padding: 1rem 1.5rem; // 16px 24px
`;
const VideoTitle = styled.h3`
  font-size: 1rem; // 16px
  font-weight: 700;
  line-height: 1.5rem; // 24px
`;

export default Home;
