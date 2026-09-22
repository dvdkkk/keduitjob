import React from 'react';

export const INQUIRY_URL = 'https://naver.me/xoHM4yvV';

/**
 * Open consultation inquiry form in a new window/tab
 */
export const openInquiryForm = () => {
  window.open(INQUIRY_URL, '_blank', 'noopener,noreferrer');
};

/**
 * Click handler for telephone links:
 * - PC desktop: opens consultation form in new tab
 * - Mobile: initiates native phone call (tel:)
 */
export const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  const isMobile =
    window.innerWidth < 768 ||
    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (!isMobile) {
    e.preventDefault();
    openInquiryForm();
  }
};
