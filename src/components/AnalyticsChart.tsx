'use client';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell
} from 'recharts';
import { motion } from 'framer-motion';

const data = [
    { name: 'Python/SQL', value: 95, category: 'Data' },
    { name: 'Optics Sim', value: 90, category: 'Physics' },
    { name: 'ETL Pipelines', value: 85, category: 'Data' },
    { name: 'Laser Engr', value: 80, category: 'Physics' },
    { name: 'React/Web', value: 75, category: 'Dev' },
];

export default function AnalyticsChart() {
    return (
        <section className="py-20 px-4 max-w-5xl mx-auto border-t border-slate-900">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold mb-4 text-slate-100">Capability Matrix</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Quantifying the overlap between physical engineering and full-stack data science.
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="h-96 w-full bg-slate-900/50 p-6 rounded-2xl border border-slate-800"
            >
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
                        <XAxis type="number" stroke="#64748b" tick={{ fill: '#64748b' }} />
                        <YAxis dataKey="name" type="category" stroke="#64748b" tick={{ fill: '#94a3b8' }} />
                        <Tooltip
                            cursor={{ fill: 'rgba(51, 65, 85, 0.4)' }}
                            contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f1f5f9' }}
                        />
                        <Bar dataKey="value" radius={[4, 4, 4, 4]}>
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.category === 'Data' ? '#3b82f6' : entry.category === 'Physics' ? '#10b981' : '#8b5cf6'}
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </motion.div>

            <div className="flex justify-center mt-6 gap-6 text-sm font-medium">
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-blue-500"></span><span className="text-slate-300">Data & ETL</span></div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-emerald-500"></span><span className="text-slate-300">Physics & Sim</span></div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-purple-500"></span><span className="text-slate-300">Development</span></div>
            </div>
        </section>
    );
}
