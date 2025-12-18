import type { PriceProps } from './PriceProps';

/**
 * Price component for displaying currency amounts with optional discounts
 *
 * @param props - Component props
 * @returns Price component
 */
export const Price = (props: PriceProps) => {
	const {
		amount,
		originalAmount,
		period,
		size = 'md',
		className = '',
	} = props;

	// Size mapping for price and period text
	const sizeClasses: Record<string, { price: string; period: string }> = {
		sm: { price: 'text-base font-semibold', period: 'text-xs' },
		md: { price: 'text-lg font-semibold', period: 'text-sm' },
		lg: { price: 'text-2xl font-bold', period: 'text-base' },
		xl: { price: 'text-3xl font-bold', period: 'text-lg' },
	};

	// Format price in INR currency
	const formatPrice = (value: number) => {
		return new Intl.NumberFormat('en-IN', {
			style: 'currency',
			currency: 'INR',
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		}).format(value);
	};

	// Calculate discount
	const hasDiscount = originalAmount && originalAmount > amount;
	const discountPercent = hasDiscount
		? Math.round(((originalAmount - amount) / originalAmount) * 100)
		: 0;

	return (
		<div className={`flex items-baseline gap-2 ${className}`.trim()}>
			<span className={`${sizeClasses[size].price} text-base-content`}>
				{formatPrice(amount)}
			</span>

			{hasDiscount && (
				<>
					<span className={`${sizeClasses[size].period} text-base-content/50 line-through`}>
						{formatPrice(originalAmount)}
					</span>
					<span className="badge badge-secondary badge-sm">
						{discountPercent}% off
					</span>
				</>
			)}

			{period && (
				<span className={`${sizeClasses[size].period} text-base-content/60`}>
					{period}
				</span>
			)}
		</div>
	);
};