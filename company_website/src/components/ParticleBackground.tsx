import React, { useEffect, useState } from 'react';
import './ParticleBackground.css';

interface Particle {
  id: number;
  x: number;
  y: number;
  delay: number;
  size: number;
}

const ParticleBackground: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [lines, setLines] = useState<Array<{ x1: number; y1: number; x2: number; y2: number; delay: number }>>([]);

  useEffect(() => {
    // パーティクルの生成
    const newParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 20,
      size: Math.random() * 3 + 1,
    }));
    setParticles(newParticles);

    // ネットワークラインの生成
    const newLines = Array.from({ length: 15 }, () => ({
      x1: Math.random() * 100,
      y1: Math.random() * 100,
      x2: Math.random() * 100,
      y2: Math.random() * 100,
      delay: Math.random() * 15,
    }));
    setLines(newLines);
  }, []);

  return (
    <div className="particle-background">
      {/* グリッドライン */}
      <div className="grid-overlay" />
      
      {/* データストリーム（横流れ） */}
      <div className="data-streams">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="stream"
            style={{
              top: `${15 + i * 15}%`,
              animationDelay: `${i * 1.5}s`
            }}
          >
            <span></span>
          </div>
        ))}
      </div>

      {/* ネットワークライン */}
      <svg className="network-lines" width="100%" height="100%">
        {lines.map((line, i) => (
          <line
            key={i}
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${line.x2}%`}
            y2={`${line.y2}%`}
            className="network-line"
            style={{ animationDelay: `${line.delay}s` }}
          />
        ))}
      </svg>

      {/* パーティクル */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}

      {/* 回路基板風のライン */}
      <div className="circuit-lines">
        <div className="circuit-horizontal" style={{ top: '20%', animationDelay: '0s' }} />
        <div className="circuit-horizontal" style={{ top: '60%', animationDelay: '2s' }} />
        <div className="circuit-vertical" style={{ left: '15%', animationDelay: '1s' }} />
        <div className="circuit-vertical" style={{ left: '85%', animationDelay: '3s' }} />
      </div>
    </div>
  );
};

export default ParticleBackground;
