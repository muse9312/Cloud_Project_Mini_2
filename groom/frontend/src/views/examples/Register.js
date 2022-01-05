/*eslint-disable */
import axios from "axios";
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

const Register = () => {

  function SendData(e) {
    e.preventDefault();
    console.log(e);
    console.log(e.target['0'].value);
    console.log(e.target['1'].value);
    console.log(e.target['2'].value);


    const formData = new FormData();
    const name = e.target['0'].value;
    const email = e.target['1'].value;
    const pwd = e.target['2'].value;

    formData.append("name", name);
    formData.append("email", email);
    formData.append("pwd", pwd);

    axios({
      url: 'http://localhost:8080/api/res',
      method: 'post',
      data: formData
    })
      .then(function (res) {
        console.log(res.data);
        window.location = '/';
      })


  }


  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">

          <CardBody className="px-lg-5 py-lg-5">
            <Form role="form" onSubmit={SendData}>



              {/* 회원가입 input  */}

              {/* 이름 */}
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Name" type="text" id="name" name="name" />
                </InputGroup>
              </FormGroup>

              {/* 이메일 */}
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    id="email" name="email"
                    placeholder="name@example.com"
                    type="email"
                  />
                </InputGroup>
              </FormGroup>


              {/* 패스워드 */}
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


              <div className="text-muted font-italic">
                <small>
                  password strength:{" "}
                  <span className="text-success font-weight-700">strong</span>
                </small>
              </div>

              {/* 동의 */}


              <Row className="my-4">
                <Col xs="12">
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="customCheckRegister"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckRegister"
                    >
                      <span className="text-muted">
                        I agree with the{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>
                </Col>
              </Row>


              {/* 회원가입버튼  */}


              <div className="text-center">
                <Button className="mt-4" color="primary" type="submit" id="res" >

                  Create account
                </Button>

              </div>


            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Register;
