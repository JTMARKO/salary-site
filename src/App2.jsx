import React, { useState } from "react";
//
// // Reusable UI Components
// const Card = ({ children, className = "", variant = "default" }) => {
//   const variants = {
//     default: "bg-dark border-warning",
//     warning: "bg-warning text-dark",
//     secondary: "bg-secondary border-warning",
//   };
//
//   return (
//     <div className={`card ${variants[variant]} ${className}`}>{children}</div>
//   );
// };
// const Card = ({ children, className = "", variant = "default" }) => {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [isHovered, setIsHovered] = useState(false);
//
//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setMousePos({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     });
//   };
//
//   const variants = {
//     default: "bg-dark border-warning",
//     warning: "bg-warning text-dark",
//     secondary: "bg-secondary border-warning",
//   };
//
//   return (
//     <div
//       className={`card ${variants[variant]} ${className}`}
//       style={{
//         position: "relative",
//         overflow: "hidden",
//         transition: "box-shadow 0.3s ease",
//         ...(isHovered && {
//           boxShadow: `0 0 20px rgba(255, 193, 7, 0.5)`,
//         }),
//       }}
//       onMouseMove={handleMouseMove}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {isHovered && (
//         <div
//           style={{
//             position: "absolute",
//             top: mousePos.y - 100,
//             left: mousePos.x - 100,
//             width: "200px",
//             height: "200px",
//             background:
//               "radial-gradient(circle, rgba(255, 193, 7, 0.15) 0%, rgba(255, 193, 7, 0.05) 50%, transparent 70%)",
//             borderRadius: "50%",
//             pointerEvents: "none",
//             transition: "all 0.1s ease",
//             zIndex: 1,
//           }}
//         />
//       )}
//       <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
//     </div>
//   );
// };
//
const Card = ({ children, className = "", variant = "default" }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const variants = {
    default: "bg-dark",
    warning: "bg-warning text-dark",
    secondary: "bg-secondary",
  };

  return (
    <div
      className={`card ${variants[variant]} ${className}`}
      style={{
        position: "relative",
        overflow: "hidden",
        border: "2px solid #ffc107",
        background: isHovered
          ? `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.8), transparent 100%), linear-gradient(#ffc107, #ffc107)`
          : "#ffc107",
        backgroundClip: isHovered ? "padding-box, border-box" : "border-box",
        backgroundOrigin: "border-box",
        padding: "2px",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`h-100 w-100 ${variants[variant]}`}
        style={{
          borderRadius: "calc(0.375rem - 2px)",
        }}
      >
        {children}
      </div>
    </div>
  );
};
const CardBody = ({ children, className = "" }) => (
  <div className={`card-body ${className}`}>{children}</div>
);

const CardHeader = ({ children, className = "", variant = "default" }) => {
  const variants = {
    default: "bg-warning text-dark",
    dark: "bg-dark text-warning border-warning",
  };

  return (
    <div className={`card-header ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

const Button = ({
  children,
  onClick,
  variant = "outline-warning",
  className = "",
  ...props
}) => {
  const variants = {
    "outline-warning": "btn-outline-warning",
    warning: "btn-warning",
    "warning-full": "btn-warning w-100",
  };

  return (
    <button
      className={`btn ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

const StatsCard = ({ title, value, subtitle = "" }) => (
  <Card>
    <CardBody className="text-center">
      <h5 className="card-title text-warning">{title}</h5>
      <p className="card-text fs-4">{value}</p>
      {subtitle && <small className="text-muted">{subtitle}</small>}
    </CardBody>
  </Card>
);

const SectionTitle = ({ children, className = "" }) => (
  <h2 className={`display-4 text-center mb-5 text-warning ${className}`}>
    {children}
  </h2>
);

const Container = ({ children, className = "" }) => (
  <div className={`container py-5 ${className}`}>{children}</div>
);

// Navigation Component
const Navigation = ({ activeSection, setActiveSection, sections }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
    <div className="container">
      <a
        className="navbar-brand fw-bold fs-3 text-dark"
        href="#"
        onClick={() => setActiveSection("home")}
      >
        Salary Coin 🟠
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {Object.entries(sections).map(([key, label]) => (
            <li className="nav-item" key={key}>
              <a
                className={`nav-link text-dark ${activeSection === key ? "active" : ""}`}
                href="#"
                onClick={() => setActiveSection(key)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

// Home Section Component
const HomeSection = () => (
  <div className="text-center py-5">
    <div className="container">
      <h1 className="display-1 fw-bold mb-4 text-warning">Salary Coin 🟠</h1>
      <h2 className="display-6 mb-5">Give yourself a raise 🟠</h2>

      {/* Hero Stats Cards */}
      <div className="row g-4 mb-5">
        <div className="col-md-3">
          <StatsCard title="Price" value="Loading..." />
        </div>
        <div className="col-md-3">
          <StatsCard title="Market Cap" value="Loading..." />
        </div>
        <div className="col-md-3">
          <StatsCard title="24h Volume" value="Loading..." />
        </div>
        <div className="col-md-3">
          <StatsCard title="Holders" value="Loading..." />
        </div>
      </div>

      {/* Chart Placeholder */}
      <Card className="mb-5">
        <CardBody>
          <h5 className="card-title text-warning text-center mb-4">
            Price Chart
          </h5>
          <div className="bg-secondary rounded p-5 text-center">
            <p className="mb-0">TradingView Chart Integration Placeholder</p>
            <small className="text-muted">
              DEXScreener/TradingView chart will be embedded here
            </small>
          </div>
        </CardBody>
      </Card>
    </div>
  </div>
);

// About Section Component
const AboutSection = () => (
  <Container>
    <SectionTitle>What is Salary Coin? 🟠</SectionTitle>
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <Card>
          <CardBody>
            <p className="lead">[Content about Salary Coin goes here]</p>
            <hr className="border-warning" />
            <p>[Mission statement and movement philosophy]</p>
            <hr className="border-warning" />
            <p>[Team information and CTO story]</p>
            <div className="text-center mt-4">
              <h4 className="text-warning">Give yourself a raise 🟠</h4>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  </Container>
);

// Buy Section Component
const BuySection = () => {
  const steps = [
    {
      title: "Get a Crypto Wallet",
      content: "[Phantom wallet setup instructions]",
    },
    { title: "Buy Solana (SOL)", content: "[SOL purchase instructions]" },
    {
      title: "Buy Salary Coin",
      content: "[Purchase instructions and CA verification]",
    },
  ];

  return (
    <Container>
      <SectionTitle>How to Buy SALARY 🟠</SectionTitle>
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="row g-4">
            {steps.map((step, index) => (
              <div className="col-md-4" key={index}>
                <Card className="h-100">
                  <CardBody className="text-center">
                    <h3 className="text-warning">Step {index + 1}</h3>
                    <h5>{step.title}</h5>
                    <p>{step.content}</p>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
          <div className="alert alert-warning mt-4">
            <strong>Contract Address:</strong>{" "}
            D7Z2fUrxECBh91chmnou8u7E9Yaq7inzzcjg9G1Apump
          </div>
        </div>
      </div>
    </Container>
  );
};

// Stats Section Component
const StatsSection = () => {
  const stats = [
    { label: "Price", value: "Loading..." },
    { label: "Market Cap", value: "Loading..." },
    { label: "Volume 24h", value: "Loading..." },
    { label: "Liquidity", value: "Loading..." },
  ];

  const quickLinks = ["DEXScreener", "CoinGecko", "Moby Screener"];

  return (
    <Container>
      <SectionTitle>Coin Stats 🟠</SectionTitle>
      <div className="row g-4">
        <div className="col-lg-8">
          <Card>
            <CardBody>
              <h5 className="card-title text-warning">Live Statistics</h5>
              <p>[Moby Screener integration placeholder]</p>
              <div className="row g-3">
                {stats.map((stat, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="bg-secondary rounded p-3">
                      <strong>{stat.label}:</strong> {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="col-lg-4">
          <Card>
            <CardBody>
              <h5 className="card-title text-warning">Quick Links</h5>
              <div className="d-grid gap-2">
                {quickLinks.map((link, index) => (
                  <Button key={index}>{link}</Button>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </Container>
  );
};

// Bullish Section Component
const BullishSection = () => (
  <Container>
    <SectionTitle>Why We're Bullish 🟠</SectionTitle>
    <div className="row">
      <div className="col-lg-10 mx-auto">
        <Card>
          <CardBody>
            <p className="lead">[Bullish essay content goes here]</p>
            <hr className="border-warning" />
            <p>[Technical analysis and future plans]</p>
            <hr className="border-warning" />
            <p>[Narrative and blue chip potential]</p>
          </CardBody>
        </Card>
      </div>
    </div>
  </Container>
);

// Calculator Section Component
const CalculatorSection = () => {
  const metrics = [
    { title: "USD Inflation Rate", value: "X.X%" },
    { title: "CEO Pay Increase", value: "XXX%" },
    { title: "Avg Worker Pay", value: "X.X%" },
  ];

  return (
    <Container>
      <SectionTitle>Salary vs Inflation Calculator 🟠</SectionTitle>
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <Card>
            <CardBody>
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <label className="form-label text-warning">
                    Your Annual Salary ($)
                  </label>
                  <input
                    type="number"
                    className="form-control bg-secondary border-warning text-white"
                    placeholder="50000"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-warning">
                    Time Period (Years)
                  </label>
                  <input
                    type="number"
                    className="form-control bg-secondary border-warning text-white"
                    placeholder="5"
                  />
                </div>
              </div>
              <Button variant="warning-full" className="mb-4">
                Calculate Difference
              </Button>
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="bg-secondary rounded p-3 text-center">
                    <h5 className="text-warning">Traditional Salary</h5>
                    <p className="fs-4">$XXX,XXX</p>
                    <small>After inflation impact</small>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-warning rounded p-3 text-center text-dark">
                    <h5>Salary Coin Investment</h5>
                    <p className="fs-4">$XXX,XXX</p>
                    <small>Potential value</small>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
          <div className="row g-4 mt-4">
            {metrics.map((metric, index) => (
              <div className="col-md-4" key={index}>
                <StatsCard title={metric.title} value={metric.value} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

// Content Section Component
const ContentSection = () => (
  <Container>
    <SectionTitle>Content Hub 🟠</SectionTitle>
    <div className="row g-4">
      <div className="col-lg-8">
        <Card>
          <CardBody>
            <h5 className="card-title text-warning">Latest Videos</h5>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="bg-secondary rounded p-3 text-center">
                  <p>Video Placeholder 1</p>
                  <small>Marketing content by Skinky</small>
                </div>
              </div>
              <div className="col-md-6">
                <div className="bg-secondary rounded p-3 text-center">
                  <p>Video Placeholder 2</p>
                  <small>Community content</small>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="col-lg-4">
        <Card>
          <CardBody>
            <h5 className="card-title text-warning">Content Management</h5>
            <p>
              <small>Admin access for 3-4 team members</small>
            </p>
            <div className="d-grid gap-2">
              <Button>Upload Video</Button>
              <Button>Manage Content</Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  </Container>
);

// Chat Section Component
const ChatSection = ({
  chatMessages,
  setChatMessages,
  newMessage,
  setNewMessage,
}) => {
  const addChatMessage = () => {
    if (newMessage.trim()) {
      setChatMessages([
        ...chatMessages,
        { id: Date.now(), text: newMessage, user: "Anonymous" },
      ]);
      setNewMessage("");
    }
  };

  return (
    <Container>
      <SectionTitle>Community Chat 🟠</SectionTitle>
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <Card>
            <CardHeader>
              <h5 className="mb-0">Live Community Discussion</h5>
            </CardHeader>
            <CardBody style={{ height: "400px", overflowY: "auto" }}>
              {chatMessages.length === 0 ? (
                <p className="text-muted text-center">
                  No messages yet. Start the conversation!
                </p>
              ) : (
                chatMessages.map((msg) => (
                  <div key={msg.id} className="mb-2">
                    <strong className="text-warning">{msg.user}:</strong>{" "}
                    {msg.text}
                  </div>
                ))
              )}
            </CardBody>
            <div className="card-footer">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-secondary border-warning text-white"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addChatMessage()}
                />
                <Button variant="warning" onClick={addChatMessage}>
                  Send
                </Button>
              </div>
              <small className="text-muted">
                Optional: Sign in for persistent identity
              </small>
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
};

// Game Section Component
const GameSection = () => (
  <Container>
    <SectionTitle>Salary Game 🟠</SectionTitle>
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <Card>
          <CardBody className="text-center">
            <h5 className="card-title text-warning mb-4">Coming Soon!</h5>
            <div className="bg-secondary rounded p-5">
              <p className="fs-4 mb-4">🎮</p>
              <p>Interactive Salary Coin game will be available here</p>
              <p className="text-muted">
                Simple, fun gameplay involving Salary Coins
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  </Container>
);

// Socials Section Component
const SocialsSection = () => {
  const socialPlatforms = [
    { title: "X Account", description: "Follow for updates", action: "Follow" },
    { title: "X Community", description: "Join discussions", action: "Join" },
    { title: "Discord", description: "Real-time chat", action: "Join Server" },
    {
      title: "Telegram",
      description: "Mobile community",
      action: "Join Channel",
    },
    {
      title: "Reddit Sub",
      description: "Community discussions",
      action: "Subscribe",
    },
    {
      title: "Reddit Artwork",
      description: "Community art",
      action: "View Art",
    },
  ];

  return (
    <Container>
      <SectionTitle>Join Our Community 🟠</SectionTitle>
      <div className="row g-4">
        {socialPlatforms.map((platform, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <Card className="h-100">
              <CardBody className="text-center">
                <h5 className="text-warning">{platform.title}</h5>
                <p>{platform.description}</p>
                <Button>{platform.action}</Button>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
};

// Footer Component
const Footer = () => (
  <footer
    className="border-top border-warning py-4 mt-5"
    style={{
      backgroundColor: "linear-gradient(to bottom, #121212 0%, #0a0a0a 100%)",
    }}
  >
    <div className="container text-center">
      <p className="mb-2">Give yourself a raise 🟠</p>
      <p className="text-muted small mb-0">
        Contract: D7Z2fUrxECBh91chmnou8u7E9Yaq7inzzcjg9G1Apump
      </p>
    </div>
  </footer>
);

// Main App Component
const SalaryCoinApp = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const sections = {
    home: "Home",
    about: "What is Salary Coin?",
    buy: "How to Buy",
    stats: "Coin Stats",
    bullish: "Why We're Bullish",
    calculator: "Salary vs Inflation",
    content: "Content Hub",
    chat: "Community Chat",
    game: "Salary Game",
    socials: "Social Links",
  };

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection />;
      case "about":
        return <AboutSection />;
      case "buy":
        return <BuySection />;
      case "stats":
        return <StatsSection />;
      case "bullish":
        return <BullishSection />;
      case "calculator":
        return <CalculatorSection />;
      case "content":
        return <ContentSection />;
      case "chat":
        return (
          <ChatSection
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
            newMessage={newMessage}
            setNewMessage={setNewMessage}
          />
        );
      case "game":
        return <GameSection />;
      case "socials":
        return <SocialsSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div
      className="min-vh-100 text-white"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sections={sections}
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">{renderSection()}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SalaryCoinApp;
