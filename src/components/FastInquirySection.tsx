import React from 'react';
import { Phone, MapPin, CheckCircle2, ExternalLink } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { INQUIRY_URL, handlePhoneClick } from '../utils/navigation';

interface FastInquirySectionProps {
  onOpenApplication?: () => void;
}

export const FastInquirySection: React.FC<FastInquirySectionProps> = () => {
  return (
    <section
      id="apply"
      className="section-apply bg-[#ffcc00] text-black py-16 sm:py-20 md:py-24 relative overflow-hidden w-full max-w-full"
    >
      {/* Fallback anchor for any existing #fast-inquiry links */}
      <div id="fast-inquiry" className="absolute -top-16 left-0" />
      <div id="fast-inquiry-form" className="absolute -top-16 left-0" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" distance={30}>
          <div className="apply-yellow-layout grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="apply-yellow-left lg:col-span-6 flex flex-col justify-center reveal-item reveal-delay-1">
              <h2 className="apply-yellow-title text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-[1.25] tracking-tight mb-5">
                지금, AI 취업에<br />도전하세요!
              </h2>
              <p className="apply-yellow-sub text-base sm:text-lg font-bold text-black/90 leading-relaxed mb-8">
                국비지원 자격 여부부터 취업 및 교육과정까지<br />
                <u className="decoration-2 underline-offset-4 decoration-black">
                  무료로 상담해드립니다.
                </u>
              </p>

              <div className="apply-yellow-contact space-y-4 sm:space-y-5 mb-8">
                <a
                  href="tel:1599-6529"
                  className="apply-contact-item flex items-center gap-4 group p-2 sm:p-2.5 -ml-2 rounded-2xl hover:bg-black/5 transition-colors"
                  title="교육문의 (PC: 상담신청 / 모바일: 전화연결)"
                  onClick={handlePhoneClick}
                >
                  <div className="apply-icon-circle w-12 h-12 rounded-full bg-black flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                    <Phone size={22} color="#ffffff" fill="#ffffff" />
                  </div>
                  <div className="apply-contact-text">
                    <span className="apply-contact-label text-xs font-bold text-black/70 block">
                      교육문의
                    </span>
                    <span className="apply-contact-value phone-number text-2xl sm:text-3xl font-black text-black tracking-tight group-hover:opacity-80 transition-opacity">
                      1599-6529
                    </span>
                  </div>
                </a>

                <div className="apply-contact-item flex items-center gap-4 p-2 sm:p-2.5 -ml-2 rounded-2xl">
                  <div className="apply-icon-circle w-12 h-12 rounded-full bg-black flex items-center justify-center shrink-0 shadow-md">
                    <MapPin size={22} color="#ffffff" />
                  </div>
                  <div className="apply-contact-text">
                    <span className="apply-contact-label text-xs font-bold text-black/70 block">
                      교육장소
                    </span>
                    <span className="apply-contact-value text-lg sm:text-xl font-extrabold text-black tracking-tight">
                      100% 오프라인 (서울 신림)
                    </span>
                  </div>
                </div>
              </div>

              <p className="apply-yellow-cheer text-sm sm:text-base font-extrabold text-black/80 mt-1">
                여러분의 꿈을 응원합니다!
              </p>
            </div>

            {/* Right Consultation CTA Card & Button */}
            <div className="apply-form-card apply-consult-card lg:col-span-6 reveal-item reveal-delay-2">
              <div className="bg-white text-gray-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-black/5 max-w-xl mx-auto">
                
                <div className="apply-consult-badge-row mb-4">
                  <span className="apply-consult-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-extrabold">
                    <span className="apply-pulse-dot relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>
                    실시간 접수 중 · 공식 신청폼 접수
                  </span>
                </div>

                <h3 className="apply-consult-title text-2xl sm:text-3xl font-black text-gray-900 mb-3 flex items-center gap-1.5 tracking-tight">
                  빠른 교육상담 신청<span className="purple-dot text-violet-600">●</span>
                </h3>

                <p className="apply-consult-desc text-sm sm:text-base text-gray-600 font-medium leading-relaxed mb-6">
                  국비지원 100% 무료 수강 자격부터 희망 과정 1:1 맞춤 상담까지!<br />
                  간단한 설문 작성으로 1분 만에 상담 신청이 완료됩니다.
                </p>

                <div className="apply-consult-checklist space-y-3 mb-8">
                  <div className="apply-checklist-item flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 font-semibold leading-snug">
                    <CheckCircle2 size={18} className="apply-check-icon text-emerald-600 shrink-0 mt-0.5" />
                    <span>수강료 전액 국비지원 0원 (매월 훈련장려금 별도 지급)</span>
                  </div>
                  <div className="apply-checklist-item flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 font-semibold leading-snug">
                    <CheckCircle2 size={18} className="apply-check-icon text-emerald-600 shrink-0 mt-0.5" />
                    <span>전공 무관 기초부터 실무 프로젝트까지 단계별 맞춤 케어</span>
                  </div>
                  <div className="apply-checklist-item flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 font-semibold leading-snug">
                    <CheckCircle2 size={18} className="apply-check-icon text-emerald-600 shrink-0 mt-0.5" />
                    <span>한국정보교육원 협약기업 프로젝트 & 취업 매칭 지원</span>
                  </div>
                </div>

                {/* Main Consultation Application Button */}
                <a
                  href={INQUIRY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apply-naver-btn group flex items-center justify-between w-full py-4 sm:py-4.5 px-6 rounded-2xl bg-[#03c75a] hover:bg-[#02b350] text-white shadow-xl shadow-[#03c75a]/25 hover:shadow-[#03c75a]/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                  id="naverApplyButton"
                >
                  <div className="apply-naver-btn-left flex items-center gap-3">
                    <span className="apply-naver-logo-tag px-2.5 py-1 rounded-md bg-black/20 text-white text-[11px] sm:text-xs font-black tracking-wider uppercase">
                      공식신청폼
                    </span>
                    <span className="apply-naver-btn-text text-base sm:text-lg font-black tracking-tight">
                      상담 신청하기
                    </span>
                  </div>
                  <div className="apply-naver-btn-icon w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform shrink-0">
                    <ExternalLink size={18} />
                  </div>
                </a>

                <p className="text-center text-[11px] sm:text-xs text-gray-400 mt-4">
                  접수 후 1시간 이내(영업시간 기준) 전문 교육상담사가 순차 연락드립니다.
                </p>

              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
