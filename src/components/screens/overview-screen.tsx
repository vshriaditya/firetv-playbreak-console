import Link from "next/link";
import { ConsoleShell } from "@/components/console-shell";
import { SectionCard, StatCard } from "@/components/form-controls";
import { measurementCards, overviewHighlights } from "@/lib/mock-data";

export function OverviewScreen() {
  return (
    <ConsoleShell
      activeStep="overview"
      title="Playbreak campaigns built for Amazon Ads buyers"
      description="Launch interactive Fire TV campaigns through a familiar console workflow, then measure engagement, reward redemption, and attributed outcomes in one place."
      actions={
        <>
          <Link className="button button-secondary" href="/reporting">
            View sample reporting
          </Link>
          <Link className="button button-primary" href="/formats">
            Start campaign setup
          </Link>
        </>
      }
    >
      <section className="hero-grid">
        <div className="hero-panel">
          <span className="hero-badge">Now available in Fire TV placements</span>
          <h3>From format selection to live campaign in 48 hours.</h3>
          <p>
            Playbreak lets advertisers launch lightweight interactive ad moments across
            Fire TV inventory with Amazon audience targeting, CPE pricing, and
            closed-loop measurement.
          </p>

          <div className="timeline-rail">
            <div>
              <span>1</span>
              <strong>Select format</strong>
              <small>QuickVoice, SpeedPick, or RevealIt</small>
            </div>
            <div>
              <span>2</span>
              <strong>Build creative</strong>
              <small>Question, answer options, reward, and brand preview</small>
            </div>
            <div>
              <span>3</span>
              <strong>Measure performance</strong>
              <small>Completion, engagement, conversion, and lift</small>
            </div>
          </div>
        </div>

        <div className="hero-metrics">
          {overviewHighlights.map((item) => (
            <StatCard
              key={item.label}
              label={item.label}
              value={item.value}
              detail={item.detail}
            />
          ))}
        </div>
      </section>

      <section className="two-column-grid">
        <SectionCard
          title="How the advertiser journey works"
          description="A productized console flow designed for account teams, traders, and campaign managers."
        >
          <div className="process-grid">
            <div className="process-step">
              <span>01</span>
              <h4>Choose a Playbreak format</h4>
              <p>Select the interaction pattern that best fits recall, reward, or choice-based engagement goals.</p>
            </div>
            <div className="process-step">
              <span>02</span>
              <h4>Configure campaign details</h4>
              <p>Set the prompt, answer options, reward value, and brand color for a realistic creative preview.</p>
            </div>
            <div className="process-step">
              <span>03</span>
              <h4>Define delivery controls</h4>
              <p>Apply audience, geography, device, and budget settings using Amazon Ads-style buying controls.</p>
            </div>
            <div className="process-step">
              <span>04</span>
              <h4>Launch and optimize</h4>
              <p>Review launch readiness and monitor full-funnel performance with brand lift style readouts.</p>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          title="Measurement stakeholders care about"
          description="All values below use realistic dummy data to support stakeholder review."
        >
          <div className="metric-grid compact">
            {measurementCards.slice(0, 4).map((metric) => (
              <div key={metric.label} className="metric-card">
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
                <small>{metric.delta}</small>
              </div>
            ))}
          </div>
          <div className="inline-actions">
            <Link className="text-link" href="/reporting">
              Explore reporting dashboard
            </Link>
          </div>
        </SectionCard>
      </section>
    </ConsoleShell>
  );
}
