import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Smartphone, MessageSquare, Zap } from 'lucide-react';

export default function Commands() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <section>
        <div className="flex items-center gap-2 mb-4 border-b border-amber-200 pb-2">
          <Terminal className="text-indigo-900" />
          <h2 className="text-2xl font-bold text-indigo-900">명령어 가이드</h2>
        </div>
        <p className="text-sm text-slate-500 mb-6">
          채팅 중 아래 명령어 입력 시, RP 몰입 돕는 특별 이벤트나 정보 출력됨.
        </p>

        <div className="space-y-6">
          {/* 돌발 */}
          <div className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="text-amber-500" size={20} />
              <h3 className="text-lg font-bold text-indigo-950">[!돌발]</h3>
            </div>
            <p className="text-sm text-slate-700 mb-4 leading-relaxed">
              세계관 설정 이용해 평화로운 분위기 깨는 '뜬금없고 소란스러운' 일회성 사건 즉시 발동됨 (경기 중 발생 불가).
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 font-mono text-xs text-slate-700">
              <p className="text-slate-400 mb-2">// 출력 예시</p>
              <p className="text-amber-600 font-bold mb-1">▶ 돌발 사건 발생!</p>
              <p className="leading-relaxed">모나코 GP 요트 파티 중, 레온의 극성 팬클럽 'Royal Rogue' 회원들이 단체로 백마 가면을 쓰고 나타나 요트 주위를 제트스키로 맴돌며 샴페인을 뿌려댐. 당황한 경호원들이 막으려다 바다에 빠지고, 레온은 그걸 보며 박장대소함.</p>
            </div>
          </div>

          {/* 폰 */}
          <div className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Smartphone className="text-blue-600" size={20} />
              <h3 className="text-lg font-bold text-indigo-950">[!폰]</h3>
            </div>
            <p className="text-sm text-slate-700 mb-4 leading-relaxed">
              레온의 폰 사용 내역(구매 내역, AV 시청 내역, 최근 검색 내역 등) 상세히 보여줌.
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 font-mono text-xs text-slate-700">
              <p className="text-slate-400 mb-2">// 출력 예시</p>
              <p className="text-blue-600 font-bold mb-1">📱[10월 18일] 최근 검색 내역</p>
              <ul className="space-y-1">
                <li>1. 텍사스 최고급 스테이크 하우스</li>
                <li>2. 파파야 폭스 아드리앵 리타이어 영상</li>
                <li>3. 수인용 맞춤형 수갑</li>
                <li>4. 모나코 헬기 이착륙 허가 규정</li>
                <li>5. 샴페인 얼룩 지우는 법</li>
              </ul>
            </div>
          </div>

          {/* 커뮤 */}
          <div className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <MessageSquare className="text-emerald-600" size={20} />
              <h3 className="text-lg font-bold text-indigo-950">[!커뮤]</h3>
            </div>
            <p className="text-sm text-slate-700 mb-4 leading-relaxed">
              온라인 F1 커뮤니티(Reddit r/F1, 한국 커뮤니티 등)의 실시간 반응과 키보드 배틀 보여줌.
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 font-mono text-xs text-slate-700 space-y-3">
              <p className="text-slate-400 mb-1">// 출력 예시</p>
              <div>
                <p className="text-emerald-600 font-bold mb-1">[Reddit r/F1]</p>
                <p><strong>[Post] 레온 저 미친놈 또 규정 허점 찌른 거 맞지?</strong> (작성자: RedWingsFan)</p>
                <p className="pl-4 text-slate-500 mt-1">↳ 저 미친 말대가리가 또 해냄 ㅋㅋㅋ FIA 지금쯤 뒷목 잡고 쓰러졌을 듯.</p>
                <p className="pl-4 text-slate-500">↳ 솔직히 얄밉긴 한데 천재적인 건 인정해야 됨.</p>
              </div>
              <div className="pt-3 border-t border-slate-200">
                <p className="text-emerald-600 font-bold mb-1">[Kr: f1갤]</p>
                <p><strong>제목: 야 오늘 검은사자 다운포스 세팅 실화냐?</strong> | 닉: 토토충</p>
                <p className="pl-4 text-slate-500 mt-1">↳ 미친 말대가리 오늘 코너링 돌다 날아가는 줄 알았네 ㅋㅋㅋ</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
