export default function InfoCard({ number, title, subtitle }) {
  return (
    <div className="bg-black text-white rounded-xl px-6 py-8 flex items-center gap-6 w-[320px]">
      {/* Left Number */}
      <div className="text-3xl font-bold">{number}</div>

      {/* Divider */}
      <div className="h-12 w-px bg-gray-500"></div>

      {/* Right Content */}
      <div className="flex flex-col">
        <span className="uppercase font-bold tracking-wide">{title}</span>
        <span className="uppercase font-bold tracking-wide">{subtitle}</span>
      </div>
    </div>
  );
}
