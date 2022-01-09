import Script from 'next/script';

export const GoogleApi = () => {
  return (
    <>
      <Script
        src="https://apis.google.com/js/api.js"
        strategy="beforeInteractive"
      />
    </>
  );
};
