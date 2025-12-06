export const Lightbulb = () => (
  <svg width="254" height="254" viewBox="0 0 254 254" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute bottom-15 left-17'>
    <defs>
      <linearGradient id="paint0_linear_515_77244" x1="126.773" y1="-232.994" x2="127" y2="291" gradientUnits="userSpaceOnUse">
        <stop stopColor="#B1FFB4">
          <animate attributeName="stopColor" values="#212D23;#B1FFB4;#B1FFB4" dur="3s" repeatCount="indefinite"/>
        </stop>
        <stop offset="1" stopColor="#212D23"/>
      </linearGradient>

      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    <path d="M177.382 37.6294C157.761 22.2043 132.378 16.6447 107.536 22.5636C78.7335 29.2 55.512 51.9783 48.4908 80.4974C41.4702 109.195 49.5709 138.251 70.2721 158.519C77.6534 165.873 81.9737 177.412 81.9737 189.25V191.223C81.9737 196.245 85.9335 200.191 90.9745 200.191H162.981C168.022 200.191 171.982 196.245 171.982 191.223V189.25C171.982 177.591 176.482 165.693 184.403 157.981C199.525 142.735 207.985 122.468 207.985 100.945C207.985 76.1927 196.824 53.0545 177.382 37.6294ZM126.978 74.0403C113.398 74.0403 103.513 83.015 100.925 93.4042C99.7467 98.1292 94.9751 101.145 90.0162 99.9551C85.1996 98.7641 82.2546 93.8945 83.4505 89.0954C87.9101 71.1592 104.818 56.1042 126.978 56.1042C131.953 56.1042 135.978 60.1153 135.978 65.0723C135.978 70.0292 131.953 74.0403 126.978 74.0403ZM90.9745 218.127V227.095C90.9745 241.931 103.087 254 117.977 254H135.978C150.868 254 162.981 241.931 162.981 227.095V218.127H90.9745Z" fill="url(#paint0_linear_515_77244)" filter="url(#glow)">
      <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/>
    </path>
  </svg>
);
