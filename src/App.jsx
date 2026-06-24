import React, { useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";

const gradientOptions = [
  "from-cyan-500 via-blue-600 to-indigo-900",
  "from-blue-500 via-indigo-700 to-purple-900",
  "from-violet-500 via-fuchsia-700 to-black",
  "from-emerald-400 via-teal-600 to-cyan-900",
  "from-orange-500 via-red-600 to-pink-800",
  "from-pink-500 via-rose-600 to-red-900",
  "from-yellow-400 via-orange-500 to-red-700",
  "from-sky-400 via-cyan-500 to-blue-800",
  "from-lime-400 via-green-600 to-emerald-900",
  "from-slate-700 via-zinc-900 to-black",
  "from-indigo-500 via-purple-700 to-fuchsia-900",
  "from-teal-400 via-cyan-600 to-slate-900",
  "from-rose-500 via-fuchsia-700 to-indigo-900",
  "from-red-500 via-orange-600 to-yellow-700",
  "from-purple-500 via-violet-700 to-indigo-950",
  "from-neutral-700 via-zinc-900 to-black",
  "from-amber-300 via-orange-500 to-red-800",
  "from-cyan-300 via-sky-500 to-blue-900",
  "from-fuchsia-500 via-pink-700 to-rose-900",
  "from-green-400 via-emerald-600 to-teal-900",
  "from-blue-400 via-cyan-500 to-slate-950",
  "from-indigo-400 via-blue-600 to-cyan-900",
  "from-purple-600 via-pink-700 to-black",
  "from-zinc-700 via-neutral-900 to-black",
  "from-slate-600 via-blue-800 to-black",
  "from-cyan-500 via-teal-600 to-black",
  "from-red-500 via-rose-700 to-black",
  "from-emerald-500 via-green-700 to-black",
  "from-orange-400 via-amber-600 to-black",
  "from-fuchsia-400 via-purple-700 to-black",
  "from-red-900 via-red-950 to-black",
  "from-rose-900 via-red-900 to-black",
  "from-pink-900 via-rose-950 to-black",
  "from-[#5b0000] via-[#2a0000] to-black",
  "from-blue-900 via-indigo-950 to-black",
  "from-sky-900 via-blue-950 to-black",
  "from-[#001f3f] via-[#001122] to-black",
  "from-[#0a2540] via-[#061421] to-black",
  "from-black via-zinc-900 to-black",
  "from-neutral-950 via-black to-zinc-950",
  "from-slate-950 via-black to-slate-900",
  "from-[#111111] via-[#000000] to-[#1a1a1a]",
  "from-white via-gray-300 to-slate-500",
  "from-gray-100 via-zinc-300 to-gray-600",
  "from-slate-200 via-gray-400 to-slate-700",
  "from-[#f8fafc] via-[#cbd5e1] to-[#334155]",
  "from-green-900 via-emerald-950 to-black",
  "from-teal-900 via-green-950 to-black",
  "from-[#002b1f] via-[#00150f] to-black",
  "from-purple-900 via-violet-950 to-black",
  "from-fuchsia-900 via-purple-950 to-black",
  "from-[#2a003f] via-[#14001f] to-black",
  "from-orange-900 via-amber-950 to-black",
  "from-yellow-700 via-orange-900 to-black",
  "from-[#5c2e00] via-[#2b1400] to-black",
  "from-[#0f172a] via-[#1e293b] to-black",
  "from-[#111827] via-[#1f2937] to-black",
  "from-[#1e1b4b] via-[#312e81] to-black",
  "from-[#450a0a] via-[#7f1d1d] to-black",
];

const solidColorOptions = [
  "#ff0000",
  "#00ff00",
  "#0000ff",
  "#ffff00",
  "#ffffff",
  "#000000",
  "#ffa500",
  "#800080",
  "#00ff7f",
  "#ff1493",
  "#1e90ff",
  "#ffd700",
  "#008080",
];

const colorNameMap = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  yellow: "#ffff00",
  cyan: "#00ffff",
  magenta: "#ff00ff",
  white: "#ffffff",
  black: "#000000",
  orange: "#ffa500",
  purple: "#800080",
  lime: "#00ff00",
  pink: "#ff1493",
  teal: "#008080",
  gold: "#ffd700",
};

const GlassCard = ({ children, className = "", gradient, onClick }) => {
  const isSolid = gradient && (gradient.startsWith('#') || /^[a-zA-Z]+$/.test(gradient));

  return (
    <div
      style={isSolid ? { backgroundColor: gradient } : {}}
      className={`
        
     
  group relative overflow-hidden rounded-[28px]

         border border-white/15
         bg-white/5
         ${isSolid ? '' : `bg-gradient-to-br ${gradient}`}
         backdrop-blur-3xl
         shadow-[0_25px_70px_rgba(0,0,0,0.18)]
         transition-all duration-500
         transform-gpu
         hover:-translate-y-2
         hover:shadow-[0_35px_100px_rgba(0,0,0,0.25)]
        
         before:absolute
         before:inset-0
         before:bg-[linear-gradient(130deg,rgba(255,255,255,0.12),transparent_40%)]
         before:pointer-events-none

         ${className}
      `}
    >
      {/* High-end metallic laser sweep moving from left to right */}
      <div className="laser-sweep-top" style={{ animationDelay: `${Math.random() * 4}s` }} />

      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.35),transparent)] animate-[shimmer_5s_linear_infinite]" />

      <div className="absolute -inset-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_60%)] animate-[spin_18s_linear_infinite]" />

      <div className="absolute inset-0 rounded-[0px]  border border-white/10 animate-pulse" />

      <div className="absolute inset-x-0 top-0 h-[26%] bg-[linear-gradient(90deg,rgba(255,255,255,0.18),transparent,rgba(255,255,255,0.18))] opacity-0 pointer-events-none animate-[cardPulse_6s_ease-in-out_infinite]" />

      <div className="absolute inset-x-0 bottom-0 h-2 bg-white/10 opacity-50 blur-sm animate-[cardLight_4s_linear_infinite]" />

      {children}
    </div>
  );
};

// Theme presets
const themes = {
  cyberpunk: {
    background: "from-[#020617] via-[#071326] to-black",
    header: "from-cyan-500 via-blue-700 to-indigo-950",
    striker: "from-blue-500 via-indigo-700 to-purple-900",
    nonStriker: "from-cyan-400 via-blue-600 to-indigo-900",
    bowler: "from-orange-500 via-red-600 to-pink-900",
    event: "from-fuchsia-500 via-purple-700 to-indigo-950",
    facecam: "from-purple-600 via-fuchsia-700 to-indigo-950",
    lastOver: "from-slate-700 via-slate-900 to-black",
    live: "from-red-500 via-rose-600 to-pink-700",
  },
  golden: {
    background: "from-[#0f172a] via-[#1e293b] to-black",
    header: "from-yellow-600 via-amber-700 to-zinc-950",
    striker: "from-amber-500 via-yellow-600 to-stone-900",
    nonStriker: "from-yellow-500 via-amber-600 to-stone-900",
    bowler: "from-stone-700 via-amber-800 to-black",
    event: "from-amber-500 via-yellow-600 to-zinc-950",
    facecam: "from-yellow-700 via-amber-900 to-black",
    lastOver: "from-stone-800 via-stone-900 to-black",
    live: "from-yellow-500 via-amber-600 to-stone-950",
  },
  emerald: {
    background: "from-[#022c22] via-[#042f2e] to-black",
    header: "from-emerald-600 via-teal-700 to-zinc-950",
    striker: "from-emerald-500 via-teal-600 to-stone-900",
    nonStriker: "from-teal-400 via-emerald-600 to-stone-900",
    bowler: "from-lime-600 via-emerald-700 to-black",
    event: "from-emerald-500 via-teal-600 to-zinc-950",
    facecam: "from-emerald-700 via-teal-900 to-black",
    lastOver: "from-stone-800 via-zinc-900 to-black",
    live: "from-emerald-500 via-teal-600 to-zinc-950",
  },
  royal: {
    background: "from-[#0c0f1d] via-[#0f172a] to-black",
    header: "from-indigo-600 via-blue-700 to-slate-950",
    striker: "from-blue-600 via-indigo-700 to-slate-900",
    nonStriker: "from-cyan-500 via-blue-600 to-slate-900",
    bowler: "from-purple-600 via-indigo-700 to-black",
    event: "from-indigo-600 via-blue-700 to-slate-950",
    facecam: "from-blue-700 via-indigo-900 to-black",
    lastOver: "from-slate-800 via-slate-900 to-black",
    live: "from-cyan-500 via-blue-600 to-slate-950",
  }
};

// Inline Editable Text component
const EditableText = ({ value, onChange, className = "", placeholder = "Type here...", isShimmer = false, shimmerClass = "", align = "center" }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempVal, setTempVal] = useState(value);

  useEffect(() => {
    setTempVal(value);
  }, [value]);

  const handleBlur = () => {
    setIsEditing(false);
    onChange(tempVal);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
      onChange(tempVal);
    }
  };

  const alignClass = align === "center" ? "text-center justify-center mx-auto" : align === "right" ? "text-right justify-end ml-auto" : "text-left justify-start mr-auto";

  if (isEditing) {
    return (
      <input
        type="text"
        value={tempVal}
        onChange={(e) => setTempVal(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={`
          bg-white/15 text-white 
          border border-cyan-400/50 
          rounded-xl px-2 py-0.5
          focus:outline-none focus:ring-2 focus:ring-cyan-400/50 
          shadow-[0_0_15px_rgba(6,182,212,0.3)]
          w-full max-w-[280px]
          transition-all duration-300
          ${align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left"}
          ${className}
        `}
        style={{ color: "white" }}
        autoFocus
      />
    );
  }

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setIsEditing(true);
      }}
      className={`group/edit cursor-pointer hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.08)] border border-dashed border-transparent hover:border-white/20 px-2 py-0.5 rounded-xl transition-all duration-300 flex items-center gap-1.5 max-w-full ${alignClass}`}
    >
      <span className={`${className} ${isShimmer ? shimmerClass : ""}`}>
        {value || <span className="opacity-30 italic font-normal text-xs">{placeholder}</span>}
      </span>
      <span className="opacity-0 group-hover/edit:opacity-100 transition-opacity duration-300 text-xs text-cyan-400 font-normal shrink-0">
        ✏️
      </span>
    </div>
  );
};

export default function App() {
  const [liveTick, setLiveTick] = useState(0);
  const [tickerActive, setTickerActive] = useState(true);
  const [activeBallOverride, setActiveBallOverride] = useState(null);

  const [team1Name, setTeam1Name] = useState("");
  const [team2Name, setTeam2Name] = useState(" ");
  const [team1Score, setTeam1Score] = useState("");
  const [team2Score, setTeam2Score] = useState(" ");
  const [liveScore, setLiveScore] = useState(" ");
  const [strikerName, setStrikerName] = useState(" ");
  const [strikerRuns, setStrikerRuns] = useState("");
  const [nonStrikerName, setNonStrikerName] = useState(" ");
  const [nonStrikerRuns, setNonStrikerRuns] = useState("");
  const [bowlerName, setBowlerName] = useState("");
  const [bowlerStats, setBowlerStats] = useState("");
  const [commentatorName, setCommentatorName] = useState("VIMAL RAJ");
  const [scale, setScale] = useState(1);

  const [theme, setTheme] = useState({
    background: "from-[#020617] via-[#071326] to-black",
    header: "from-cyan-500 via-blue-700 to-indigo-950",
    striker: "from-blue-500 via-indigo-700 to-purple-900",
    nonStriker: "from-cyan-400 via-blue-600 to-indigo-900",
    bowler: "from-orange-500 via-red-600 to-pink-900",
    event: "from-fuchsia-500 via-purple-700 to-indigo-950",
    facecam: "from-purple-600 via-fuchsia-700 to-indigo-950",
    lastOver: "from-slate-700 via-slate-900 to-black",
    live: "from-red-500 via-rose-600 to-pink-700",
  });

  const [pickerTarget, setPickerTarget] = useState(null);

  useEffect(() => {
    if (!tickerActive) return;
    const timer = setInterval(() => {
      setLiveTick((p) => p + 1);
    }, 1200);

    return () => clearInterval(timer);
  }, [tickerActive]);

  useEffect(() => {
    const handleResize = () => {
      const targetWidth = 1080;
      const targetHeight = 1920;

      const scaleX = window.innerWidth / targetWidth;
      const scaleY = window.innerHeight / targetHeight;
      // Fit to screen with some margin, but don't upscale past 1
      const newScale = Math.min(scaleX, scaleY, 1) * 0.95;
      setScale(newScale);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const updateTheme = (key, value) => {
    setTheme((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const activeBallIdx = activeBallOverride !== null ? activeBallOverride : (liveTick % 6);

  const ColorPicker = ({ target }) => {
    return (
      <button
        onClick={(e) => {
          e.stopPropagation();
          setPickerTarget(pickerTarget === target ? null : target);
        }}
        className={`
          absolute top-4 right-4 z-[99]
          h-10 w-10
          rounded-full
          bg-black/50
          border border-white/20
          backdrop-blur-xl
          flex items-center justify-center
          text-lg
          transition-all duration-300
          hover:scale-110
          
          ${pickerTarget === target
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
          }
        `}
      >
        🎨
      </button>
    );
  };

  const isBgSolid = theme.background && (theme.background.startsWith('#') || /^[a-zA-Z]+$/.test(theme.background));

  // Render popup at root to prevent clipping inside small GlassCards
  const renderThemeModal = () => {
    if (!pickerTarget) return null;

    const currentColor = theme[pickerTarget] || "";
    const colorForPicker = currentColor.startsWith('#')
      ? currentColor
      : colorNameMap[currentColor]
        ? colorNameMap[currentColor]
        : currentColor.match(/#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})/)
          ? currentColor.match(/#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})/)[0]
          : "#00ffff";

    return (
      <div
        className="absolute inset-0 z-[9999999] bg-black/60 backdrop-blur-sm flex items-center justify-center"
        onClick={() => setPickerTarget(null)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="
            w-[400px] h-[600px]
            p-6
            rounded-3xl
            border border-white/20
            bg-black/95
            backdrop-blur-3xl
            shadow-[0_0_60px_rgba(0,255,255,0.2)]
            flex flex-col
          "
        >
          <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
            <h3 className="text-lg font-black text-white tracking-widest">THEME EDITOR</h3>
            <button
              onClick={() => setPickerTarget(null)}
              className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors font-bold text-sm"
            >
              CLOSE
            </button>
          </div>

          <div className="flex-1 overflow-y-scroll pr-2 scrollbar-hide">
            <div className="mb-8 flex justify-center custom-picker">
              <HexColorPicker
                color={colorForPicker}
                onChange={(color) => updateTheme(pickerTarget, color)}
              />
            </div>

            <h4 className="text-xs font-bold text-white/50 mb-4 tracking-widest uppercase">Or pick a solid color</h4>

            <div className="grid grid-cols-5 gap-3 mb-4">
              {solidColorOptions.map((color, i) => (
                <button
                  key={`color-${i}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    updateTheme(pickerTarget, color);
                  }}
                  className={
                    `h-12 rounded-xl border border-white/10 transition-all duration-200`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            <h4 className="text-xs font-bold text-white/50 mb-4 tracking-widest uppercase">Or pick a preset gradient</h4>

            <div className="grid grid-cols-4 gap-3">
              {gradientOptions.map((g, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    updateTheme(pickerTarget, g);
                  }}
                  className={`
                    h-12 rounded-xl
                    bg-gradient-to-br ${g}
                    border border-white/10
                    hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]
                    transition-all duration-200
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };



  return (
    <>
      <style>{`
            *{
               box-sizing:border-box;
            }

            body{
               margin:0;
               overflow:hidden;
               font-family:Inter,sans-serif;
            }

            @keyframes shimmer{
               0%{transform:translateX(-100%);}
               100%{transform:translateX(200%);}
            }

            @keyframes float{
               0%,100%{transform:translateY(0px);}
               50%{transform:translateY(-10px);}
            }

            @keyframes radar{
               from{transform:rotate(0deg);}
               to{transform:rotate(360deg);}
            }

            @keyframes cardFloat {
               0%,100% { transform: translateY(0px); }
               50% { transform: translateY(-8px); }
            }

            @keyframes cardPulse {
               0%,100% { opacity: 0.08; }
               50% { opacity: 0.22; }
            }

            @keyframes cardLight {
               0% { transform: translateX(-120%) skewX(-20deg); opacity: 0; }
               50% { opacity: 0.35; }
               100% { transform: translateX(120%) skewX(-20deg); opacity: 0; }
            }

            @keyframes pulseGlow{
               0%,100%{
                  box-shadow:0 0 20px rgba(0,255,255,0.18);
               }
               50%{
                  box-shadow:0 0 50px rgba(0,255,255,0.35);
               }
            }

            @keyframes liveBar{
               0%{transform:translateX(-100%);}
               100%{transform:translateX(250%);}
            }

            @keyframes bounceDot{
               0%,100%{
                  transform:translateY(0px);
               }
               50%{
                  transform:translateY(-8px);
               }
            }

            @keyframes flicker{
               0%,18%,22%,25%,53%,57%,100%{
                  opacity:1;
               }
               20%,24%,55%{
                  opacity:0.4;
               }
            }

            @keyframes blink {
               0%,100% {
                  opacity: 1;
                  text-shadow: 0 0 12px rgba(255,255,255,0.9), 0 0 30px rgba(14,165,233,0.35);
               }
               50% {
                  opacity: 0.35;
                  text-shadow: 0 0 6px rgba(255,255,255,0.45), 0 0 15px rgba(14,165,233,0.2);
               }
            }

            .blink {
               animation: blink 1.5s ease-in-out infinite;
            }

            @keyframes scan{
               0%{
                  transform:translateY(-120%);
               }
               100%{
                  transform:translateY(120%);
               }
            }

            .floating{
               animation:float 5s ease-in-out infinite;
            }

            .pulseGlow{
               animation:pulseGlow 3s ease-in-out infinite;
            }

            .flicker{
               animation:flicker 2s infinite;
            }

            .scanline{
               animation:scan 4s linear infinite;
            }

            .radar{
               animation:radar 12s linear infinite;
            }

            .bounceDot{
               animation:bounceDot 1s infinite;
            }
            
            /* Staggered Card Entrance Animations (Left-to-Right / Directional) */
            @keyframes slideInLeft {
               0% { transform: translateX(-150px) scale(0.95); opacity: 0; filter: blur(6px); }
               100% { transform: translateX(0) scale(1); opacity: 1; filter: blur(0); }
            }

            @keyframes slideInRight {
               0% { transform: translateX(150px) scale(0.95); opacity: 0; filter: blur(6px); }
               100% { transform: translateX(0) scale(1); opacity: 1; filter: blur(0); }
            }

            @keyframes slideInUp {
               0% { transform: translateY(100px) scale(0.95); opacity: 0; filter: blur(6px); }
               100% { transform: translateY(0) scale(1); opacity: 1; filter: blur(0); }
            }

            @keyframes slideInDown {
               0% { transform: translateY(-100px) scale(0.98); opacity: 0; filter: blur(4px); }
               100% { transform: translateY(0) scale(1); opacity: 1; filter: blur(0); }
            }

            .card-entrance-top {
               animation: slideInDown 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
            }

            .card-entrance-left {
               animation: slideInLeft 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
            }

            .card-entrance-right {
               animation: slideInRight 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
            }

            .card-entrance-center {
               animation: slideInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
            }

            /* Horizontal Particle Drift Animation (Left-to-Right) */
            @keyframes particleDrift {
               0% { transform: translate(0, 0) scale(0.6); opacity: 0; }
               10% { opacity: 0.7; }
               90% { opacity: 0.7; }
               100% { transform: translate(350px, -60px) scale(1.3); opacity: 0; }
            }

            .particle-drift {
               animation: particleDrift var(--drift-duration, 15s) linear infinite;
            }

            /* Metallic Text Shimmer (Left-to-Right) */
            @keyframes textShimmer {
               0% { background-position: -200% center; }
               100% { background-position: 200% center; }
            }

            .text-shimmer-cyan {
               background: linear-gradient(
                  90deg,
                  #ffffff 0%,
                  #b5f5fe 20%,
                  #06b6d4 40%,
                  #3b82f6 60%,
                  #b5f5fe 80%,
                  #ffffff 100%
               );
               background-size: 200% auto;
               -webkit-background-clip: text;
               background-clip: text;
               color: transparent;
               animation: textShimmer 4s linear infinite;
            }

            .text-shimmer-gold {
               background: linear-gradient(
                  90deg,
                  #ffffff 0%,
                  #fef08a 20%,
                  #eab308 40%,
                  #f97316 60%,
                  #fef08a 80%,
                  #ffffff 100%
               );
               background-size: 200% auto;
               -webkit-background-clip: text;
               background-clip: text;
               color: transparent;
               animation: textShimmer 4s linear infinite;
            }

            .text-shimmer-white {
               background: linear-gradient(
                  90deg,
                  #e2e8f0 0%,
                  #ffffff 25%,
                  #94a3b8 50%,
                  #ffffff 75%,
                  #e2e8f0 100%
               );
               background-size: 200% auto;
               -webkit-background-clip: text;
               background-clip: text;
               color: transparent;
               animation: textShimmer 5s linear infinite;
            }

            /* Laser Edge Glow Sweep (Left-to-Right) */
            @keyframes borderGlowSweep {
               0% { left: -100%; }
               100% { left: 200%; }
            }

            .laser-sweep-top {
               position: absolute;
               top: 0;
               left: -100%;
               height: 2px;
               width: 40%;
               background: linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.8), rgba(236, 72, 153, 0.8), transparent);
               filter: blur(0.5px);
               pointer-events: none;
               animation: borderGlowSweep 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            }

            @keyframes hudScan {
               0%, 100% { top: 10%; opacity: 0.2; }
               50% { top: 90%; opacity: 0.8; }
            }

             @keyframes eqBounce {
                0%, 100% { transform: scaleY(0.25); }
                50% { transform: scaleY(1); }
             }

             .eq-bar {
                transform-origin: bottom;
                animation: eqBounce 1s ease-in-out infinite;
                filter: drop-shadow(0 0 4px rgba(34, 211, 238, 0.4));
             }

             /* Premium Glass Glow Gradient Borders */
             .glass-card-glow {
                position: relative;
                transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1) !important;
             }

             .glass-card-glow::after {
                content: '';
                position: absolute;
                inset: 0;
                border-radius: inherit;
                padding: 1.5px;
                background: linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.12));
                -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                -webkit-mask-composite: xor;
                mask-composite: exclude;
                pointer-events: none;
                transition: opacity 0.5s ease;
                opacity: 0.85;
             }

             .glass-card-glow:hover::after {
                background: linear-gradient(135deg, rgba(34,211,238,0.5), rgba(168,85,247,0.15) 50%, rgba(249,115,22,0.5));
                opacity: 1;
             }

             @keyframes blobDrift {
                0%, 100% { transform: translate(0, 0) scale(1); }
                33% { transform: translate(80px, -60px) scale(1.15); }
                66% { transform: translate(-60px, 70px) scale(0.9); }
             }

             /* Custom React Colorful Styles to fit the app */
             .custom-picker .react-colorful {
                width: 100%;
                height: 200px;
             }
             .custom-picker .react-colorful__pointer {
                width: 24px;
                height: 24px;
             }

             .camera-grid {
               background-size: 40px 40px;
               background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                                 linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
            }
          `}</style>

      {/* Dynamic Screen Wrapper */}
      <div className="min-h-screen w-screen bg-slate-950 flex items-center justify-center overflow-auto p-6 select-none relative">

        {/* 1080x1920 preview canvas */}
        <div
          style={{
            transform: "scale(" + scale + ")",
            transformOrigin: "center center",
            width: "1080px",
            height: "1920px",
          }}
          className="relative flex-shrink-0 shadow-[0_0_80px_rgba(0,0,0,0.85)] border border-white/5 rounded-[40px] overflow-hidden bg-black"
        >
          {/* Main 9:16 Canvas */}
          <div
            style={isBgSolid ? { backgroundColor: theme.background } : {}}
            className={"relative page-glow w-[1080px] h-[1920px] overflow-hidden text-white flex flex-col justify-between p-8 " + (isBgSolid ? "" : "bg-gradient-to-br " + theme.background)}
          >
            {/* Mesh Gradient Background Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-[20%] -left-[20%] w-[60%] h-[60%] rounded-full bg-cyan-500/10 blur-[120px] animate-[blobDrift_20s_ease-in-out_infinite]" />
              <div className="absolute top-[30%] -right-[20%] w-[70%] h-[70%] rounded-full bg-purple-500/10 blur-[140px] animate-[blobDrift_25s_ease-in-out_infinite_reverse]" />
              <div className="absolute -bottom-[20%] left-[10%] w-[60%] h-[60%] rounded-full bg-orange-500/10 blur-[130px] animate-[blobDrift_22s_ease-in-out_infinite]" />
            </div>

            {/* PARTICLES WITH STABLE DETERMINISTIC VALUES TO PREVENT FLICKER */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              {[...Array(20)].map((_, i) => {
                const left = String((i * 37) % 100) + "%";
                const top = String((i * 23) % 100) + "%";
                const duration = String(12 + (i % 6) * 4) + "s";
                const delay = String(-(i * 0.8)) + "s";
                return (
                  <div
                    key={i}
                    className="absolute h-2 w-2 rounded-full bg-cyan-400 blur-sm particle-drift"
                    style={{
                      left,
                      top,
                      "--drift-duration": duration,
                      animationDelay: delay,
                    }}
                  />
                );
              })}
            </div>

            {/* TOP GLOW */}
            <div className="absolute inset-x-0 top-0 h-[500px] bg-cyan-500/5 blur-[150px] pointer-events-none" />

            {/* SCOREBOARD / HEADER */}
            <div className="card-entrance-top w-full h-[500px]">
              <GlassCard
                gradient={theme.header}
                className="px-8 py-6 overflow-visible glass-card-glow h-[500px]"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <div className="scanline absolute inset-x-0 h-28 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                </div>
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-3">
                        <span className="h-3 w-3 rounded-full bg-red-500 animate-ping" />
                        <div
                          className={"rounded-full px-5 py-1 text-sm font-black pulseGlow " + (theme.live?.startsWith('#') ? "" : "bg-gradient-to-r " + theme.live)}
                          style={theme.live?.startsWith('#') ? { backgroundImage: 'linear-gradient(to right, ' + theme.live + ', ' + theme.live + '80)' } : {}}
                        >
                          LIVE
                        </div>
                      </div>

                      <div className="flex-1 max-w-[60%]">
                        <EditableText
                          value={liveScore}
                          onChange={setLiveScore}
                          className="text-lg font-bold tracking-wider text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)] blink"
                          align="right"
                          placeholder="MATCH LIVE"
                        />
                      </div>

                      <div className="text-xs text-white/40 font-mono tracking-widest ml-4 shrink-0">
                        OVERLAY V2.0
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center justify-between gap-6">
                      <div
                        className="flex-1 min-h-[190px] p-6 rounded-[28px] border border-white/10 bg-black/35 hover:border-cyan-400/40 hover:shadow-[0_0_24px_rgba(6,182,212,0.32)] transition-all duration-300 flex flex-col gap-3 relative overflow-hidden group"
                      >
                        <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t border-l border-cyan-400/40" />
                        <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t border-r border-cyan-400/40" />

                        <EditableText
                          value={team1Name}
                          onChange={setTeam1Name}
                          className="text-5xl font-black leading-none"
                          isShimmer={true}
                          shimmerClass="text-shimmer-cyan"
                          align="left"
                          placeholder="TEAM 1"
                        />
                        <EditableText
                          value={team1Score}
                          onChange={setTeam1Score}
                          className="text-3xl font-black text-white/95 mt-2"
                          align="left"
                          placeholder="0/0"
                        />
                      </div>

                      <div
                        className="h-16 w-16 rounded-full border border-white/15 bg-white/5 flex items-center justify-center font-black text-xl text-white/90 shadow-[0_0_24px_rgba(255,255,255,0.08)] hover:scale-110 hover:border-cyan-300 transition-all duration-300 shrink-0"
                      >
                        VS
                      </div>

                      <div
                        className="flex-1 min-h-[190px] p-6 rounded-[28px] border border-white/10 bg-black/35 hover:border-orange-400/40 hover:shadow-[0_0_24px_rgba(249,115,22,0.32)] transition-all duration-300 flex flex-col gap-3 relative overflow-hidden group"
                      >
                        <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t border-l border-orange-400/40" />
                        <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t border-r border-orange-400/40" />

                        <EditableText
                          value={team2Name}
                          onChange={setTeam2Name}
                          className="text-5xl font-black leading-none"
                          isShimmer={true}
                          shimmerClass="text-shimmer-gold"
                          align="left"
                          placeholder="TEAM 2"
                        />
                        <EditableText
                          value={team2Score}
                          onChange={setTeam2Score}
                          className="text-3xl font-black text-white/95 mt-2"
                          align="left"
                          placeholder="Bowling"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <ColorPicker target="header" />
              </GlassCard>
            </div>

            {/* OVERS TRACKER */}
            <div className="card-entrance-left w-full">
              <GlassCard
                gradient={theme.lastOver}
                className="flex items-center gap-6 py-5 px-8 min-h-[110px] glass-card-glow"
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl font-black tracking-widest text-white/80">OVERS</div>
                  <button
                    onClick={() => {
                      setTickerActive(!tickerActive);
                      if (!tickerActive) setActiveBallOverride(null);
                    }}
                    className="h-8 w-8 rounded-lg bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center text-xs cursor-pointer shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] border border-white/5"
                    title={tickerActive ? "Pause Auto Rotation" : "Play Auto Rotation"}
                  >
                    {tickerActive ? "⏸️" : "▶️"}
                  </button>
                </div>
                <div className="h-10 w-[1px] bg-white/15" />

                <div className="flex flex-1 gap-4 items-center justify-around">
                  {[...Array(6)].map((_, idx) => {
                    const isBallActive = idx === activeBallIdx;
                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          setTickerActive(false);
                          setActiveBallOverride(idx);
                        }}
                        className="relative flex items-center justify-center cursor-pointer"
                      >
                        <div className={"h-14 w-14 rounded-full border flex items-center justify-center font-black text-lg transition-all duration-500 " + (isBallActive ? "bg-gradient-to-r from-cyan-400 to-blue-500 border-cyan-300 scale-110 shadow-[0_0_18px_rgba(34,211,238,0.7)] text-white" : "bg-black/40 border-white/10 text-white/50 hover:border-white/30 hover:text-white")}>
                          {idx + 1}
                        </div>
                        {isBallActive && (
                          <div className="absolute -inset-1.5 rounded-full border border-cyan-400/40 animate-ping pointer-events-none" />
                        )}
                      </div>
                    );
                  })}
                </div>
                <ColorPicker target="lastOver" />
              </GlassCard>
            </div>

            {/* PLAYER STATS STACK */}
            <div className="w-full flex flex-col gap-5">
              {/* STRIKER */}
              <div className="card-entrance-left" style={{ animationDelay: "0.4s" }}>
                <GlassCard
                  gradient={theme.striker}
                  className="h-[155px] px-6 py-4 flex items-center justify-between rounded-[24px] border border-white/10 shadow-[0_15px_45px_rgba(0,0,0,0.15)] group relative glass-card-glow"
                >
                  <ColorPicker target="striker" />

                  <div className="flex flex-col justify-center gap-1 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-white/50 tracking-[0.2em] uppercase">BATSMAN (STRIKER)</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
                    </div>

                    <EditableText
                      value={strikerName}
                      onChange={setStrikerName}
                      className="text-2xl font-black tracking-wide"
                      isShimmer={true}
                      shimmerClass="text-shimmer-white"
                      align="left"
                      placeholder="STRIKER NAME"
                    />

                    <EditableText
                      value={strikerRuns}
                      onChange={setStrikerRuns}
                      className="text-xl font-bold text-cyan-300 tracking-wider"
                      align="left"
                      placeholder="0* (0)"
                    />
                  </div>

                  {/* Audio Visualizer */}
                  <div className="flex items-center gap-5">
                    <div className="h-[64px] w-[150px] rounded-xl border border-white/10 bg-black/20 backdrop-blur-md px-3 flex items-center justify-center">
                      <div className="flex items-end gap-1 px-1 h-10">
                        {[...Array(12)].map((_, idx) => (
                          <div
                            key={idx}
                            className="w-1 bg-gradient-to-t from-cyan-400 to-indigo-500 rounded-full eq-bar"
                            style={{
                              height: "100%",
                              animationDelay: String(idx * 0.08) + "s",
                              animationDuration: String(0.6 + (idx % 4) * 0.15) + "s"
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>

              {/* NON STRIKER */}
              <div className="card-entrance-center" style={{ animationDelay: "0.5s" }}>
                <GlassCard
                  gradient={theme.nonStriker}
                  className="h-[155px] px-6 py-4 flex items-center justify-between rounded-[24px] border border-white/10 shadow-[0_15px_45px_rgba(0,0,0,0.15)] group relative glass-card-glow"
                >
                  <ColorPicker target="nonStriker" />

                  <div className="flex flex-col justify-center gap-1 flex-1">
                    <span className="text-[10px] font-bold text-white/50 tracking-[0.2em] uppercase">BATSMAN</span>

                    <EditableText
                      value={nonStrikerName}
                      onChange={setNonStrikerName}
                      className="text-2xl font-black tracking-wide"
                      isShimmer={true}
                      shimmerClass="text-shimmer-white"
                      align="left"
                      placeholder="NON-STRIKER NAME"
                    />

                    <EditableText
                      value={nonStrikerRuns}
                      onChange={setNonStrikerRuns}
                      className="text-xl font-bold text-cyan-300 tracking-wider"
                      align="left"
                      placeholder="0 (0)"
                    />
                  </div>

                  {/* Audio Visualizer */}
                  <div className="flex items-center gap-5">
                    <div className="h-[64px] w-[150px] rounded-xl border border-white/10 bg-black/20 backdrop-blur-md px-3 flex items-center justify-center">
                      <div className="flex items-end gap-1 px-1 h-10">
                        {[...Array(12)].map((_, idx) => (
                          <div
                            key={idx}
                            className="w-1 bg-gradient-to-t from-emerald-400 to-cyan-500 rounded-full eq-bar"
                            style={{
                              height: "100%",
                              animationDelay: String(idx * 0.08) + "s",
                              animationDuration: String(0.8 + (idx % 3) * 0.18) + "s"
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>

              {/* BOWLER */}
              <div className="card-entrance-right" style={{ animationDelay: "0.6s" }}>
                <GlassCard
                  gradient={theme.bowler}
                  className="h-[155px] px-6 py-4 flex items-center justify-between rounded-[24px] border border-white/10 shadow-[0_15px_45px_rgba(0,0,0,0.15)] group relative glass-card-glow"
                >
                  <ColorPicker target="bowler" />

                  <div className="flex flex-col justify-center gap-1 flex-1">
                    <span className="text-[10px] font-bold text-white/50 tracking-[0.2em] uppercase">BOWLER</span>

                    <EditableText
                      value={bowlerName}
                      onChange={setBowlerName}
                      className="text-2xl font-black tracking-wide"
                      isShimmer={true}
                      shimmerClass="text-shimmer-white"
                      align="left"
                      placeholder="BOWLER NAME"
                    />

                    <EditableText
                      value={bowlerStats}
                      onChange={setBowlerStats}
                      className="text-xl font-bold text-orange-300 tracking-wider"
                      align="left"
                      placeholder="0/0 (0.0)"
                    />
                  </div>

                  {/* Audio Visualizer */}
                  <div className="flex items-center gap-5">
                    <div className="h-[64px] w-[150px] rounded-xl border border-white/10 bg-black/20 backdrop-blur-md px-3 flex items-center justify-center">
                      <div className="flex items-end gap-1 px-1 h-10">
                        {[...Array(12)].map((_, idx) => (
                          <div
                            key={idx}
                            className="w-1 bg-gradient-to-t from-rose-500 to-amber-500 rounded-full eq-bar"
                            style={{
                              height: "100%",
                              animationDelay: String(idx * 0.08) + "s",
                              animationDuration: String(0.7 + (idx % 3) * 0.16) + "s"
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>

            {/* FACECAM / CAMERA FRAME */}
            <div className="card-entrance-center w-full" style={{ animationDelay: "0.7s" }}>
              <GlassCard
                gradient={theme.facecam}
                className="relative w-full h-[600px] overflow-hidden rounded-[36px] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.3)] glass-card-glow"
              >
                <ColorPicker target="facecam" />

                {/* Camera Viewfinder Screen Container */}
                <div className="absolute inset-5 rounded-[24px] bg-black/60 border border-white/5 overflow-hidden flex flex-col justify-between p-6 camera-grid">
                  {/* Subtle Scanline Overlay */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="scanline absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent" />
                  </div>

                  {/* Viewfinder Target corners */}
                  <div className="absolute top-5 left-5 w-6 h-6 border-t-2 border-l-2 border-cyan-400/60" />
                  <div className="absolute top-5 right-5 w-6 h-6 border-t-2 border-r-2 border-cyan-400/60" />
                  <div className="absolute bottom-5 left-5 w-6 h-6 border-b-2 border-l-2 border-cyan-400/60" />
                  <div className="absolute bottom-5 right-5 w-6 h-6 border-b-2 border-r-2 border-cyan-400/60" />

                  {/* Center Reticle Crosshair */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                    <div className="w-8 h-[1px] bg-cyan-400" />
                    <div className="w-[1px] h-8 bg-cyan-400" />
                    <div className="absolute w-14 h-14 border border-cyan-400 rounded-full border-dashed animate-[spin_60s_linear_infinite]" />
                  </div>

                  {/* Viewfinder Header info */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2 bg-black/40 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-xs font-bold tracking-[0.2em] text-red-500 uppercase">CAMERA SLOT</span>
                    </div>

                    <div className="text-[10px] font-mono text-white/50 tracking-wider flex flex-col items-end">
                      <div>1080P // 60 FPS</div>
                      <div>ISO AUTO // F/2.8</div>
                    </div>
                  </div>

                  {/* Viewfinder Center Mock Video Placeholder */}
                  <div className="relative z-10 flex-1 flex items-center justify-center flex-col opacity-65 group-hover:opacity-90 transition-opacity duration-300">
                    <div className="w-20 h-20 rounded-full border-2 border-dashed border-white/25 flex items-center justify-center animate-[spin_20s_linear_infinite] mb-3">
                      <span className="text-3xl">📹</span>
                    </div>
                    <span className="text-xs font-semibold tracking-[0.3em] text-white/50 uppercase">CAMERA PREVIEW AREA</span>
                  </div>

                  {/* Viewfinder Bottom Panel (Glassmorphic) */}
                  <div className="relative z-10 bg-white/5 border border-white/10 backdrop-blur-md p-4 rounded-xl flex items-center justify-between">
                    <div className="flex flex-col gap-1 flex-1 max-w-[70%]">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                        <span className="text-[10px] font-bold text-cyan-300 tracking-[0.2em] uppercase">COMMENTARY FEED</span>
                      </div>
                      <EditableText
                        value={commentatorName}
                        onChange={setCommentatorName}
                        className="text-2xl font-black text-shimmer-cyan tracking-wide"
                        isShimmer={true}
                        shimmerClass="text-shimmer-cyan"
                        align="left"
                        placeholder="COMMENTATOR"
                      />
                    </div>

                    {/* Audio EQ Mic level indicators */}
                    <div className="flex items-end gap-1 h-8 px-2.5 bg-black/40 rounded-lg border border-white/5">
                      {[...Array(8)].map((_, idx) => (
                        <div
                          key={idx}
                          className="w-1 bg-gradient-to-t from-cyan-400 to-indigo-500 rounded-full eq-bar"
                          style={{
                            height: "100%",
                            animationDelay: String(idx * 0.08) + "s",
                            animationDuration: String(0.5 + (idx % 3) * 0.2) + "s"
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>

      {renderThemeModal()}
    </>
  );
}

