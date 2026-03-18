"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ConsoleShell } from "@/components/console-shell";
import { useCampaign } from "@/components/campaign-provider";
import { launchChecklist } from "@/lib/mock-data";

export function ReviewScreen() {
  const router = useRouter();
  const { campaign, launchCampaign } = useCampaign();

  const handleLaunch = () => {
    launchCampaign();
    router.push("/reporting");
  };

  return (
    <ConsoleShell
      activeStep="review"
      title="Review and launch"
      description="Validate the campaign package before submitting it for go-live."
      actions={
        <button className="button button-primary" onClick={handleLaunch} type="button">
          Launch campaign
        </button>
      }
    >
      <section className="two-column-grid review-grid">
        <div className="surface-card">
          <div className="section-heading">
            <div>
              <h3>Campaign summary</h3>
              <p>Everything configured in the flow is summarized here for final review.</p>
            </div>
            <span className={`status-badge ${campaign.launchStatus === "Live" ? "live" : ""}`}>
              {campaign.launchStatus}
            </span>
          </div>

          <div className="summary-grid">
            <div>
              <span>Campaign</span>
              <strong>{campaign.campaignName}</strong>
            </div>
            <div>
              <span>Brand</span>
              <strong>{campaign.brandName}</strong>
            </div>
            <div>
              <span>Format</span>
              <strong>{campaign.format}</strong>
            </div>
            <div>
              <span>Reward</span>
              <strong>
                {campaign.rewardValue} {campaign.rewardType}
              </strong>
            </div>
            <div>
              <span>Audience</span>
              <strong>{campaign.audienceSegments.join(", ")}</strong>
            </div>
            <div>
              <span>Delivery</span>
              <strong>
                {campaign.geography} / {campaign.device}
              </strong>
            </div>
            <div>
              <span>Budget</span>
              <strong>
                {campaign.bidModel} / {campaign.totalBudget}
              </strong>
            </div>
            <div>
              <span>Flight</span>
              <strong>{campaign.flightWindow}</strong>
            </div>
          </div>
        </div>

        <div className="stack">
          <section className="surface-card">
            <div className="section-heading">
              <div>
                <h3>Launch readiness checklist</h3>
                <p>Productized approval checks tailored to the demo.</p>
              </div>
            </div>
            <div className="checklist">
              {launchChecklist.map((item) => (
                <div key={item} className="checklist-item">
                  <span>✓</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="surface-card">
            <div className="section-heading">
              <div>
                <h3>Launch expectation</h3>
                <p>Based on standard Playbreak review and trafficking timing.</p>
              </div>
            </div>
            <div className="launch-timing">
              <strong>Live within 48 hours</strong>
              <p>
                Campaign will appear in supported Fire TV placements after approval,
                reward provisioning, and QA validation.
              </p>
            </div>
          </section>

          <div className="inline-actions">
            <Link className="button button-secondary" href="/targeting">
              Back to targeting
            </Link>
            <button className="button button-primary" onClick={handleLaunch} type="button">
              Launch and open reporting
            </button>
          </div>
        </div>
      </section>
    </ConsoleShell>
  );
}
