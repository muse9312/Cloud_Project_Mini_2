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

const BoardDetail = () => {
  const params = window.location.pathname;
  const id = params.substring(params.lastIndexOf('/') + 1);

  const [board, setBoard] = useState([]);
  useEffect(() => {
    axios({
      url: 'http://localhost:8080/board/table/detail',
      method: 'get',
      params: { id: id }
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
                <h3 className="mb-0">익명게시판</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                </thead>

                <tbody>
                  <tr>
                    <div class="container">
                      <h2 class="my-3 border-bottom pb-2">{board.title}<h5>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
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
                        &nbsp; 작성자:{board.userId}</h5></h2>


                      <h4><br />
                        {board.content}
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
                    url: 'http://localhost:8080/board/answer',
                    method: 'post',
                    params: { board_id: id },
                    data: formData,
                  }).then((res) => {
                    console.log(res.data);
                    window.location = `/admin/tableDetail/${id}`;
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
                  <button type="button" class="btn btn-primary">수정</button>  
                  <button type="button" class="btn btn-primary">삭제</button>  
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

      
 
  
  
 


export default BoardDetail;



const Answer = ({id}) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios({
      url: 'http://localhost:8080/board/answer',
      method: 'get',
      params: { board_id: id }
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
