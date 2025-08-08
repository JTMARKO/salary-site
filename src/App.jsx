import React, { useState } from 'react';

const SalaryCoinApp = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const addChatMessage = () => {
    if (newMessage.trim()) {
      setChatMessages([...chatMessages, { id: Date.now(), text: newMessage, user: 'Anonymous' }]);
      setNewMessage('');
    }
  };

  const sections = {
    home: 'Home',
    about: 'What is Salary Coin?',
    buy: 'How to Buy',
    stats: 'Coin Stats',
    bullish: 'Why We\'re Bullish',
    calculator: 'Salary vs Inflation',
    content: 'Content Hub',
    chat: 'Community Chat',
    game: 'Salary Game',
    socials: 'Social Links'
  };

  const Navigation = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
      <div className="container">
        <a className="navbar-brand fw-bold fs-3 text-dark" href="#" onClick={() => setActiveSection('home')}>
          Salary Coin 🟠
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {Object.entries(sections).map(([key, label]) => (
              <li className="nav-item" key={key}>
                <a 
                  className={`nav-link text-dark ${activeSection === key ? 'active' : ''}`}
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

  const HomeSection = () => (
    <div className="text-center py-5">
      <div className="container">
        <h1 className="display-1 fw-bold mb-4 text-warning">
          Salary Coin 🟠
        </h1>
        <h2 className="display-6 mb-5">Give yourself a raise 🟠</h2>
        
        {/* Hero Stats Cards */}
        <div className="row g-4 mb-5">
          <div className="col-md-3">
            <div className="card bg-dark border-warning">
              <div className="card-body text-center">
                <h5 className="card-title text-warning">Price</h5>
                <p className="card-text fs-4">Loading...</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-dark border-warning">
              <div className="card-body text-center">
                <h5 className="card-title text-warning">Market Cap</h5>
                <p className="card-text fs-4">Loading...</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-dark border-warning">
              <div className="card-body text-center">
                <h5 className="card-title text-warning">24h Volume</h5>
                <p className="card-text fs-4">Loading...</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-dark border-warning">
              <div className="card-body text-center">
                <h5 className="card-title text-warning">Holders</h5>
                <p className="card-text fs-4">Loading...</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Chart Placeholder */}
        <div className="card bg-dark border-warning mb-5">
          <div className="card-body">
            <h5 className="card-title text-warning text-center mb-4">Price Chart</h5>
            <div className="bg-secondary rounded p-5 text-center">
              <p className="mb-0">TradingView Chart Integration Placeholder</p>
              <small className="text-muted">DEXScreener/TradingView chart will be embedded here</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AboutSection = () => (
    <div className="container py-5">
      <h2 className="display-4 text-center mb-5 text-warning">
        What is Salary Coin? 🟠
      </h2>
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="card bg-dark border-warning">
            <div className="card-body">
              <p className="lead">[Content about Salary Coin goes here]</p>
              <hr className="border-warning" />
              <p>[Mission statement and movement philosophy]</p>
              <hr className="border-warning" />
              <p>[Team information and CTO story]</p>
              <div className="text-center mt-4">
                <h4 className="text-warning">Give yourself a raise 🟠</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const BuySection = () => (
    <div className="container py-5">
      <h2 className="display-4 text-center mb-5 text-warning">
        How to Buy SALARY 🟠
      </h2>
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card bg-dark border-warning h-100">
                <div className="card-body text-center">
                  <h3 className="text-warning">Step 1</h3>
                  <h5>Get a Crypto Wallet</h5>
                  <p>[Phantom wallet setup instructions]</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-dark border-warning h-100">
                <div className="card-body text-center">
                  <h3 className="text-warning">Step 2</h3>
                  <h5>Buy Solana (SOL)</h5>
                  <p>[SOL purchase instructions]</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-dark border-warning h-100">
                <div className="card-body text-center">
                  <h3 className="text-warning">Step 3</h3>
                  <h5>Buy Salary Coin</h5>
                  <p>[Purchase instructions and CA verification]</p>
                </div>
              </div>
            </div>
          </div>
          <div className="alert alert-warning mt-4">
            <strong>Contract Address:</strong> D7Z2fUrxECBh91chmnou8u7E9Yaq7inzzcjg9G1Apump
          </div>
        </div>
      </div>
    </div>
  );

  const StatsSection = () => (
    <div className="container py-5">
      <h2 className="display-4 text-center mb-5 text-warning">
        Coin Stats 🟠
      </h2>
      <div className="row g-4">
        <div className="col-lg-8">
          <div className="card bg-dark border-warning">
            <div className="card-body">
              <h5 className="card-title text-warning">Live Statistics</h5>
              <p>[Moby Screener integration placeholder]</p>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="bg-secondary rounded p-3">
                    <strong>Price:</strong> Loading...
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-secondary rounded p-3">
                    <strong>Market Cap:</strong> Loading...
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-secondary rounded p-3">
                    <strong>Volume 24h:</strong> Loading...
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-secondary rounded p-3">
                    <strong>Liquidity:</strong> Loading...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card bg-dark border-warning">
            <div className="card-body">
              <h5 className="card-title text-warning">Quick Links</h5>
              <div className="d-grid gap-2">
                <button className="btn btn-outline-warning">DEXScreener</button>
                <button className="btn btn-outline-warning">CoinGecko</button>
                <button className="btn btn-outline-warning">Moby Screener</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const BullishSection = () => (
    <div className="container py-5">
      <h2 className="display-4 text-center mb-5 text-warning">
        Why We're Bullish 🟠
      </h2>
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <div className="card bg-dark border-warning">
            <div className="card-body">
              <p className="lead">[Bullish essay content goes here]</p>
              <hr className="border-warning" />
              <p>[Technical analysis and future plans]</p>
              <hr className="border-warning" />
              <p>[Narrative and blue chip potential]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const CalculatorSection = () => (
    <div className="container py-5">
      <h2 className="display-4 text-center mb-5 text-warning">
        Salary vs Inflation Calculator 🟠
      </h2>
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="card bg-dark border-warning">
            <div className="card-body">
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <label className="form-label text-warning">Your Annual Salary ($)</label>
                  <input type="number" className="form-control bg-secondary border-warning text-white" placeholder="50000" />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-warning">Time Period (Years)</label>
                  <input type="number" className="form-control bg-secondary border-warning text-white" placeholder="5" />
                </div>
              </div>
              <button className="btn btn-warning w-100 mb-4">Calculate Difference</button>
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
            </div>
          </div>
          <div className="row g-4 mt-4">
            <div className="col-md-4">
              <div className="card bg-dark border-warning">
                <div className="card-body text-center">
                  <h6 className="text-warning">USD Inflation Rate</h6>
                  <p className="fs-5">X.X%</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-dark border-warning">
                <div className="card-body text-center">
                  <h6 className="text-warning">CEO Pay Increase</h6>
                  <p className="fs-5">XXX%</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-dark border-warning">
                <div className="card-body text-center">
                  <h6 className="text-warning">Avg Worker Pay</h6>
                  <p className="fs-5">X.X%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ContentSection = () => (
    <div className="container py-5">
      <h2 className="display-4 text-center mb-5 text-warning">
        Content Hub 🟠
      </h2>
      <div className="row g-4">
        <div className="col-lg-8">
          <div className="card bg-dark border-warning">
            <div className="card-body">
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
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card bg-dark border-warning">
            <div className="card-body">
              <h5 className="card-title text-warning">Content Management</h5>
              <p><small>Admin access for 3-4 team members</small></p>
              <div className="d-grid gap-2">
                <button className="btn btn-outline-warning">Upload Video</button>
                <button className="btn btn-outline-warning">Manage Content</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ChatSection = () => (
    <div className="container py-5">
      <h2 className="display-4 text-center mb-5 text-warning">
        Community Chat 🟠
      </h2>
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="card bg-dark border-warning">
            <div className="card-header bg-warning text-dark">
              <h5 className="mb-0">Live Community Discussion</h5>
            </div>
            <div className="card-body" style={{ height: '400px', overflowY: 'auto' }}>
              {chatMessages.length === 0 ? (
                <p className="text-muted text-center">No messages yet. Start the conversation!</p>
              ) : (
                chatMessages.map(msg => (
                  <div key={msg.id} className="mb-2">
                    <strong className="text-warning">{msg.user}:</strong> {msg.text}
                  </div>
                ))
              )}
            </div>
            <div className="card-footer">
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control bg-secondary border-warning text-white"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addChatMessage()}
                />
                <button className="btn btn-warning" onClick={addChatMessage}>Send</button>
              </div>
              <small className="text-muted">Optional: Sign in for persistent identity</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const GameSection = () => (
    <div className="container py-5">
      <h2 className="display-4 text-center mb-5 text-warning">
        Salary Game 🟠
      </h2>
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="card bg-dark border-warning">
            <div className="card-body text-center">
              <h5 className="card-title text-warning mb-4">Coming Soon!</h5>
              <div className="bg-secondary rounded p-5">
                <p className="fs-4 mb-4">🎮</p>
                <p>Interactive Salary Coin game will be available here</p>
                <p className="text-muted">Simple, fun gameplay involving Salary Coins</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const SocialsSection = () => (
    <div className="container py-5">
      <h2 className="display-4 text-center mb-5 text-warning">
        Join Our Community 🟠
      </h2>
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card bg-dark border-warning h-100">
            <div className="card-body text-center">
              <h5 className="text-warning">X Account</h5>
              <p>Follow for updates</p>
              <button className="btn btn-outline-warning">Follow</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card bg-dark border-warning h-100">
            <div className="card-body text-center">
              <h5 className="text-warning">X Community</h5>
              <p>Join discussions</p>
              <button className="btn btn-outline-warning">Join</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card bg-dark border-warning h-100">
            <div className="card-body text-center">
              <h5 className="text-warning">Discord</h5>
              <p>Real-time chat</p>
              <button className="btn btn-outline-warning">Join Server</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card bg-dark border-warning h-100">
            <div className="card-body text-center">
              <h5 className="text-warning">Telegram</h5>
              <p>Mobile community</p>
              <button className="btn btn-outline-warning">Join Channel</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card bg-dark border-warning h-100">
            <div className="card-body text-center">
              <h5 className="text-warning">Reddit Sub</h5>
              <p>Community discussions</p>
              <button className="btn btn-outline-warning">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card bg-dark border-warning h-100">
            <div className="card-body text-center">
              <h5 className="text-warning">Reddit Artwork</h5>
              <p>Community art</p>
              <button className="btn btn-outline-warning">View Art</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="bg-dark border-top border-warning py-4 mt-5">
      <div className="container text-center">
        <p className="mb-2">Give yourself a raise 🟠</p>
        <p className="text-muted small mb-0">
          Contract: D7Z2fUrxECBh91chmnou8u7E9Yaq7inzzcjg9G1Apump
        </p>
      </div>
    </footer>
  );

  const renderSection = () => {
    switch(activeSection) {
      case 'home': return <HomeSection />;
      case 'about': return <AboutSection />;
      case 'buy': return <BuySection />;
      case 'stats': return <StatsSection />;
      case 'bullish': return <BullishSection />;
      case 'calculator': return <CalculatorSection />;
      case 'content': return <ContentSection />;
      case 'chat': return <ChatSection />;
      case 'game': return <GameSection />;
      case 'socials': return <SocialsSection />;
      default: return <HomeSection />;
    }
  };

  return (
    <div className="min-vh-100 bg-dark text-white">
      <Navigation />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            {renderSection()}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SalaryCoinApp;

