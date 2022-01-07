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

const FreeBoardDetail = () => {
  const params = window.location.pathname;
  const id = params.substring(params.lastIndexOf('/') + 1);

  const [freeBoard, setFreeBoard] = useState([]);
  useEffect(() => {
    axios({
      url: 'http://localhost:8080/board/table/freeDetail',
      method: 'get',
      params: { id: id }
    }).then((res) => {
      console.log("res DATA 확인");
      console.log(res.data);
      setFreeBoard(res.data);
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
                      <h2 class="my-3 border-bottom pb-2">{freeBoard.title}<h5>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
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
                        &nbsp; 작성자:{freeBoard.userId}</h5></h2>


                      <h4><br />
                        {freeBoard.content}
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
                  const content2 = e.target['1'].value;
                  // const content = e.target['1'].value;
                  // const userId = e.target['2'].value;
                  // const nowDate = e.target['3'].value;
                  // formData.append("title", title);
                  formData.append("content", content);
                  formData.append("content2", content2);
                  // formData.append("userId", userId);
                  // formData.append("nowDate", nowDate);


                  axios({
                    url: 'http://localhost:8080/board/freeAnswer',
                    method: 'post',
                    params: { freeBoard_id: id },
                    data: formData,
                  }).then((res) => {
                    console.log(res.data);
                    window.location = `/admin/freeDetail/${id}`;
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
                    <FreeAnswer id={id} />
                    <br />
                    <br />
                    <textarea class="form-control" name="content" id="content" rows="5" placeholder="댓글을 남겨보세요"></textarea>
                    <input name="content2" id="content2" value={sessionStorage.getItem('name')}></input>
                  </div>

                  <button type="submit" class="btn btn-primary">댓글등록</button> 

                 
                  <button type="button" class="btn btn-primary" onClick={()=>{
                    window.location= `/admin/FreeUpdate/${freeBoard.id}`}}  >수정 </button>
        
                   
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

const FreeAnswer = ({id}) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios({
      url: 'http://localhost:8080/board/freeAnswer',
      method: 'get',
      params: { freeBoard_id: id }
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
     <td>{v.content2}</td>

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

export default FreeBoardDetail;

