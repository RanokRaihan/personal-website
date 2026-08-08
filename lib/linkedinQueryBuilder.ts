export interface QueryBuilderOption {
  value: string;
  label: string;
}

export const EXPERIENCE_LEVEL_OPTIONS: QueryBuilderOption[] = [
  { value: "1", label: "Internship" },
  { value: "2", label: "Entry level" },
  { value: "3", label: "Associate" },
  { value: "4", label: "Mid-Senior level" },
  { value: "5", label: "Director" },
  { value: "6", label: "Executive" },
];

export const WORK_TYPE_OPTIONS: QueryBuilderOption[] = [
  { value: "1", label: "Onsite" },
  { value: "2", label: "Remote" },
  { value: "3", label: "Hybrid" },
];

export const JOB_TYPE_OPTIONS: QueryBuilderOption[] = [
  { value: "F", label: "Full-time" },
  { value: "C", label: "Contract" },
  { value: "P", label: "Part-time" },
  { value: "T", label: "Temporary" },
  { value: "I", label: "Internship" },
  { value: "O", label: "Other" },
];

export const TIME_POSTED_OPTIONS: QueryBuilderOption[] = [
  { value: "any", label: "Any time" },
  { value: "r3600", label: "Past hour" },
  { value: "r86400", label: "Past 24 hours" },
  { value: "r604800", label: "Past week" },
  { value: "r2592000", label: "Past month" },
];

export const SORT_ORDER_OPTIONS: QueryBuilderOption[] = [
  { value: "R", label: "Relevance" },
  { value: "DD", label: "Most recent" },
];

export interface QueryBuilderFormState {
  keywords: string;
  location: string;
  experienceLevels: string[];
  workTypes: string[];
  jobTypes: string[];
  timePosted: string;
  sortBy: string;
  easyApply: boolean;
}

export const DEFAULT_QUERY_BUILDER_STATE: QueryBuilderFormState = {
  keywords: "",
  location: "",
  experienceLevels: [],
  workTypes: [],
  jobTypes: [],
  timePosted: "any",
  sortBy: "R",
  easyApply: false,
};

const LINKEDIN_JOB_SEARCH_BASE_URL = "https://www.linkedin.com/jobs/search/";

export function buildLinkedInSearchUrl(state: QueryBuilderFormState): string {
  const params = new URLSearchParams();

  if (state.keywords.trim()) params.set("keywords", state.keywords.trim());
  if (state.location.trim()) params.set("location", state.location.trim());
  if (state.experienceLevels.length) params.set("f_E", state.experienceLevels.join(","));
  if (state.workTypes.length) params.set("f_WT", state.workTypes.join(","));
  if (state.jobTypes.length) params.set("f_JT", state.jobTypes.join(","));
  if (state.timePosted !== "any") params.set("f_TPR", state.timePosted);
  if (state.sortBy === "DD") params.set("sortBy", "DD");
  if (state.easyApply) params.set("f_AL", "true");

  const query = params.toString();
  return query ? `${LINKEDIN_JOB_SEARCH_BASE_URL}?${query}` : LINKEDIN_JOB_SEARCH_BASE_URL;
}

export function buildHistoryLabel(state: QueryBuilderFormState): string {
  const parts = [state.keywords.trim(), state.location.trim()].filter(Boolean);
  return parts.length ? parts.join(" · ") : "Untitled search";
}
