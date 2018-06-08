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
 
// sparkline charts
const sparkLineChartData = [
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'New Clients',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Recurring Clients',
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'Pageviews',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Organic',
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: 'CTR',
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: 'Bounce Rate',
  },
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: variant ? variant : '#c2cfd6',
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const sparklineChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
  legend: {
    display: false,
  },
};


class Search extends Component {
  constructor(props) {
    super(props);
  }

 

  render() {

    return (
    
      <div className="animated fadeIn">

        <Row className="mb-3">
          <Col xs="12" md="12" style={{width:'100%'}}  >
            <div style={{backgroundColor:'white',height:150,borderRadius:20}}>
              <Row >
                <div className="avatar" style={{width:100, marginTop: 20, marginLeft:40}}>
                  <img src="assets/img/avatars/5.jpg" class="img-avatar"/>
                </div>

                <Col>
                  <h1 style={{marginTop:32}}>Danielle Virgo</h1>
                  <h4>09/05/1992</h4>
                </Col>

                <Col>
                  <h1 style={{marginTop:32}}>Date of analysis</h1>
                  <h4> 09/05/2018</h4>
                </Col>
                
                <Col>
                  <h1 style={{marginTop:32}}>Analysed Words </h1>
                  <h4>512</h4>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs="12" md="8">
           <Card>
              <CardHeader>
                <strong className="text-center">Personal information </strong>
              </CardHeader>
                <CardBody>
                  <Row >
                    <Col md="6">
                  <h3 className=" mb-3">Summary</h3>
                  <p className=" mb-3" >Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                  <p className=" mb-3" >Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                  <p className=" mb-5" >Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </Col>
                    <Col md="6">
                      <h4 className=" mb-3">You are likely to</h4>
                      <p><i class="fa fa-check bg-info p-2 font-2xl mr-3 float-left"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply  </p>
                      <p><i class="fa fa-check bg-info p-2 font-2xl mr-3 float-left"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply  </p>
                      <h4 className=" mb-3">You are unlikely to</h4>
                      <p><i class="fa fa-close bg-danger p-2 font-2xl mr-3 float-left"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply  </p>
                      <p><i class="fa fa-close bg-danger p-2 font-2xl mr-3 float-left"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply  </p>
                    </Col>
                  </Row>
                </CardBody>
              <CardFooter>

              </CardFooter>
            </Card>
          
          </Col>
 
      
          <Col xs="12" md="4" xl="4">
            <Card>
              <CardHeader>
                Values
              </CardHeader>
              <CardBody>
                <Row>
                  
                  <Col xs="12" md="12" xl="12">
                  
                      <div className="progress-group">

                        <div className="progress-group-header"> 
                          <span className="title">Tradition</span>
                          <span className="ml-auto font-weight-bold">43%</span>
                        </div>

                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="success" value="43" />
                        </div>

                      </div>

                      <div className="progress-group mb-3">
                        <div className="progress-group-header">
                         
                          <span className="title">Stimulation</span>
                          <span className="ml-auto font-weight-bold">37%</span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="success" value="37" />
                        </div>
                      </div>

                      <div className="progress-group">
                        <div className="progress-group-header">
                         
                          <span className="title">Helping Others</span>
                          <span className="ml-auto font-weight-bold">56%</span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="success" value="56" />
                        </div>
                      </div>

                      <div className="progress-group">
                        <div className="progress-group-header">
                     
                          <span className="title">Acheivement</span>
                          <span className="ml-auto font-weight-bold">51,225%</span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="success" value="51" />
                        </div>
                      </div>

                      <div className="progress-group">
                        <div className="progress-group-header">
           
                          <span className="title">Taking pleasure in life</span>
                          <span className="ml-auto font-weight-bold">37 %</span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="success" value="37" />
                        </div>
                      </div>

                   
                      
                      <div className="divider text-center">
                        <Button color="link" size="sm" className="text-muted" data-toggle="tooltip" data-placement="top"
                                title="" data-original-title="show more"><i className="icon-options"></i></Button>
                      </div>
               
                  </Col>
                </Row>
                </CardBody>
                </Card>
          </Col>
        </Row>

        <Row>
        <Col xs="12" md="4" xl="4">
            <Card>
              <CardHeader>
              <strong >Consumer Needs</strong >
              </CardHeader>
              <CardBody>
                <Row>
                  
                  <Col xs="12" md="12" xl="12">
               
                      <div className="progress-group mb-3">
                        <div className="progress-group-header">
                         
                          <span className="title">Harmony</span>
                          <span className="ml-auto font-weight-bold">37%</span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="success" value="37" />
                        </div>
                      </div>

                      <div className="progress-group">
                        <div className="progress-group-header">
                         
                          <span className="title">Curiosity</span>
                          <span className="ml-auto font-weight-bold">56%</span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="success" value="56" />
                        </div>
                      </div>

                      <div className="progress-group">
                        <div className="progress-group-header">
                     
                          <span className="title">Self-expression</span>
                          <span className="ml-auto font-weight-bold">51,225%</span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="success" value="51" />
                        </div>
                      </div>

                      <div className="progress-group">
                        <div className="progress-group-header">
           
                          <span className="title">Stability</span>
                          <span className="ml-auto font-weight-bold">37,54 %</span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="success" value="37" />
                        </div>
                      </div>

                      <div className="progress-group">
                        <div className="progress-group-header">
                     
                          <span className="title">Closeness</span>
                          <span className="ml-auto font-weight-bold">27,31%</span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="success" value="27" />
                        </div>
                      </div>
                      
                      <div className="divider text-center">
                        <Button color="link" size="sm" className="text-muted" data-toggle="tooltip" data-placement="top"
                                title="" data-original-title="show more"><i className="icon-options"></i></Button>
                      </div>
               
                  </Col>
                </Row>
                </CardBody>
                </Card>
          </Col>
          <Col xs="12" md="4" xl="4">
            <Card>
              <CardHeader>
              <strong> Personality</strong>
              </CardHeader>
              <CardBody>
                <Row>
                  
                  <Col xs="12" md="12" xl="12">
                  
                      <div className="progress-group">

                        <div className="progress-group-header"> 
                          <span className="title">Agreeableness</span>
                          <span className="ml-auto font-weight-bold">43%</span>
                        </div>

                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="success" value="43" />
                        </div>

                      </div>

                      <div className="progress-group mb-3">
                        <div className="progress-group-header">
                         
                          <span className="title">Conscientiousness</span>
                          <span className="ml-auto font-weight-bold">37%</span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="success" value="37" />
                        </div>
                      </div>

                      <div className="progress-group">
                        <div className="progress-group-header">
                         
                          <span className="title">Openness</span>
                          <span className="ml-auto font-weight-bold">56%</span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="success" value="56" />
                        </div>
                      </div>

                      <div className="progress-group">
                        <div className="progress-group-header">
                     
                          <span className="title">Introversion/Extraversion</span>
                          <span className="ml-auto font-weight-bold">51%</span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="success" value="51" />
                        </div>
                      </div>

                      <div className="progress-group">
                        <div className="progress-group-header">
           
                          <span className="title">Emotional Range</span>
                          <span className="ml-auto font-weight-bold">37%</span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="success" value="37" />
                        </div>
                      </div> 

                      <div className="divider text-center">
                        <Button color="link" size="sm" className="text-muted" data-toggle="tooltip" data-placement="top"
                                title="" data-original-title="show more"><i className="icon-options"></i></Button>
                      </div>
               
                  </Col>
                </Row>
                </CardBody>
                </Card>
          </Col>
          <Col xs="12" md="4" xl="4">
            <Card>
              <CardHeader>
            <strong>Emotions</strong>
              </CardHeader>
              <CardBody>
                <Row> 
                  <Col xs="12" md="12" xl="12">
                  
                      <div className="progress-group">

                        <div className="progress-group-header"> 
                          <span className="title">Love</span>
                          <span className="ml-auto font-weight-bold">43%</span>
                        </div>

                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="success" value="43" />
                        </div>

                      </div>

                      <div className="progress-group mb-3">
                        <div className="progress-group-header">
                         
                          <span className="title">Liberty</span>
                          <span className="ml-auto font-weight-bold">37%</span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="success" value="37" />
                        </div>
                      </div>

                      <div className="progress-group">
                        <div className="progress-group-header">
                         
                          <span className="title">Structure</span>
                          <span className="ml-auto font-weight-bold">56%</span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="success" value="56" />
                        </div>
                      </div>

                      <div className="progress-group">
                        <div className="progress-group-header">
                     
                          <span className="title">Excitement</span>
                          <span className="ml-auto font-weight-bold">51,225%</span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="success" value="51" />
                        </div>
                      </div>

                      <div className="progress-group">
                        <div className="progress-group-header">
           
                          <span className="title">Ideal</span>
                          <span className="ml-auto font-weight-bold">37,54 %</span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="success" value="37" />
                        </div>
                      </div>

                      <div className="progress-group">
                        <div className="progress-group-header">
                     
                          <span className="title">Challenge</span>
                          <span className="ml-auto font-weight-bold">27,31%</span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="success" value="27" />
                        </div>
                      </div>

                      <div className="progress-group">
                        <div className="progress-group-header">
                     
                          <span className="title">Praticality</span>
                          <span className="ml-auto font-weight-bold">27,31%</span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="success" value="27" />
                        </div>
                      </div>
                      
                      <div className="divider text-center">
                        <Button color="link" size="sm" className="text-muted" data-toggle="tooltip" data-placement="top"
                                title="" data-original-title="show more"><i className="icon-options"></i></Button>
                      </div>
               
                  </Col>
                </Row>
                </CardBody>
                </Card>
          </Col>
        </Row>
        <Row>
 
          </Row>
      </div>
    );
  }
}

export default Search;
