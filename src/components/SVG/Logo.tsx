export function Logo({
  width = 48,
  height = 48,
}: {
  width?: number | string;
  height?: number | string;
}) {
  return (
    <svg width={width} height={height} fill="none" viewBox="0 0 48 48">
      <defs>
        <linearGradient
          id="primary-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop
            offset="0%"
            style={{ stopColor: "rgb(var(--primary))", stopOpacity: 1 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "rgb(var(--secondary))", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <path
        fill="url(#primary-gradient)"
        fillRule="evenodd"
        d="M14 12C14 10.8954 14.8954 10 16 10L26 10C30.4183 10 34 13.5817 34 18C34 21.3747 31.9104 24.2614 28.9544 25.4368L33.7889 35.1056C34.2828 36.0935 33.8824 37.2949 32.8944 37.7889C31.9065 38.2828 30.7051 37.8824 30.2111 36.8944L24.7639 26H18L18 36C18 37.1046 17.1046 38 16 38C14.8954 38 14 37.1046 14 36L14 12ZM18 22L26 22C28.2091 22 30 20.2091 30 18C30 15.7909 28.2091 14 26 14L18 14L18 22Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
