export type Severity = "critical" | "warning";
export type AlertType = "missing" | "stale" | "gap" | "volume" | "quality";
export type Status = "unreviewed" | "action_needed" | "escalated" | "context";

export interface Note {
  id: string;
  type: "status" | "action" | "context";
  text: string;
  author: string;
  mention?: string;
  timestamp: string;
}

export interface PosAlert {
  id: string;
  distributor: string;
  branch: string;
  buyersEdge: boolean;
  type: AlertType;
  severity: Severity;
  daysSince: number;
  cadence: "daily" | "weekly" | "monthly";
  status: Status;
  notes: Note[];
}

export const TYPE_LABEL: Record<AlertType, string> = {
  missing: "Missing POS",
  stale: "Stale POS",
  gap: "Coverage Gap",
  volume: "Volume Anomaly",
  quality: "Data Quality",
};

export const STATUS_LABEL: Record<Status, string> = {
  unreviewed: "Unreviewed",
  action_needed: "Action Needed",
  escalated: "Escalated",
  context: "No Action — Context",
};

export const STATUS_STYLE: Record<Status, string> = {
  unreviewed: "bg-[#f3f4f4] text-[#687576]",
  action_needed: "bg-[#e6f4f4] text-[#038487]",
  escalated: "bg-[#fdecec] text-[#c0342d]",
  context: "bg-[#e9f7f0] text-[#1a7a4c]",
};

export const CURRENT_USER = "Marissa Chen";
export const TEAMMATES = ["Marissa Chen", "Helen Foster", "Cameron Worthington", "Chris Yang"];

export const TEAMMATE_HANDLES: Record<string, string> = {
  "Marissa Chen": "marissa",
  "Helen Foster": "hfoster",
  "Cameron Worthington": "cworthington",
  "Chris Yang": "cyang",
};

export const HANDLE_TO_TEAMMATE: Record<string, string> = Object.fromEntries(
  Object.entries(TEAMMATE_HANDLES).map(([name, handle]) => [handle, name])
);

export const INITIAL_ALERTS: PosAlert[] = [
  {
    id: "a1",
    distributor: "Network Services",
    branch: "Main DC",
    buyersEdge: false,
    type: "missing",
    severity: "critical",
    daysSince: 9,
    cadence: "weekly",
    status: "action_needed",
    notes: [
      {
        id: "n1",
        type: "action",
        text: "Network Services hasn't sent a file in 9 days. Last received Oct 14. Flagging before VDA cutoff.",
        author: "Cameron Worthington",
        mention: "Helen Foster",
        timestamp: "2 days ago",
      },
    ],
  },
  {
    id: "a2",
    distributor: "Benny Keith",
    branch: "Main DC",
    buyersEdge: false,
    type: "missing",
    severity: "critical",
    daysSince: 19,
    cadence: "weekly",
    status: "action_needed",
    notes: [
      {
        id: "n2",
        type: "action",
        text: "Benny Keith down 19 days. VDA cutoff is next Thursday — if nothing comes in by Tuesday we need to escalate to account manager.",
        author: "Helen Foster",
        mention: "Marissa Chen",
        timestamp: "1 day ago",
      },
    ],
  },
  {
    id: "a3",
    distributor: "Greco",
    branch: "Main DC",
    buyersEdge: false,
    type: "missing",
    severity: "critical",
    daysSince: 44,
    cadence: "monthly",
    status: "escalated",
    notes: [
      {
        id: "n3",
        type: "action",
        text: "Escalated to Greco account manager on Nov 3. 44 days no transmission, 56 units affected. Awaiting response.",
        author: "Cameron Worthington",
        mention: "Marissa Chen",
        timestamp: "6 days ago",
      },
    ],
  },
  {
    id: "a4",
    distributor: "Reinhart FoodService",
    branch: "Midwest",
    buyersEdge: false,
    type: "missing",
    severity: "critical",
    daysSince: 12,
    cadence: "weekly",
    status: "unreviewed",
    notes: [],
  },
  {
    id: "a5",
    distributor: "Sysco Chicago",
    branch: "Chicago",
    buyersEdge: false,
    type: "volume",
    severity: "warning",
    daysSince: 3,
    cadence: "daily",
    status: "context",
    notes: [
      {
        id: "n5",
        type: "context",
        text: "Sysco Chicago branch showing 28% drop vs previous month. Checked run rate — looks like a transmission gap not a real volume drop. Monitoring.",
        author: "Marissa Chen",
        timestamp: "3 days ago",
      },
    ],
  },
  {
    id: "a6",
    distributor: "Buyer's Edge",
    branch: "Multiple",
    buyersEdge: true,
    type: "volume",
    severity: "warning",
    daysSince: 5,
    cadence: "weekly",
    status: "context",
    notes: [
      {
        id: "n6",
        type: "context",
        text: "Buyer's Edge volume choppy again this week. Not unusual for them — do not escalate unless it hits 3 weeks with nothing.",
        author: "Helen Foster",
        timestamp: "4 days ago",
      },
    ],
  },
  {
    id: "a7",
    distributor: "Gordon Food Service",
    branch: "Distribution Center",
    buyersEdge: false,
    type: "stale",
    severity: "warning",
    daysSince: 6,
    cadence: "weekly",
    status: "action_needed",
    notes: [
      {
        id: "n7",
        type: "status",
        text: "Gordon's file came in late again this week — SAP migration issue per their team. Expecting resubmission by Friday.",
        author: "Helen Foster",
        mention: "Chris Yang",
        timestamp: "1 day ago",
      },
    ],
  },
  {
    id: "a8",
    distributor: "Vistar",
    branch: "RC",
    buyersEdge: false,
    type: "missing",
    severity: "warning",
    daysSince: 52,
    cadence: "monthly",
    status: "action_needed",
    notes: [
      {
        id: "n8",
        type: "status",
        text: "Vistar RC branch — 52 days no invoice. Only 1 unit, low priority but logging for tracking.",
        author: "Helen Foster",
        timestamp: "1 week ago",
      },
    ],
  },
  {
    id: "a9",
    distributor: "Sarnow",
    branch: "Main DC",
    buyersEdge: false,
    type: "stale",
    severity: "warning",
    daysSince: 15,
    cadence: "weekly",
    status: "context",
    notes: [
      {
        id: "n9",
        type: "context",
        text: "Reached out to Sarnow — they confirmed everything is manual. No automated transmission capability. Expect irregular filing, do not auto-flag.",
        author: "Cameron Worthington",
        timestamp: "2 weeks ago",
      },
    ],
  },
  {
    id: "a10",
    distributor: "Driscoll",
    branch: "Main DC",
    buyersEdge: true,
    type: "stale",
    severity: "warning",
    daysSince: 11,
    cadence: "weekly",
    status: "action_needed",
    notes: [
      {
        id: "n10",
        type: "action",
        text: "Driscoll flagged to Buyer's Edge technical team. They acknowledged the lag issue but gave no timeline. This is the second time we've raised it.",
        author: "Marissa Chen",
        mention: "Cameron Worthington",
        timestamp: "5 days ago",
      },
    ],
  },
  {
    id: "a11",
    distributor: "PFG Broadline",
    branch: "Main DC",
    buyersEdge: false,
    type: "missing",
    severity: "warning",
    daysSince: 4,
    cadence: "weekly",
    status: "action_needed",
    notes: [
      {
        id: "n11",
        type: "status",
        text: "PFG Broadline resubmission confirmed for tomorrow. Hold off on invoicing until loaded and verified.",
        author: "Marissa Chen",
        timestamp: "yesterday",
      },
    ],
  },
  {
    id: "a12",
    distributor: "Sodexo Live",
    branch: "Stadium Units",
    buyersEdge: false,
    type: "volume",
    severity: "warning",
    daysSince: 7,
    cadence: "weekly",
    status: "context",
    notes: [
      {
        id: "n12",
        type: "context",
        text: "Sodexo Live units showing zero volume this week — stadium events paused. Expected. Not a transmission issue.",
        author: "Helen Foster",
        timestamp: "3 days ago",
      },
    ],
  },
  {
    id: "a13",
    distributor: "US Foods",
    branch: "Southeast",
    buyersEdge: false,
    type: "volume",
    severity: "warning",
    daysSince: 2,
    cadence: "daily",
    status: "unreviewed",
    notes: [],
  },
];

export function SeverityDot({ severity }: { severity: Severity }) {
  return (
    <span
      className={`inline-block h-[8px] w-[8px] rounded-full shrink-0 ${
        severity === "critical" ? "bg-[#c0342d]" : "bg-[#eb8909]"
      }`}
    />
  );
}

export function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={`px-[8px] py-[2px] rounded-[6px] text-[11px] font-['Lato:SemiBold',sans-serif] whitespace-nowrap ${STATUS_STYLE[status]}`}>
      {STATUS_LABEL[status]}
    </span>
  );
}
