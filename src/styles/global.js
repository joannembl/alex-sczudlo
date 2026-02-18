const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Montserrat:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --black:  #0a0a0a;
    --dark:   #111111;
    --mid:    #1c1c1c;
    --gold:   #c9a84c;
    --gold2:  #e8c96d;
    --cream:  #f5f0e8;
    --white:  #ffffff;
    --gray:   #888888;
    --lgray:  #cccccc;
    --display: 'Bebas Neue', sans-serif;
    --serif:   'Cormorant Garamond', serif;
    --body:    'Montserrat', sans-serif;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--black);
    color: var(--cream);
    font-family: var(--body);
    font-size: 15px;
    line-height: 1.7;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--black); }
  ::-webkit-scrollbar-thumb { background: var(--gold); }

  a { color: inherit; text-decoration: none; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pulseGlow {
    from { opacity: 0.6; transform: scale(1); }
    to   { opacity: 1;   transform: scale(1.05); }
  }
  @keyframes scrollDrop {
    0%   { transform: scaleY(0); transform-origin: top; }
    50%  { transform: scaleY(1); transform-origin: top; }
    51%  { transform: scaleY(1); transform-origin: bottom; }
    100% { transform: scaleY(0); transform-origin: bottom; }
  }
  @keyframes fadeIn {
    from { opacity: 0; } to { opacity: 1; }
  }

  .reveal { opacity: 0; transform: translateY(40px); transition: opacity 0.7s ease, transform 0.7s ease; }
  .reveal.visible { opacity: 1; transform: translateY(0); }
`;

export default GLOBAL_CSS;
