import React, { ReactElement } from "react";
import './slide-sction-layout.module.css'

const PREFIX = "_slideSecLay-de-64";

export default function SlideSectionLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <div className="slide-section-layout" prefix={PREFIX}>
      {children}
    </div>
  );
}
