/*eslint-disable */
import { useEffect, useState } from 'react';
import axios from 'axios';
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
import { Link } from 'react-router-dom';

const TableWrite = () => {




  return (

    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
      <form onSubmit={(e) => {
            e.preventDefault();

            console.log(e.target['0'].value);
            console.log(e.target['1'].value);

            const formData = new FormData();
            const title = e.target['0'].value;
            const content = e.target['1'].value;
            // const name = e.target['2'].value;
            formData.append("title", title);
            formData.append("content", content);
            // formData.append("name", name);

            axios({
              url: 'http://loaclhost:8080/api/tableWrite',
              method: 'post',
              data: formData,
            }).then((res) => {
              console.log(res.data);
              window.location = '/admin/tables';
            });

          }}>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">게시판</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                </thead>
                <tbody>
                  <tr>
                    <div class="container">
                      <h5 class="my-3 border-bottom pb-2">게시글 작성</h5>
                      <form method="post" class="post-form my-3"
                        enctype="multipart/form-data">
                        <div class="form-group">
                          <label for="title">제목</label>
                          <input type="text" class="form-control" name="title" id="title"></input>
                        </div>
                        <div class="form-group">
                          <label for="content">내용</label>
                          <textarea class="form-control" name="content" id="content" rows="10"></textarea>
                        </div>
                        <div class="form-group">
                          <label for="content">첨부파일</label>
                          <input type="file" name="image"></input>
                        </div>
                        
                          <button type="submit" class="btn btn-primary">저장하기</button>
                       
                      </form>
                      
                    </div>
     
                  </tr>


                </tbody>
                

              </Table>
              

              <CardFooter className="py-4">
                

              </CardFooter>
              
            </Card>
          </div>

        </Row>

        </form>

        <Container>
      
        </Container>
      </Container>
    </>

  );
};


export default TableWrite;
