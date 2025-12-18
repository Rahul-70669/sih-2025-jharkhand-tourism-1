import React from "react";
import type {FilterChipProps} from "./FilterChipProps.ts";

/**
 * FilterChip
 * Props:
 *  - label: string (required)
 *  - onRemove: function (required) -> called when X is clicked
 *  - active: boolean (optional) -> visual active state
 *  - className: string (optional)
 *
 * Default export is the FilterChip component.
 */
export default function FilterChip({ label, onRemove, active = false, className = "" }: FilterChipProps) {
	const containerClasses = `inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium select-none ${
		active ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
	} ${className}`;

	const buttonClasses = `inline-flex items-center justify-center w-5 h-5 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-400 ${
		active ? "bg-white text-blue-600" : "bg-gray-200 text-gray-600"
	}`;

	return (
		<span className={containerClasses} role="status" aria-pressed={active} aria-label={`Filter: ${label}`}>
      <span className="truncate" title={label}>{label}</span>

      <button
		  type="button"
		  aria-label={`Remove ${label} filter`}
		  onClick={onRemove}
		  className={buttonClasses}
	  >
        {/* Simple X icon (SVG) */}
		  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </span>
	);
}

// --- Example usage (named export) ---
export function FilterChipDemo() {
	const [filters, setFilters] = React.useState([
		{ id: 1, label: "Open Source", active: true },
		{ id: 2, label: "Beginner", active: false },
		{ id: 3, label: "JavaScript", active: true },
	]);

	function removeFilter(id: number) {
		setFilters((prev) => prev.filter((f) => f.id !== id));
	}

	return (
		<div className="space-y-4">
			<div className="flex flex-wrap gap-2">
				{filters.map((f) => (
					<FilterChip
						key={f.id}
						label={f.label}
						active={f.active}
						onRemove={() => removeFilter(f.id)}
					/>
				))}
			</div>

			<div>
				<strong>Active filters:</strong>{' '}
				{filters.filter((f) => f.active).map((f) => f.label).join(', ') || 'None'}
			</div>
		</div>
	);
}
