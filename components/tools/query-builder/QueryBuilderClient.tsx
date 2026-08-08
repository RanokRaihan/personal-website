"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Copy, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchHistory, type SearchHistoryEntry } from "@/hooks/useSearchHistory";
import {
  DEFAULT_QUERY_BUILDER_STATE,
  EXPERIENCE_LEVEL_OPTIONS,
  JOB_TYPE_OPTIONS,
  SORT_ORDER_OPTIONS,
  TIME_POSTED_OPTIONS,
  WORK_TYPE_OPTIONS,
  buildHistoryLabel,
  buildLinkedInSearchUrl,
  type QueryBuilderFormState,
} from "@/lib/linkedinQueryBuilder";
import MultiSelectPills from "./MultiSelectPills";
import SearchHistoryPanel from "./SearchHistoryPanel";

const QueryBuilderClient = () => {
  const [form, setForm] = useState<QueryBuilderFormState>(DEFAULT_QUERY_BUILDER_STATE);
  const { history, addEntry, removeEntry, renameEntry, clearHistory } = useSearchHistory();

  const url = useMemo(() => buildLinkedInSearchUrl(form), [form]);

  const updateForm = <K extends keyof QueryBuilderFormState>(key: K, value: QueryBuilderFormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("URL copied to clipboard");
    } catch {
      toast.error("Couldn't copy the URL — copy it manually.");
    }
  };

  const handleOpen = () => {
    window.open(url, "_blank", "noopener,noreferrer");
    addEntry({ label: buildHistoryLabel(form), url });
    toast.success("Search saved to history");
  };

  const handleOpenHistoryEntry = (entry: SearchHistoryEntry) => {
    window.open(entry.url, "_blank", "noopener,noreferrer");
  };

  const handleDeleteHistoryEntry = (id: string) => {
    removeEntry(id);
    toast.success("Search removed from history");
  };

  const handleClearHistory = () => {
    clearHistory();
    toast.success("History cleared");
  };

  const handleRenameHistoryEntry = (id: string, label: string) => {
    renameEntry(id, label);
    toast.success("Search renamed");
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
      <Card>
        <CardContent className="flex flex-col gap-6 p-5 sm:p-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="keywords">Keywords</Label>
              <Input
                id="keywords"
                placeholder='e.g. "React" AND ("Next.js" OR "Node.js")'
                value={form.keywords}
                onChange={(e) => updateForm("keywords", e.target.value)}
              />
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Supports Boolean syntax: AND, OR, NOT, and quoted phrases.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="e.g. Remote, Dhaka, United States"
                value={form.location}
                onChange={(e) => updateForm("location", e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Experience level</Label>
            <MultiSelectPills
              options={EXPERIENCE_LEVEL_OPTIONS}
              selected={form.experienceLevels}
              onChange={(values) => updateForm("experienceLevels", values)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Work type</Label>
            <MultiSelectPills
              options={WORK_TYPE_OPTIONS}
              selected={form.workTypes}
              onChange={(values) => updateForm("workTypes", values)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Job type</Label>
            <MultiSelectPills
              options={JOB_TYPE_OPTIONS}
              selected={form.jobTypes}
              onChange={(values) => updateForm("jobTypes", values)}
            />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="time-posted">Time posted</Label>
              <Select value={form.timePosted} onValueChange={(value) => updateForm("timePosted", value)}>
                <SelectTrigger id="time-posted">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {TIME_POSTED_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="sort-by">Sort order</Label>
              <Select value={form.sortBy} onValueChange={(value) => updateForm("sortBy", value)}>
                <SelectTrigger id="sort-by">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {SORT_ORDER_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              id="easy-apply"
              checked={form.easyApply}
              onCheckedChange={(checked) => updateForm("easyApply", checked === true)}
            />
            <Label htmlFor="easy-apply" className="cursor-pointer">
              Easy Apply only
            </Label>
          </div>

          <div className="flex flex-col gap-3 border-t border-slate-200 pt-5 dark:border-slate-800">
            <Label>Generated URL</Label>
            <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 font-mono text-xs break-all text-slate-600 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
              {url}
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Button type="button" variant="outline" size="sm" onClick={handleCopy}>
                <Copy className="mr-1.5 h-3.5 w-3.5" />
                Copy
              </Button>
              <Button type="button" variant="green" size="sm" onClick={handleOpen}>
                <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                Open in LinkedIn
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-5 sm:p-6">
          <SearchHistoryPanel
            history={history}
            onOpen={handleOpenHistoryEntry}
            onDelete={handleDeleteHistoryEntry}
            onRename={handleRenameHistoryEntry}
            onClearAll={handleClearHistory}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default QueryBuilderClient;
