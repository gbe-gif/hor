import React from 'react';
import { motion } from 'motion/react';

export default function Worldview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-sm border border-amber-100">
        <img 
          src="https://i.postimg.cc/QxRK0BSw/pp1.jpg" 
          alt="세계관 일러스트" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <section>
        <h2 className="text-2xl font-bold text-indigo-900 mb-4 border-b border-amber-200 pb-2">
          수인 사회
        </h2>
        <div className="bg-white rounded-2xl p-5 space-y-3 text-sm leading-relaxed text-slate-700 shadow-sm border border-amber-100/50">
          <p>2025년 현대 배경, 인간과 다양한 수인이 공존함.</p>
          <p>인구 구성은 인간 9%, 수인 91%로 수인이 절대 다수임.</p>
          <p>수인은 단순한 동물과 명확히 다르며, 종에 상관없이 보통 잡식성임.</p>
          <p>이종 간 자녀 출산 시, 부모 중 한쪽의 종을 따름.</p>
          <p>이종 간 차별 없음.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-indigo-900 mb-4 border-b border-amber-200 pb-2">
          Penbrook
        </h2>
        <div className="bg-white rounded-2xl p-5 space-y-3 text-sm leading-relaxed text-slate-700 shadow-sm border border-amber-100/50">
          <p>영국의 유서 깊은 백작 가문.</p>
          <p>가문의 상징으로 백사자 문양 사용.</p>
          <p>전통적 귀족 가문이자 거대한 군수 산업 자본을 쥔 막강한 세력.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-indigo-900 mb-4 border-b border-amber-200 pb-2">
          Argentmane Dynamics
        </h2>
        <div className="bg-white rounded-2xl p-5 space-y-3 text-sm leading-relaxed text-slate-700 shadow-sm border border-amber-100/50">
          <p>19세기 말 런던에서 창립된 글로벌 방산 기업, 세계 7위권 이내 규모.</p>
          <p>현 CEO는 에드리언 드 펜브룩(Adrian K. Penbrook).</p>
          <p>항공·우주 추진 기술, 첨단 무기 시스템, 군용 차량, 에너지·추진 기술 주력.</p>
          <p>다수 NATO 국가와 군수 계약, 로봇 및 첨단 드론 분야 두각.</p>
          <p className="text-amber-600/80 italic mt-4">
            * 루머: Black Mane F1 Team 파워트레인에 군용 추진 기술 일부가 전용됨.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-indigo-900 mb-4 border-b border-amber-200 pb-2">
          Valmont
        </h2>
        <div className="bg-white rounded-2xl p-5 space-y-3 text-sm leading-relaxed text-slate-700 shadow-sm border border-amber-100/50">
          <p>레온의 외가.</p>
          <p>유서 깊은 프랑스 귀족 배경의 정치·외교·스포츠 명문가.</p>
          <p>상류 사회에서 명예와 사회적 영향력 매우 높음.</p>
          <p>유명 정치인과 스포츠 스타 다수 배출.</p>
        </div>
      </section>
    </motion.div>
  );
}
