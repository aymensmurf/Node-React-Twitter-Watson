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
      contanieruser : ''
    }

  }

  componentDidMount(){
    this.setState({isLoading: true});

    const keyword = localStorage.getItem('screen_name')
    fetch(API + encodeURI(keyword))
      .then(res => res.json())
      .then(tweets => 
        {
          this.setState({tweets, isLoading:false}) ;
          var var1 = tweets[0];
          this.setState({contanieruser : var1});
        }
      ); 
  }

  render() {

    return (
    
      <div className="animated fadeIn">
        <Row style={{backgroundColor:'white', borderRadius:20, marginBottom:20, paddingBottom:20}}>
          <Col md="2">
            <div className="avatar" style={{width:100, marginTop:20}}>
              <img src={localStorage.getItem('profile_image_url')} className="img-avatar" style={{width:100}}/>
              {this.state.isLoading 
                ? 
                  <Col className="text-center">Loading ...</Col>
                :
                <div className="text-center">
                  <h1>{this.state.contanieruser.user_name}</h1>
                  <p>@{localStorage.getItem('screen_name')}</p>
                </div>
              }
            </div>
          </Col>
          <Col md="10" style={{paddingTop:60}}>
            {this.state.isLoading 
              ? 
                <Col className="text-center">Loading ...</Col>
              :
              <div className="container">
                <div className="row">
                  <div className="col-sm">
                    <h6>Tweets</h6>
                    <p>{this.state.contanieruser.user_statuses_count}</p>
                  </div>
                  <div className="col-sm">
                    <h6>Following</h6>
                    <p>{this.state.contanieruser.user_friends_count}</p>
                  </div>
                  <div className="col-sm">
                    <h6>Followers</h6>
                    <p>{this.state.contanieruser.user_followers_count}</p>
                  </div>
                  <div className="col-sm">
                    <h6>Likes</h6>
                    <p>{this.state.contanieruser.user_favourites_count}</p>
                  </div>
                  <div className="col-sm offset-3">
                    <Button type="submit" color="primary">Analyse</Button>
                  </div>
                </div>
              </div>
            }
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
