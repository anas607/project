export default function ExcelIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* خلفية */}
      <rect width="64" height="64" rx="8" fill="#1D6F42" />

      {/* صفحة الكتاب المائلة */}
      <polygon
        points="12,10 44,10 52,20 52,54 12,54"
        fill="#107C41"
        transform="skewX(-10)"
      />

      {/* خلايا جدول بيضاء */}
      <g transform="translate(18, 20)" stroke="white" strokeWidth="1.5">
        <rect x="0" y="0" width="8" height="8" fill="none" />
        <rect x="10" y="0" width="8" height="8" fill="none" />
        <rect x="0" y="10" width="8" height="8" fill="none" />
        <rect x="10" y="10" width="8" height="8" fill="none" />
      </g>

      {/* حرف X أبيض كبير */}
      <text
        x="32"
        y="44"
        textAnchor="middle"
        fontSize="28"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial, sans-serif"
      >
        X
      </text>
    </svg>
  );
}
