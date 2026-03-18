export const flowSteps = [
  {
    key: "overview",
    label: "Overview",
    href: "/",
    eyebrow: "Product",
  },
  {
    key: "formats",
    label: "Format selection",
    href: "/formats",
    eyebrow: "Setup",
  },
  {
    key: "builder",
    label: "Campaign builder",
    href: "/builder",
    eyebrow: "Creative",
  },
  {
    key: "targeting",
    label: "Targeting & budget",
    href: "/targeting",
    eyebrow: "Delivery",
  },
  {
    key: "review",
    label: "Review & launch",
    href: "/review",
    eyebrow: "Approval",
  },
  {
    key: "reporting",
    label: "Reporting",
    href: "/reporting",
    eyebrow: "Insights",
  },
] as const;

export const formatOptions = [
  {
    id: "QuickVoice",
    label: "QuickVoice",
    duration: "6-8 sec interaction",
    fit: "Voice-led recall and product education",
    summary:
      "Prompt viewers with a short spoken question and a one-tap answer moment optimized for lean-back attention.",
    strengths: ["Fast launch", "Voice-first", "High completion"],
    kpi: "Completion rate 92%",
  },
  {
    id: "SpeedPick",
    label: "SpeedPick",
    duration: "10-12 sec interaction",
    fit: "Selection-based offer and preference testing",
    summary:
      "Drive quick response with multiple answer choices, dynamic reward copy, and a stronger value exchange.",
    strengths: ["Choice-based", "Reward ready", "Strong engagement"],
    kpi: "Engagement lift 2.4x",
  },
  {
    id: "RevealIt",
    label: "RevealIt",
    duration: "12-15 sec interaction",
    fit: "Trivia and product reveal with richer visual payoff",
    summary:
      "Use a richer branded reveal moment to reinforce product imagery, reward messaging, and recall.",
    strengths: ["Visual reveal", "Premium feel", "Brand recall"],
    kpi: "Brand lift +41%",
  },
] as const;

export const defaultCampaign = {
  campaignName: "Playbreak Spring Launch",
  brandName: "Cascade Sparkling Water",
  format: "SpeedPick",
  question: "Which Cascade flavor should shoppers unlock next for game night?",
  answerOptions: ["Lime Zest", "Berry Peach", "Blood Orange", "Crisp Grapefruit"],
  correctAnswer: 2,
  rewardType: "Amazon.com Gift Card",
  rewardValue: "$3.00",
  brandColor: "#FF9900",
  creativeHeadline: "Choose the next fan-favorite flavor.",
  audienceSegments: ["In-market grocery", "Streaming families", "Prime deal seekers"],
  geography: "United States",
  device: "All Fire TV devices",
  bidModel: "CPE",
  totalBudget: "$50,000",
  dailyBudget: "$7,500",
  flightWindow: "Apr 15 - Apr 28",
  audienceEstimate: "12.8M reachable households",
  launchStatus: "Draft",
  launchDate: "",
};

export const audienceCatalog = [
  "In-market grocery",
  "Streaming families",
  "Prime deal seekers",
  "Health-conscious shoppers",
  "Sports & live TV viewers",
  "Household decision makers",
];

export const overviewHighlights = [
  {
    label: "Time to launch",
    value: "48 hours",
    detail: "From console setup to live Fire TV campaign",
  },
  {
    label: "Buy model",
    value: "CPE",
    detail: "Pay when customers actively engage",
  },
  {
    label: "Audience signal",
    value: "1P data",
    detail: "Amazon shopping and streaming insights",
  },
];

export const measurementCards = [
  { label: "Completion rate", value: "94.2%", delta: "+6.1 pts vs. benchmark" },
  { label: "Engagement rate", value: "71.8%", delta: "+2.4x interaction rate" },
  { label: "Reward redemption", value: "38.4%", delta: "4,812 claimed rewards" },
  { label: "Attributed conversions", value: "3,240", delta: "14-day Amazon purchase window" },
  { label: "Brand recall lift", value: "+18.6%", delta: "Exposed vs. control survey panel" },
  { label: "Purchase intent lift", value: "+11.2%", delta: "Brand lift modeled signal" },
];

export const weeklyPerformance = [
  { label: "Week 1", completion: 82, engagement: 61, conversions: 34 },
  { label: "Week 2", completion: 88, engagement: 66, conversions: 42 },
  { label: "Week 3", completion: 91, engagement: 72, conversions: 59 },
  { label: "Week 4", completion: 94, engagement: 76, conversions: 68 },
];

export const segmentPerformance = [
  { segment: "Prime deal seekers", engagement: "79%", cvr: "4.8%", roas: "3.9x" },
  { segment: "Streaming families", engagement: "74%", cvr: "4.2%", roas: "3.4x" },
  { segment: "In-market grocery", engagement: "71%", cvr: "5.1%", roas: "4.1x" },
  { segment: "Sports & live TV viewers", engagement: "66%", cvr: "3.7%", roas: "2.9x" },
];

export const launchChecklist = [
  "Creative follows Playbreak interaction guidelines",
  "Reward inventory and value are approved",
  "Targeting, geography, and device scope are aligned",
  "Budget and CPE caps are within account policy",
];
