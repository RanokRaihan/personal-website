"use client";

import { useState } from "react";
import { Check, Pencil, Trash2, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { SearchHistoryEntry } from "@/hooks/useSearchHistory";

interface SearchHistoryPanelProps {
  history: SearchHistoryEntry[];
  onOpen: (entry: SearchHistoryEntry) => void;
  onDelete: (id: string) => void;
  onRename: (id: string, label: string) => void;
  onClearAll: () => void;
}

const formatTimestamp = (timestamp: number) =>
  new Date(timestamp).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

const SearchHistoryPanel = ({ history, onOpen, onDelete, onRename, onClearAll }: SearchHistoryPanelProps) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draftLabel, setDraftLabel] = useState("");

  const startEditing = (entry: SearchHistoryEntry) => {
    setEditingId(entry.id);
    setDraftLabel(entry.label);
  };

  const commitEdit = () => {
    if (editingId && draftLabel.trim()) {
      onRename(editingId, draftLabel.trim());
    }
    setEditingId(null);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-sm font-semibold text-slate-800 dark:text-slate-100">
          Saved searches
        </h3>
        {history.length > 0 && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-auto px-2 py-1 text-xs text-slate-500 hover:text-red-500 dark:text-slate-400"
            onClick={onClearAll}
          >
            Clear all
          </Button>
        )}
      </div>

      {history.length === 0 ? (
        <p className="rounded-xl border border-dashed border-slate-200 px-4 py-6 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
          No saved searches yet. Build a query and hit &ldquo;Open in LinkedIn&rdquo; to save it here.
        </p>
      ) : (
        <ul className="flex flex-col gap-2">
          {history.map((entry) => (
            <li
              key={entry.id}
              className="group rounded-xl border border-slate-200/80 bg-white p-3 transition-colors hover:border-emerald-500/40 dark:border-slate-700/60 dark:bg-slate-800/60"
            >
              {editingId === entry.id ? (
                <div className="flex items-center gap-1.5">
                  <Input
                    autoFocus
                    value={draftLabel}
                    onChange={(e) => setDraftLabel(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") commitEdit();
                      if (e.key === "Escape") setEditingId(null);
                    }}
                    className="h-8 text-sm"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 shrink-0"
                    onClick={commitEdit}
                    aria-label="Save label"
                  >
                    <Check className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 shrink-0"
                    onClick={() => setEditingId(null)}
                    aria-label="Cancel editing"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="flex items-start justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => onOpen(entry)}
                    className="min-w-0 flex-1 text-left"
                  >
                    <span className="block truncate text-sm font-medium text-slate-800 dark:text-slate-100">
                      {entry.label}
                    </span>
                    <span className="block text-xs text-slate-500 dark:text-slate-400">
                      {formatTimestamp(entry.timestamp)}
                    </span>
                  </button>
                  <div className="flex shrink-0 items-center gap-0.5 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7"
                      onClick={() => startEditing(entry)}
                      aria-label="Rename search"
                    >
                      <Pencil className="h-3.5 w-3.5" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 hover:text-red-500"
                      onClick={() => onDelete(entry.id)}
                      aria-label="Delete search"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchHistoryPanel;
