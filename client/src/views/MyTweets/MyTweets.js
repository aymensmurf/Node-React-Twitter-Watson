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

const API = '/api/userTweets/';

class MyTweets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: [],
      isLoading: false,
    }

  }

  componentDidMount(){
    this.setState({isLoading: true});

    const keyword = localStorage.getItem('screen_name')
    fetch(API + encodeURI(keyword))
      .then(res => res.json())
      .then(tweets => this.setState({tweets, isLoading:false})); 
  }

  render() {

    return (
    
      <div className="animated fadeIn">

        <Row className="mb-3">
          <Col xs="12" md="12" style={{width:'100%'}}  >
            <div style={{backgroundColor:'white',height:150,borderRadius:20}}>
              <Row >
                <div className="avatar" style={{width:100, marginTop: 20, marginLeft:40}}>
                  <img src={localStorage.getItem('profile_image_url')} className="img-avatar" style={{width:100}}/>
                </div>

                <Col>
                  <h1 style={{marginTop:32}}>{localStorage.getItem('screen_name')}</h1>
                  <h4>09/05/1992</h4>
                </Col>

              </Row>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs="12" md="12">
           <Card>
              <CardHeader>
                <strong className="text-center">Tweets</strong>
              </CardHeader>

              <CardBody>
                {this.state.isLoading ? (
                  <div className="text-center">Loading ...</div>
                ):(
                  
                    this.state.tweets.map( (tweets) =>
                    <Card>
                    <CardHeader>{tweets.date}</CardHeader>
                      <CardBody>{tweets.text}</CardBody> 
                    </Card>                 
                    )
                )}
              </CardBody>

              <CardFooter>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MyTweets;
