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
import { Link, useParams } from 'react-router-dom';

const QuizBoardDetail = () => {
  const params = window.location.pathname;
  const id = params.substring(params.lastIndexOf('/') + 1);

  const [quizBoard, setQuizBoard] = useState([]);
  useEffect(() => {
    axios({
      url: 'http://localhost:8080/board/table/quizDetail',
      method: 'get',
      params: { id: id }
    }).then((res) => {
      console.log("res DATA 확인");
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
                <h3 className="mb-0">익명게시판</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                </thead>

                <tbody>
                  <tr>
                    <div class="container">
                      <h2 class="my-3 border-bottom pb-2">{quizBoard.title}<h5>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                        &nbsp; 작성자:{quizBoard.userId}</h5></h2>


                      <h4><br />
                        {quizBoard.content}
                        <br />
                        <br />

                      </h4>

                    </div>

                  </tr>



                </tbody>


              </Table>
              <form method="post" class="post-form my-3"
                encType="multipart/form-data" onSubmit={(e) => {
                  e.preventDefault();
                  const params = window.location.pathname;
                  const id = params.substring(params.lastIndexOf('/') + 1);
                  console.log(e);
                  console.log(e.target['0'].value);
                  console.log(e.target['1'].value);

                  const formData = new FormData();
                  const content = e.target['0'].value;
                  // const content = e.target['1'].value;
                  // const userId = e.target['2'].value;
                  // const nowDate = e.target['3'].value;
                  // formData.append("title", title);
                  formData.append("content", content);
                  // formData.append("userId", userId);
                  // formData.append("nowDate", nowDate);


                  axios({
                    url: 'http://localhost:8080/board/quizAnswer',
                    method: 'post',
                    params: { quizBoard_id: id },
                    data: formData,
                  }).then((res) => {
                    console.log(res.data);
                    window.location = `/admin/quizDetail/${id}`;
                  });

                }

                }>



                <CardFooter className="py-4">
                  <div class="form-group">

                  </div>
                  <div class="form-group">
                 
                  
                    <label for="content">댓글</label>
                    <br />
                    <br />
                    <Answer id={id} />
                    <br />
                    <br />
                    <textarea class="form-control" name="content" id="content" rows="5" placeholder="댓글을 남겨보세요"></textarea>
                  </div>

                  <button type="submit" class="btn btn-primary">댓글등록</button> 

                 
                  <button type="button" class="btn btn-primary" onClick={()=>{
                    window.location= `/admin/QuizUpdate/${quizBoard.id}`}}  >수정 </button>
        
                   
                  <button type="button" class="btn btn-primary" >삭제</button> 
                  
                   <Link to="/admin/tables">   &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                   
                    <button type="button" class="btn btn-primary" >목록</button>
                    </Link>
                  
        
             
                
              
                </CardFooter>
              
              </form>
              
            </Card>
          </div>

        </Row>


        <Container>

        </Container>
      </Container>

    </>

  );
};

const Answer = ({id}) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios({
      url: 'http://localhost:8080/board/quizAnswer',
      method: 'get',
      params: { quizBoard_id: id }
    }).then((res) => {
      console.log(res.data);
      setList(res.data);
    });
  }, []);

  return (
    <tbody>
    {list.map((v) => {
    return (
      <h5>
      <tr>
     <td>{"오세원"}</td>

        <td>
        <br />
        {"┕ "+v.content}
        </td>
        {/* <td>{v.userId}</td> */}
        {/* <td>{v.nowDate}</td>  */}
      </tr>
      </h5>
      );
    })}


    </tbody>
 
  )

  
}
{/* <script>
document.querySelector('#delete').addEventListener('click', (e) => {
e.preventDefault();
if(confirm('삭제하시겠습니까?')) {
const num = e.target.getAttribute('num');
location = `/board/delete/${num}`;
}
});
</script> */}

export default QuizBoardDetail;

