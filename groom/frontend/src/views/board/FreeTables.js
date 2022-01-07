/*eslint-disable*/
import axios from 'axios';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import Dropdown from "./Dropdown";


// const Tables = () => {
const FreeTables = (props) => {

  const [list, setList] = useState([]);

  useEffect(() => {
    axios({
      url: 'http://localhost:8080/board/freeTables',
      method: 'get'
    }).then((res) => {
      console.log(res.data);
      setList(res.data);
    });
  }, []); // deps



  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">자유게시판</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>

                    <th scope="col">순서</th>
                    <th scope="col">제목</th>
                    <th scope="col">작성자</th>
                    <th scope="col">작성일</th>
                    <th scope="col">조회</th>
                    <th scope="col" />


                  </tr>
                </thead>


                <tbody>

                  {list.map((v) => {
                    return (
                      <tr>
                        <td>{v.id}</td>
                        <td>
                          <a href={`/admin/freeDetail/${v.id}`}>
                            {v.title}

                          </a>
                        </td>
                        {/* <td>{v.userId}</td> */}
                        <td>{v.userId}</td>
                        {/* <td>{v.nowDate}</td>  */}
                        <td>{v.viewCnt}</td>
                      </tr>
                    );
                  })}


                </tbody>



              </Table>
              <CardFooter className="py-4">

                <nav aria-label="...">

                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <>
                      <Link to="/admin/freeTableWrite">
                        <button type="button" class="btn btn-primary btn-block" id="write-btn">글쓰기</button>
                      </Link>
                    </>
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="admin/tables"
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
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
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

export default FreeTables;
