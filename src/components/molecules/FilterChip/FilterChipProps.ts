/**
 * FilterChipProps.ts
 *
 * TypeScript props definition for the FilterChip React component.
 * Keep this file small and focused so it can be imported by both
 * the JS/TSX component and tests.
 */

export interface FilterChipProps {
    /** Visible label for the chip */
    label: string;

    /** Called when the remove (X) button is clicked */
    onRemove: () => void;

    /** Whether the chip is visually active/selected */
    active?: boolean;

    /** Additional className(s) applied to the root element */
    className?: string;
}

// Example usage:
// import { FilterChipProps } from "./FilterChipProps";
// function FilterChip(props: FilterChipProps) { ... }
