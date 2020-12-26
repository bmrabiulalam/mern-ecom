import { Container, Row, Col, Button, Form } from "react-bootstrap"
import Layout from "../../components/Layout"
import Input from "../../components/UI/Input"
import { login } from "../../actions";
import { useDispatch } from "react-redux";

/**
* @author
* @function Signin
**/

const Signin = (props) => {

    const dispatch = useDispatch();

    const userLogin = (e) => {

        e.preventDefault();

        const user = {
            email: 'rabialam@email.com',
            password: '123456'
        }

        dispatch(login(user));
    }

    return(
        <Layout>
            <Container>
                <Row style={{marginTop:'50px'}}>
                    <Col md={{span: 6, offset: 3}}>
                        <Form onSubmit={userLogin}>
                            <Input 
                                    label="Email address"
                                    placeholder="Email address"
                                    value=""
                                    type="text"
                                    onChange={() => {}}
                            />
                            <Input 
                                    label="Password"
                                    placeholder="Password"
                                    value=""
                                    type="password"
                                    onChange={() => {}}
                            />
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
     )
  
   }
  
  export default Signin;