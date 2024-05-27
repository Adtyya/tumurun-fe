export default function Paragraph({ children, additional = "" }) {
  return <p className={`text-base text-black ${additional}`}>{children}</p>;
}
