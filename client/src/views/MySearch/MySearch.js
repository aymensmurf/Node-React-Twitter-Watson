import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'reactstrap';
import Widget03 from '../../views/Widgets/Widget03'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

class MySearch extends Component {
  constructor(props) {
    super(props);
    this.navprofile = this.navprofile.bind(this);
    this.state = {
      tweets: []
    }
  }

  componentDidMount(){
    fetch('/api/tweets')
      .then(res => res.json())
      .then(tweets => this.setState({tweets}, () => console.log("Tweets fetched")));
  }

  navprofile(){
  this.props.history.push('/Profile');
  }
 

  render() {

    return (
      <div className="animated fadeIn">
 
        <Row>
          <Col xs="12" md="12">
           <Card>
              <CardHeader>
                <strong className="text-center">Tweets Search ...</strong>
              </CardHeader>
              <CardBody>
                <h1 className="text-center mb-3">Search for Tweets</h1>
                <FormGroup row>
                  <Col md="12">
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <Button type="button" color="primary"><i className="fa fa-search"></i> Search</Button>
                      </InputGroupAddon>
                      <Input type="text" id="input1-group2" name="input1-group2" placeholder="Keyword" />
                    </InputGroup>
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>

              </CardFooter>
            </Card>
          
          </Col>
        </Row>

        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardBody>
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                    <tr>
                      <th className="text-center"><i className="icon-people"></i></th>
                      <th className="text-center">Tweet</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.tweets.map( (tweets) =>
                      <tr>
                        <td>{tweets.screen_name}</td>
                        <td>{tweets.text}</td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        

      </div>
    );
  }
}

export default MySearch;
