"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: '2025', value: 8.7, isKey: true },
  { name: '2026', value: 10.2, isKey: false },
  { name: '2027', value: 11.5, isKey: false },
  { name: '2028', value: 12.8, isKey: false },
  { name: '2029', value: 14.2, isKey: false },
  { name: '2030', value: 15.6, isKey: false },
  { name: '2031', value: 17.0, isKey: false },
  { name: '2032', value: 18.3, isKey: false },
  { name: '2033', value: 19.8, isKey: false },
  { name: '2034', value: 21.2, isKey: false },
  { name: '2035', value: 22.6, isKey: true },
];

export function ChartVisualizations() {
  return (
    <div className="bg-white border border-gray-200 p-8 mt-10 mb-10">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900">Global Revenue Forecast</h3>
        <p className="text-sm text-gray-500">Values in USD Billion</p>
      </div>
      
      <div className="h-[300px] sm:h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 0, left: -20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
            <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#6b7280' }} axisLine={false} tickLine={false} dy={10} />
            <YAxis tick={{ fontSize: 12, fill: '#6b7280' }} axisLine={false} tickLine={false} />
            <Tooltip 
              cursor={{fill: '#f9fafb'}}
              contentStyle={{ borderRadius: '0px', border: '1px solid #e5e7eb', boxShadow: 'none' }}
            />
            <Bar dataKey="value" radius={[2, 2, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.isKey ? '#16a34a' : '#bbf7d0'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-brand-600"></div>
          <span className="text-sm text-gray-600">Key Years</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-brand-200"></div>
          <span className="text-sm text-gray-600">Interpolated Forecast</span>
        </div>
      </div>
    </div>
  )
}
