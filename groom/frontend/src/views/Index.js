/*eslint-disable*/


import React, { useEffect, useState } from "react";
import axios from "axios";


// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";


import Header from "components/Headers/Header.js";
import NewsMainContent from "./board/News/NewsMain/NewsMainContent.js"


const Index = (props) => {

  const [newsMainArray, setNewsMainArray] = useState([]);
  const [newsMainResults, setNewsMainResults] = useState();


  const [activeNav, setActiveNav] = useState(1);

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
  };



  /* 스프링 서버로부터 게시글 목록 가져오기 - useEffect() + AJAX */
  const [list, setList] = useState([]);

  useEffect(() => {
    axios({
      url: 'http://localhost:8080/board/tables',
      method: 'get'
    }).then((res) => {
      console.log(res.data);
      setList(res.data);
    });
  }, []); // deps
  /* 스프링 서버로부터 게시글 목록 가져오기 - useEffect() + AJAX */



  //youtube API
  // const [info, setInfo] = useState([]);

  // useEffect(() => {
  //   const data = axios({
  //     url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=코딩강의&maxResults=1&key=AIlzaSyDEwMcnsTvXKCnMg4R2LIK3gaXdhtoSGPw',
  //     method: 'get'
  //   });
  //   data.then((result) => {
  //     const videoInfo = [];
  //     for (let item of result.data.items) {

  //       const title = item.snippet.title;
  //       const desc = item.snippet.description;
  //       const url = item.snippet.thumbnails.default.url;
  //       const videoId = item.id.videoId;
  //       // console.log(title, desc, url, videoId);
  //       videoInfo.push({ title: title, desc: desc, url: url, videoId: videoId, onPlayerReady: onp })
  //     }
  //     console.log(videoInfo);
  //     setInfo(videoInfo);
  //   });
  // }, []);





  //youtube 추천 강의
  const [player, setPlayer] = useState([]);

  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '360',
      width: '640',
      videoId: 'M7lc1UVf-VE',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  }
  function stopVideo() {
    player.stopVideo();
  }


  //뉴스api
  const newsApi = async () => {
    try {


      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=9f5baf7d9f3f42879a20d7d19d9886e4&category=technology&pageSize=1`
      );
      // console.log(news);
      setNewsMainArray(news.data.articles);
      setNewsMainResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsMainResults]);

  function NewsBtn(e) {
    e.preventDefault();
    window.location.href = "/admin/cloudNews"


  }


  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Overview
                    </h6>
                    <h2 className="text-white mb-0">최신 기술 뉴스</h2>
                  </div>
                  <div className="col text-right " id="Newsbtn">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={NewsBtn}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>


              </CardHeader>
              <CardBody>
                <div className="App" id="#home">
                  {newsMainResults && (
                    <NewsMainContent
                      newsMainArray={newsMainArray}
                      newsMainResults={newsMainResults}
                    />
                  )}
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    {/* <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Performance
                    </h6> */}
                    <h2 className="mb-0">추천 강의</h2>
                  </div>
                </Row>
              </CardHeader>

              <CardBody>

                {/* <script src="https://www.youtube.com/iframe_api" >
              </script>  */}

                <div className="youtube">
                  <Table className="align-items-center table-flush" responsive>
                    {/* <div id="player"></div> */}

                    <iframe id="player" type="text/html" width="320" height="360"
                      src="http://www.youtube.com/embed/okHGRlgR8ps?enablejsapi=1&origin=http://example.com"
                      frameborder="0"></iframe>

                  </Table>

                </div>



              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* 최신게시글 목록 */}
        {/* ///////////////////// */}

        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">새로 등록된 게시글</h3>
                  </div>

                  {/* <div className="col text-right">
                    { <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button> }
                  </div> */}

                </Row>
              </CardHeader>

              <Table className="align-items-center table-flush" responsive>

                <thead className="thead-light">
                  <tr>

                    <th scope="col">게시글번호</th>
                    <th scope="col">제목</th>
                    <th scope="col">작성자</th>

                  </tr>
                </thead>

                <tbody>

                  {list.map((v) => {
                    return (
                      <tr>
                        <th scope="row">{v.id}</th>
                        <th scope="row">{v.title}</th>
                        <th scope="row">{v.userId}</th>
                      </tr>
                    );
                  })}

                </tbody>

              </Table>
            </Card>
          </Col>


          {/* 과정 시간표///////////// */}
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">과정 일정표</h3>
                  </div>

                  {/* <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div> */}

                </Row>
              </CardHeader>

              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">

                  <tr>
                    <th scope="col">과정(강사님)</th>
                    <th scope="col">날짜</th>
                    {/* <th scope="col" /> */}
                  </tr>
                </thead>
                <tbody>

                  <tr>
                    <th scope="row">사용자인터페이스개발을위한리액트프로그래밍(김남현)</th>
                    <td>12/5-12/16</td>
                  </tr>

                  <tr>
                    <th scope="row">마이크로서비스개발을위한springboo/spring security(김남현)</th>
                    <td>12/19-12/31</td>
                  </tr>

                  <tr>
                    <th scope="row">모듈프로젝트2(김남현)</th>
                    <td>1/3-1/7</td>
                  </tr>

                  <tr>
                    <th scope="row">테스트주도개발/도메인주도개발/행동주도개발(김남현)</th>
                    <td>1/10-1/12</td>
                  </tr>

                  <tr>
                    <th scope="row">멘토링(멘토)</th>
                    <td>1/22</td>
                  </tr>

                  <tr>
                    <th scope="row">마이크로서비스환경구축을위한클라우드기본기술(홍혜선)</th>
                    <td>1/13-1/28</td>
                  </tr>

                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
