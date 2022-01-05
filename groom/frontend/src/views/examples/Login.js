import axios from 'axios'

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,

} from "reactstrap";

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';



const Login = () => {


  function hendleClick(e) {
    e.preventDefault();
    window.location.href = "/auth/register"

  }

  function GithubClick(e) {
    e.preventDefault();
    window.location.href = "https://github.com/login/oauth/authorize?client_id=51a830e8c4702bbaaaf7&redirect_uri=http://localhost:3000/admin/index"

  }

  function KakaoClick(e) {
    e.preventDefault();
    window.location.href = "https://kauth.kakao.com/oauth/authorize?client_id=bb1062f029aa6ff58bbe4fc11289458c&redirect_uri=http://localhost:3000/admin/index&response_type=code"

  }



  function SendData(e) {
    e.preventDefault();
    console.log(e);
    console.log(e.target['0'].value);
    console.log(e.target['1'].value);



    const formData = new FormData();
    const email = e.target['0'].value;
    const pwd = e.target['1'].value;


    formData.append("email", email);
    formData.append("pwd", pwd);

    axios({
      url: 'http://localhost:8080/api/log',
      method: 'post',
      data: formData
    }).then(function (res) {
      console.log(res.data);
      if (res.data.code === 200) {
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle><strong>로그인 성공!!</strong>
          </Alert>
        </Stack>

        window.location = '/admin/index';

      } else {
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle><strong>이메일과 비밀번호를 확인해주세요!!</strong>
        </Alert>
        alert('이메일과 비밀번호를 확인해주세요');
      }
    })


  }





  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">

          {/* 로그인 카드  */}
          <CardBody className="px-lg-5 ">
            <div className="text-center text-muted mb-4">
              <small>sign in with credentials</small>
            </div>

            {/* Form tag */}

            <Form role="form" onSubmit={SendData}>

              {/* Email  */}
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    id="email" name="email"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>

              {/* Password */}

              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    id="pwd" name="pwd"
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>


              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                <Button className="my-4" color="primary" type="submit">
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>

          <CardHeader className="bg-transparent">
            <div className="text-muted text-center mt-2 mb-3">
              <small>Sign in with</small>
            </div>
            <div className="btn-wrapper text-center">

              {/* Github Login  */}
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={GithubClick}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/github.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Github</span>
              </Button>

              {/* Kakao Login */}
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={KakaoClick}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/KakaoTalk_logo.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text"> Kakao </span>
              </Button>
            </div>
          </CardHeader>


        </Card>
        <Row className="mt-3">



          <Col className="text-right" xs="8">


            <a
              className="text-light"
              href="/auth/register"
              onClick={hendleClick}
            >
              <small>Create new account</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;