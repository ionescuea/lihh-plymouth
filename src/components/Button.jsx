import { Link } from 'react-router-dom';

export default function Button({ href, variant = 'gold', className = '', children }) {
  const classes = `btn btn-${variant} ${className}`.trim();
  const isExternal = href.startsWith('http') || href.startsWith('mailto:');

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={classes}>
      {children}
    </Link>
  );
}
