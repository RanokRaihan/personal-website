"use client";

import { useCallback, useEffect, useState } from "react";

export interface SearchHistoryEntry {
  id: string;
  label: string;
  timestamp: number;
  url: string;
}

const STORAGE_KEY = "tools.query-builder.history";
const MAX_ENTRIES = 10;

function readHistory(): SearchHistoryEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeHistory(entries: SearchHistoryEntry[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch {
    // localStorage unavailable (private mode / quota) — in-memory state still works
  }
}

export function useSearchHistory() {
  const [history, setHistory] = useState<SearchHistoryEntry[]>([]);

  useEffect(() => {
    setHistory(readHistory());
  }, []);

  const mutate = useCallback((updater: (prev: SearchHistoryEntry[]) => SearchHistoryEntry[]) => {
    setHistory((prev) => {
      const next = updater(prev);
      writeHistory(next);
      return next;
    });
  }, []);

  const addEntry = useCallback(
    (entry: { label: string; url: string }) => {
      mutate((prev) =>
        [{ ...entry, id: crypto.randomUUID(), timestamp: Date.now() }, ...prev].slice(0, MAX_ENTRIES)
      );
    },
    [mutate]
  );

  const removeEntry = useCallback(
    (id: string) => {
      mutate((prev) => prev.filter((item) => item.id !== id));
    },
    [mutate]
  );

  const renameEntry = useCallback(
    (id: string, label: string) => {
      mutate((prev) => prev.map((item) => (item.id === id ? { ...item, label } : item)));
    },
    [mutate]
  );

  const clearHistory = useCallback(() => {
    mutate(() => []);
  }, [mutate]);

  return { history, addEntry, removeEntry, renameEntry, clearHistory };
}
