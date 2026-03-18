"use client";

import Link from "next/link";
import { ConsoleShell } from "@/components/console-shell";
import { useCampaign } from "@/components/campaign-provider";
import { formatOptions } from "@/lib/mock-data";

export function FormatsScreen() {
  const { campaign, setField } = useCampaign();

  return (
    <ConsoleShell
      activeStep="formats"
      title="Select a Playbreak format"
      description="Choose the interaction format that best matches campaign goals, timing, and creative depth."
      actions={
        <Link className="button button-primary" href="/builder">
          Continue to builder
        </Link>
      }
    >
      <section className="format-grid">
        {formatOptions.map((format) => {
          const isActive = campaign.format === format.id;

          return (
            <button
              key={format.id}
              className={`format-card ${isActive ? "is-selected" : ""}`}
              onClick={() => setField("format", format.id)}
              type="button"
            >
              <div className="format-topline">
                <span>{format.label}</span>
                <strong>{format.duration}</strong>
              </div>
              <h3>{format.fit}</h3>
              <p>{format.summary}</p>
              <div className="pill-row">
                {format.strengths.map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>
              <div className="format-footer">
                <small>{format.kpi}</small>
                <span>{isActive ? "Selected" : "Click to choose"}</span>
              </div>
            </button>
          );
        })}
      </section>

      <section className="surface-card selection-summary">
        <div>
          <p className="sidebar-label">Current selection</p>
          <h3>{campaign.format}</h3>
          <p>
            The current demo defaults to <strong>{campaign.format}</strong>, optimized for
            multiple-choice engagement with a reward exchange.
          </p>
        </div>
        <div className="inline-actions">
          <Link className="button button-secondary" href="/">
            Back to overview
          </Link>
          <Link className="button button-primary" href="/builder">
            Build this campaign
          </Link>
        </div>
      </section>
    </ConsoleShell>
  );
}
