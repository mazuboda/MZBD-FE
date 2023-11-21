import InstagramIcon from '@mui/icons-material/Instagram';

const InstragramIcon = () => {
  return (
    <>
      <svg width="0" height="0">
        <radialGradient id="radialColors" r="150%" cx="30%" cy="107%">
          <stop stop-color="#fdf497" offset="0" />
          <stop stop-color="#fdf497" offset="0.05" />
          <stop stop-color="#fd5949" offset="0.45" />
          <stop stop-color="#d6249f" offset="0.6" />
          <stop stop-color="#285AEB" offset="0.9" />
        </radialGradient>
      </svg>

      <InstagramIcon
        sx={{
          fill: "url(#radialColors)",
        }}
      />
    </>
  );
};

export default InstragramIcon;