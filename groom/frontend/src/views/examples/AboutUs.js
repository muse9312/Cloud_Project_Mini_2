/*eslint-disable*/
import axios from 'axios';
import community from 'assets/img/brand/community.png';
import zxczxc from 'assets/img/brand/zxczxc.png';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import {Badge,Card,CardHeader,CardFooter,DropdownMenu,DropdownItem,UncontrolledDropdown,DropdownToggle,Media,agination,
  PaginationItem,PaginationLink,Progress,Table,Container,Row,UncontrolledTooltip,Pagination,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const AboutUs = () => {
  const [list, setList] = useState([]);

  /*
  useEffect(() => {
    axios({
      url: 'http://localhost:8080/api/admin/tables',
      method: 'get'
    }).then((res) => {
      console.log(res.data);
      setList(res.data);
    });
  }, []); // deps
*/

  return (
    <>
      <div style={{'marginTop':'7rem'}} />
      {/* Page content */}
      <Container className="mt--7" fluid >
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h1 className="mb-0">About Us</h1>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                     <th scope="col"><h1>Team Introduction </h1><h2>세원, 형린, 해영, 은혜, 종운</h2></th>
                  </tr>
                  <tr>
                    <th scpoe="col"><h3>소개합니다.-클라우드 풀스택 개발자들을 위한 우리들의 커뮤니티-</h3></th>
                  </tr>
                  
                  <img src={community} style={{'height': '700px'}}></img>
                  <img src={zxczxc} style={{'height': '700px'}}></img>
                </thead>
                <tbody>
                {list.map((v) => {
              return (
                <tr>
                  <td>{v.id}</td>
                  <td>{v.title}</td>
                  <td>{v.user_id}</td>
                </tr>
              );
            })}
                  <tr>
                  </tr>
                </tbody>
                {}
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">

                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>   
        <Container>
        </Container>
      </Container>
    </>
  );
};

export default AboutUs;
