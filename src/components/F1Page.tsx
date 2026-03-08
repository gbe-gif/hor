import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Flag, Trophy } from 'lucide-react';

export default function F1Page() {
  const schedule = [
    { round: '1R', date: '03.14', location: '호주' },
    { round: '2R', date: '03.21', location: '중국' },
    { round: '3R', date: '04.04', location: '일본' },
    { round: '4R', date: '04.11', location: '바레인' },
    { round: '5R', date: '04.18', location: '사우디' },
    { round: '6R', date: '05.03', location: '마이애미' },
    { round: '7R', date: '05.16', location: '에밀리아로마냐' },
    { round: '8R', date: '05.23', location: '모나코' },
    { round: '9R', date: '05.30', location: '에스파냐' },
    { round: '10R', date: '06.14', location: '캐나다' },
    { round: '11R', date: '06.27', location: '오스트리아' },
    { round: '12R', date: '07.04', location: '영국' },
    { round: '13R', date: '07.25', location: '벨기에' },
    { round: '14R', date: '08.01', location: '헝가리' },
    { round: '15R', date: '08.29', location: '네덜란드' },
    { round: '16R', date: '09.05', location: '이탈리아' },
    { round: '17R', date: '09.19', location: '아제르바이잔' },
    { round: '18R', date: '10.03', location: '싱가포르' },
    { round: '19R', date: '10.18', location: '미국' },
    { round: '20R', date: '10.25', location: '멕시코시티' },
    { round: '21R', date: '11.07', location: '상파울루' },
    { round: '22R', date: '11.21', location: '라스베이거스' },
    { round: '23R', date: '11.28', location: '카타르' },
    { round: '24R', date: '12.05', location: '아부다비' },
  ];

  const otherTeams = [
    'Miracle Red Wings Racing',
    'Racing C Wings',
    'Prancing Stallion Racing',
    'Silver Panther F1 Team',
    'Papaya Fox Racing',
    'Emerald Stag Formula 1 Team',
    'Azure Viper Formula 1 Team',
    'Iron Wolf Motorsport',
    'White Ox Racing',
    'Alpine Eagle Motorsport',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <section>
        <div className="flex items-center gap-2 mb-4 border-b border-zinc-800 pb-2">
          <Trophy className="text-red-500" />
          <h2 className="text-2xl font-bold text-red-500">Black Mane F1 Team</h2>
        </div>
        <div className="bg-zinc-900 rounded-xl p-5 space-y-4 text-sm leading-relaxed text-zinc-300 border-l-4 border-red-500">
          <p>2022년에 엔트리된 11번째 팀.</p>
          <p>재정 매우 안정적, 팀 컬러는 블랙과 실버.</p>
          
          <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-800 mt-2">
            <h3 className="text-zinc-400 font-bold mb-2">시즌 성적</h3>
            <ul className="space-y-1">
              <li>2022년: 5위</li>
              <li>2023년: 4위</li>
              <li>2024년: 3위</li>
            </ul>
          </div>

          <p>극단적인 다운포스 세팅 선호, 고속 코너 강점.</p>
          <p>과감한 전략 구사, 아직 팀원 간 호흡이 완벽하진 않음.</p>
          <p>별명은 '검은 사자', 라운드별 성적 편차 심함.</p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-2 mb-4 border-b border-zinc-800 pb-2">
          <Flag className="text-red-500" />
          <h2 className="text-2xl font-bold text-red-500">F1 타팀</h2>
        </div>
        <div className="grid grid-cols-1 gap-2">
          {otherTeams.map((team, idx) => (
            <div key={idx} className="bg-zinc-900 p-3 rounded-lg text-sm text-zinc-300 border border-zinc-800">
              {team}
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-2 mb-4 border-b border-zinc-800 pb-2">
          <Calendar className="text-red-500" />
          <h2 className="text-2xl font-bold text-red-500">2025 F1 GP 일정</h2>
        </div>
        <p className="text-xs text-zinc-500 mb-4">* FP1일 기준</p>
        <div className="grid grid-cols-2 gap-3">
          {schedule.map((gp, idx) => (
            <div key={idx} className="bg-zinc-900 p-3 rounded-lg border border-zinc-800 flex flex-col">
              <span className="text-red-500 font-bold text-xs mb-1">{gp.round}</span>
              <span className="text-zinc-100 font-medium">{gp.location}</span>
              <span className="text-zinc-500 text-xs mt-1">{gp.date}</span>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
