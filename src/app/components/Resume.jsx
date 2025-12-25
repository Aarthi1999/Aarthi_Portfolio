export default function Resume () {
  const cvStyle = "py-2 px-6 font-semibold text-white border-primary/25 border rounded-2xl bg-[radial-gradient(100%_100%_at_100%_0%,_#89E5FF_0%,_#5468FF_100%)]";
  return (
  <div className="flex items-center justify-center gap-8">
    <button className={cvStyle}>Preview CV</button>
    <button className={cvStyle}>Download CV</button>
  </div>)
}