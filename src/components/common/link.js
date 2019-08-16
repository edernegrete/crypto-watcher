import React, { memo } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

function EnhancedLink({
  to, location, children, state, staticContext, ...otherProps
}) {
  return (
    <Link
      to={{
        pathname: to,
        search: location.search,
        state
      }}
      {...otherProps}
    >
      {children}
    </Link>
  );
}

export default memo(withRouter(EnhancedLink));
