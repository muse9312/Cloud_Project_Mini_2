/*eslint-disable*/


import React, { useEffect, useState } from "react";
import axios from "axios";
import curriculum2 from "./curriculum2.JPG"


// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";


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

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

import { LanguageVariant } from "typescript";

import { BrowserRouter, Route } from 'react-router-dom';

import NewsMainContent from "./board/News/NewsMain/NewsMainContent.js"


const Index = (props) => {

  const [newsMainArray, setNewsMainArray] = useState([]);
  const [newsMainResults, setNewsMainResults] = useState();

  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
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



  const newsApi = async () => {
    try {

      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=1269ddcc25814aec9cb99df554126760&category=technology&pageSize=1`
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
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Performance
                    </h6>
                    <h2 className="mb-0">출석율?</h2>
                  </div>
                </Row>
              </CardHeader>

              <CardBody>
                <div className="chart">
                  <Bar
                  // data={chartExample2.data}
                  // options={chartExample2.options}
                  />
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

                  })
                  }
                </tbody>
              </Table>
            </Card>
          </Col>


          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">클라우드 교육과정 일정표</h3>
                  </div>
                </Row>
              </CardHeader>
              <img className="curriculum2" src={curriculum2} />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
