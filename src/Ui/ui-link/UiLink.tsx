import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

export interface ILinkProps {
    url: string,
    title: string
}

const UiLink: React.FC<ILinkProps> = (props: ILinkProps) => {

  return (
    <Link component={RouterLink} to={props.url}>{props.title}</Link>
  );
}

export default UiLink;
