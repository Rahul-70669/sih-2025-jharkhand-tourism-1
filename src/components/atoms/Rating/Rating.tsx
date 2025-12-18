import type { RatingProps } from './RatingProps';

/**
 * Rating component for user ratings
 *
 * @param props - Component props
 * @returns Rating component
 */
export const Rating = ({
	name,
	totalStars = 5,
	size = 'md',
	mask = 'star',
	color = '',
	half = false,
	showClearButton = false,
	readOnly = false,
	value,
	defaultValue,
	className = '',
	onChange,
	gap = false,
	...rest
}: RatingProps) => {
	// Size mapping
	const sizeClasses: Record<string, string> = {
		xs: 'rating-xs',
		sm: 'rating-sm',
		md: 'rating-md',
		lg: 'rating-lg',
		xl: 'rating-xl'
	};

	// Mask mapping
	const maskClasses: Record<string, string> = {
		star: 'mask-star',
		'star-2': 'mask-star-2',
		heart: 'mask-heart'
	};

	// Build rating container classes
	const ratingClasses = [
		'rating',
		sizeClasses[size],
		half && 'rating-half',
		gap && 'gap-1',
		className
	].filter(Boolean).join(' ');

	// Build item classes
	const itemClasses = [
		'mask',
		maskClasses[mask],
		color
	].filter(Boolean).join(' ');

	// Handle change event
	const handleChange = (starValue: number) => {
		if (onChange) {
			onChange(starValue);
		}
	};

	// Render read-only rating (using divs)
	if (readOnly) {
		const items = [];
		const currentValue = value || defaultValue || 0;

		for (let i = 1; i <= totalStars; i++) {
			items.push(
				<div
					key={i}
					className={itemClasses}
					aria-label={`${i} star${i > 1 ? 's' : ''}`}
					aria-current={i === currentValue ? 'true' : undefined}
				/>
			);
		}

		return <div className={ratingClasses}>{items}</div>;
	}

	// Render interactive rating (using radio inputs)
	const items = [];

	// Add hidden clear button if requested
	if (showClearButton) {
		items.push(
			<input
				key="clear"
				type="radio"
				name={name}
				className="rating-hidden"
				aria-label="clear"
				onChange={() => handleChange(0)}
				{...rest}
			/>
		);
	}

	// Generate rating items
	if (half) {
		// Half star implementation
		for (let i = 1; i <= totalStars; i++) {
			// Half star (e.g., 0.5, 1.5, 2.5)
			const halfValue = i - 0.5;
			items.push(
				<input
					key={`${i}-half`}
					type="radio"
					name={name}
					className={`${itemClasses} mask-half-1`}
					aria-label={`${halfValue} star${halfValue > 1 ? 's' : ''}`}
					defaultChecked={defaultValue === halfValue}
					onChange={() => handleChange(halfValue)}
					{...rest}
				/>
			);

			// Full star
			items.push(
				<input
					key={i}
					type="radio"
					name={name}
					className={`${itemClasses} mask-half-2`}
					aria-label={`${i} star${i > 1 ? 's' : ''}`}
					defaultChecked={defaultValue === i}
					onChange={() => handleChange(i)}
					{...rest}
				/>
			);
		}
	} else {
		// Regular star implementation
		for (let i = 1; i <= totalStars; i++) {
			items.push(
				<input
					key={i}
					type="radio"
					name={name}
					className={itemClasses}
					aria-label={`${i} star${i > 1 ? 's' : ''}`}
					defaultChecked={defaultValue === i}
					onChange={() => handleChange(i)}
					{...rest}
				/>
			);
		}
	}

	return <div className={ratingClasses}>{items}</div>;
};