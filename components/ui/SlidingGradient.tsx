export default function SlidingGradient({ className = '' }: { className?: string }) {
  return <div className={`absolute inset-0 pointer-events-none sliding-gradient ${className}`} aria-hidden />
}
