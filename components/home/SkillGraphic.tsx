import type { ISkill } from "@/types";

const CATEGORY_ORDER = [
  "LANGUAGE",
  "FRONTEND",
  "BACKEND",
  "DATABASE",
  "DEVOPS",
  "TOOL",
  "OTHER",
];

const CATEGORY_SHORT: Record<string, string> = {
  LANGUAGE: "LANG",
  FRONTEND: "FRONT",
  BACKEND: "BACK",
  DATABASE: "DB",
  DEVOPS: "OPS",
  TOOL: "TOOLS",
  OTHER: "OTHER",
};

const CX = 150;
const CY = 150;
const MAX_R = 100;
const LABEL_R = 128;

interface SkillGraphicProps {
  skills: ISkill[];
  activeTab: string;
}

const SkillGraphic = ({ skills, activeTab }: SkillGraphicProps) => {
  const categories = CATEGORY_ORDER.filter((cat) =>
    skills.some((s) => s.category === cat)
  );
  const N = categories.length;

  if (N < 3) return null;

  const counts = categories.map(
    (cat) => skills.filter((s) => s.category === cat).length
  );
  const maxCount = Math.max(...counts);

  const angles = categories.map(
    (_, i) => -Math.PI / 2 + (2 * Math.PI * i) / N
  );

  const gridPoly = (ratio: number) =>
    categories
      .map((_, i) => {
        const r = ratio * MAX_R;
        return `${CX + r * Math.cos(angles[i])},${CY + r * Math.sin(angles[i])}`;
      })
      .join(" ");

  const dataPoly = categories
    .map((_, i) => {
      const r = Math.max((counts[i] / maxCount) * MAX_R, 6);
      return `${CX + r * Math.cos(angles[i])},${CY + r * Math.sin(angles[i])}`;
    })
    .join(" ");

  const activeIdx = categories.indexOf(activeTab);

  const displayCount =
    activeTab === "ALL"
      ? skills.length
      : skills.filter((s) => s.category === activeTab).length;

  const displayLabel =
    activeTab === "ALL"
      ? "skills total"
      : `${(CATEGORY_SHORT[activeTab] ?? activeTab).toLowerCase()} skills`;

  return (
    <div className="flex flex-col items-center gap-5">
      <svg
        viewBox="-20 -20 340 340"
        className="w-[280px] h-[280px]"
        aria-hidden="true"
      >
        {/* Grid rings — dashed at 25/50/75, solid at 100 */}
        {[0.25, 0.5, 0.75, 1.0].map((ratio) => (
          <polygon
            key={ratio}
            points={gridPoly(ratio)}
            fill="none"
            stroke="#94a3b8"
            strokeWidth="0.6"
            strokeOpacity={ratio === 1.0 ? 0.25 : 0.12}
            strokeDasharray={ratio < 1.0 ? "3 4" : undefined}
          />
        ))}

        {/* Axis spokes from center */}
        {categories.map((cat, i) => {
          const isActive = cat === activeTab;
          const x2 = CX + MAX_R * Math.cos(angles[i]);
          const y2 = CY + MAX_R * Math.sin(angles[i]);
          return (
            <line
              key={cat}
              x1={CX}
              y1={CY}
              x2={x2}
              y2={y2}
              stroke={isActive ? "#10b981" : "#94a3b8"}
              strokeWidth={isActive ? 1.5 : 0.6}
              strokeOpacity={isActive ? 0.7 : 0.2}
            />
          );
        })}

        {/* Data polygon fill */}
        <polygon
          points={dataPoly}
          fill="#10b981"
          fillOpacity={0.1}
          stroke="#10b981"
          strokeWidth={1.5}
          strokeOpacity={0.5}
          strokeLinejoin="round"
        />

        {/* Non-active vertex dots */}
        {categories.map((cat, i) => {
          if (cat === activeTab) return null;
          const r = Math.max((counts[i] / maxCount) * MAX_R, 6);
          const vx = CX + r * Math.cos(angles[i]);
          const vy = CY + r * Math.sin(angles[i]);
          return (
            <circle
              key={cat}
              cx={vx}
              cy={vy}
              r={3}
              fill="#10b981"
              fillOpacity={0.5}
            />
          );
        })}

        {/* Active axis highlight + vertex pulse */}
        {activeIdx >= 0 && (() => {
          const r = Math.max((counts[activeIdx] / maxCount) * MAX_R, 6);
          const vx = CX + r * Math.cos(angles[activeIdx]);
          const vy = CY + r * Math.sin(angles[activeIdx]);
          const x2 = CX + MAX_R * Math.cos(angles[activeIdx]);
          const y2 = CY + MAX_R * Math.sin(angles[activeIdx]);
          return (
            <>
              <line
                x1={CX}
                y1={CY}
                x2={x2}
                y2={y2}
                stroke="#10b981"
                strokeWidth="2"
                strokeOpacity="0.6"
              />
              <circle cx={vx} cy={vy} r={14} fill="#10b981" fillOpacity={0.07} />
              <circle cx={vx} cy={vy} r={8} fill="#10b981" fillOpacity={0.13} />
              <circle cx={vx} cy={vy} r={4} fill="#10b981" fillOpacity={0.95} />
            </>
          );
        })()}

        {/* Center dot */}
        <circle cx={CX} cy={CY} r={3} fill="#10b981" fillOpacity={0.4} />

        {/* Category labels at axis tips */}
        {categories.map((cat, i) => {
          const isActive = cat === activeTab;
          const lx = CX + LABEL_R * Math.cos(angles[i]);
          const ly = CY + LABEL_R * Math.sin(angles[i]);
          return (
            <text
              key={cat}
              x={lx}
              y={ly}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="8.5"
              letterSpacing="0.1em"
              fill={isActive ? "#10b981" : "#94a3b8"}
              fontWeight={isActive ? "700" : "400"}
              style={{ fontFamily: "monospace" }}
            >
              {CATEGORY_SHORT[cat]}
            </text>
          );
        })}
      </svg>

      {/* Count readout */}
      <div className="flex items-baseline gap-2">
        <span className="font-display text-4xl font-bold tabular-nums text-slate-900 dark:text-slate-50">
          {displayCount}
        </span>
        <span className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
          {displayLabel}
        </span>
      </div>
    </div>
  );
};

export default SkillGraphic;
