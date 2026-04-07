'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import { VOLUNTEERS, PLACE_FILTERS, normalisePlace } from './volunteersData';
import type { PlaceFilter } from './volunteersData';
import './VolunteersTable.scss';

const PAGE_SIZE = 12;

function filterLabel(f: PlaceFilter) {
  return f === 'ALL' ? 'All Cities' : f.charAt(0) + f.slice(1).toLowerCase();
}

export default function VolunteersTable() {
  const [search, setSearch]           = useState('');
  const [filter, setFilter]           = useState<PlaceFilter>('ALL');
  const [page, setPage]               = useState(1);
  const [dropdownOpen, setDropdown]   = useState(false);
  const dropdownRef                   = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!dropdownOpen) return;
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [dropdownOpen]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return VOLUNTEERS.filter((v) => {
      const place = normalisePlace(v.place);
      const matchSearch =
        q === '' ||
        v.name.toLowerCase().includes(q) ||
        place.toLowerCase().includes(q);
      const matchFilter =
        filter === 'ALL' || normalisePlace(v.place) === filter;
      return matchSearch && matchFilter;
    });
  }, [search, filter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  const pageData = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  const handleSearch = (val: string) => { setSearch(val); setPage(1); };

  const handleFilter = (f: PlaceFilter) => {
    setFilter(f);
    setPage(1);
    setDropdown(false);
  };

  const showFrom = filtered.length === 0 ? 0 : (page - 1) * PAGE_SIZE + 1;
  const showTo   = Math.min(page * PAGE_SIZE, filtered.length);

  return (
    <section className="vol-table-section">
      {/* ── Controls ── */}
      <div className="vol-controls">

        {/* ── Search row: input + mobile filter trigger ── */}
        <div className="vol-controls__row">
          <div className="vol-search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="vol-search__icon"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search by name or place…"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              className="vol-search__input"
              aria-label="Search volunteers"
            />
            {search && (
              <button
                className="vol-search__clear"
                onClick={() => handleSearch('')}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

          {/* Mobile-only: dropdown filter trigger */}
          <div className="vol-mobile-filter" ref={dropdownRef}>
            <button
              className={`vol-mobile-filter__btn${filter !== 'ALL' ? ' vol-mobile-filter__btn--active' : ''}`}
              onClick={() => setDropdown((v) => !v)}
              aria-haspopup="listbox"
              aria-expanded={dropdownOpen}
              aria-label="Filter by city"
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="vol-mobile-filter__icon"
              >
                <path d="M3 5h14M6 10h8M9 15h2" />
              </svg>
              <span className="vol-mobile-filter__label">
                {filter === 'ALL' ? 'Filter' : filterLabel(filter)}
              </span>
              {filter !== 'ALL' && <span className="vol-mobile-filter__dot" aria-hidden="true" />}
              <svg
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className={`vol-mobile-filter__chevron${dropdownOpen ? ' vol-mobile-filter__chevron--open' : ''}`}
              >
                <path d="M2.5 4.5L6 8l3.5-3.5" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="vol-mobile-filter__dropdown" role="listbox" aria-label="Filter by city">
                {PLACE_FILTERS.map((f) => (
                  <button
                    key={f}
                    role="option"
                    aria-selected={filter === f}
                    className={`vol-mobile-filter__option${filter === f ? ' vol-mobile-filter__option--active' : ''}`}
                    onClick={() => handleFilter(f)}
                  >
                    {filter === f && (
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="vol-mobile-filter__check">
                        <path d="M3 8l4 4 6-7" />
                      </svg>
                    )}
                    {filterLabel(f)}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop pill filters */}
        <div className="vol-filters" role="group" aria-label="Filter by city">
          {PLACE_FILTERS.map((f) => (
            <button
              key={f}
              className={`vol-filter-btn${filter === f ? ' vol-filter-btn--active' : ''}`}
              onClick={() => handleFilter(f)}
              aria-pressed={filter === f}
            >
              {filterLabel(f)}
            </button>
          ))}
        </div>

      </div>

      {/* ── Status / result count ── */}
      <p className="vol-result-count" aria-live="polite">
        {filtered.length === 0 ? (
          <>No volunteers found</>
        ) : (
          <>
            Showing <strong>{showFrom}–{showTo}</strong> of{' '}
            <strong>{filtered.length}</strong> volunteer{filtered.length !== 1 ? 's' : ''}
          </>
        )}
        {filter !== 'ALL' && (
          <span className="vol-result-count__badge">
            {filterLabel(filter)}
            <button
              className="vol-result-count__clear"
              onClick={() => handleFilter('ALL')}
              aria-label="Clear city filter"
            >
              ×
            </button>
          </span>
        )}
      </p>

      {/* ── Table ── */}
      <div className="vol-table-wrap">
        <table className="vol-table" aria-label="Volunteers list">
          <thead>
            <tr>
              <th scope="col">Sr.</th>
              <th scope="col">Name</th>
              <th scope="col">Duration</th>
              <th scope="col">Place</th>
            </tr>
          </thead>
          <tbody>
            {pageData.length > 0 ? (
              pageData.map((v) => (
                <tr key={v.sr}>
                  <td className="vol-table__sr">{v.sr}</td>
                  <td className="vol-table__name">{v.name}</td>
                  <td className="vol-table__date">{v.membershipDate}</td>
                  <td>
                    <span className="vol-place-tag">{normalisePlace(v.place)}</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="vol-table__empty">
                  No volunteers found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ── Pagination ── */}
      {totalPages > 1 && (
        <div className="vol-pagination" aria-label="Pagination">
          <button
            className="vol-page-btn vol-page-btn--nav"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            aria-label="Previous page"
          >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M10 12L6 8l4-4" />
            </svg>
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter((n) => n === 1 || n === totalPages || Math.abs(n - page) <= 1)
            .reduce<(number | '…')[]>((acc, n, idx, arr) => {
              if (idx > 0 && n - (arr[idx - 1] as number) > 1) acc.push('…');
              acc.push(n);
              return acc;
            }, [])
            .map((item, idx) =>
              item === '…' ? (
                <span key={`ellipsis-${idx}`} className="vol-page-ellipsis">…</span>
              ) : (
                <button
                  key={item}
                  className={`vol-page-btn${page === item ? ' vol-page-btn--active' : ''}`}
                  onClick={() => setPage(item as number)}
                  aria-label={`Page ${item}`}
                  aria-current={page === item ? 'page' : undefined}
                >
                  {item}
                </button>
              )
            )}

          <button
            className="vol-page-btn vol-page-btn--nav"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            aria-label="Next page"
          >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 12l4-4-4-4" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
