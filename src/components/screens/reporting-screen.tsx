"use client";

import Link from "next/link";
import { ConsoleShell } from "@/components/console-shell";
import { useCampaign } from "@/components/campaign-provider";
import {
  measurementCards,
  segmentPerformance,
  weeklyPerformance,
} from "@/lib/mock-data";

export function ReportingScreen() {
  const { campaign } = useCampaign();

  return (
    <ConsoleShell
      activeStep="reporting"
      title="Campaign reporting dashboard"
      description="Track operational health, viewer engagement, and business outcomes from one advertiser-facing dashboard."
      actions={
        <>
          <Link className="button button-secondary" href="/review">
            Return to review
          </Link>
          <Link className="button button-primary" href="/formats">
            Create another campaign
          </Link>
        </>
      }
    >
      <section className="surface-card reporting-hero">
        <div>
          <p className="sidebar-label">Live campaign</p>
          <h3>{campaign.campaignName}</h3>
          <p>
            {campaign.brandName} / {campaign.format} / {campaign.flightWindow}
          </p>
        </div>
        <div className="reporting-hero-meta">
          <div>
            <span>Status</span>
            <strong>{campaign.launchStatus}</strong>
          </div>
          <div>
            <span>Launch date</span>
            <strong>{campaign.launchDate || "Pending"}</strong>
          </div>
          <div>
            <span>Budget</span>
            <strong>{campaign.totalBudget}</strong>
          </div>
        </div>
      </section>

      <section className="metric-grid">
        {measurementCards.map((metric) => (
          <div key={metric.label} className="metric-card">
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <small>{metric.delta}</small>
          </div>
        ))}
      </section>

      <section className="two-column-grid">
        <section className="surface-card">
          <div className="section-heading">
            <div>
              <h3>Trendline snapshot</h3>
              <p>Weekly progression across completion, engagement, and attributed conversion signal.</p>
            </div>
          </div>
          <div className="chart-list">
            {weeklyPerformance.map((week) => (
              <div key={week.label} className="chart-row">
                <span>{week.label}</span>
                <div className="chart-bars">
                  <div style={{ width: `${week.completion}%` }}>
                    <small>Completion {week.completion}%</small>
                  </div>
                  <div className="engagement" style={{ width: `${week.engagement}%` }}>
                    <small>Engagement {week.engagement}%</small>
                  </div>
                  <div className="conversion" style={{ width: `${week.conversions}%` }}>
                    <small>Conversion {week.conversions}%</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="surface-card">
          <div className="section-heading">
            <div>
              <h3>Brand lift readout</h3>
              <p>Illustrative brand effect metrics presented in an Amazon Ads-style summary.</p>
            </div>
          </div>
          <div className="lift-stack">
            <div>
              <span>Brand recall lift</span>
              <strong>+18.6%</strong>
              <small>Exposed audience vs. control</small>
            </div>
            <div>
              <span>Message association</span>
              <strong>+14.3%</strong>
              <small>Reward-based response panel</small>
            </div>
            <div>
              <span>Purchase intent</span>
              <strong>+11.2%</strong>
              <small>Modeled lift among engaged viewers</small>
            </div>
          </div>
        </section>
      </section>

      <section className="two-column-grid">
        <section className="surface-card">
          <div className="section-heading">
            <div>
              <h3>Audience segment performance</h3>
              <p>Dummy data aligned to the selected audience strategy.</p>
            </div>
          </div>
          <div className="table-shell">
            <div className="table-header">
              <span>Segment</span>
              <span>Engagement</span>
              <span>CVR</span>
              <span>ROAS</span>
            </div>
            {segmentPerformance.map((segment) => (
              <div key={segment.segment} className="table-row">
                <span>{segment.segment}</span>
                <span>{segment.engagement}</span>
                <span>{segment.cvr}</span>
                <span>{segment.roas}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="surface-card">
          <div className="section-heading">
            <div>
              <h3>Attribution funnel</h3>
              <p>Closed-loop view from exposure through redemption and purchase.</p>
            </div>
          </div>
          <div className="funnel">
            <div>
              <span>Ad exposures</span>
              <strong>8.4M</strong>
            </div>
            <div>
              <span>Completed interactions</span>
              <strong>791K</strong>
            </div>
            <div>
              <span>Reward redemptions</span>
              <strong>4,812</strong>
            </div>
            <div>
              <span>Attributed purchases</span>
              <strong>3,240</strong>
            </div>
          </div>
        </section>
      </section>
    </ConsoleShell>
  );
}
