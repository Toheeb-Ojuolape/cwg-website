/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			'midnight-blue': 'var(--color-midnight-blue)',
			'pewter-blue': 'var(--color-pewter-blue)',
			burlywood: 'var(--color-burlywood)',
			'vivid-burgundy': 'var(--color-vivid-burgundy)',
			'naples-yellow': 'var(--color-naples-yellow)',
			'deep-blue': 'var(--color-deep-blue)',
			'bright-blue': 'var(--color-bright-blue)',
			'neon-blue': 'var(--color-neon-blue)',
			'soft-blue': 'var(--color-soft-blue)',
			'greyish-blue': 'var(--color-greyish-blue)',
			'whitish-blue': 'var(--color-whitish-blue)',
			mangeta: 'var(--color-mangeta)',
			orange: 'var(--color-orange)',
			'light-green': 'var(--color-light-green)',
			success: 'var(--color-success)',
			warning: 'var(--color-warning)',
			error: 'var(--color-error)',
			link: 'var(--color-link)',
			'black-1000': 'var(--color-black-1000)',
			'black-900': 'var(--color-black-900)',
			'black-800': 'var(--color-black-800)',
			'black-700': 'var(--color-black-700)',
			'black-600': 'var(--color-black-600)',
			'black-500': 'var(--color-black-500)',
			'black-400': 'var(--color-black-400)',
			'black-300': 'var(--color-black-300)',
			white: '#ffffff',
			black: '#000000',
			transparent: 'transparent',
			'dark-highlight': 'var(--color-dark-highlight)'
		},
		extend: {
			fontSize: {
				'body-l': [
					'18px',
					{
						lineHeight: '26px',
						fontWeight: '300'
					}
				],
				'body-m': ['15px', '24px'],
				'body-s': ['14px', '22px'],
				'body-xs': ['12px', '18px'],
				'body-xxs': ['10px', '18px'],
				'body-medium-l': [
					'18px',
					{
						lineHeight: '27px',
						letterSpacing: '-0.02em',
						fontWeight: '500'
					}
				],
				'body-medium-m': [
					'16px',
					{
						lineHeight: '18px',
						letterSpacing: '-0.02em',
						fontWeight: '500'
					}
				],
				'body-medium-s': [
					'14px',
					{
						lineHeight: '24px',
						letterSpacing: '-0.02em',
						fontWeight: '500'
					}
				],
				'body-medium-xs': [
					'12px',
					{
						lineHeight: '24px',
						letterSpacing: '-0.02em',
						fontWeight: '500'
					}
				],
				'body-medium-xxs': [
					'10px',
					{
						lineHeight: '24px',
						letterSpacing: '-0.02em',
						fontWeight: '500'
					}
				],
				'body-bold-l': [
					'18px',
					{
						lineHeight: '27px',
						letterSpacing: '-0.02em',
						fontWeight: '700'
					}
				],
				'body-bold-m': [
					'15px',
					{
						lineHeight: '24px',
						letterSpacing: '-0.02em',
						fontWeight: '500'
					}
				],
				'body-bold-s': [
					'13px',
					{
						lineHeight: '21px',
						letterSpacing: '-0.02em',
						fontWeight: '500'
					}
				],
				'headline-1': ['64px', '77px'],
				'headline-2': ['40px', '52px'],
				'headline-3': ['36px', '47px'],
				'headline-4': ['32px', '42px'],
				'headline-5': ['28px', '36px'],
				'headline-6': ['24px', '31px'],
				'button-l': [
					'16px',
					{
						lineHeight: '26px',
						letterSpacing: '-0.02em',
						fontWeight: '500'
					}
				],
				'button-m': [
					'14px',
					{
						lineHeight: '24px',
						letterSpacing: '-0.02em',
						fontWeight: '500'
					}
				],
				'button-s': [
					'13px',
					{
						lineHeight: '20px',
						letterSpacing: '-0.02em',
						fontWeight: '500'
					}
				],
				'body-list-l': ['17px', '27px'],
				'body-list-m': ['15px', '24px']
			},
			backgroundImage: {
				leadership: "url('/src/lib/images/leadership-hero.png')",
				'dotted-map': "url('/images/dotted-map.svg')"
			},
			fontFamily: {
				sans: ['Lato', '-apple-system', 'sans-serif']
			},
			spacing: {
				13: '3.25rem',
				15: '3.75rem',
				17: '4.25rem',
				18: '4.5rem',
				19: '4.75rem',
				21: '5.25rem',
				22: '5.5rem',
				23: '5.75rem',
				25: '6.25rem',
				27: '6.75rem',
				30: '7.5rem',
				33: '8.25rem',
				50: '12.5rem'
			},
			maxWidth: {
				'8xl': '90rem'
			},
			borderRadius: {
				10: '10px'
			},
			boxShadow: {
				brand: '0px 12px 20px rgba(0, 0, 0, 0.1)'
			}
		}
	},
	plugins: [],
	darkMode: 'class'
};
