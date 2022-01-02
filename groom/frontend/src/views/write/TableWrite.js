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

const TableWrite = () => {
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
            <label for="subject">제목</label>
            <input type="text" class="form-control" name="subject" id="subject"></input>
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
{/*      
      <div class="mb-3">
        <label for="title">제목:</label>
        <input type="text" class="form-control" id="title" name="title"></input>
      </div>
      <div class="mb-3">
        <label for="content">내용:</label>
        <textarea class="form-control" rows="10" name="content" id="content"></textarea>
      </div>
       */}
                  </tr>


                </tbody>
                
              </Table>
             
              <CardFooter className="py-4">
                
            
            
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

export default TableWrite;
