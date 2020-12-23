import { Container, Row, Col, Button, Form } from "react-bootstrap"
import Layout from "../../components/Layout"
import Input from "../../components/UI/Input"

/**
* @author
* @function Signin
**/

const Signin = (props) => {
    return(
        <Layout>
            <Container>
                <Row style={{marginTop:'50px'}}>
                    <Col md={{span: 6, offset: 3}}>
                        <Form>
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