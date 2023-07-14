import { ButtonProps } from "@/types/ButtonProps"

export default function Button({
  variant,
  color,
  isHoverable,
  symbol,
  symbolPosition,
  content,
  onClick,
  disabled = false
}: ButtonProps) {
  const possible = ["bg-red-600", "bg-green-600", "bg-slate-900", "bg-white", "text-slate-900", "text-white", "text-red-900", "text-green-900"]

  const variantStyle = (() => {
    if(color === "danger" || color === "success") {
      if(variant === "outlined")
        return `border-2 border-${disabled ? "gray" : color === "danger" ? "red" : "green"}-600 text-${disabled ? "gray" : color === "danger" ? "red" : "green"}-600`
      return `bg-${disabled ? "gray" : color === "danger" ? "red" : "green"}-600 text-white`
    } else {
      if(disabled)
        return `bg-gray-600 text-white`;
      return `bg-${color === "dark" ? "slate-900" : "white"} text-${color === "light" ? "slate-900" : "white"}`
    }
  })();

  return (
    <>
      <button 
        className={`text-sm sm:text-md py-2 px-4 rounded-sm ${variantStyle} ${isHoverable && variant !== "outlined" ? "hover:bg-opacity-90" : ""}`}
        onClick={onClick} 
        disabled={disabled}
      >
        <div className={`flex items-center justify-between font-semibold`}>{content}</div>
      </button>
    </>
  )
}