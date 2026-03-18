"use client";

import Link from "next/link";
import { ConsoleShell } from "@/components/console-shell";
import { useCampaign } from "@/components/campaign-provider";
import { Field, SectionCard } from "@/components/form-controls";
import { audienceCatalog } from "@/lib/mock-data";

export function TargetingScreen() {
  const { campaign, setField, toggleAudience } = useCampaign();

  return (
    <ConsoleShell
      activeStep="targeting"
      title="Set targeting and budget"
      description="Apply audience, delivery, and pricing controls before review and launch."
      actions={
        <Link className="button button-primary" href="/review">
          Continue to review
        </Link>
      }
    >
      <section className="builder-grid">
        <div className="stack">
          <SectionCard
            title="Audience targeting"
            description="Use a mix of realistic Amazon audience segments for the demo."
          >
            <div className="selection-grid">
              {audienceCatalog.map((segment) => {
                const isSelected = campaign.audienceSegments.includes(segment);

                return (
                  <button
                    key={segment}
                    className={`selection-chip ${isSelected ? "is-selected" : ""}`}
                    onClick={() => toggleAudience(segment)}
                    type="button"
                  >
                    {segment}
                  </button>
                );
              })}
            </div>
          </SectionCard>

          <SectionCard
            title="Geography and device"
            description="Keep delivery scoped to approved Fire TV inventory."
          >
            <div className="form-grid form-grid-three">
              <Field label="Geography">
                <select
                  value={campaign.geography}
                  onChange={(event) => setField("geography", event.target.value)}
                >
                  <option>United States</option>
                  <option>United States + Canada</option>
                  <option>North America</option>
                </select>
              </Field>
              <Field label="Device">
                <select
                  value={campaign.device}
                  onChange={(event) => setField("device", event.target.value)}
                >
                  <option>All Fire TV devices</option>
                  <option>Fire TV Stick + Cube</option>
                  <option>Fire TV smart TVs only</option>
                </select>
              </Field>
              <Field label="Flight window">
                <input
                  value={campaign.flightWindow}
                  onChange={(event) => setField("flightWindow", event.target.value)}
                />
              </Field>
            </div>
          </SectionCard>

          <SectionCard
            title="Bid model and budget"
            description="Reflect the core commercial controls in a stakeholder-friendly way."
          >
            <div className="form-grid form-grid-three">
              <Field label="Bid model">
                <select
                  value={campaign.bidModel}
                  onChange={(event) => setField("bidModel", event.target.value)}
                >
                  <option value="CPE">CPE</option>
                  <option value="CPM">CPM</option>
                  <option value="vCPE">vCPE</option>
                </select>
              </Field>
              <Field label="Total budget">
                <input
                  value={campaign.totalBudget}
                  onChange={(event) => setField("totalBudget", event.target.value)}
                />
              </Field>
              <Field label="Daily budget">
                <input
                  value={campaign.dailyBudget}
                  onChange={(event) => setField("dailyBudget", event.target.value)}
                />
              </Field>
            </div>
          </SectionCard>
        </div>

        <aside className="stack">
          <SectionCard
            title="Projected delivery"
            description="A realistic planning snapshot for stakeholder review."
          >
            <div className="plan-summary">
              <div>
                <span>Reachable audience</span>
                <strong>{campaign.audienceEstimate}</strong>
              </div>
              <div>
                <span>Estimated engagements</span>
                <strong>742K - 915K</strong>
              </div>
              <div>
                <span>Expected CPE range</span>
                <strong>$0.48 - $0.62</strong>
              </div>
              <div>
                <span>Forecasted reward redemptions</span>
                <strong>4.1K - 5.0K</strong>
              </div>
            </div>
          </SectionCard>

          <div className="inline-actions">
            <Link className="button button-secondary" href="/builder">
              Back to builder
            </Link>
            <Link className="button button-primary" href="/review">
              Review launch package
            </Link>
          </div>
        </aside>
      </section>
    </ConsoleShell>
  );
}
