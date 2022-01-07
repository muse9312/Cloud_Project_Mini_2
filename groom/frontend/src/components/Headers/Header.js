/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components

import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, Container, Row, Col, } from "reactstrap";










const Header = (props) => {


  let msDiff = new Date("April 29, 2022").getTime() - new Date().getTime();
  let daysTill29April2022 = Math.ceil(msDiff / (1000 * 60 * 60 * 24));




  // const [title, settitle] = useState('');
  // const [viewCnt, setviewCnt] = useState('');
  // const [userId, setUserId] = useState('');

  const [bestboard, setBestBoard] = useState([]);

  useEffect(() => {

    axios({
      url: 'http://localhost:8080/board/best',
      method: 'get'
    }).then((res) => {
      console.log(res.data);
      setBestBoard(res.data);
      // settitle(res.title);
      // setviewCnt(res.viewCnt);
      // setUserId(res.userId);
    });
  }, []); // deps

  const [list, setList] = useState([]);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');

  const [list1, setList1] = useState([]);
  const [content1, setContent1] = useState('');
  const [title1, setTitle1] = useState('');

  console.log('header start');


  useEffect(() => {
    axios({
      url: 'http://localhost:8080/board/noticeTables',
      method: 'get'
    }).then((res) => {

      setList(res.data);
      setContent(res.data.length > 0 ? res.data[0].content : '');
      setTitle(res.data.length > 0 ? res.data[0].title : '');

      ;


    });
  }, []);


  useEffect(() => {
    axios({
      url: 'http://localhost:8080/board/quizTables',
      method: 'get'
    }).then((res) => {

      setList1(res.data);
      setContent1(res.data.length > 0 ? res.data[0].content : '');
      setTitle1(res.data.length > 0 ? res.data[0].title : '');



    });
  }, []);




  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>


              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          공지사항
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">

                          <tr>

                            <th scope="row">{title}</th>

                          </tr>


                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">

                          <i className="fas fa-star" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>



              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          New users
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">2,356</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-primary text-white rounded-circle shadow">
                          <i className="fas fa-heart" />

                          <i className="fas fa-chart-pie" />

                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" />
                      </span>{" "}
                      <span className="text-nowrap">
                        {
                          <tr>
                            <th scope="row">{content}</th>
                          </tr>
                        }
                      </span>
                    </p>
                  </CardBody>
                </Card>
              </Col>



              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          인기글
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{bestboard.title}</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-danger mr-2">
                        <i className="fa fa-arrow-up" /> 조회수 {bestboard.viewCnt}
                      </span>{" "}
                      <span className="text-nowrap">{bestboard.userId}</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          오늘의 코딩용어
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{title1}</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-green text-white rounded-circle shadow">
                          <i className="fas fa-book" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-warning mr-2">
                        <i className="fas fa-arrow-down" /> 1.10%
                      </span>{" "}

                      <span className="text-nowrap">text</span>

                      <span className="text-nowrap">{content1}</span>

                    </p>
                  </CardBody>
                </Card>
              </Col>



              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">

                  <CardBody>
                    <Row>
                      <div className="col">

                        <CardTitle
                          tag="h5"

                          className="text-uppercase text-muted mb-0">
                          교육수료 D-Day
                        </CardTitle>

                        <center>
                          <span className="h2 font-weight-bold mb-0" >
                            D - {daysTill29April2022} {' '}
                            <i className="fas fa-child" />
                          </span>
                        </center>

                        className="text-uppercase text-muted mb-0"
                        >
                        수료일까지
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0">D-50</span>

                    </div>

                    <Col className="col-auto">
                      <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                        <i className="fas fa-cloud" />
                      </div>
                    </Col>

                  </Row>
                  <p className="mt-3 mb-0 text-muted text-sm">

                    <span className="text-nowrap">수료일: 2022.04.29</span>
                  </p>

                </CardBody>



              </Col>
            </Row>
          </div>
        </Container>
      </div >
    </>
  );
};

export default Header;
