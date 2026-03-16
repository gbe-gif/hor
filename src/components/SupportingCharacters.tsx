import React from 'react';
import { motion } from 'motion/react';
import { Users, User, Shield } from 'lucide-react';

export default function SupportingCharacters() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <section>
        <div className="flex items-center gap-2 mb-4 border-b border-amber-200 pb-2">
          <Shield className="text-indigo-900" />
          <h2 className="text-2xl font-bold text-indigo-900">Black Mane F1 Team</h2>
        </div>
        
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm">
            <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 border border-amber-100/50">
              <img src="https://i.postimg.cc/rmPtBRB6/마르코.png" alt="마르코 알바레즈" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <h3 className="text-lg font-bold text-indigo-950 mb-2">마르코 알바레즈</h3>
            <div className="space-y-2 text-sm text-slate-700 leading-relaxed">
              <p><span className="text-slate-400 font-medium w-16 inline-block">나이</span> 27세 남성</p>
              <p><span className="text-slate-400 font-medium w-16 inline-block">국적</span> 스페인</p>
              <p><span className="text-slate-400 font-medium w-16 inline-block">종족</span> 치타 수인</p>
              <p><span className="text-slate-400 font-medium w-16 inline-block">소속</span> 세컨드 드라이버 (18번)</p>
              <p>우천에도 안정적인 주행 보여줌.</p>
              <p>실력 면에선 레온 리스펙트함.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm">
            <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 border border-amber-100/50">
              <img src="https://i.postimg.cc/sXDYdr1W/헬레나.png" alt="헬레나 브래드쇼" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <h3 className="text-lg font-bold text-indigo-950 mb-2">헬레나 브래드쇼</h3>
            <div className="space-y-2 text-sm text-slate-700 leading-relaxed">
              <p><span className="text-slate-400 font-medium w-16 inline-block">나이</span> 48세 여성</p>
              <p><span className="text-slate-400 font-medium w-16 inline-block">종족</span> 염소 수인</p>
              <p><span className="text-slate-400 font-medium w-16 inline-block">직책</span> 팀 대표</p>
              <p><span className="text-slate-400 font-medium w-16 inline-block">MBTI</span> ENTJ</p>
              <p>팀 브랜딩과 마케팅 중요시함.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm">
            <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 border border-amber-100/50">
              <img src="https://i.postimg.cc/2SQh16Zn/토마드.png" alt="토마드 리드" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <h3 className="text-lg font-bold text-indigo-950 mb-2">토마드 리드</h3>
            <div className="space-y-2 text-sm text-slate-700 leading-relaxed">
              <p><span className="text-slate-400 font-medium w-16 inline-block">나이</span> 37세 인간 남성</p>
              <p><span className="text-slate-400 font-medium w-16 inline-block">직책</span> 레온의 레이스 엔지니어</p>
              <p><span className="text-slate-400 font-medium w-16 inline-block">MBTI</span> INTP</p>
              <p>레온의 각종 규정 편법성 요구에 같이 신나게 연구 개발함.</p>
              <p>업계 내 압도적 실력 자랑함.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-2 mb-4 border-b border-amber-200 pb-2">
          <Users className="text-indigo-900" />
          <h2 className="text-2xl font-bold text-indigo-900">레온의 가족</h2>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm">
            <h3 className="text-lg font-bold text-indigo-950 mb-2">레오폴드 K. 펜브룩</h3>
            <div className="space-y-2 text-sm text-slate-700 leading-relaxed">
              <p><span className="text-slate-400 font-medium w-16 inline-block">관계</span> 아버지</p>
              <p><span className="text-slate-400 font-medium w-16 inline-block">나이</span> 64세 사자 수인</p>
              <p><span className="text-slate-400 font-medium w-16 inline-block">MBTI</span> INTJ</p>
              <p>냉철한 전략가이나 가족 사랑하고 가정적임.</p>
              <p>레온 전폭적 지지하면서도 내심 걱정함.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm">
            <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 border border-amber-100/50">
              <img src="https://i.postimg.cc/7Z305622/루이.png" alt="루이마르셀리앙 드 펜브룩" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <h3 className="text-lg font-bold text-indigo-950 mb-2">루이마르셀리앙 드 펜브룩</h3>
            <div className="space-y-2 text-sm text-slate-700 leading-relaxed">
              <p><span className="text-slate-400 font-medium w-16 inline-block">관계</span> 형 (애칭: 루이)</p>
              <p><span className="text-slate-400 font-medium w-16 inline-block">나이</span> 30세 사자 수인</p>
              <p><span className="text-slate-400 font-medium w-16 inline-block">MBTI</span> ENTP</p>
              <p>가문 후계자, 웃는 포식자 기질 지님.</p>
              <p>레온의 기행 재밌어함.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm">
            <h3 className="text-lg font-bold text-indigo-950 mb-2">엘로디 드 발몽 펜브룩</h3>
            <div className="space-y-2 text-sm text-slate-700 leading-relaxed">
              <p><span className="text-slate-400 font-medium w-16 inline-block">관계</span> 어머니</p>
              <p><span className="text-slate-400 font-medium w-16 inline-block">나이</span> 61세 여성 말 수인</p>
              <p><span className="text-slate-400 font-medium w-16 inline-block">MBTI</span> ENFJ</p>
              <p>육상 금메달리스트 5관왕 출신, 펜브룩 스포츠 재단 이사장으로 육상 선수 양성.</p>
              <p>우아한 전사 같은 성품, 레온의 운동 신경에 자부심 느낌.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-2 mb-4 border-b border-amber-200 pb-2">
          <User className="text-indigo-900" />
          <h2 className="text-2xl font-bold text-indigo-900">타팀 라이벌</h2>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm">
          <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 border border-amber-100/50">
            <img src="https://i.postimg.cc/13Gw8tqw/아드리앵.png" alt="아드리앵 드 라로슈" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <h3 className="text-lg font-bold text-indigo-950 mb-2">아드리앵 드 라로슈</h3>
          <div className="space-y-2 text-sm text-slate-700 leading-relaxed">
            <p><span className="text-slate-400 font-medium w-16 inline-block">나이</span> 26세 프랑스인</p>
            <p><span className="text-slate-400 font-medium w-16 inline-block">종족</span> 늑대 수인 남성</p>
            <p><span className="text-slate-400 font-medium w-16 inline-block">소속</span> 파파야 폭스의 퍼스트 드라이버 (6번)</p>
            <p><span className="text-slate-400 font-medium w-16 inline-block">MBTI</span> ENTJ</p>
            <p>차가운 포식자 기질, 계산된 하이리스크 전략 구사.</p>
            <p>16살 때부터 레온과 비교되는 라이벌.</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
