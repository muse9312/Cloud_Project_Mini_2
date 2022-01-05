/*eslint-disable*/


import React, { useEffect, useState } from "react";
import axios from "axios";

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

const Index = (props) => {
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
                    <h2 className="text-white mb-0">뉴스 업데이트</h2>
                  </div>
                  <div className="col">
                    <Nav className="justify-content-end" pills>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 1,
                          })}
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 1)}
                        >
                          <span className="d-none d-md-block">Month</span>
                          <span className="d-md-none">M</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 2,
                          })}
                          data-toggle="tab"
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 2)}
                        >
                          <span className="d-none d-md-block">Week</span>
                          <span className="d-md-none">W</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">

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
                {/* Chart */}
                <div className="chart">
                  <Bar
                    data={chartExample2.data}
                    options={chartExample2.options}
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
