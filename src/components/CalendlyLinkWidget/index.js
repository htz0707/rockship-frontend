import React, {useEffect} from "react";
import styles from './calendly-link-widget.module.scss';

export default function CalendlyLinkWidget({analytics, eventName, buttonName, buttonStyle}) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <div
        className={styles[buttonStyle]}
        onClick={() => {
          analytics.track(eventName);
          Calendly.initPopupWidget({
            url: "https://calendly.com/binhngoc17/rockship-app-builder",
          });
          return false;
        }}
      >
        <span>{buttonName}</span>
      </div>
    </div>
  );
}
