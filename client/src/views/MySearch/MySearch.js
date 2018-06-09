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
import { get } from 'http';

const API = '/api/tweets/';

class MySearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: [],
      isLoading: false,
    }

    this.navMyTweets = this.navMyTweets.bind(this);
  }

  getTweets = async(e) => {
    e.preventDefault();
    this.setState({isLoading: true});

    const keyword = e.target.elements.keyword.value;

    fetch(API + encodeURI(keyword))
      .then(res => res.json())
      .then(tweets => this.setState({tweets, isLoading:false}));

  }

  navMyTweets(screen_name, profile_image_url){
    localStorage.setItem('screen_name', screen_name);
    localStorage.setItem('profile_image_url', profile_image_url);
    this.props.history.push('/MyTweets');
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
                    <form onSubmit={this.getTweets}>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <Button type="submit" color="primary"><i className="fa fa-search"></i> Search</Button>
                        </InputGroupAddon>
                        <Input type="text" ref="keyword" id="input1-group2" name="keyword" placeholder="Keyword" />
                      </InputGroup>
                    </form>
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter></CardFooter>
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
                      <th className="text-center">User</th>
                      <th className="text-center">Tweet</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.isLoading ? (
                      <tr>
                        <td colspan="4" className="text-center">Loading ...</td>
                      </tr>
                    ):(
                      this.state.tweets.map( (tweets) =>
                        <tr>
                          <td className="text-center">
                            <div className="avatar">
                              <img src={tweets.profile_image_url} className="img-avatar"/>                         
                            </div>
                          </td>
                          <td className="text-center">{tweets.screen_name}</td>
                          <td className="text-center">{tweets.text}</td>
                          <td className="text-center"><Button type="submit" color="primary" onClick={() => {this.navMyTweets(tweets.screen_name, tweets.profile_image_url)}} >Analyse</Button></td>
                        </tr>
                      )
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
