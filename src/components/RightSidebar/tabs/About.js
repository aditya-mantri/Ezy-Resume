import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

const AboutTab = () => {
  const { t } = useTranslation('rightSidebar');

  return (
    <div>
      <hr className="my-5" />

      <div className="shadow text-center p-5">
        <h6 className="font-bold text-sm mb-2">{t('about.sourceCode.heading')}</h6>

        <div className="text-sm">{t('about.sourceCode.body')}</div>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/aditya-mantri"
          className="flex justify-center items-center mt-4 bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-5 rounded"
        >
          <div className="flex justify-center items-center">
            <i className="material-icons mr-2 font-bold text-base">code</i>
            <span className="text-sm">{t('about.sourceCode.buttons.githubRepo')}</span>
          </div>
        </a>
      </div>

      <div className="mt-5">
        <p className="text-xs font-gray-600 text-center">
          <Trans t={t} i18nKey="about.footer.credit">
            Made with Love by
            <a
              className="font-bold hover:underline"
              href="https://adityamantri.netlify.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Aditya Mantri
            </a>
          </Trans>
        </p>
        <p className="text-xs font-gray-600 text-center">{t('about.footer.thanks')}</p>
      </div>

    </div>
  );
};

export default AboutTab;
