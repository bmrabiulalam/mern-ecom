import { Jumbotron } from 'react-bootstrap';
import Layout from '../../components/Layout';

/**
* @author
* @function Home
**/

const Home = (props) => {
    return(
      <Layout>
          <Jumbotron style={{margin: '5rem', background: '#fff'}} className='text-center'>
              <h1>Welcome to Admin Dashboard.</h1>
              <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used before final copy is available, but it may also be used to temporarily replace copy in a process called greeking, which allows designers to consider form without the meaning of the text influencing the design. Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a first-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical, improper Latin. Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. Lorem ipsum was introduced to the digital world in the mid-1980s when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker.Wikipedia</p>
          </Jumbotron>
      </Layout>
     )
  
   }
  
  export default Home;