export default function ImagePlaceholder({ className = '', aspectRatio }) {
  return (
    <div
      className={`image-placeholder ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
      aria-hidden="true"
    />
  )
}
