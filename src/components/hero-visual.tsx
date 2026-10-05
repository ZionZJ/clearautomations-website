const lanes = [
  {
    label: "MISSED CALL",
    detail: "After-hours lead",
    tone: "#EF6A6A",
    steps: [
      { eyebrow: "INBOUND", lines: ["Call", "missed"] },
      { eyebrow: "RESPONSE", lines: ["Customer", "acknowledged"] },
      { eyebrow: "HANDOFF", lines: ["Human", "assigned"] },
      { eyebrow: "RECORDED", lines: ["Booking path", "+ CRM logged"] },
    ],
  },
  {
    label: "OPEN ESTIMATE",
    detail: "Follow-up due",
    tone: "#D4A843",
    steps: [
      { eyebrow: "OPPORTUNITY", lines: ["Estimate", "still open"] },
      { eyebrow: "SCHEDULED", lines: ["Follow-up", "sent"] },
      { eyebrow: "ENGAGED", lines: ["Customer", "replied"] },
      { eyebrow: "MEASURED", lines: ["Outcome", "tracked"] },
    ],
  },
] as const;

const cardX = [38, 153, 268, 383];

export function HeroVisual() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto aspect-[13/11] select-none">
      <style>{`
        @keyframes recovery-step-two {
          0%, 16%, 96%, 100% { opacity: 0.32; transform: translateY(4px); }
          22%, 92% { opacity: 1; transform: translateY(0); }
        }

        @keyframes recovery-step-three {
          0%, 34%, 96%, 100% { opacity: 0.32; transform: translateY(4px); }
          40%, 92% { opacity: 1; transform: translateY(0); }
        }

        @keyframes recovery-step-four {
          0%, 52%, 96%, 100% { opacity: 0.32; transform: translateY(4px); }
          58%, 92% { opacity: 1; transform: translateY(0); }
        }

        @keyframes recovery-link-one {
          0%, 14%, 96%, 100% { stroke-dashoffset: 26; opacity: 0.18; }
          22%, 92% { stroke-dashoffset: 0; opacity: 0.9; }
        }

        @keyframes recovery-link-two {
          0%, 32%, 96%, 100% { stroke-dashoffset: 26; opacity: 0.18; }
          40%, 92% { stroke-dashoffset: 0; opacity: 0.9; }
        }

        @keyframes recovery-link-three {
          0%, 50%, 96%, 100% { stroke-dashoffset: 26; opacity: 0.18; }
          58%, 92% { stroke-dashoffset: 0; opacity: 0.9; }
        }

        @keyframes recovery-current {
          0%, 12%, 92%, 100% { opacity: 0.45; }
          16%, 82% { opacity: 1; }
        }

        @keyframes recovery-outcome {
          0%, 56%, 96%, 100% { opacity: 0.38; transform: translateY(5px); }
          64%, 92% { opacity: 1; transform: translateY(0); }
        }

        @keyframes recovery-check {
          0%, 56%, 96%, 100% { stroke-dashoffset: 18; opacity: 0; }
          64%, 92% { stroke-dashoffset: 0; opacity: 1; }
        }

        @keyframes recovery-live {
          0%, 100% { opacity: 0.45; }
          50% { opacity: 1; }
        }

        .recovery-step,
        .recovery-link,
        .recovery-outcome,
        .recovery-check,
        .recovery-live {
          animation-duration: 8s;
          animation-iteration-count: infinite;
          animation-fill-mode: both;
          animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        }

        .recovery-step-2 { animation-name: recovery-step-two; }
        .recovery-step-3 { animation-name: recovery-step-three; }
        .recovery-step-4 { animation-name: recovery-step-four; }
        .recovery-link-1 { animation-name: recovery-link-one; }
        .recovery-link-2 { animation-name: recovery-link-two; }
        .recovery-link-3 { animation-name: recovery-link-three; }
        .recovery-current { animation: recovery-current 8s ease-in-out infinite both; }
        .recovery-outcome { animation-name: recovery-outcome; }
        .recovery-check { animation-name: recovery-check; }
        .recovery-live { animation-name: recovery-live; animation-duration: 2s; }

        @media (prefers-reduced-motion: reduce) {
          .recovery-step,
          .recovery-link,
          .recovery-current,
          .recovery-outcome,
          .recovery-check,
          .recovery-live {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            stroke-dashoffset: 0 !important;
          }
        }
      `}</style>

      <svg
        viewBox="0 0 520 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full font-sans"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="recovery-panel" x1="30" y1="18" x2="488" y2="420" gradientUnits="userSpaceOnUse">
            <stop stopColor="#111116" />
            <stop offset="1" stopColor="#08080B" />
          </linearGradient>
          <linearGradient id="recovery-gold" x1="40" y1="0" x2="480" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#9D7629" />
            <stop offset="0.55" stopColor="#D4A843" />
            <stop offset="1" stopColor="#F0D27B" />
          </linearGradient>
          <filter id="recovery-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="12" stdDeviation="18" floodColor="#000000" floodOpacity="0.45" />
          </filter>
          <filter id="recovery-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect x="8" y="8" width="504" height="424" rx="24" fill="url(#recovery-panel)" stroke="rgba(212,168,67,0.24)" filter="url(#recovery-shadow)" />
        <path d="M34 74H486" stroke="rgba(212,168,67,0.16)" />

        <g>
          <circle cx="37" cy="38" r="12" fill="rgba(212,168,67,0.1)" stroke="rgba(212,168,67,0.48)" />
          <path d="M31.5 40.5C35 46 40.5 48 45 43.5L41.5 40.5L38.5 42C36.5 41 34.8 39.3 34 37.4L35.6 34.5L32.7 31C28.8 34.4 29 36.8 31.5 40.5Z" stroke="#D4A843" strokeWidth="1.4" strokeLinejoin="round" />
          <text x="58" y="34" fill="#F5F2EB" fontSize="12" fontWeight="700" letterSpacing="0.09em">MANAGED FRONT-DESK RECOVERY</text>
          <text x="58" y="53" fill="#8F8D98" fontSize="10">Every opportunity gets an owner and a next step.</text>
        </g>

        <g transform="translate(412 29)">
          <circle cx="5" cy="6" r="4" fill="#53C77A" filter="url(#recovery-glow)" className="recovery-live" />
          <text x="17" y="10" fill="#B7B4BE" fontSize="9" fontWeight="700" letterSpacing="0.12em">WORKFLOW</text>
        </g>

        {lanes.map((lane, laneIndex) => {
          const headingY = laneIndex === 0 ? 96 : 232;
          const cardY = laneIndex === 0 ? 110 : 246;
          const connectorY = cardY + 35;

          return (
            <g key={lane.label}>
              <circle cx="39" cy={headingY - 4} r="3.5" fill={lane.tone} />
              <text x="50" y={headingY} fill="#F5F2EB" fontSize="10" fontWeight="700" letterSpacing="0.11em">
                {lane.label}
              </text>
              <text x="166" y={headingY} fill="#777580" fontSize="9">
                {lane.detail}
              </text>

              {lane.steps.slice(0, -1).map((_, stepIndex) => (
                <g key={`${lane.label}-link-${stepIndex}`}>
                  <line
                    x1={cardX[stepIndex] + 90}
                    y1={connectorY}
                    x2={cardX[stepIndex + 1]}
                    y2={connectorY}
                    stroke="rgba(212,168,67,0.18)"
                    strokeWidth="1.5"
                  />
                  <line
                    x1={cardX[stepIndex] + 90}
                    y1={connectorY}
                    x2={cardX[stepIndex + 1]}
                    y2={connectorY}
                    stroke="url(#recovery-gold)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="26"
                    strokeDashoffset="26"
                    className={`recovery-link recovery-link-${stepIndex + 1}`}
                  />
                  <path
                    d={`M${cardX[stepIndex + 1] - 5} ${connectorY - 3}L${cardX[stepIndex + 1]} ${connectorY}L${cardX[stepIndex + 1] - 5} ${connectorY + 3}`}
                    stroke="rgba(212,168,67,0.6)"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              ))}

              {lane.steps.map((step, stepIndex) => {
                const isFirst = stepIndex === 0;
                const isLast = stepIndex === lane.steps.length - 1;
                const dotColor = isFirst ? lane.tone : isLast ? "#53C77A" : "#D4A843";
                const animationClass = isFirst ? "recovery-current" : `recovery-step recovery-step-${stepIndex + 1}`;

                return (
                  <g key={`${lane.label}-${step.eyebrow}`} className={animationClass}>
                    <rect
                      x={cardX[stepIndex]}
                      y={cardY}
                      width="90"
                      height="70"
                      rx="10"
                      fill={isLast ? "rgba(83,199,122,0.06)" : "rgba(255,255,255,0.025)"}
                      stroke={isLast ? "rgba(83,199,122,0.45)" : "rgba(212,168,67,0.22)"}
                    />
                    <circle cx={cardX[stepIndex] + 13} cy={cardY + 16} r="3" fill={dotColor} />
                    <text
                      x={cardX[stepIndex] + 22}
                      y={cardY + 19}
                      fill={isLast ? "#76D996" : "#AAA7B1"}
                      fontSize="7.5"
                      fontWeight="700"
                      letterSpacing="0.08em"
                    >
                      {step.eyebrow}
                    </text>
                    <text x={cardX[stepIndex] + 12} y={cardY + 42} fill="#F5F2EB" fontSize="10.5" fontWeight="650">
                      <tspan x={cardX[stepIndex] + 12}>{step.lines[0]}</tspan>
                      <tspan x={cardX[stepIndex] + 12} dy="14">{step.lines[1]}</tspan>
                    </text>
                    {isLast && (
                      <path
                        d={`M${cardX[stepIndex] + 70} ${cardY + 16}l3 3 6-7`}
                        stroke="#76D996"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray="18"
                        strokeDashoffset="18"
                        className="recovery-check"
                      />
                    )}
                  </g>
                );
              })}

              {laneIndex === 0 && <path d="M28 206H492" stroke="rgba(255,255,255,0.06)" />}
            </g>
          );
        })}

        <g className="recovery-outcome">
          <rect x="28" y="338" width="464" height="70" rx="14" fill="rgba(212,168,67,0.055)" stroke="rgba(212,168,67,0.28)" />
          <circle cx="51" cy="362" r="10" fill="rgba(83,199,122,0.1)" stroke="rgba(83,199,122,0.5)" />
          <path d="M46.5 362l3 3 6-7" stroke="#76D996" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <text x="70" y="358" fill="#F5F2EB" fontSize="10" fontWeight="700" letterSpacing="0.08em">VISIBLE OUTCOME</text>
          <text x="70" y="376" fill="#A5A2AC" fontSize="10">Human ownership, system updates, and reporting stay connected.</text>

          <g transform="translate(70 387)">
            <rect width="92" height="12" rx="6" fill="rgba(255,255,255,0.035)" />
            <text x="46" y="8.5" textAnchor="middle" fill="#777580" fontSize="6.5" fontWeight="700" letterSpacing="0.08em">HUMAN HANDOFF</text>
          </g>
          <g transform="translate(170 387)">
            <rect width="82" height="12" rx="6" fill="rgba(255,255,255,0.035)" />
            <text x="41" y="8.5" textAnchor="middle" fill="#777580" fontSize="6.5" fontWeight="700" letterSpacing="0.08em">CRM / FSM</text>
          </g>
          <g transform="translate(260 387)">
            <rect width="111" height="12" rx="6" fill="rgba(255,255,255,0.035)" />
            <text x="55.5" y="8.5" textAnchor="middle" fill="#777580" fontSize="6.5" fontWeight="700" letterSpacing="0.08em">MEASURED REPORTING</text>
          </g>
        </g>
      </svg>
    </div>
  );
}
