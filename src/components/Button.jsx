export default function Button({
  href = '#contact',
  children,
  variant = 'primary',
  onClick,
}) {
  return (
    <a className={`button button-${variant}`} href={href} onClick={onClick}>
      {children}
    </a>
  )
}
