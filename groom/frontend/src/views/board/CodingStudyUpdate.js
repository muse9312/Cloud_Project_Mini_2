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
import BoardDetail from './BoardDetail';

const CodingStudyUpdate = ({board_id}) => {

  const [board, setBoard] = useState([]);
  useEffect(() => {
    axios({
      url: 'http://localhost:8080/board/CodingStudy/update',
      method: 'get',
      params: {  id: board_id}
    }).then((res) => {
      console.log(res.data);
      setBoard(res.data);
    });
  }, []);


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
                        encType="multipart/form-data" onSubmit={(e) => {
                          e.preventDefault();
                          console.log(e);
                          console.log(e.target['0'].value);
                          console.log(e.target['1'].value);
              
                          const formData = new FormData();
                          const title = e.target['0'].value;
                          const content = e.target['1'].value;
                          const userId = e.target['2'].value;
                          // const nowDate = e.target['3'].value;
                          formData.append("title", title);
                          formData.append("content", content);
                          formData.append("userId", userId);
                          // formData.append("nowDate", nowDate);
                          
              
                          axios({
                            url: 'http://localhost:8080/board/CodingStudy/update',
                            method: 'post',
                            data: formData,
                          }).then((res) => {
                            console.log(res.data);
                          
                            // window.location = '/admin/tableDetail/' + board_id;
                            window.location = `/admin/tableDetail/${board_id}`;
                          });
              
                        }
                       
                        }>
                        <div class="form-group">
                          <label for="title">제목</label>
                          <input type="text" class="form-control" name="title" id="title" value={board.title}></input>
                        </div>
                        <div class="form-group">
                          <label for="content">내용</label>
                          <textarea class="form-control" name="content" id="content" rows="10">{board.content}</textarea>
                        </div>
                        <div class="form-group">
                          <label for="content">첨부파일</label>
                          <input type="file" name="image"></input>
                        </div>
                        
                        <Link to={`/admin/CodingStudyDetail/${id}`}>
                          <button type="submit" class="btn btn-primary">수정완료</button>
                       </Link>
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


        <Container>
      
        </Container>
      </Container>
    </>

  );
};


export default CodingStudyUpdate;
