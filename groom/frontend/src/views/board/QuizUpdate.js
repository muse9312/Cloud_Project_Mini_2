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
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const QuizUpdate = ({board_id}) => {
  const params = window.location.pathname;
  const id = params.substring(params.lastIndexOf('/') + 1);
  console.log("Update로 받아온 ID 값 :",id);
  const [quizBoard, setQuizBoard] = useState({});
  useEffect(() => {
    axios({
      url: 'http://localhost:8080/board/table/quizDetail',
      method: 'get',
      params: {  id: id}
    }).then((res) => {
      console.log("Table update의 데이터:");
      console.log(res.data);
      setQuizBoard(res.data);
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
                <h3 className="mb-0">코드정보</h3>
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
                          const userId = e.target['3'].value;
                          const content2 = e.target['2'].value;
                          // const nowDate = e.target['3'].value;
                          formData.append("title", title);
                          formData.append("content", content);
                          formData.append("userId", userId);
                          formData.append("content2", content2);
                          // formData.append("nowDate", nowDate);
                          
              
                          axios({
                            url: `http://localhost:8080/board/quizUpdate/${id}`,
                            method: 'post',
                            data: formData,
                          }).then((res) => {
                            console.log(res.data);
                          
                           window.location = '/admin/quizTable/' ;
                            // window.location = `/admin/tableDetail/${board_id}`;
                          });
              
                        }
                       
                        }>
                        <div class="form-group">
                          <label for="title">제목</label>
                          <input type="text" class="form-control" name="title" id="title" value={quizBoard.title} 
                          onChange={(e)=>{
                            setQuizBoard({title:e.target.value});
                          }}></input>
                        </div>
                        <div class="form-group">
                          <label for="content">내용</label>
                          <textarea class="form-control" name="content" id="content" rows="10" value={quizBoard.content}
                          onChange={(e)=>{
                            setQuizBoard({content:e.target.value});
                            
                          }}></textarea>
                        </div>
                        <div class="form-group">
                          <label for="content">첨부파일</label>
                          <input type="file" name="image"></input>
                        </div>
                        <div class="form-group">
                          <input label  name="content2" id="content2" value={sessionStorage.getItem('name')}></input>
                        </div>
                        
                          <button type="submit" class="btn btn-primary">수정완료</button>
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


export default QuizUpdate;
