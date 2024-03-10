import { Size } from "@/@types/size";
import { TextProps, TextWeight } from "./types";
import { CustomCSS } from "@/@types/customCss";
import styles from './styles.module.scss'
import COLORS from "@/constant/colors";

export default function Text({
  text = "",
  variant = "span",
  fontSize = "md",
  fontWeight = "normal",
  color = "primary"
}: TextProps) {
  const TextNode = variant

  const fontSizeMap = new Map<Size, string>([
    ["sm", "0.5rem"],
    ["md", "1rem"],
    ["lg", "2rem"],
  ])
  const defaultFontSize = fontSizeMap.get('sm') as string
  const selectedFontSize = fontSizeMap.get(fontSize) || defaultFontSize

  const fontWeightMap = new Map<TextWeight, number>([
    ["light", 400],
    ["normal", 500],
    ["bold", 700],
  ])
  const defaultfontWeight = fontWeightMap.get("normal") as number
  const selectedfontWeight = fontWeightMap.get(fontWeight) || defaultfontWeight

  const textStyle = {
    "--fontSize": selectedFontSize,
    "--fontWeight": selectedfontWeight,
    "--color": COLORS[color]
  } as CustomCSS

  return (
    <TextNode
      className={styles.text}
      style={textStyle}
    >
      {text}
    </TextNode>
  );
}