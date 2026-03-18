"use client";

import Link from "next/link";
import { ConsoleShell } from "@/components/console-shell";
import { useCampaign } from "@/components/campaign-provider";
import { Field, SectionCard } from "@/components/form-controls";

const rewardTypes = [
  "Amazon.com Gift Card",
  "Prime Video Credit",
  "Brand Coupon",
] as const;

export function BuilderScreen() {
  const { campaign, setAnswerOption, setField } = useCampaign();

  return (
    <ConsoleShell
      activeStep="builder"
      title="Build your Playbreak campaign"
      description="Configure campaign metadata, interaction design, reward logic, and a branded creative preview."
      actions={
        <Link className="button button-primary" href="/targeting">
          Continue to targeting
        </Link>
      }
    >
      <section className="builder-grid">
        <div className="stack">
          <SectionCard
            title="Campaign details"
            description="Set the campaign identity exactly how a console user would."
          >
            <div className="form-grid">
              <Field label="Campaign name">
                <input
                  value={campaign.campaignName}
                  onChange={(event) => setField("campaignName", event.target.value)}
                />
              </Field>
              <Field label="Brand name">
                <input
                  value={campaign.brandName}
                  onChange={(event) => setField("brandName", event.target.value)}
                />
              </Field>
              <Field label="Creative headline" hint="Shown in preview and review summaries">
                <input
                  value={campaign.creativeHeadline}
                  onChange={(event) => setField("creativeHeadline", event.target.value)}
                />
              </Field>
            </div>
          </SectionCard>

          <SectionCard
            title="Question and answers"
            description="Build the core interaction prompt and designate the correct answer."
          >
            <div className="form-grid">
              <Field label="Question">
                <textarea
                  value={campaign.question}
                  onChange={(event) => setField("question", event.target.value)}
                  rows={3}
                />
              </Field>

              <div className="answer-grid">
                {campaign.answerOptions.map((option, index) => (
                  <Field key={`${index}-${option}`} label={`Answer option ${index + 1}`}>
                    <input
                      value={option}
                      onChange={(event) => setAnswerOption(index, event.target.value)}
                    />
                  </Field>
                ))}
              </div>

              <Field label="Correct answer">
                <select
                  value={campaign.correctAnswer}
                  onChange={(event) => setField("correctAnswer", Number(event.target.value))}
                >
                  {campaign.answerOptions.map((option, index) => (
                    <option key={`${option}-${index}`} value={index}>
                      {`Option ${index + 1}: ${option}`}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
          </SectionCard>

          <SectionCard
            title="Reward and brand styling"
            description="Set the value exchange and adjust the branded visual treatment."
          >
            <div className="form-grid form-grid-three">
              <Field label="Reward type">
                <select
                  value={campaign.rewardType}
                  onChange={(event) => setField("rewardType", event.target.value)}
                >
                  {rewardTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Reward value">
                <input
                  value={campaign.rewardValue}
                  onChange={(event) => setField("rewardValue", event.target.value)}
                />
              </Field>
              <Field label="Brand color">
                <input
                  type="color"
                  value={campaign.brandColor}
                  onChange={(event) => setField("brandColor", event.target.value)}
                />
              </Field>
            </div>
          </SectionCard>
        </div>

        <aside className="preview-card">
          <div className="preview-shell">
            <div className="preview-topline">
              <span>{campaign.brandName}</span>
              <small>{campaign.format}</small>
            </div>
            <div
              className="preview-banner"
              style={{
                background: `linear-gradient(135deg, ${campaign.brandColor}, #142033)`,
              }}
            >
              <p>Reward unlocked</p>
              <strong>{campaign.rewardValue}</strong>
              <span>{campaign.rewardType}</span>
            </div>
            <h3>{campaign.creativeHeadline}</h3>
            <p>{campaign.question}</p>
            <div className="preview-options">
              {campaign.answerOptions.map((option, index) => (
                <div
                  key={`${option}-${index}`}
                  className={index === campaign.correctAnswer ? "is-correct" : ""}
                >
                  <span>{String.fromCharCode(65 + index)}</span>
                  <strong>{option}</strong>
                </div>
              ))}
            </div>
            <div className="preview-footer">
              <span>Fire TV native unit preview</span>
              <small>Desktop console approximation</small>
            </div>
          </div>

          <div className="inline-actions">
            <Link className="button button-secondary" href="/formats">
              Back to formats
            </Link>
            <Link className="button button-primary" href="/targeting">
              Save and continue
            </Link>
          </div>
        </aside>
      </section>
    </ConsoleShell>
  );
}
