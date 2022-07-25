import './index.css';

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Legend,
	Tooltip,
	ResponsiveContainer,
	CartesianGrid,
} from 'recharts';

const data = [
	{
		group_name: '20',

		Employee: 40,
		Employer: 20,
		Interest: 70,
	},
	{
		group_name: '25',
		Employee: 50,
		Employer: 30,
		Interest: 95,
	},
	{
		group_name: '30',
		Employee: 60,
		Employer: 40,
		Interest: 117,
	},
	{
		group_name: '35',
		Employee: 70,
		Employer: 50,
		Interest: 142,
	},
	{
		group_name: '40',
		Employee: 80,
		Employer: 60,
		Interest: 167,
	},
	{
		group_name: '60',
		Employee: 90,
		Employer: 70,
		Interest: 192,
	},
	{
		group_name: '65',
		Employee: 120,
		Employer: 80,
		Interest: 297,
	},
];

const renderBarChart = () => {
	const DataFormatter = (number) => `$${number.toString()}`;

	return (
		<ResponsiveContainer width='100%' height={300}>
			<BarChart
				data={data}
				margin={{
					top: 5,
				}}
			>
				<CartesianGrid vertical={false} strokeDasharray='3 3' />
				<XAxis
					dataKey='group_name'
					tick={{
						stroke: 'gray',
						strokeWidth: 1,
					}}
				/>
				<YAxis
					tickFormatter={DataFormatter}
					tick={{
						stroke: 'gray',
						strokeWidth: 0,
					}}
				/>
				<Tooltip cursor={{ strokeDasharray: '3 3' }} />

				<Legend
					position='top'
					wrapperStyle={{
						padding: 30,
					}}
				/>

				<Bar
					dataKey='Employer'
					name='Employer K 73,5000'
					stackId='barchart'
					fill='#1c47a3'
					barSize={25}
				/>
				<Bar
					dataKey='Employee'
					name='Employee K 52,5000'
					stackId='barchart'
					fill='#5571f8'
					barSize={25}
				/>
				<Bar
					dataKey='Interest'
					name='Total Interest K 244,313'
					stackId='barchart'
					fill='#86adf9'
					barSize={25}
				/>
			</BarChart>
		</ResponsiveContainer>
	);
};

export default renderBarChart;
