export type ButtonProps = {
  variant: "filled" | "outlined"
  color: "light" | "dark" | "success" | "danger"
  isHoverable: boolean
  symbol?: string
  symbolPosition?: "left" | "right"
  content: string
  onClick?: () => void
  disabled?: boolean
}