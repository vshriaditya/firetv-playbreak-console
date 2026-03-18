"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { defaultCampaign } from "@/lib/mock-data";

type CampaignState = typeof defaultCampaign;

type CampaignContextValue = {
  campaign: CampaignState;
  setField: <K extends keyof CampaignState>(field: K, value: CampaignState[K]) => void;
  setAnswerOption: (index: number, value: string) => void;
  toggleAudience: (segment: string) => void;
  launchCampaign: () => void;
  resetCampaign: () => void;
};

const CampaignContext = createContext<CampaignContextValue | null>(null);

export function CampaignProvider({ children }: { children: ReactNode }) {
  const [campaign, setCampaign] = useState<CampaignState>(defaultCampaign);

  const value = useMemo<CampaignContextValue>(
    () => ({
      campaign,
      setField: (field, newValue) => {
        setCampaign((current) => ({ ...current, [field]: newValue }));
      },
      setAnswerOption: (index, value) => {
        setCampaign((current) => ({
          ...current,
          answerOptions: current.answerOptions.map((option, optionIndex) =>
            optionIndex === index ? value : option,
          ),
        }));
      },
      toggleAudience: (segment) => {
        setCampaign((current) => {
          const exists = current.audienceSegments.includes(segment);

          return {
            ...current,
            audienceSegments: exists
              ? current.audienceSegments.filter((item) => item !== segment)
              : [...current.audienceSegments, segment],
          };
        });
      },
      launchCampaign: () => {
        setCampaign((current) => ({
          ...current,
          launchStatus: "Live",
          launchDate: "March 18, 2026",
        }));
      },
      resetCampaign: () => {
        setCampaign(defaultCampaign);
      },
    }),
    [campaign],
  );

  return <CampaignContext.Provider value={value}>{children}</CampaignContext.Provider>;
}

export function useCampaign() {
  const context = useContext(CampaignContext);

  if (!context) {
    throw new Error("useCampaign must be used within CampaignProvider");
  }

  return context;
}
