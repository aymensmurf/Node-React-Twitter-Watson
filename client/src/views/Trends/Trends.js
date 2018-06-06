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
  Label,
} from 'reactstrap';
import Widget03 from '../../views/Widgets/Widget03'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
 

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

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
<GoogleMap
  defaultZoom={5}
  defaultCenter={{ lat: 24.5, lng: 46.5}}
>
  {props.isMarkerShown && <Marker position={{ lat: 24.5, lng: 46.5 }} />}
</GoogleMap>
))

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

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
class Trends extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
 
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
 

  render() {

    return (
      <div className="animated fadeIn">
 
 <Row>
 <Col xs="12" md="12">
  <Card>
     <CardHeader>
       <strong>Maps</strong>
     </CardHeader>
       <CardBody>
         <Row>
           <Col xs="12" md="6" >
             <div className="mb-3">
             <MyMapComponent
               isMarkerShown
               googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
               loadingElement={<div style={{ height: `100%` }} />}
               containerElement={<div style={{ height: `400px` }} />}
               mapElement={<div style={{ height: `100%` }} />}
/>
             </div>
             </Col>
             <Col xs="12" md="6" >
             <h1>Highest graphics Trends</h1>
             <div className="mb-5">
             Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry
             Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry
             Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry
           </div>
           <div className="mb-3">      
           <FormGroup>
           <Label htmlFor="ccmonth" >Tradition influence</Label>
           <Input type="select" name="ccmonth" id="ccmonth">
             <option value="1">Tradition influence 1</option>
             <option value="2">Tradition influence 2</option>
             <option value="3">Tradition influence 3</option> 
           </Input>
         </FormGroup>
         </div>
             </Col>
         </Row>
       </CardBody>
     <CardFooter>

     </CardFooter>
   </Card>
 
 </Col>



</Row>

      <Row>
        <Col>
         <Card className="text-white bg-info" stye={{height:200}}>
            <CardBody className="pb-0"> 
              <h1 className="text-center">456</h1>
              <h1 className="text-center">Profiles Consider</h1>
              <h3 className="text-center mb-3">Starting a Business in the next few Years!</h3> 
              <h3 className="text-center mb-5">Check Their list</h3>
            </CardBody>
        
          </Card>
        </Col>
        <Col>
          <Card className="text-white bg-info" stye={{height:200}}>
            <CardBody className="pb-0"> 
              <h1 className="text-center">89%</h1>
              <h1 className="text-center">of analyzed profiles</h1>
              <h3 className="text-center mb-3">are described as extroverts</h3> 
              <h3 className="text-center mb-5">Check Their list</h3>
            </CardBody>
                  
          </Card>
        </Col>
      </Row>

      </div>
    );
  }
}

export default Trends;
