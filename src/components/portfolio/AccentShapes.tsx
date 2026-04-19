interface CornerMarkProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

function CornerMark({ position }: CornerMarkProps) {
  const size = 32
  const stroke = 2.5
  const len = 20

  const positionClasses: Record<string, string> = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
  }

  let d: string
  switch (position) {
    case 'top-left':
      d = `M${stroke / 2} ${len} V${stroke / 2} H${len}`
      break
    case 'top-right':
      d = `M${size - len} ${stroke / 2} H${size - stroke / 2} V${len}`
      break
    case 'bottom-left':
      d = `M${stroke / 2} ${size - len} V${size - stroke / 2} H${len}`
      break
    case 'bottom-right':
      d = `M${size - len} ${size - stroke / 2} H${size - stroke / 2} V${size - len}`
      break
  }

  return (
    <svg
      className={`absolute h-8 w-8 ${positionClasses[position]}`}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d={d}
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth={stroke}
        strokeLinecap="square"
      />
    </svg>
  )
}

export function AccentCorners({ corners = ['top-left', 'bottom-right'] }: { corners?: CornerMarkProps['position'][] }) {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {corners.map((pos) => (
        <CornerMark key={pos} position={pos} />
      ))}
    </div>
  )
}
