import { Alert } from 'react-bootstrap';


export default {

  popAlert: () => {
    return(
      <Alert bsStyle="warning">
        <strong>Holy guacamole!</strong> Best check yo self, youre not looking too good.
      </Alert>
    );
  }

}
