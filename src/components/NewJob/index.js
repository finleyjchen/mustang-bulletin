import React, { Component } from "react";
import { db } from "../../firebase"; // <--- add this line
import {
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
  Label,
  InputGroup,
  InputGroupAddon,
  Alert,
  Card,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { addJobThunk } from "../../store/actions/"

const NewJobPage = () => (
  <div>
    <Row>
      <h1 className="text-center w-100">New Job</h1>
      <Col sm={{ size: 6, offset: 3 }}>
        <NewJobForm />
      </Col>
    </Row>
    {/*<Row>
      <h1 className="text-center w-100">New Job</h1>
    </Row>
    <Row>
      <Col sm="3" />
      <Col sm="3">
        <Card className="p-4 lead text-center">
          <h5 className="">Basic Ad</h5>
          <p>Your ad shows up by date posted</p>
          <p>
            <strong className="display-4">$3</strong>
            /month
          </p>
        </Card>
      </Col>
      <Col sm="3">
        <Card className="p-4 lead text-center">
          <h5 className="">Featured Ad</h5>
          <p>Your ad shows up first</p>
          <p>
            <strong className="display-4">$10</strong>
            /month
          </p>
        </Card>
      </Col>
      <Col sm="3" />
    </Row>*/}
  </div>
);

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  title: "",
  description: "",
  price: 0,
  type: 0,
  error: null,
  dateAdded: 0,
  priceType: 0,
  deadline: null,
};
class NewJobForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE, startDate: moment() };
  }

  onSubmit = event => {
    const { title, description, price, type, deadline } = this.state;

    addJobThunk(title, title, description, price, type, deadline.format())
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName("error", error));
      });

    event.preventDefault();
  };

  handleChange = date => {
    this.setState({
      deadline: date
    });
  }

  render() {
    const { title, description, price, type, deadline, error } = this.state;

    const isInvalid =
      title === "" || description === "" || price === "" || type === null; 

    return (
      <Form onSubmit={this.onSubmit}>
        <ModalBody>
          <FormGroup>
            <Label>Title*</Label>
            <Input
              value={title}
              onChange={event =>
                this.setState(updateByPropertyName("title", event.target.value))
              }
              type="text"
              placeholder="Don't use all uppercase titles"
            />
          </FormGroup>
          <FormGroup>
            <Label>Description*</Label>
            <Input
              value={description}
              onChange={event =>
                this.setState(
                  updateByPropertyName("description", event.target.value)
                )
              }
              type="textarea"
              placeholder="Describe what you need done here."
            />
          </FormGroup>
          <FormGroup>
            <InputGroup size="lg" className="w-50">
              <InputGroupAddon addonType="prepend">$</InputGroupAddon>
              <Input
                value={price}
                onChange={event =>
                  this.setState(
                    updateByPropertyName("price", event.target.value)
                  )
                }
                placeholder="Amount"
                type="number"
                step="1"
              />
              <InputGroupAddon addonType="append">.00</InputGroupAddon>
            </InputGroup>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="type"
                value={type}
                onChange={event =>
                  this.setState(updateByPropertyName("type", 0))
                }
              />
              Help Wanted
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="type"
                onChange={event =>
                  this.setState(updateByPropertyName("type", 1))
                }
              />{" "}
              Providing a service
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              Deadline
            </Label>
          <DatePicker className="" selected={this.state.deadline}  onChange={this.handleChange} />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <FormGroup>
            <Button
              block
              outline
              color="success"
              disabled={isInvalid}
              type="submit"
            >
              Add Job
            </Button>
          </FormGroup>

        </ModalFooter>
        {error && <p>{error.message}</p>}
      </Form>
    );
  }
}

class NewJobModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <button class="btn border btn-new-job w-100" onClick={this.toggle}>
          Post a job &rarr;
        </button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Post a job</ModalHeader>
          <NewJobForm />
        </Modal>
      </div>
    );
  }
}

export default withRouter(NewJobModal);

export { NewJobForm, NewJobPage };
