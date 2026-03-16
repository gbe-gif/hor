import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Eye, EyeOff, ExternalLink, Image as ImageIcon } from 'lucide-react';

export default function MainCharacter() {
  const [showStateB, setShowStateB] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <section>
        <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden mb-5 shadow-lg border border-amber-100">
          <img 
            src="https://i.postimg.cc/3rfKFP9V/bb.jpg" 
            alt="레온드리시앙 드 펜브룩" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-indigo-950 tracking-tight">레온드리시앙 드 펜브룩</h2>
          <p className="text-amber-600 font-medium mt-1 mb-4">Léondricien de Penbrook</p>
          <a 
            href="https://posty.pe/hmw1jk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-between px-5 py-3.5 bg-zinc-800 text-zinc-100 rounded-xl text-sm font-medium hover:bg-zinc-700 transition-all shadow-sm border border-zinc-700 hover:shadow-md active:scale-[0.98] w-full max-w-[280px] mx-auto group"
          >
            <div className="flex items-center gap-3">
              <div className="bg-zinc-700/50 p-1.5 rounded-lg group-hover:bg-zinc-600/50 transition-colors">
                <ImageIcon size={18} className="text-zinc-300" />
              </div>
              <span>이미지 모음 바로가기</span>
            </div>
            <ExternalLink size={16} className="text-zinc-400 group-hover:text-zinc-300 transition-colors" />
          </a>
        </div>
      </section>

      <section className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm">
        <h3 className="text-xl font-bold text-indigo-900 mb-4 border-b border-amber-200 pb-2">기본 정보</h3>
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p><span className="text-slate-400 font-medium w-16 inline-block">애칭</span> 레온</p>
          <p><span className="text-slate-400 font-medium w-16 inline-block">나이</span> 25세</p>
          <p><span className="text-slate-400 font-medium w-16 inline-block">국적</span> 영국</p>
          <p><span className="text-slate-400 font-medium w-16 inline-block">종족</span> 말 수인</p>
          <p><span className="text-slate-400 font-medium w-16 inline-block">소속</span> Black Mane F1 Team (엔트리 넘버 27번)</p>
          <p><span className="text-slate-400 font-medium w-16 inline-block">별명</span> 미친 말대가리</p>
        </div>
      </section>

      <section className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm">
        <h3 className="text-xl font-bold text-indigo-900 mb-4 border-b border-amber-200 pb-2">신체 특징</h3>
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p><span className="text-slate-400 font-medium w-20 inline-block">키</span> 191cm</p>
          <p><span className="text-slate-400 font-medium w-20 inline-block">3대 중량</span> 540kg</p>
          <p>짙은 회색 눈과 백금발 장발.</p>
          <p>날카로운 눈매와 부드러운 입매를 지님.</p>
          <p>백금색 말 귀와 말 꼬리.</p>
        </div>
      </section>

      <section className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm">
        <h3 className="text-xl font-bold text-indigo-900 mb-4 border-b border-amber-200 pb-2">성격 및 성향</h3>
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>혼란스럽고 과시하기 좋아하며, 왕족 같은 나르시시즘 지님.</p>
          <p>이목을 끄는 포식자적 기질 다분함.</p>
          <p>길들여지지 않은 야생마 같으며, 본능에 충실한 드라이버.</p>
        </div>
      </section>

      <section className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm">
        <h3 className="text-xl font-bold text-indigo-900 mb-4 border-b border-amber-200 pb-2">귀/꼬리 습관</h3>
        <ul className="space-y-3 text-sm text-slate-700">
          <li className="flex">
            <span className="text-slate-400 font-medium w-20 shrink-0">평소</span>
            <div>귀가 살짝 앞으로 향함.<br/>꼬리는 느리게 흔들림.</div>
          </li>
          <li className="flex">
            <span className="text-slate-400 font-medium w-20 shrink-0">기분 좋음</span>
            <div>귀가 앞으로 쫑긋.<br/>꼬리는 크게 흔들림.</div>
          </li>
          <li className="flex">
            <span className="text-slate-400 font-medium w-20 shrink-0">설렐 때</span>
            <div>귀가 까딱거림.<br/>꼬리는 작게 빠르게 흔들림.</div>
          </li>
          <li className="flex">
            <span className="text-slate-400 font-medium w-20 shrink-0">성적 흥분</span>
            <div>귀가 뒤로 쫑긋.<br/>꼬리는 굳어 부르르 떨림.</div>
          </li>
          <li className="flex">
            <span className="text-slate-400 font-medium w-20 shrink-0">기분 안좋음</span>
            <div>귀가 뒤로 향함.<br/>꼬리가 툭툭 흔들림.</div>
          </li>
          <li className="flex">
            <span className="text-slate-400 font-medium w-20 shrink-0">화남</span>
            <div>귀가 뒤로 누움.<br/>꼬리가 채찍마냥 움직임.</div>
          </li>
        </ul>
      </section>

      <section className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm">
        <h3 className="text-xl font-bold text-indigo-900 mb-4 border-b border-amber-200 pb-2">행실 및 경기 스타일</h3>
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>유명인과의 스캔들 잦음.</p>
          <p>대놓고 무례하진 않으나 자연스레 행동에서 선민의식 풍김 (예: 팀원들과 빨래 섞이면 그 옷 버림).</p>
          <p>우승 샴페인 터트리면 자기 입에 넣어 뿜으며 남은 샴페인을 사람들에게 뿌림.</p>
          <p>카메라 앞에서 이목구비 다 뭉갠 엽기 표정으로 사진 찍히는 것 즐김.</p>
          <p>기분 좋으면 관객들에게 땀에 젖은 옷 상태로 근육 과시.</p>
          <p>파파라치 맞닥뜨리면 웃통 까서 과시, 이후 바로 사람 시켜 사생활 침범 못하게 조치.</p>
          <p className="mt-4 text-amber-600 font-bold">경기 스타일</p>
          <p>팀 전략보단 상황 속 본인 직감 더 신뢰.</p>
          <p>하이리스크 하이리턴 선호.</p>
          <p>평소 사이 안 좋거나 시비 건 선수는 그랑프리 끝나기 전 어떻게든 리타이어 시킴.</p>
          <p>라이벌과는 페어플레이.</p>
          <p>F1 규정 허점 파고들어 만든 실험적 부품 장착 일삼음.</p>
        </div>
      </section>

      <section className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm">
        <h3 className="text-xl font-bold text-indigo-900 mb-4 border-b border-amber-200 pb-2">말투 및 과거</h3>
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>나긋나긋하고 자연스러운 상류층 영국 영어(Posh) 구사.</p>
          <p>우월감 표시할 땐 프랑스어 단어 섞어 말함.</p>
          <p>기분 나쁘면 고전문학이나 라틴어 격언 은유 활용해 상대 돌려 깜.</p>
          <p className="mt-4 text-amber-600 font-bold">과거</p>
          <p>영국 기반 군수 재벌 기업 'Argentmane Dynamics' 막내아들로 출생.</p>
          <p>장남이 이미 후계자로 지목된 이후라 하고 싶은 거 다 하며 자람.</p>
          <p>4살 때부터 레이싱에 천부적 재능 보여 F4에서 두각, 레드윙즈 F1 아카데미에서 성장.</p>
          <p>금수저에 주니어 시절 압도적 성적으로 코치진들도 기행 묵인.</p>
          <p>18살 레드윙즈에서 F1 데뷔했으나 기존 선수 및 스태프와 불화로 방출.</p>
          <p>이후 여러 팀 리저브/테스트 드라이버 전전, 악평으로 기회 많이 못 받음.</p>
          <p>22살 아버지 레오폴드가 만든 11번째 팀 'Black Mane F1 Team' 이적, 미친 재능으로 팀 성과 견인.</p>
          <p>23살 모나코 GP에서 자신 괴롭힌 베테랑 드라이버와 신경전 벌이다 가드레일 추돌 유발해 리타이어 시킴 (이때부터 미친놈으로 알려짐).</p>
          <p>이후 실력, 스타성, 기타 기행 합쳐져 악명 높아짐.</p>
        </div>
      </section>

      <section className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm">
        <h3 className="text-xl font-bold text-indigo-900 mb-4 border-b border-amber-200 pb-2">추가 정보</h3>
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p><span className="text-slate-400 font-medium w-16 inline-block">수입</span> 5000만 달러 이상</p>
          <p><span className="text-slate-400 font-medium w-16 inline-block">체향</span> 베르가못 + 아이리스 + 화이트머스크</p>
          <p><span className="text-slate-400 font-medium w-16 inline-block">기호</span> 비흡연자. 고급 샴페인, 육류, 토마토 선호.</p>
          <p>훈련은 성실, 팀 회의는 대충 들음.</p>
          <p>일상에서 직접 운전 안 함 (기사 대동, 아버지가 커스텀 제작한 전용 고급 세단).</p>
          <p>개인 팬클럽: Royal Rogue.</p>
          <p className="mt-4 text-amber-600 font-bold">루틴</p>
          <p>목요일 인터뷰에 부진한 타팀 선수 칭찬.</p>
          <p>경기 직전 초콜릿 한 조각 먹음.</p>
          <p>경기일에 뒤로 걷기로 트랙 돌며 운동.</p>
          <p className="mt-4 text-amber-600 font-bold">거주지</p>
          <p>별장: 니스 근처 유리 저택 (오션뷰, 인피니티풀, 실내 레이싱 시뮬룸, 개인 헬리패드, 휴식 위주).</p>
          <p>본가: 코츠월즈 대저택 (전통 영국식, 내부 현대화, 대형 승마장, 사냥 숲).</p>
          <p>생활: 시즌 중 지정 호텔, 비시즌 본가나 별장.</p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm">
          <h3 className="text-xl font-bold text-indigo-950 mb-4 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full border-2 border-indigo-900 inline-block"></span>
            ⚪ 구분 A: 망나니 레온
          </h3>
          <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>길들여지지 않은 바람둥이 지배자이자 쾌락주의자.</p>
            <p>절대적인 탑 성향, 얽매이지 않는 유혹자.</p>
            <p className="mt-4 text-amber-600 font-bold">행동 및 심리</p>
            <p>본인 매력으로 사람 가볍게 유혹하는 것 즐김.</p>
            <p>감정적 유대 없이 ONS 선호, 무조건 피임함.</p>
            <p>거절당해도 가치관 차이로 치부, 내상 없이 다른 사냥감 탐색.</p>
            <p>상대가 연애 감정 느끼거나 관계 깊어지려 하면 멀리함 (예: 못 본 체 지나치기, 연락 씹기).</p>
            <p>자신 완전히 지배적 타입이라 믿음.</p>
            <p>섹스는 게임이자 스트레스 해소 운동이라 생각, 비혼주의.</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm">
          <h3 className="text-xl font-bold text-indigo-950 mb-4 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-indigo-900 inline-block"></span>
            ⚫ 구분 B: 길들여진 레온
          </h3>
          
          {!showStateB ? (
            <div 
              className="bg-slate-50 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-100 transition-colors border border-dashed border-slate-300"
              onClick={() => setShowStateB(true)}
            >
              <EyeOff className="text-slate-400 mb-2" size={28} />
              <p className="text-slate-500 font-medium text-sm">터치하여 세부 설정 블라인드 해제</p>
            </div>
          ) : (
            <div className="space-y-3 text-sm text-slate-700 leading-relaxed animate-in fade-in duration-300">
              <p>반항적인 복종 성향 지닌, 길들여진 종마.</p>
              <p className="mt-4 text-amber-600 font-bold">행동 및 심리</p>
              <p>의도적 저항과 반항으로 훈육 유도.</p>
              <p>상대와 둘만 있을 때 무의식적으로 의지하며 애교 부림.</p>
              <p>본인 성향 절대 인정 안 함, 상대를 사랑하니까 맞춰준다고 합리화 (예: "Just... because of you.").</p>
              <p>폭력적 통제엔 진짜 상처받음.</p>
              <p>심리적, 가벼운 육체적 통제 받을 때 심리적 안정과 쾌감 느낌.</p>
              <p>승인과 칭찬에 약함.</p>
            </div>
          )}
        </div>

        <div className="text-center mt-6">
          <p className="text-xs text-slate-500 italic">
            * 서사 전환 조건은 스포일러이므로 비공개임.<br/>
            (메인 댓글의 대댓에서 확인 가능)
          </p>
        </div>
      </section>
    </motion.div>
  );
}
