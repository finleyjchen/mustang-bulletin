import React from 'react';

import { auth } from '../../firebase';
import { Button } from 'reactstrap'
const SignOutButton = () =>
  <Button
    outline
    type="button"
    onClick={auth.doSignOut}
  >
    Sign Out
  </Button>

export default SignOutButton;
