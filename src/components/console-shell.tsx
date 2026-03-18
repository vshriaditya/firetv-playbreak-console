import Link from "next/link";
import type { ReactNode } from "react";
import { flowSteps } from "@/lib/mock-data";

type StepKey = (typeof flowSteps)[number]["key"];

type ConsoleShellProps = {
  activeStep: StepKey;
  title: string;
  description: string;
  actions?: ReactNode;
  children: ReactNode;
};

export function ConsoleShell({
  activeStep,
  title,
  description,
  actions,
  children,
}: ConsoleShellProps) {
  return (
    <div className="console">
      <aside className="console-sidebar">
        <div className="brand-lockup">
          <div className="brand-mark">ads</div>
          <div>
            <p className="brand-overline">Amazon Ads</p>
            <h1>Playbreak Console</h1>
          </div>
        </div>

        <div className="sidebar-section">
          <p className="sidebar-label">Campaign flow</p>
          <nav className="step-nav">
            {flowSteps.map((step, index) => (
              <Link
                key={step.key}
                className={`step-link ${step.key === activeStep ? "is-active" : ""}`}
                href={step.href}
              >
                <span className="step-number">{index + 1}</span>
                <span>
                  <strong>{step.label}</strong>
                  <small>{step.eyebrow}</small>
                </span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="sidebar-card">
          <p className="sidebar-label">Playbreak value</p>
          <ul>
            <li>Interactive ad formats native to Fire TV content moments</li>
            <li>Amazon first-party audience targeting</li>
            <li>Closed-loop measurement across engagement and commerce</li>
          </ul>
        </div>
      </aside>

      <main className="console-main">
        <header className="console-header">
          <div>
            <p className="page-eyebrow">Fire TV placements / Playbreak</p>
            <h2>{title}</h2>
            <p className="page-description">{description}</p>
          </div>
          {actions ? <div className="header-actions">{actions}</div> : null}
        </header>

        <div className="console-content">{children}</div>
      </main>
    </div>
  );
}
