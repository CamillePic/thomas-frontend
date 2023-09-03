// // ActiveLink.js
// import { useRouter } from 'next/router';
// import PropTypes from 'prop-types';
// import Link from 'next/link';
// import React, { Children } from 'react';

// const ActiveLink = ({ children, activeClassName, ...props }) => {
//   const { asPath } = useRouter();
//   const child = Children.only(children);
//   const childClassName = child.props.className || '';

//   const className =
//     asPath === props.href || asPath === props.as
//       ? `${childClassName} ${activeClassName}`.trim()
//       : childClassName;

//   return (
//     <Link {...props}>
//       {React.cloneElement(child, {
//         className: className || null,
//       })}
//     </Link>
//   );
// };

// ActiveLink.propTypes = {
//   activeClassName: PropTypes.string.isRequired,
// };

// export default ActiveLink;


// ActiveLink.js
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const ActiveLink = ({ children, activeClassName, href, isActive, ...props }) => {
  const { asPath } = useRouter();
  const isActiveLink = isActive || (asPath === href);

  return (
    <Link href={href} {...props}>
      {React.cloneElement(children, {
        className: isActiveLink ? `${children.props.className} ${activeClassName}` : children.props.className,
      })}
    </Link>
  );
};

export default ActiveLink;
