import React from 'react';

//Bootstrap
import { Button } from 'react-bootstrap';

interface AddProps {
  variant: string;
  text: string;
  extraClass: string;
  onClick?: () => void;
}

const ButtonPage = ({ onClick, variant, text, extraClass }: AddProps) => (
  <Button
    onClick={onClick}
    variant={variant}
    className={extraClass}
    type="submit"
  >
    {text}
  </Button>
);

export default React.memo(ButtonPage);
