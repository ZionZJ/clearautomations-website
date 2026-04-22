"use client";

/**
 * Hero animation: 5-phase narrative
 * Phase 1 (0-30%):  Chaos — chaotic manual SMB feel. Call rings, Form/SMS get notifications, Email gets "LATE" badge.
 * Phase 2 (30-40%): Break — icons absorbed by the AI core as it appears. Screen dims.
 * Phase 3 (40-55%): AI Processing — core expands, scan wave.
 * Phase 4 (55-65%): Takeover — icons shoot out to grid, lines form outward.
 * Phase 5 (65-94%): Automation Storytelling
 * Phase 6 (94-100%): Seamless loop reset (Fade to black)
 * Total cycle: 12s
 */

export function HeroVisual() {
  return (
    <div className="relative w-full max-w-[520px] mx-auto aspect-square select-none">
      <style>{`
        /* ===== CHAOS ICONS ===== */
        @keyframes icon-phone {
          0%, 30% { opacity: 0.8; }
          0%, 10%, 20%, 30% { transform: translate(45px, 55px) rotate(0deg); }
          2%, 12%, 22% { transform: translate(43px, 55px) rotate(-15deg); }
          4%, 14%, 24% { transform: translate(47px, 55px) rotate(15deg); }
          6%, 16%, 26% { transform: translate(43px, 55px) rotate(-15deg); }
          8%, 18%, 28% { transform: translate(47px, 55px) rotate(15deg); }
          
          40%, 55% { transform: translate(200px, 200px) rotate(0deg) scale(0.2); opacity: 0; }
          65%, 94% { transform: translate(200px, 70px) rotate(0deg) scale(1); opacity: 1; }
          98%, 100% { transform: translate(200px, 70px) rotate(0deg) scale(1); opacity: 0; }
        }
        @keyframes icon-msg {
          0%, 30% { opacity: 0.7; }
          0%, 10%, 20%, 30% { transform: translate(310px, 90px); }
          5%, 15%, 25% { transform: translate(310px, 75px); }
          
          40%, 55% { transform: translate(200px, 200px) rotate(0deg) scale(0.2); opacity: 0; }
          65%, 94% { transform: translate(324px, 150px) rotate(0deg) scale(1); opacity: 1; }
          98%, 100% { transform: translate(324px, 150px) rotate(0deg) scale(1); opacity: 0; }
        }
        @keyframes icon-email {
          0% { transform: translate(280px, 290px); opacity: 0.5; }
          30% { transform: translate(280px, 260px); opacity: 0.8; }
          
          40%, 55% { transform: translate(200px, 200px) rotate(0deg) scale(0.2); opacity: 0; }
          65%, 94% { transform: translate(277px, 307px) rotate(0deg) scale(1); opacity: 1; }
          98%, 100% { transform: translate(277px, 307px) rotate(0deg) scale(1); opacity: 0; }
        }
        @keyframes icon-crm {
          0%, 30% { transform: translate(80px, 280px); opacity: 0.2; }
          
          40%, 55% { transform: translate(200px, 200px) rotate(0deg) scale(0.2); opacity: 0; }
          65%, 94% { transform: translate(123px, 307px) rotate(0deg) scale(1); opacity: 1; }
          98%, 100% { transform: translate(123px, 307px) rotate(0deg) scale(1); opacity: 0; }
        }
        @keyframes icon-sms {
          0%, 30% { opacity: 0.7; }
          0%, 15%, 30% { transform: translate(60px, 120px) rotate(-5deg); }
          7.5%, 22.5% { transform: translate(65px, 120px) rotate(5deg); }
          
          40%, 55% { transform: translate(200px, 200px) rotate(0deg) scale(0.2); opacity: 0; }
          65%, 94% { transform: translate(76px, 150px) rotate(0deg) scale(1); opacity: 1; }
          98%, 100% { transform: translate(76px, 150px) rotate(0deg) scale(1); opacity: 0; }
        }

        /* ===== CHAOS NOTIFICATIONS ===== */
        @keyframes badge-blink {
          0%, 2% { opacity: 0; transform: scale(0); }
          4%, 12% { opacity: 1; transform: scale(1); }
          14%, 18% { opacity: 0; transform: scale(0); }
          20%, 28% { opacity: 1; transform: scale(1); }
          30%, 100% { opacity: 0; transform: scale(0); }
        }
        @keyframes missed-blink {
          0%, 5% { opacity: 0; }
          6%, 10% { opacity: 1; }
          11%, 15% { opacity: 0; }
          16%, 20% { opacity: 1; }
          21%, 25% { opacity: 0; }
          26%, 30% { opacity: 1; }
          31%, 100% { opacity: 0; }
        }
        @keyframes late-blink {
          0%, 10% { opacity: 0; }
          15%, 25% { opacity: 1; }
          30%, 100% { opacity: 0; }
        }

        /* ===== AI CORE ===== */
        @keyframes ai-core {
          0%, 38% { opacity: 0; transform: scale(0); }
          42% { opacity: 1; transform: scale(1.15); }
          45%, 94% { opacity: 1; transform: scale(1); }
          98%, 100% { opacity: 0; transform: scale(0); }
        }
        @keyframes scan-wave {
          0%, 42% { r: 36; opacity: 0; }
          44% { r: 36; opacity: 0.5; }
          52%, 100% { r: 180; opacity: 0; }
        }
        @keyframes core-process-glow {
          0%, 68% { filter: url(#glow); }
          69%, 71% { filter: brightness(1.8) url(#glow); }
          72%, 83% { filter: url(#glow); }
          84%, 86% { filter: brightness(1.8) url(#glow); }
          87%, 100% { filter: url(#glow); }
        }

        /* ===== CORE FLASH (LEAD CAPTURED) ===== */
        @keyframes core-green-overlay {
          0%, 73% { opacity: 0; }
          74% { opacity: 1; }
          78% { opacity: 0; }
          
          79%, 88% { opacity: 0; }
          89% { opacity: 1; }
          93% { opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes lead-captured-text {
          0%, 73% { opacity: 0; transform: translate(200px, 150px); }
          74% { opacity: 1; transform: translate(200px, 145px); }
          78% { opacity: 0; transform: translate(200px, 140px); }
          
          79%, 88% { opacity: 0; transform: translate(200px, 150px); }
          89% { opacity: 1; transform: translate(200px, 145px); }
          93% { opacity: 0; transform: translate(200px, 140px); }
          
          100% { opacity: 0; transform: translate(200px, 150px); }
        }

        /* ===== CONNECTION LINES ===== */
        @keyframes line-draw {
          0%, 55% { stroke-dashoffset: 150; opacity: 0; }
          58% { opacity: 0.3; }
          65%, 94% { stroke-dashoffset: 0; opacity: 0.4; }
          98%, 100% { stroke-dashoffset: 150; opacity: 0; }
        }

        /* ===== FLOW DOTS (AUTOMATION STORYTELLING) ===== */
        /* Cycle 1: Form -> Core */
        @keyframes flow-form {
          0%, 65% { opacity: 0; }
          65.1% { offset-distance: 100%; opacity: 0.8; fill: #D4A843; }
          69% { offset-distance: 0%; opacity: 0.8; fill: #D4A843; }
          69.1%, 100% { opacity: 0; }
        }
        /* Cycle 1: Core -> CRM & SMS */
        @keyframes flow-crm-1 {
          0%, 69% { opacity: 0; }
          69.1% { offset-distance: 0%; opacity: 0.8; fill: #22C55E; }
          73% { offset-distance: 100%; opacity: 0.8; fill: #22C55E; }
          73.1%, 100% { opacity: 0; }
        }
        @keyframes flow-sms {
          0%, 69% { opacity: 0; }
          69.1% { offset-distance: 0%; opacity: 0.8; fill: #22C55E; }
          73% { offset-distance: 100%; opacity: 0.8; fill: #22C55E; }
          73.1%, 100% { opacity: 0; }
        }

        /* Cycle 2: Phone -> Core */
        @keyframes flow-phone {
          0%, 80% { opacity: 0; }
          80.1% { offset-distance: 100%; opacity: 0.8; fill: #D4A843; }
          84% { offset-distance: 0%; opacity: 0.8; fill: #D4A843; }
          84.1%, 100% { opacity: 0; }
        }
        /* Cycle 2: Core -> CRM & Email */
        @keyframes flow-crm-2 {
          0%, 84% { opacity: 0; }
          84.1% { offset-distance: 0%; opacity: 0.8; fill: #22C55E; }
          88% { offset-distance: 100%; opacity: 0.8; fill: #22C55E; }
          88.1%, 100% { opacity: 0; }
        }
        @keyframes flow-email {
          0%, 84% { opacity: 0; }
          84.1% { offset-distance: 0%; opacity: 0.8; fill: #22C55E; }
          88% { offset-distance: 100%; opacity: 0.8; fill: #22C55E; }
          88.1%, 100% { opacity: 0; }
        }

        /* ===== NODE PULSES (SYNERGIZED WITH DATA) ===== */
        @keyframes pulse-form {
          0%, 64% { r: 24; opacity: 0; stroke: #D4A843; }
          65% { r: 24; opacity: 0.5; stroke: #D4A843; }
          69% { r: 36; opacity: 0; stroke: #D4A843; }
          100% { opacity: 0; stroke: #D4A843; }
        }
        @keyframes pulse-phone {
          0%, 79% { r: 24; opacity: 0; stroke: #D4A843; }
          80% { r: 24; opacity: 0.5; stroke: #D4A843; }
          84% { r: 36; opacity: 0; stroke: #D4A843; }
          100% { opacity: 0; stroke: #D4A843; }
        }
        @keyframes pulse-crm {
          0%, 72% { r: 24; opacity: 0; stroke: #D4A843; }
          73% { r: 24; opacity: 0.5; stroke: #22C55E; }
          77% { r: 36; opacity: 0; stroke: #22C55E; }
          78%, 87% { opacity: 0; }
          88% { r: 24; opacity: 0.5; stroke: #22C55E; }
          92% { r: 36; opacity: 0; stroke: #22C55E; }
          100% { opacity: 0; }
        }
        @keyframes pulse-sms {
          0%, 72% { r: 24; opacity: 0; stroke: #D4A843; }
          73% { r: 24; opacity: 0.5; stroke: #22C55E; }
          77% { r: 36; opacity: 0; stroke: #22C55E; }
          100% { opacity: 0; }
        }
        @keyframes pulse-email {
          0%, 87% { r: 24; opacity: 0; stroke: #D4A843; }
          88% { r: 24; opacity: 0.5; stroke: #22C55E; }
          92% { r: 36; opacity: 0; stroke: #22C55E; }
          100% { opacity: 0; }
        }

        /* ===== ORBITAL RING ===== */
        @keyframes orbit-appear {
          0%, 60% { opacity: 0; }
          68%, 94% { opacity: 1; }
          98%, 100% { opacity: 0; }
        }

        /* ===== SEAMLESS LOOP RESET SCREEN OVERLAY ===== */
        @keyframes screen-overlay {
          0%, 4% { opacity: 1; }     /* Loop reset fade-in */
          5%, 34% { opacity: 0; }
          36% { opacity: 0.6; }      /* Cinematic dim before Break */
          38%, 94% { opacity: 0; }
          98%, 100% { opacity: 1; }  /* Loop reset fade-out to black */
        }

        .hero-anim { animation-duration: 12s; animation-timing-function: cubic-bezier(0.16,1,0.3,1); animation-iteration-count: infinite; animation-fill-mode: both; }
        .hero-anim-linear { animation-duration: 12s; animation-timing-function: linear; animation-iteration-count: infinite; animation-fill-mode: both; }
      `}</style>

      <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full font-sans">
        <defs>
          <filter id="glow"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <filter id="glowSm"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>

        {/* =======================================================
            LAYER 1: CONNECTION LINES
            (Drawn first so they are hidden behind the AI Core)
        ======================================================= */}
        {[
          { x: 200, y: 70 },
          { x: 324, y: 150 },
          { x: 277, y: 307 },
          { x: 123, y: 307 },
          { x: 76, y: 150 },
        ].map((n, i) => (
          <line key={i} x1="200" y1="200" x2={n.x} y2={n.y}
            stroke="#D4A843" strokeWidth="1"
            strokeDasharray="150" strokeDashoffset="150"
            className="hero-anim" style={{ animationName: "line-draw", animationDelay: `${i * 0.1}s` }}
          />
        ))}

        {/* =======================================================
            LAYER 2: FLOW DOTS (AUTOMATION STORYTELLING)
        ======================================================= */}
        <circle r="3" filter="url(#glowSm)" className="hero-anim-linear" style={{ animationName: "flow-form", offsetPath: 'path("M200,200 L76,150")' }} />
        <circle r="3" filter="url(#glowSm)" className="hero-anim-linear" style={{ animationName: "flow-crm-1", offsetPath: 'path("M200,200 L123,307")' }} />
        <circle r="3" filter="url(#glowSm)" className="hero-anim-linear" style={{ animationName: "flow-sms", offsetPath: 'path("M200,200 L324,150")' }} />

        <circle r="3" filter="url(#glowSm)" className="hero-anim-linear" style={{ animationName: "flow-phone", offsetPath: 'path("M200,200 L200,70")' }} />
        <circle r="3" filter="url(#glowSm)" className="hero-anim-linear" style={{ animationName: "flow-crm-2", offsetPath: 'path("M200,200 L123,307")' }} />
        <circle r="3" filter="url(#glowSm)" className="hero-anim-linear" style={{ animationName: "flow-email", offsetPath: 'path("M200,200 L277,307")' }} />

        {/* =======================================================
            LAYER 3: AI CORE & CAPTURED LEAD EFFECT
        ======================================================= */}
        <g className="hero-anim" style={{ animationName: "ai-core", transformOrigin: "200px 200px" }}>
          {/* Solid background mask to hide lines inside the core */}
          <circle cx="200" cy="200" r="36" fill="#060608" />
          
          <circle cx="200" cy="200" r="36" fill="rgba(212,168,67,0.1)" stroke="#D4A843" strokeWidth="1.5" className="hero-anim" style={{ animationName: "core-process-glow" }} />
          <circle cx="200" cy="200" r="36" fill="rgba(34,197,94,0.2)" stroke="#22C55E" strokeWidth="2" filter="url(#glow)" className="hero-anim" style={{ animationName: "core-green-overlay" }} />
          
          <text x="200" y="197" textAnchor="middle" fill="#D4A843" fontSize="13" fontWeight="700" fontFamily="inherit" letterSpacing="0.15em">AI</text>
          <text x="200" y="197" textAnchor="middle" fill="#22C55E" fontSize="13" fontWeight="700" fontFamily="inherit" letterSpacing="0.15em" className="hero-anim" style={{ animationName: "core-green-overlay" }}>AI</text>
          <text x="200" y="212" textAnchor="middle" fill="rgba(212,168,67,0.5)" fontSize="8" fontFamily="inherit" letterSpacing="0.08em">CORE</text>
        </g>
        
        <text x="0" y="0" textAnchor="middle" fill="#22C55E" fontSize="9" fontWeight="bold" fontFamily="inherit" letterSpacing="0.05em" filter="url(#glowSm)" className="hero-anim" style={{ animationName: "lead-captured-text" }}>+ NEW LEAD</text>

        {/* =======================================================
            LAYER 4: RINGS & WAVES
        ======================================================= */}
        <circle cx="200" cy="200" fill="none" stroke="#D4A843" strokeWidth="1" className="hero-anim-linear" style={{ animationName: "scan-wave" }} />

        <circle cx="200" cy="70" fill="none" strokeWidth="1" className="hero-anim-linear" style={{ animationName: "pulse-phone" }} />
        <circle cx="324" cy="150" fill="none" strokeWidth="1" className="hero-anim-linear" style={{ animationName: "pulse-sms" }} />
        <circle cx="277" cy="307" fill="none" strokeWidth="1" className="hero-anim-linear" style={{ animationName: "pulse-email" }} />
        <circle cx="123" cy="307" fill="none" strokeWidth="1" className="hero-anim-linear" style={{ animationName: "pulse-crm" }} />
        <circle cx="76" cy="150" fill="none" strokeWidth="1" className="hero-anim-linear" style={{ animationName: "pulse-form" }} />

        <circle cx="200" cy="200" r="130" stroke="rgba(212,168,67,0.08)" strokeWidth="1" className="hero-anim" style={{ animationName: "orbit-appear" }} />
        <circle cx="200" cy="200" r="130" stroke="rgba(212,168,67,0.05)" strokeWidth="1" strokeDasharray="4 8" className="hero-anim animate-[spin_60s_linear_infinite]" style={{ animationName: "orbit-appear", transformOrigin: "200px 200px" }} />

        {/* =======================================================
            LAYER 5: THE CHAOTIC ICONS
        ======================================================= */}
        <g className="hero-anim" style={{ animationName: "icon-phone" }}>
          <circle r="22" fill="rgba(212,168,67,0.06)" stroke="rgba(212,168,67,0.2)" strokeWidth="1" />
          <path d="M-6,-7 L-3,-7 L-3,7 L-6,7 Z M3,-7 L6,-7 L6,7 L3,7 Z M-3,-4 L3,-4 L3,4 L-3,4 Z" fill="none" stroke="rgba(212,168,67,0.5)" strokeWidth="0.8" />
          <text y="15" textAnchor="middle" fill="#8A8A9A" fontSize="8" fontFamily="inherit">Call</text>
          <g className="hero-anim" style={{ animationName: "missed-blink" }}>
            <text x="18" y="-12" textAnchor="middle" fill="#EF4444" fontSize="7" fontWeight="bold" fontFamily="inherit" filter="url(#glowSm)">MISSED</text>
          </g>
        </g>

        <g className="hero-anim" style={{ animationName: "icon-msg" }}>
          <circle r="22" fill="rgba(212,168,67,0.06)" stroke="rgba(212,168,67,0.2)" strokeWidth="1" />
          <path d="M-7,-5 L7,-5 L7,3 L2,3 L0,6 L-2,3 L-7,3 Z" fill="none" stroke="rgba(212,168,67,0.5)" strokeWidth="0.8" />
          <text y="15" textAnchor="middle" fill="#8A8A9A" fontSize="8" fontFamily="inherit">SMS</text>
          <g className="hero-anim" style={{ animationName: "badge-blink", transformOrigin: "12px -12px" }}>
            <circle cx="12" cy="-12" r="7" fill="#DC2626" />
            <text x="12" y="-9.5" textAnchor="middle" fill="#fff" fontSize="6" fontWeight="bold" fontFamily="inherit">3</text>
          </g>
        </g>

        <g className="hero-anim" style={{ animationName: "icon-sms" }}>
          <circle r="22" fill="rgba(212,168,67,0.06)" stroke="rgba(212,168,67,0.2)" strokeWidth="1" />
          <path d="M-5,-6 L5,-6 L5,6 L-5,6 Z M-3,-3 L3,-3 M-3,0 L3,0 M-3,3 L1,3" fill="none" stroke="rgba(212,168,67,0.5)" strokeWidth="0.8" />
          <text y="15" textAnchor="middle" fill="#8A8A9A" fontSize="8" fontFamily="inherit">Form</text>
          <g className="hero-anim" style={{ animationName: "badge-blink", transformOrigin: "12px -12px" }}>
            <circle cx="12" cy="-12" r="7" fill="#DC2626" />
            <text x="12" y="-9.5" textAnchor="middle" fill="#fff" fontSize="6" fontWeight="bold" fontFamily="inherit">!</text>
          </g>
        </g>

        <g className="hero-anim" style={{ animationName: "icon-email" }}>
          <circle r="22" fill="rgba(212,168,67,0.06)" stroke="rgba(212,168,67,0.2)" strokeWidth="1" />
          <path d="M-7,-4 L7,-4 L7,5 L-7,5 Z M-7,-4 L0,1 L7,-4" fill="none" stroke="rgba(212,168,67,0.5)" strokeWidth="0.8" />
          <text y="15" textAnchor="middle" fill="#8A8A9A" fontSize="8" fontFamily="inherit">Email</text>
          {/* Late Badge */}
          <g className="hero-anim" style={{ animationName: "late-blink" }}>
            <rect x="6" y="-18" width="22" height="10" rx="3" fill="rgba(212,168,67,0.15)" stroke="rgba(212,168,67,0.5)" strokeWidth="0.5" />
            <text x="17" y="-10.5" textAnchor="middle" fill="#D4A843" fontSize="5" fontWeight="bold" fontFamily="inherit">LATE</text>
          </g>
        </g>

        <g className="hero-anim" style={{ animationName: "icon-crm" }}>
          <circle r="22" fill="rgba(212,168,67,0.06)" stroke="rgba(212,168,67,0.2)" strokeWidth="1" />
          <path d="M-6,5 L-6,-1 M-2,5 L-2,-4 M2,5 L2,-6 M6,5 L6,-2" fill="none" stroke="rgba(212,168,67,0.5)" strokeWidth="1.2" strokeLinecap="round" />
          <text y="15" textAnchor="middle" fill="#8A8A9A" fontSize="8" fontFamily="inherit">CRM</text>
        </g>

        {/* =======================================================
            LAYER 6: LOOP RESET OVERLAY 
            (Renders absolutely last to cover everything)
        ======================================================= */}
        <rect x="0" y="0" width="400" height="400" fill="#060608" className="hero-anim" style={{ animationName: "screen-overlay", pointerEvents: "none" }} />
      </svg>
    </div>
  );
}
